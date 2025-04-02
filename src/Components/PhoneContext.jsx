import React, { createContext, useState } from "react";

const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contacts, setContacts] = useState([]);

  const handleName = (event) =>{
    setName(event.target.value)
  };

  const handleNumber = (event) => {
    setNumber(event.target.value)
  };
  
  const handleAdd = () => {
    if (name && number) {
      if(number.length !== 10){
        return;
      }
      setContacts([...contacts, { name, number }]);
      setName("");
      setNumber("");
    }
  };

  const handleDelete = (index) => {
    setContacts((prevContacts) => prevContacts.filter((_, i) => i !== index));
  };

  const handleEdit = () =>{
   

    
  }
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
        handleEdit
      }}
    >
      {children}
    </PhoneContext.Provider>
  );                
};

export default PhoneContext;
