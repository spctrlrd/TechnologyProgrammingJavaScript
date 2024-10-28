function validateForm() {
    const email = document.getElementById('emailAddress').value;
    const phone = document.getElementById('phoneNumber').value;
    const age = document.getElementById('age').value;


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }


    const phonePattern = /^\+7\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid Russian phone number (e.g. +71234567890).');
        return false;
    }


    if (age < 18 || age > 90) {
        alert('Age must be between 18 and 90.');
        return false;
    }

    return true;
}