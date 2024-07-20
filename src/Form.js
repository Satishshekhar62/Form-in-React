import React, { useState } from 'react';

function Form() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [phone, setPhone] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const phoneRegex = /^(\+91[\-\s]?)?[789]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function handleSubmit(e) {
        e.preventDefault();
        let valid = true;

        if (!validatePhone(phone)) {
            setPhoneError('');
            setPhoneError("Invalid phone number");
            valid = false;
        } else {
            setPhoneError("");
        }

        if (!validateEmail(email)) {
            setEmailError("Invalid email address");
            valid = false;
        } else {
            setEmailError("");
        }

        if (valid) {
            console.log("Form submitted successfully!");
            console.log("Email:", email);
            console.log("Password:", pass);
            console.log("Phone:", phone);
        }
    }

    const validatePhone = (phone) => {
        return phoneRegex.test(phone);
    };

    const validateEmail = (email) => {
        return emailRegex.test(email);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type='text'
                    placeholder='Enter your name'
                />
                <br />
                <label>Email:</label>
                <input
                    type='email'
                    placeholder='Enter Your Email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
                <br />
                <label>Phone:</label>
                <input
                    type='text'
                    placeholder='Enter your phone number'
                    required
                    onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                {phoneError && <span style={{ color: 'red' }}>{phoneError}</span>}
                <br />
                <label>Password:</label>
                <input
                    type='password'
                    placeholder='Enter your password'
                    required
                    onChange={(e) => setPass(e.target.value)}
                />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form;
