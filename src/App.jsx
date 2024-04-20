//import contactsUser from "./listCotacts.json";
import { useMemo } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "./redux/contactsSlice";
import { setFilter } from "./redux/filtersSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const handleAdd = (formData) => {
    const finalUser = { ...formData, id: nanoid() };
    dispatch(addUser(finalUser));
  };

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleFilter = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const filterUsers = useMemo(
    () =>
      contacts.filter((user) => {
        return (
          user.name.toLowerCase().includes(filter.toLowerCase()) ||
          user.number.toLowerCase().includes(filter.toLowerCase())
        );
      }),
    [filter, contacts]
  );

  return (
    <div>
      <p>goit-react-hw-03</p>
      <h1>Phonebook</h1>
      <ContactForm handleAdd={handleAdd} />
      <SearchBox filter={filter} onChangeFilter={handleFilter} />
      <ContactList users={filterUsers} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

// const [users, setUsers] = useState(() => {
//   const mapUsers = localStorage.getItem("users");
//   if (!mapUsers) return contactsUser;
//   const parsedUsers = JSON.parse(mapUsers);
//   return parsedUsers;
// });
// const [filter, setFilter] = useState("");

// useEffect(() => {
//   localStorage.setItem("users", JSON.stringify(users));
// }, [users]);
// const filterUsers = users.filter(
//   (user) =>
//     user.name.toLowerCase().includes(filter.toLowerCase()) ||
//     user.number.toLowerCase().includes(filter.toLowerCase())
// );
