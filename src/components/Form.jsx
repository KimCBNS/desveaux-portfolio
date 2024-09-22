import React from 'react'; // Import React
import { useState } from 'react';
import '../App.css'; 

// helper function to validate email (basically an @)
import { validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  // Capture the values to display on the screen once submitted
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes for each field
  // this updates the values every time there is a change (keystroke)
  // it doesn't do anything with the data till submit is selected
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else {
      setMessage(value);
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Basic validation: check for valid email and non-empty name and message
    if (!validateEmail(email) || !name || !message) {
      setErrorMessage('Please fill out all fields correctly.');
      return;
    }
    
    // if it passes the validation tests, then store the data to be 
    // displayed on the screen (until we add an email function at a later time)
    setSubmittedData({
      name,
      email,
      message
    });
    
    
    // Display an alert or handle the form data here
    // alert(`Thank you ${name}. Your message: (${message}) has been sent.`);

    // Reset the form fields to empty
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container text-center">
      <h3>Contact Kim</h3>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your Email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Include a message"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      
      {submittedData && (
        <div className="submitted-data">
        <h4>Here is the information you submitted:</h4>
        <p><strong>Name:</strong>{submittedData.name}</p>
        <p><strong>Email:</strong>{submittedData.email}</p>
        <p><strong>Message:</strong>{submittedData.message}</p>
      </div>
      )}

      
    </div>
  );
}

export default Form;
