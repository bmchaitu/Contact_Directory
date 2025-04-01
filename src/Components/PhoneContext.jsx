import React, { createContext, useState } from "react";

const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [contacts, setContacts] = useState([]);
  setName('Poojitha');
  // setNumber(420);
  setContacts([]);

  // setName(function(currentState) {
  // 
  //   return 420;
  // })

  // SCNEARIO
  // UPDATE THE STATE BY CURRENT VALUE+1

  // SET STATE ACCEPTS FUNCTION,
  //THIS FUNCTION SHOULD HAVE ONE ARGUMENT, 
  // AND WHATEVER THE VALUE THIS FUNCTION RETURNS WOULD BE SET AS A NEW STATE

  // SYNTAX FOR SET STATE
  //  THERE ARE TWO SYNTAXES FOR SET STATE
  // 1. SETTING THE STATE BY VALUE => setState(420)
  // 2. SETTING THE STATE BY FUNCTION

const updateNumber = () => {
  setNumber(function(prevState){
    return prevState + 1;
  });

  
}

// CALLED 5 times
// INITIAL VALUE - 0
// 1
// 2 
// 3 1+1 => 2
// 4 2+1 => 3
// 5 3+1 => 4

  const handleName = (event) =>{
    setName(event.target.value)
  };

  const handleNumber = (event) => {
    setNumber(event.target.value)
};

  const handleAdd = () => {
    if (name && number) {
      // setContacts([...contacts, { name, number }]);
      // setContacts(function(prevContacts){
      //   return [...prevContacts, { name, number }];
      // });
      setContacts(prevContacts => [...prevContacts, { name, number }]);
      setName("");
      setNumber("");
    }
  };

  const handleDelete = (givenIndex) => {
    // old Array => [ 1, 2, 3, 4, 5]
    // I tapped 3rd contact
    // I should updates contacts context
    // with new contacts list
    // without 3rd contact
    // newArray => [1, 2, 4, 5]
    const newArray = [];
    // oldArray = [1, 2, 3, 4, 5];
    // TRAVERSE THE ARRAY
    // LOOK FOR THE INDEX OF EACH ELEMENT AND COMPARE IT AGAINST INDEX PARAMETER
    // IF GIVEN INDEX != CURRENT INDEX -> add current index element to new Array
    // IF GIVE INDEX == CURRENT INDEX -> do not add element, ignore

    // OLD ARRAY = [1, 2, 3, 4, 5]
    // NEW ARRRAY = []
    

    setContacts(prevContacts => {
      const newContacts = [];
      for(let currentIndex=0;currentIndex<prevContacts.length;currentIndex++){
        if (currentIndex != givenIndex) {
          newContacts.push(prevContacts[currentIndex]);
        }
      }

      return newContacts;
    })


    // 1, 2, 3, 4, 5
    // DELETE THE THIRD ITEM
    // INDEX =0
    // function passedArgumen(0, 3) {
    // return 0 !== 3                   => true
    // }

    // 1 INDEX
    // function passedArgumen(1, 3) {
    // return 1 !== 3                 => true
    // }

    // 2 INDEX
    // function passedArgumen(2, 3) {
    // return 2 !== 3               => true
    // }

     // 3 INDEX
    // function passedArgumen(3, 3) {
    // return 3 !== 3             => false
    // }

    // 4 INDEX
    // function passedArgumen(4, 3) {
    // return 4 !== 3             => true
    // }

    setContacts(prevContacts => {
      const newContacts = prevContacts.filter((_, i) => i !== givenIndex);
      return newContacts;
    })


    setContacts(prevContacts => {
      return prevContacts.filter((_, i) => i !== givenIndex);
    })

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
