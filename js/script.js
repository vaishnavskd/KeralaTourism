
    function validateEmail(email) {
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    }

    function validatePhoneNumber(phone) {
        const patterns = [
            /^\d{10}$/,
            /^\d{3}-\d{3}-\d{4}$/,
            /^\d{3}.\d{3}.\d{4}$/,
            /^\d{3} \d{3} \d{4}$/
        ];

        return patterns.some(pattern => pattern.test(phone));
    }

    function validatePassword(password) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    }

    function passwordStrength(password) {
        if (password.length >= 12 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)) {
            return { strength: "strong", color: "green" };
        } else if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)) {
            return { strength: "medium", color: "orange" };
        } else {
            return { strength: "poor", color: "red" };
        }
    }

    function validateSignup() {
        const firstName = document.getElementById('frstname').value;
        const lastName = document.getElementById('lstname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('mob').value;
        const password = document.getElementById('pswd').value;

        if (!validateEmail(email)) {
            alert('Invalid email address');
            return false; // Prevent form submission
        }

        if (!validatePhoneNumber(phone)) {
            alert('Invalid phone number');
            return false; // Prevent form submission
        }

        if (!validatePassword(password)) {
            alert('Invalid password. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.');
            return false; // Prevent form submission
        }

        function StrengthIndicator(password) {
            const strengthIndicator = document.getElementById('password-strength');
            const { strength, color } = passwordStrength(password);
            strengthIndicator.innerHTML = `Password Strength: ${strength}`;
            strengthIndicator.style.color = color;
        }
        
        document.getElementById('pswd').addEventListener('input', function() {
            const password = this.value;
            StrengthIndicator(password);
        })
        
        return true; // Allow form submission if all validations pass
    }

    function validateLogin() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('pwsd').value;

        if (!validateEmail(email)) {
            alert('Invalid email address');
            return false; // Prevent form submission
        }

        // Simple password validation (you can use a more complex one if needed)
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return false; // Prevent form submission
        }

        return true; // Allow form submission if all validations pass
    }
