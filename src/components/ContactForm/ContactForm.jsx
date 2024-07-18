import { nanoid } from "nanoid";
import styles from "./ContactForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { getContacts } from "../../redux/selectors";
import { useState } from "react";

export const ContactForm = () => {
  const nameId = nanoid();
  const numId = nanoid();
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState([]);
  const [numberValue, setNumberValue] = useState([]);

  const contactsList = useSelector(getContacts);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;
    setNameValue(nameValue);
    setNumberValue(numberValue);

    const isContactExist = contactsList.some(
      (contact) => contact.name.toLowerCase() === nameValue.toLowerCase(),
    );

    if (isContactExist) {
      alert(`Contact with the name: ${nameValue} already exists.`);
    } else {
      dispatch(addContact(nameValue, numberValue));
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId} className={styles.label}>
        Name
        <input
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required></input>
      </label>
      <label htmlFor={numId} className={styles.label}>
        Number
        <input
          id={numId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required></input>
      </label>
      <button type="submit" className={styles.formButton}>
        Add contact
      </button>
    </form>
  );
};
