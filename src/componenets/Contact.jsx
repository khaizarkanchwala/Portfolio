import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    user_name: false,
    user_email: false,
    subject: false,
    message: false,
  });

  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    // You can use a regular expression to validate email format.
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  };

  useEffect(() => {
    // Check if all fields are valid and enable or disable the submit button.
    const isFormValid =
      formData.user_name.trim() !== '' &&
      validateEmail(formData.user_email) &&
      formData.subject.trim() !== '' &&
      formData.message.trim() !== '';

    // Update formErrors state to control the field highlighting.
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      user_name: formData.user_name.trim() === '',
      user_email: !validateEmail(formData.user_email),
      subject: formData.subject.trim() === '',
      message: formData.message.trim() === '',
    }));

    // Enable or disable the submit button based on form validity.
    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
      submitButton.disabled = !isFormValid;
    }
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      user_name: '',
      user_email: '',
      subject: '',
      message: '',
    });

    setSuccessMessage(''); // Clear success message
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Check for empty fields or invalid email before sending
    if (
      formData.user_name.trim() === '' ||
      !validateEmail(formData.user_email) ||
      formData.subject.trim() === '' ||
      formData.message.trim() === ''
    ) {
      window.alert('Please fill out all fields correctly.');
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage('Email sent successfully!');
          window.alert("Email sent successfully!")
          resetForm(); // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
          window.alert('Email sending failed. Please try again.');
        }
      );
  };

  return (
    <div name="contact" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen min-h-150 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pd-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={sendEmail} className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                formErrors.user_name ? 'border-red-500' : 'border-green-500'
              }`}
              onChange={handleInputChange}
              value={formData.user_name}
            />
            <input
              type="text"
              name="user_email"
              placeholder="Enter your email"
              className={`my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                formErrors.user_email ? 'border-red-500' : 'border-green-500'
              }`}
              onChange={handleInputChange}
              value={formData.user_email}
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter your subject"
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                formErrors.subject ? 'border-red-500' : 'border-green-500'
              }`}
              onChange={handleInputChange}
              value={formData.subject}
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className={`my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                formErrors.message ? 'border-red-500' : 'border-green-500'
              }`}
              onChange={handleInputChange}
              value={formData.message}
            ></textarea>
            <button
              id="submit-button"
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              disabled={!formData.user_name || !formData.user_email || !formData.subject || !formData.message}
            >
              Let's talk
            </button>
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
