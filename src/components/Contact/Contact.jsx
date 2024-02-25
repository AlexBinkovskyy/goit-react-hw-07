import { FaUserTie } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import CSS from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactSlice';

export function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <li className={CSS.listItem}>
      <div className={CSS.userName}>
        <FaUserTie className={CSS.icon} size="25px" />
        <h2 className={CSS.title}>{name}</h2>
      </div>
      <div className={CSS.userPhone}>
        <FaPhoneAlt className={CSS.icon} size="22px" />
        <p className={CSS.title}>{number}</p>
      </div>
      <button
        type="button"
        className={CSS.button}
        onClick={() => handleDelete(id)}
      >
        Delete contact
      </button>
    </li>
  );
}
