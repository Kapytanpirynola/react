import React, { useState } from 'react';
import './Lista.css'; 

const Lista = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleEditItem = (index) => {
    const newItems = [...items];
    const newItem = prompt('Edita el elemento:', items[index]);
    if (newItem !== null && newItem.trim() !== '') {
      newItems[index] = newItem;
      setItems(newItems);
    }
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="lista-container">
      <h2 className="lista-title">Lista</h2>
      <form onSubmit={handleSubmit} className="lista-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ingresa un elemento"
          className="lista-input"
        />
        <button type="submit" className="lista-button">Agregar</button>
      </form>
      <ul className="lista-items">
        {items.map((item, index) => (
          <li key={index} className="lista-item">
            {item}
            <button onClick={() => handleEditItem(index)} className="lista-edit-button">Editar</button>
            <button onClick={() => handleDeleteItem(index)} className="lista-delete-button">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Lista;
