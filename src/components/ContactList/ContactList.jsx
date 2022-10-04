import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from 'redux/operation';
import { BtnForm } from 'components/ContactForm/ContactForm.styled';
import { ContactItem, WrapperPhone } from './ContactList.styled';

export const ContactList = ({ contacts }) => {

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
  };
  
    return <ul>
          {contacts.map(({id, name, phone}) => {
            return <ContactItem key={id}>
              <span>
                {name}:
              </span>
              <WrapperPhone>
                <span>
                {phone}
              </span>
              <BtnForm onClick={() => handleDelete(id)}>Удалить</BtnForm>
              </WrapperPhone>
            </ContactItem>
          })}
      </ul>
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
}