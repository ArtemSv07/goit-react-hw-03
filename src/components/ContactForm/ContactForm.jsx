import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { nanoid } from "nanoid/non-secure";
import css from "./ContactForm.module.css";

const naId = nanoid(3);

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (value, actions) => {
    onAdd({
      id: `id-${naId}`,
      name: value.name,
      number: value.phone,
    });

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.formBox}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.errMessage} name="name" as="span" />
        </div>

        <div className={css.formBox}>
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.input}
            type="phone"
            name="phone"
            id={numberFieldId}
          />
          <ErrorMessage className={css.errMessage} name="phone" as="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
