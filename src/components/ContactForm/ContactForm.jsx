import { nanoid } from "nanoid";
import styles from "./ContactForm.module.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import { getContacts } from "../redux/selectors";

export const ContactForm = () => {
  const nameId = nanoid();
  const numId = nanoid();
  const dispatch = useDispatch();

  const contactsList = useSelector(getContacts);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;

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
          required
          value={nameValue}></input>
      </label>
      <label htmlFor={numId} className={styles.label}>
        Number
        <input
          id={numId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={numberValue}></input>
      </label>
      <button type="submit" className={styles.formButton}>
        Add contact
      </button>
    </form>
  );
};
