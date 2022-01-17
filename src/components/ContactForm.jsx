import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const USER_ID = "user_N1S0jclxvOrbGuov54D3M";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const form = document.querySelector('.contact-form');

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let subjectInput = document.getElementById("subject");
    let messageInput = document.getElementById("message");
    let inputs = [nameInput, emailInput, subjectInput, messageInput];
    let formMessage = document.querySelector(".formMessage");

    const isEmailCorrect = () => {
      let MailErrorLabel = document.getElementById("not-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        MailErrorLabel.style.display = "none";
        return true;
      } else {
        MailErrorLabel.style.display = "block";
        MailErrorLabel.style.animation = "dongle 1s";
        setTimeout(() => {
          MailErrorLabel.style.animation = "none";
        }, 1000);
        return false;
      }
    };

    const areFieldsfilled = () => {
      if (name && isEmailCorrect() && subject && message) {
        return true
      } else {
        return false
      }
    }

    if (areFieldsfilled()) {
      nameInput.classList.remove("red");
      emailInput.classList.remove("red");
      subjectInput.classList.remove("red");
      messageInput.classList.remove("red");

      formMessage.innerHTML = "Message en cours d'envoi...";
      formMessage.style.background = "#00c1ec";
      formMessage.style.opacity = "1";

      // see doc : https://www.emailjs.com/docs/examples/reactjs/
      // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
        emailjs.sendForm("contact_service", "contact_service", form, USER_ID)
        .then((result) => {
            console.log(result.text);
            formMessage.innerHTML = "Your message was sent successfully";

            nameInput.classList.remove("error");
            emailInput.classList.remove("error");
            subjectInput.classList.remove("error");
            messageInput.classList.remove("error");
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");

            setTimeout(() => {
              formMessage.style.opacity = "0";
            }, 5000);
        }, (error) => {
            console.log(error.text);
            formMessage.style.background = "rgb(253, 87, 87)";
            formMessage.innerHTML = "An error occured. Please try again!";
        });

    } else {
      formMessage.innerHTML = "Merci de remplir correctement les champs requis *";
      formMessage.style.background = "rgb(253, 87, 87)";
      formMessage.style.opacity = "1";

      if (!name) {
        nameInput.classList.add("error");
      }
      if (!email) {
        emailInput.classList.add("error");
      }
      if (!subject) {
        subjectInput.classList.add("error");
      }
      if (!message) {
        messageInput.classList.add("error");
      }
    }
  };

  return (
    <form className="contact-form">
      <div className="form-content">
        <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input type="mail" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <input type="text" id="subject" name="subject" required value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
        <textarea id="message" name="message" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" rows="7" />
      </div>
      <div className="formMessage"></div>
      <input className="form-button" type="submit" value="Send" onClick={(e) => handleSubmit(e)} />
    </form>
  );
};

export default ContactForm;