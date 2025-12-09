/* ============================================
   CONTACT FORM VALIDATION
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (!contactForm) return;

    // Form fields
    const nameField = document.getElementById('contactName');
    const emailField = document.getElementById('contactEmail');
    const phoneField = document.getElementById('contactPhone');
    const subjectField = document.getElementById('contactSubject');
    const messageField = document.getElementById('contactMessage');
    const agreeField = document.getElementById('contactAgree');

    // Error messages
    const nameError = document.getElementById('contactNameError');
    const emailError = document.getElementById('contactEmailError');
    const phoneError = document.getElementById('contactPhoneError');
    const subjectError = document.getElementById('contactSubjectError');
    const messageError = document.getElementById('contactMessageError');
    const agreeError = document.getElementById('contactAgreeError');

    const successMessage = document.getElementById('contactSuccessMessage');

    // ============================================
    // REAL-TIME VALIDATION
    // ============================================

    nameField.addEventListener('blur', validateName);
    emailField.addEventListener('blur', validateEmail);
    phoneField.addEventListener('blur', validatePhone);
    subjectField.addEventListener('blur', validateSubject);
    messageField.addEventListener('blur', validateMessage);
    agreeField.addEventListener('change', validateAgree);

    // ============================================
    // VALIDATION FUNCTIONS
    // ============================================

    /**
     * Validate name field
     */
    function validateName() {
        const value = nameField.value.trim();

        if (!value) {
            showFieldError(nameField, nameError, 'Veuillez entrer votre nom');
            return false;
        }

        if (value.length < 3) {
            showFieldError(nameField, nameError, 'Le nom doit contenir au moins 3 caractères');
            return false;
        }

        clearFieldError(nameField, nameError);
        return true;
    }

    /**
     * Validate email field
     */
    function validateEmail() {
        const value = emailField.value.trim();

        if (!value) {
            showFieldError(emailField, emailError, 'Veuillez entrer votre email');
            return false;
        }

        if (!isValidEmail(value)) {
            showFieldError(emailField, emailError, 'Veuillez entrer un email valide');
            return false;
        }

        clearFieldError(emailField, emailError);
        return true;
    }

    /**
     * Validate phone field (optional)
     */
    function validatePhone() {
        const value = phoneField.value.trim();

        if (value && !isValidPhone(value)) {
            showFieldError(phoneField, phoneError, 'Veuillez entrer un numéro valide');
            return false;
        }

        clearFieldError(phoneField, phoneError);
        return true;
    }

    /**
     * Validate subject field
     */
    function validateSubject() {
        const value = subjectField.value.trim();

        if (!value) {
            showFieldError(subjectField, subjectError, 'Veuillez entrer un sujet');
            return false;
        }

        if (value.length < 5) {
            showFieldError(subjectField, subjectError, 'Le sujet doit contenir au moins 5 caractères');
            return false;
        }

        clearFieldError(subjectField, subjectError);
        return true;
    }

    /**
     * Validate message field
     */
    function validateMessage() {
        const value = messageField.value.trim();

        if (!value) {
            showFieldError(messageField, messageError, 'Veuillez entrer votre message');
            return false;
        }

        if (value.length < 10) {
            showFieldError(messageField, messageError, 'Le message doit contenir au moins 10 caractères');
            return false;
        }

        if (value.length > 2000) {
            showFieldError(messageField, messageError, 'Le message ne doit pas dépasser 2000 caractères');
            return false;
        }

        clearFieldError(messageField, messageError);
        return true;
    }

    /**
     * Validate agree checkbox
     */
    function validateAgree() {
        if (!agreeField.checked) {
            showFieldError(agreeField, agreeError, 'Vous devez accepter la politique de confidentialité');
            return false;
        }

        clearFieldError(agreeField, agreeError);
        return true;
    }

    // ============================================
    // FORM SUBMISSION
    // ============================================

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();
        const isAgreeValid = validateAgree();

        // If all fields are valid, show success message
        if (isNameValid && isEmailValid && isPhoneValid && isSubjectValid &&
            isMessageValid && isAgreeValid) {

            // Collect form data
            const formData = {
                name: nameField.value,
                email: emailField.value,
                phone: phoneField.value,
                subject: subjectField.value,
                message: messageField.value,
                timestamp: new Date().toISOString()
            };

            console.log('Contact data:', formData);

            // In a real application, this data would be sent to a server
            // Example: 
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // })

            // Show success message
            showSuccessMessage(successMessage);

            // Reset form
            contactForm.reset();

            // Clear any error states
            document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
                field.classList.remove('error');
            });

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
