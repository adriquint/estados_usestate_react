import { useState } from "react";

const NameList = () => {
  
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddName = () => {
    if (inputValue.trim() !== '') {
        setNames([...names, inputValue]);
        setInputValue('');
    }
  };

  return (
    <>
      <h2>Lista de Nombres</h2>
      <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleAddName}>Agregar Nombre</button>
      </div>
      <ul>
        {
          names.map((name, index) => (
            <li key={index}>{name}</li>
          ))
        }
      </ul>
    </>
  );
}

export default NameList;