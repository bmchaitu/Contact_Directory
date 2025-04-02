import React, { useContext, useState } from "react";
import "./Display.css";
import PhoneContext from "./PhoneContext";

const Display = () => {
  const {
    contacts,
    name,
    number,
    handleName,
    handleNumber,
    handleAdd,
    handleDelete,
  } = useContext(PhoneContext);
  const [isEdit, setisEdit] = useState(false);
  const [contact, setContact] = useState({});

  const onNameChange = event => {
    handleName(event.target.value);
  }

  const onNumberChange = event => {
    handleNumber(event.target.value);
  }

  // CREATE ONE MORE FUNCTION - onNumberChange
  // PASS EVENT TO THAT FUNCTION
  // CALL handleNumber with event.target.value
  // PASS THAT NEW FUNCTION TO ONCHANGE in LINE 34


  const onEdit = (givenIndex) => {
    const foundContact = contacts.find((_, currentIndex) => currentIndex === givenIndex);
    setContact(foundContact);
    handleName(foundContact.name);
    handleNumber(foundContact.number);
    setisEdit(true);
  }

  const onAdd = () => {
    handleAdd(isEdit, contact.id);
    setisEdit(false);
  }

  return (
    <>
      <div className="ContactsContainer">
        <div className="AddContacts">
          <label>Contact Name</label>
          <input type="text" value={name} onChange={onNameChange} />

          <label>Contact Number</label>
          <input type="text" value={number} onChange={onNumberChange} />
        </div>
        <input 
          type='checkbox'
          name="isEdit"
          id="isEdit"
          defaultValue={isEdit}
          onChange={(event) => setisEdit(event.target.checked)}
        />
        <label htmlFor="isEdit">IS EDIT</label>
        <br/>
        <button className="AddButton" onClick={onAdd}>
          Add
        </button>
      </div>

      <div className="DetailsContainer">
        {contacts.map((contact, index) => (
          <div key={index}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button
              className="DeleteButton"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
            <button 
              className="EditButton" 
              onClick={() => onEdit(index)}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Display;
