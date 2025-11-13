import React, { useState } from 'react';
export const Contactform = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [attachment, setAttachment] = useState(null);
  
    const handleAttachmentChange = (event) => {
      setAttachment(event.target.files[0]);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('attachment', attachment);
  
      try {
        const response = await fetch('https://api.procoreestimators.com/ ', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          alert('Email sent successfully');
        } else {
          alert('Email sending failed');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Email sending failed');
      }
    };
  
  return (
    <div>
    <h2>Contact Us</h2>
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message:</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <label>Attachment:</label>
      <input
        type="file"
        accept=".pdf,.doc,.docx,.jpg,.png"
        onChange={handleAttachmentChange}
      />

      <button type="submit">Submit</button>
    </form>
  </div>
  )
}
