import Contact from "../Contact/Contact";

const ContactList = ({ users, handleDelete }) => {
  return (
    <div>
      <h3>ContactList</h3>
      <ul>
        {Array.isArray(users) &&
          users.map((user) => {
            return (
              <Contact key={user.id} user={user} handleDelete={handleDelete} />
            );
          })}
      </ul>
    </div>
  );
};

export default ContactList;
