import { useState } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const afterSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setIsSending(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/f9077f32c35043264a901c57658224e1",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setIsSending(false);
      } else {
        alert("Sorry, something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting Contact Form:", error);
      alert("Sorry, something went wrong. Please try again.");
    }
  };

  const messageStatus = () => {
    if (isSending && !isSubmitted) {
      return (
        <>
          <h2>Please Wait</h2>
          <p className="sending-p">Sending your message...</p>
          <img src="/loading-dots.gif" />
        </>
      );
    } else if (isSubmitted) {
      return (
      <>
        <h2>Thank You!</h2>
        <p>Your message has been sent</p>
      </>
      );
    }
    return null;
  };

  return (
    <div id="ContactForm">
      {isSending || isSubmitted ? (
        messageStatus() 
      ) : (
        <Form afterSubmit={afterSubmit} />
      )}
    </div>
  );
}

function Form({ afterSubmit }) {
  return (
    <>
    <span id="contactScrl"></span>
      <h2>Contact Me:</h2>
      <div className="form-container">
        <form onSubmit={afterSubmit} method="POST">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea type="text" id="message" name="message" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
