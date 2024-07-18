import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import { ContactItem } from "../ContactItem/ContactItem";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterText = useSelector(getFilter);

  return (
    <ul>
      {contacts.map(
        (contact) =>
          contact.name.toLowerCase().includes(filterText.toLowerCase()) && (
            <ContactItem key={contact.id} filteredContact={contact} />
          ),
      )}
    </ul>
  );
};
