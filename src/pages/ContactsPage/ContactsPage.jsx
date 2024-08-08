import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
