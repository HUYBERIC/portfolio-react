import React, { useState } from "react";
import "../styles/components/_contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {
  // Gestion de l'état du formulaire
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fonction pour mettre à jour les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setIsSubmitting(true);

    // Appel EmailJS
    emailjs
      .send(
        "service_p0orsvv", // Remplace par ton SERVICE_ID
        "template_h6p55fq", // Remplace par ton TEMPLATE_ID
        {
          fullName: formData.fullName, // Correspond à {{fullName}} dans le template
          email: formData.email,       // Correspond à {{email}}
          phoneNumber: formData.phoneNumber, // Correspond à {{phoneNumber}}
          subject: formData.subject,         // Correspond à {{subject}}
          message: formData.message,         // Correspond à {{message}}
        },
        "vC9Q4uqlqno2M8h1G" // Remplace par ta Public Key
      )
      .then(
        (result) => {
          console.log("Email sent: ", result.text);
          alert("Message successfully sent!");
          setFormData({
            fullName: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
          }); // Réinitialise les champs
        },
        (error) => {
          console.error("Error: ", error.text);
          alert("There was an error sending your message.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section className="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-box">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          {/* </div> */}

          {/* <div className="input-box"> */}
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
        </div>

        <div className="input-group-2">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            autoComplete="off"
            required
          ></textarea>
          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
