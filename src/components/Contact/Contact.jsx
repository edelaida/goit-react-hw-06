const Contact = ({ user, handleDelete }) => {
  return (
    <li>
      <p>
        🙎 {user.name}
        📞 {user.number}
      </p>
      <button type="button" onClick={() => handleDelete(user.id)}>
        DELETE
      </button>
    </li>
  );
};

export default Contact;
