import React, { useState } from 'react';

const AddItem = (props) => {
  //setting initial state
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');

  const addItemButtonPressed = () => {
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });

    setName('');
    setPrice(0);
    setType('');
    setBrand('');

    // console.log(name);
    // console.log(price);
    // console.log(type);
    // console.log(brand);
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Add an Item</h2>
      </div>

      <div className="row">
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          type="text"
          value={name}
          //e gets value and updates it
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        ></input>

        <label htmlFor="price-field">Price:</label>
        <input
          id="price-field"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
        ></input>

        <label htmlFor="type-field">Type:</label>
        <input
          id="type-field"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="form-control"
        ></input>

        <label htmlFor="brand-field">Brand:</label>
        <input
          id="brand-field"
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="form-control"
        ></input>
      </div>

      <div className="row mt-3">
        <button
          type="button"
          onClick={addItemButtonPressed}
          className="btn btn-primary"
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default AddItem;
