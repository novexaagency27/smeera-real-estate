/**
 * S. MEERA REAL ESTATE — ADAPTIVE REQUIREMENT WIZARD
 * Mobile-First, 5 Steps Max, Zero Clutter
 */

const STATE = {
  currentStep: 1,
  totalSteps: 5,
  intent: 'Buy', // 'Buy', 'Rent', 'Sell', 'Other'
  propertyType: '3 BHK',
  propertyStatus: 'Ready to Move',
  location: 'Anand',
  otherLocation: '',
  flexibleLocation: 'Yes',
  budgetMin: '₹50 Lakh',
  budgetMax: '₹75 Lakh',
  monthlyRent: '₹15,000',
  expectedPrice: '',
  name: '',
  mobile: '',
  whatsapp: '',
  sameWhatsapp: true,
  notes: '',
  preferredContact: 'WhatsApp'
};

document.addEventListener('DOMContentLoaded', () => {
  initStep1();
  initStep2();
  initStep3();
  initStep4();
  initStep5();
  initNavigation();
  initFormSubmit();
});

// Step 1: Selection Cards (Buy / Rent / Sell / Other)
function initStep1() {
  const cards = document.querySelectorAll('#step-1-options .option-choice-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      STATE.intent = card.dataset.value;
      adaptStepsToIntent();
    });
  });
}

// Adapt Step 2 and Step 4 based on Buy vs Rent vs Sell
function adaptStepsToIntent() {
  const step2Title = document.getElementById('step-2-title');
  const step2Desc = document.getElementById('step-2-desc');
  const step2BuyRentOpts = document.getElementById('step-2-buy-rent-options');
  const step2SellOpts = document.getElementById('step-2-sell-options');

  const step4Title = document.getElementById('step-4-title');
  const step4Desc = document.getElementById('step-4-desc');
  const step4BuyBox = document.getElementById('step-4-buy-box');
  const step4RentBox = document.getElementById('step-4-rent-box');
  const step4SellBox = document.getElementById('step-4-sell-box');

  if (STATE.intent === 'Sell') {
    if (step2Title) step2Title.textContent = 'What property are you selling?';
    if (step2Desc) step2Desc.textContent = 'Select your property type and current status in Anand or nearby.';
    if (step2BuyRentOpts) step2BuyRentOpts.style.display = 'none';
    if (step2SellOpts) step2SellOpts.style.display = 'block';

    if (step4Title) step4Title.textContent = 'Expected Selling Price';
    if (step4Desc) step4Desc.textContent = 'What is your approximate expected price for the property?';
    if (step4BuyBox) step4BuyBox.style.display = 'none';
    if (step4RentBox) step4RentBox.style.display = 'none';
    if (step4SellBox) step4SellBox.style.display = 'block';
  } else if (STATE.intent === 'Rent') {
    if (step2Title) step2Title.textContent = 'What type of rental property?';
    if (step2Desc) step2Desc.textContent = 'Select your preferred configuration or property type.';
    if (step2BuyRentOpts) step2BuyRentOpts.style.display = 'block';
    if (step2SellOpts) step2SellOpts.style.display = 'none';

    if (step4Title) step4Title.textContent = 'What is your monthly rental budget?';
    if (step4Desc) step4Desc.textContent = 'Choose your approximate monthly budget range.';
    if (step4BuyBox) step4BuyBox.style.display = 'none';
    if (step4RentBox) step4RentBox.style.display = 'block';
    if (step4SellBox) step4SellBox.style.display = 'none';
  } else {
    // Buy or Other
    if (step2Title) step2Title.textContent = 'What type of property?';
    if (step2Desc) step2Desc.textContent = 'Select the configuration or property type you are looking to purchase.';
    if (step2BuyRentOpts) step2BuyRentOpts.style.display = 'block';
    if (step2SellOpts) step2SellOpts.style.display = 'none';

    if (step4Title) step4Title.textContent = 'What is your purchase budget?';
    if (step4Desc) step4Desc.textContent = 'Select your comfortable minimum and maximum price range.';
    if (step4BuyBox) step4BuyBox.style.display = 'block';
    if (step4RentBox) step4RentBox.style.display = 'none';
    if (step4SellBox) step4SellBox.style.display = 'none';
  }
}

