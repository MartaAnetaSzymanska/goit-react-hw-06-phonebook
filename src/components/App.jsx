import { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from "nanoid";

export const App = () => {
  const filterContact = () => {
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterLowerCase),
    );
  };

  const deleteContact = (id) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id),
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <ContactList
        filterContact={filterContact}
        deleteContact={deleteContact}></ContactList>
    </>
  );
};
