import React, { createContext, useState } from "react";

const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contacts, setContacts] = useState([]);

  const handleName = (name) =>{
    setName(name)
  };

  const handleNumber = (number) => {
    setNumber(number)
};

  const handleAdd = (isEdit, contactId) => {
    if (name && number) {
      // REFACTOR
      // setContacts([...contacts, { name, number }]);
      if (isEdit) {
        const otherContacts = contacts.filter(({ id }) => contactId !== id);
        setContacts([...otherContacts, { name, number, id: otherContacts.length+1 }]);
      } else {
        setContacts((prevContacts) => [...prevContacts, { name, number, id: contacts.length+1 }])
      }

      
      setName("");
      setNumber("");
    }
  };

  const handleDelete = (index) => {
    setContacts((prevContacts) => prevContacts.filter((_, i) => i !== index));
  };
  return (
    <PhoneContext.Provider
      value={{
        name,
        number,
        contacts,
        handleName,
        handleNumber,
        handleAdd,
        handleDelete,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );                
};

export default PhoneContext;
