import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ data: { name, number, id }, onDelete }) => {
  return (
    <div className={css.container}>
      <div>
        <p>
          <IoPerson className={css.phoneIcon} />
          {name}
        </p>
        <p className={css.contText}>
          <FaPhone className={css.phoneIcon} />
          {number}
        </p>
      </div>

      <button className={css.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
