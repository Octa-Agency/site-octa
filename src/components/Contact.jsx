import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import treeR from "../assets/formTreeR.png";
import treeL from "../assets/formTreeL.png";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_211gc38",
        "template_w7c44ab",
        form.current,
        "M4ShKhGnXyLTmS93l"
      )
      .then(
        (result) => {
          form.current.reset();
        },
        (error) => {
          alert("Erro ao enviar mensagem. Tente novamente.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container" id="contato">
      <img src={treeL} className="trees" alt="" />
      <form ref={form} onSubmit={sendEmail}>
        <h1>Fale Conosco!</h1>

        <label htmlFor="nome">Nome:</label>
        <input type="text" name="nome" required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required />

        <label htmlFor="telefone">Telefone:</label>
        <input type="tel" name="telefone" />

        <label htmlFor="assunto">Assunto do contato:</label>
        <textarea name="assunto" rows="4" required></textarea>

        <button type="submit" className="form__button">
          Enviar
        </button>
      </form>
      <img src={treeR} className="trees" alt="" />
    </div>
  );
}

export default Contact;
