import { Field, Form, Formik } from "formik";

const FORM_INITIAL = {
  name: "",
  number: "",
};

const ContactForm = ({ handleAdd }) => {
  const handleSubmit = (values, actions) => {
    handleAdd(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={FORM_INITIAL} onSubmit={handleSubmit}>
      <Form>
        <h2>Add new user</h2>
        <label>
          <span>Name : </span>
          <br />
          <Field type="text" name="name" />
        </label>
        <br />
        <label>
          <span>Telephone : </span>
          <br />
          <Field type="text" name="number" />
        </label>
        <br />
        <button type="submit">▶ Create new user</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
