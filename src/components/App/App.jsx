import css from "./App.module.css";
import { useState, useEffect } from "react";

import initialList from "../../contactList.json";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
  const [contacts, setContact] = useState(() => {
    const localValue = localStorage.getItem("saved-clicks");
    if (localValue) {
      return JSON.parse(localValue);
    }
    return initialList;
  });

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContact((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContact((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContact = contacts.filter((cont) =>
    cont.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("saved-clicks", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contactList={visibleContact} onDelete={deleteContact} />
    </div>
  );
}

export default App;
