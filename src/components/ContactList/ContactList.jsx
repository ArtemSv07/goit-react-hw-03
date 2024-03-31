import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul className={css.listBox}>
      {contactList.map((element) => (
        <li className={css.list} key={element.id}>
          <Contact data={element} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
