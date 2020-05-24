import React from "react";
import "./Contact.scss";
const Contact = ({
  name = "Nome",
  phone = "Telefone",
  country = "País",
  admissionDate = "Admissão",
  company = "Empresa",
  departament = "Departamento",
  avatar,
}) => {
  const admissionDateFormatted = new Date(admissionDate).toLocaleDateString(
    "pt-br"
  );
  return (
    <article className="contact" data-testid="contact">
      <span className="contact__avatar">
        <img src={avatar} alt={name} />
      </span>
      <span className="contact__data">{name}</span>
      <span className="contact__data">{phone}</span>
      <span className="contact__data">{country}</span>
      <span className="contact__data">{admissionDateFormatted}</span>
      <span className="contact__data">{company}</span>
      <span className="contact__data">{departament}</span>
    </article>
  );
};

export default Contact;
