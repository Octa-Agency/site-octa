import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
          alert("Mensagem enviada com sucesso!");
          form.current.reset();
        },
        (error) => {
          alert("Erro ao enviar mensagem. Tente novamente.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail} id="contato">
        <h1>Contato</h1>

        <label htmlFor="nome">Nome:</label>
        <input type="text" name="nome" required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required />

        <label htmlFor="telefone">Telefone:</label>
        <input type="tel" name="telefone" />

        <label htmlFor="assunto">Assunto do contato:</label>
        <textarea name="assunto" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
