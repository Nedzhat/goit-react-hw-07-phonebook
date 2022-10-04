import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectVisibleContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operation';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { Box } from './Box';
import { GlobalStyle } from 'components/GlobalStyle';
import { MainTitle, SecondTitle } from './App.styled';
  
export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
    
    return <Box margin="50px auto 50px" padding="30px" width="500px" height="100%" border="normal" boxShadow="0px 4px 24px -1px rgba(0,0,0,0.75)" borderRadius="15px" backgroundColor="bgTable">
      <GlobalStyle/>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm/>
      <SecondTitle>Contacts</SecondTitle>
      <Filter text="Find contacts by name" />
      {isLoading && !error && <Loader />}
      {contacts.length === 0 && !isLoading ? <div style={{ display: 'flex', justifyContent: 'center', padding: '20px'}}><h2>Add your first friend!</h2></div>
        : <ContactList contacts={contacts} />}
    </Box>

};