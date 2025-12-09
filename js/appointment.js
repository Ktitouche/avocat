/* ============================================
   APPOINTMENT FORM VALIDATION
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    const appointmentForm = document.getElementById('appointmentForm');

    if (!appointmentForm) return;

    // Form fields
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const subjectField = document.getElementById('subject');
    const dateField = document.getElementById('date');
    const timeField = document.getElementById('time');
    const messageField = document.getElementById('message');
    const agreeField = document.getElementById('agree');

    // Error messages
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const subjectError = document.getElementById('subjectError');
    const dateError = document.getElementById('dateError');
    const timeError = document.getElementById('timeError');
    const messageError = document.getElementById('messageError');
    const agreeError = document.getElementById('agreeError');

    const successMessage = document.getElementById('successMessage');

    // ============================================
    // REAL-TIME VALIDATION
    // ============================================

    nameField.addEventListener('blur', validateName);
    emailField.addEventListener('blur', validateEmail);
    phoneField.addEventListener('blur', validatePhone);
    subjectField.addEventListener('change', validateSubject);
    dateField.addEventListener('change', validateDate);
    timeField.addEventListener('change', validateTime);
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
     * Validate phone field
     */
    function validatePhone() {
        const value = phoneField.value.trim();

        if (!value) {
            showFieldError(phoneField, phoneError, 'Veuillez entrer votre numéro de téléphone');
            return false;
        }

        if (!isValidPhone(value)) {
            showFieldError(phoneField, phoneError, 'Veuillez entrer un numéro valide (min. 10 chiffres)');
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
            showFieldError(subjectField, subjectError, 'Veuillez sélectionner un sujet');
            return false;
        }

        clearFieldError(subjectField, subjectError);
        return true;
    }

    /**
     * Validate date field
     */
    function validateDate() {
        const value = dateField.value;

        if (!value) {
            showFieldError(dateField, dateError, 'Veuillez sélectionner une date');
            return false;
        }

        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            showFieldError(dateField, dateError, 'Veuillez sélectionner une date future');
            return false;
        }

        clearFieldError(dateField, dateError);
        return true;
    }

    /**
     * Validate time field
     */
    function validateTime() {
        const value = timeField.value;

        if (!value) {
            showFieldError(timeField, timeError, 'Veuillez sélectionner une heure');
            return false;
        }

        clearFieldError(timeField, timeError);
        return true;
    }

    /**
     * Validate message field
     */
    function validateMessage() {
        const value = messageField.value.trim();

        if (value && value.length < 10) {
            showFieldError(messageField, messageError, 'Le message doit contenir au moins 10 caractères');
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
            showFieldError(agreeField, agreeError, 'Vous devez accepter les conditions');
            return false;
        }

        clearFieldError(agreeField, agreeError);
        return true;
    }

    // ============================================
    // FORM SUBMISSION
    // ============================================

    appointmentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isSubjectValid = validateSubject();
        const isDateValid = validateDate();
        const isTimeValid = validateTime();
        const isMessageValid = validateMessage();
        const isAgreeValid = validateAgree();

        // If all fields are valid, show success message
        if (isNameValid && isEmailValid && isPhoneValid && isSubjectValid &&
            isDateValid && isTimeValid && isMessageValid && isAgreeValid) {

            // Collect form data
            const formData = {
                name: nameField.value,
                email: emailField.value,
                phone: phoneField.value,
                subject: subjectField.value,
                date: dateField.value,
                time: timeField.value,
                message: messageField.value
            };

            console.log('Appointment data:', formData);

            // Show success message
            showSuccessMessage(successMessage);

            // Reset form
            appointmentForm.reset();

            // Clear any error states
            document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
                field.classList.remove('error');
            });

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
