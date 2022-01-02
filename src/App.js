// import Info from './Info.js';
// import { PropTypes } from 'prop-types';
// import { useState } from 'react';

import './App.css';
import SearchBar from './SearchBar';
import AddItem from './AddItem';
import ItemsDisplay from './ItemsDisplay';
import React, { useState, useEffect } from 'react';

function App() {
  //{} inside useState() means javascript object
  const [filters, setFilters] = useState({});
  //items is key and stores [] = list
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then((response) => response.json())
      .then((data) => setData({ items: data }));
  }, []); //passing empty array here makes useEffect run only once

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const deleteItem = (item) => {
    const items = data['items'];
    const requestOptions = {
      method: 'DELETE',
    };
    fetch(`http://localhost/3000/items/${item.id}`, requestOptions).then(
      (response) => {
        if (response.ok) {
          const idx = items.indexOf(item);
          items.splice(idx, 1);
          setData({ items, items });
        }
      }
    );
  };

  const addItemToData = (item) => {
    //stores state in variable called items
    let items = data['items'];
    // item.id = items.length;

    //allows you to send a request to a URL
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    };
    fetch('http://localhost:3000/items', requestOptions).then((response) => {
      response.json().then((data) => {
        items.push(data);
        setData({ items: items });
      });
    });
  };

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name) {
      return data;
    }

    //looping through all items
    for (const item of data) {
      //check if field in filter is not default value and that filter is not an empty string
      if (filters.name !== '' && item.name !== filters.name) {
        continue;
      }

      if (filters.price !== 0 && item.price > filters.price) {
        continue;
      }

      if (filters.type !== '' && item.type !== filters.type) {
        continue;
      }

      if (filters.brand !== '' && item.brand !== filters.brand) {
        continue;
      }

      filteredData.push(item);
    }
    return filteredData;
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay
          deleteItem={deleteItem}
          items={filterData(data['items'])}
        />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>

      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>

      {/* <p>Name: {'name' in data ? data['name'] : 'No data to display'}</p>
      <p>Max Price: {'price' in data ? data['price'] : 'No data to display'}</p>
      <p>Type: {'type' in data ? data['type'] : 'No data to display'}</p>
      <p>Brand: {'brand' in data ? data['brand'] : 'No data to display'}</p> */}

      {/* <Info /> */}
      {/* <AddItem text="Hello" number={1} />
      <AddItem text="Yo" number={2} /> */}
      {/* <ButtonState /> */}
    </div>
  );
}

// function ButtonState() {
//   //using useState
//   //useState defines default state of the variable
//   const [title, setTitle] = useState('');
//   const [count, setCount] = useState(0);

//   //functions created to update state inside component
//   const updateTitleClicked = () => {
//     setTitle('Title added');
//   };

//   const updateCounterClicked = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       {/* passing state to child components */}
//       <Data title={title} count={count} />
//       <p>Title: {title}</p>
//       <p>Counter: {count}</p>
//       {/* onClick = call js function when button is clicked */}
//       {/*  */}
//       <button onClick={updateTitleClicked}>Update Title</button>
//       <button onClick={updateCounterClicked}>Update Counter</button>
//     </div>
//   );
// }

// function Data(props) {
//   return (
//     <div>
//       <Data />
//       <p>Title: {props.title}</p>
//       <p>Count: {props.count}</p>
//     </div>
//   );
// }

//props (properties) are passed into parameters
//e.g. {text, number}, default values can be passed into these e.g. {number = 4}
//props are read only values, cannot change a property from inside of the component that it's being passed to
//e.g. can't write something like props.text = "";

// function AddItem({ text, number }) {
//   const value = text;
//   return (
//     <form>
//       <label for="text-form">Type Something: </label>
//       <input type="text" value={value} id="text-form" />
//     </form>
//   );
// }

// using default props without deconstructoring
// AddItem.defaultProps = {
//   number: 1,
// };

//using prop types
//gives warning of expected prop type
//useful when working in teams
// AddItem.propTypes = {
//   number: PropTypes.number,
//   text: PropTypes.string,
// };

export default App;
