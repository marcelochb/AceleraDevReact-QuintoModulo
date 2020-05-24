import React from "react";
import "./Contacts.scss";

const Contacts = ({ children }) => {
  return (
    <div className="container" data-testid="contacts">
      <section className="contacts">{children}</section>
    </div>
  );
};

export default Contacts;
