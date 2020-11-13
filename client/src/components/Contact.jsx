import React from 'React';
import ContactForm from './ContactForm';
import './style.css';

const Contact = () => {
  return (
    <div className="body-div">
      <h1>Contact Form</h1>
      <div>Contact John to get more information on pricing for your custom job.</div>
      <ContactForm/>
    </div>
  );
};
export default Contact;
