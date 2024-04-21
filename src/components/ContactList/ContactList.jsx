import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterContact = useSelector(selectNameFilter);
  const filteredArray = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );

  const handleDelete = (userId) => {
    dispatch(deleteContact(userId));
  };
  return (
    <div>
      <h3>ContactList</h3>
      <ul>
        {Array.isArray(filteredArray) &&
          filteredArray.map((user) => {
            return (
              <Contact key={user.id} user={user} handleDelete={handleDelete} />
            );
          })}
      </ul>
    </div>
  );
};

export default ContactList;