// Step 2: Property Type Chips
function initStep2() {
  document.querySelectorAll('#step-2-buy-rent-options .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#step-2-buy-rent-options .chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.propertyType = btn.dataset.value;
    });
  });

  document.querySelectorAll('#sell-type-chips .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#sell-type-chips .chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.propertyType = btn.dataset.value;
    });
  });

  document.querySelectorAll('#sell-status-chips .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#sell-status-chips .chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.propertyStatus = btn.dataset.value;
    });
  });
}

// Step 3: Location Chips
function initStep3() {
  const locChips = document.querySelectorAll('#location-chips .chip-btn');
  const otherWrap = document.getElementById('other-location-wrap');
  const otherInput = document.getElementById('other-location-input');

  locChips.forEach(chip => {
    chip.addEventListener('click', () => {
      locChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      STATE.location = chip.dataset.value;

      if (chip.dataset.value === 'Other') {
        if (otherWrap) otherWrap.style.display = 'block';
        if (otherInput) otherInput.focus();
      } else {
        if (otherWrap) otherWrap.style.display = 'none';
      }
    });
  });

  // Flexible Area toggle
  document.querySelectorAll('#flexible-area-chips .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#flexible-area-chips .chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.flexibleLocation = btn.dataset.value;
    });
  });
}

// Step 4: Budget Selection
function initStep4() {
  // Rent monthly budget chips
  document.querySelectorAll('#rent-budget-chips .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#rent-budget-chips .chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.monthlyRent = btn.dataset.value;
    });
  });
}

// Step 5: Contact
function initStep5() {
  const sameCheckbox = document.getElementById('same-whatsapp-check');
  const waGroup = document.getElementById('whatsapp-group');

  if (sameCheckbox && waGroup) {
    sameCheckbox.addEventListener('change', () => {
      waGroup.style.display = sameCheckbox.checked ? 'none' : 'block';
      STATE.sameWhatsapp = sameCheckbox.checked;
    });
  }

  // Preferred contact chips
  document.querySelectorAll('#pref-contact-chips .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#pref-contact-chips .chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.preferredContact = btn.dataset.value;
    });
  });
}

// Step Navigation (Next & Back)
function initNavigation() {
  document.querySelectorAll('.btn-step-next').forEach(btn => {
    btn.addEventListener('click', () => {
      if (validateStep(STATE.currentStep)) {
        goToStep(STATE.currentStep + 1);
      }
    });
  });

  document.querySelectorAll('.btn-step-back').forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(STATE.currentStep - 1);
    });
  });
}

function validateStep(step) {
  if (step === 3 && STATE.location === 'Other') {
    const otherVal = document.getElementById('other-location-input')?.value.trim();
    if (!otherVal) {
      alert('Please specify your preferred location.');
      document.getElementById('other-location-input')?.focus();
      return false;
    }
    STATE.otherLocation = otherVal;
  }
  return true;
}

function goToStep(step) {
  if (step < 1 || step > STATE.totalSteps) return;

  STATE.currentStep = step;

  // Panes
  document.querySelectorAll('.wizard-step-pane').forEach(p => p.classList.remove('active'));
  const currentPane = document.getElementById(`step-pane-${step}`);
  if (currentPane) currentPane.classList.add('active');

  // Trackers
  document.querySelectorAll('.step-item').forEach(item => {
    const s = Number(item.dataset.step);
    item.classList.remove('active', 'completed');
    if (s === step) {
      item.classList.add('active');
    } else if (s < step) {
      item.classList.add('completed');
    }
  });

  document.querySelectorAll('.step-divider').forEach((div, idx) => {
    if (idx + 1 < step) {
      div.classList.add('completed');
    } else {
      div.classList.remove('completed');
    }
  });

  window.scrollTo({ top: 100, behavior: 'smooth' });
}

// Form Submission & WhatsApp Lead Generation
function initFormSubmit() {
  const form = document.getElementById('property-requirement-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('req-name')?.value.trim();
    const mobile = document.getElementById('req-mobile')?.value.replace(/\D/g, '');
    const waInput = document.getElementById('req-whatsapp')?.value.replace(/\D/g, '');
    const notes = document.getElementById('req-notes')?.value.trim();

    if (!name) {
      alert('Please enter your name.');
      document.getElementById('req-name')?.focus();
      return;
    }

    if (!mobile || mobile.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      document.getElementById('req-mobile')?.focus();
      return;
    }

    STATE.name = name;
    STATE.mobile = mobile;
    STATE.whatsapp = (document.getElementById('same-whatsapp-check')?.checked) ? mobile : (waInput || mobile);
    STATE.notes = notes;

    // Resolve budget based on intent
    let budgetDisplay = '';
    if (STATE.intent === 'Buy') {
      const min = document.getElementById('buy-budget-min')?.value || '₹25 Lakh';
      const max = document.getElementById('buy-budget-max')?.value || '₹50 Lakh';
      budgetDisplay = `${min} – ${max}`;
    } else if (STATE.intent === 'Rent') {
      budgetDisplay = STATE.monthlyRent;
    } else if (STATE.intent === 'Sell') {
      budgetDisplay = document.getElementById('sell-expected-price')?.value.trim() || 'Open to Valuation';
    }

    const locFinal = (STATE.location === 'Other' && STATE.otherLocation) ? STATE.otherLocation : STATE.location;

    // Structured Message based on prompt specifications
    let waMessage = '';
    if (STATE.intent === 'Buy') {
      waMessage = `Hello S. Meera Real Estate,

I have a property requirement.

Looking for: Buy
Property: ${STATE.propertyType}
Location: ${locFinal}${STATE.flexibleLocation === 'Yes' ? ' (Flexible with nearby areas)' : ''}
Budget: ${budgetDisplay}

Name: ${STATE.name}
Mobile: ${STATE.mobile}
${STATE.notes ? '\nAdditional Requirement:\n' + STATE.notes : ''}

Please share suitable options.`;
    } else if (STATE.intent === 'Rent') {
      waMessage = `Hello S. Meera Real Estate,

I am looking for a rental property.

Requirement: Rent
Property: ${STATE.propertyType}
Location: ${locFinal}${STATE.flexibleLocation === 'Yes' ? ' (Flexible with nearby areas)' : ''}
Monthly Budget: ${budgetDisplay}

Name: ${STATE.name}
Mobile: ${STATE.mobile}
${STATE.notes ? '\nAdditional Requirement:\n' + STATE.notes : ''}

Please share suitable options.`;
    } else if (STATE.intent === 'Sell') {
      waMessage = `Hello S. Meera Real Estate,

I would like to discuss selling my property.

Property Type: ${STATE.propertyType} (${STATE.propertyStatus})
Location: ${locFinal}
Expected Price: ${budgetDisplay}

Name: ${STATE.name}
Mobile: ${STATE.mobile}
${STATE.notes ? '\nAdditional Details:\n' + STATE.notes : ''}

Please contact me.`;
    } else {
      waMessage = `Hello S. Meera Real Estate,

I have a property requirement in Anand/nearby area.

Looking for: ${STATE.intent}
Property Type: ${STATE.propertyType}
Location: ${locFinal}

Name: ${STATE.name}
Mobile: ${STATE.mobile}
${STATE.notes ? '\nRequirement Details:\n' + STATE.notes : ''}

Please contact me with suitable options.`;
    }

    const waUrl = createWhatsAppUrl(waMessage);

    // Show Success Modal
    const modalSummary = document.getElementById('success-summary');
    if (modalSummary) {
      modalSummary.innerHTML = `
        <div style="background: var(--bg-subtle); padding: 14px; border-radius: 8px; font-size: 0.92rem; line-height: 1.5; margin-bottom: 20px; border: 1px solid var(--border-light);">
          <strong>${STATE.intent} • ${STATE.propertyType}</strong><br>
          <span>Location:</span> ${locFinal}<br>
          <span>Contact:</span> ${STATE.name} (${STATE.mobile})
        </div>
      `;
    }

    const waBtn = document.getElementById('btn-continue-whatsapp');
    if (waBtn) waBtn.href = waUrl;

    const modal = document.getElementById('requirement-success-modal');
    if (modal) modal.classList.add('open');
  });
}
