import './App.css';
import React, { useState } from 'react';
import { Comp1 } from './components/Comp1';
import Data from './Data/Data.js';
import Option from './components/Option.js';

function App() {
  const [arr, setArr] = useState(Data);

  function deleteItem(index){
    const tempArr = [...arr];
    tempArr.splice(index, 1);
    setArr(tempArr);
  }
  function originalArray(){
    let tempArr = [...arr];
    tempArr = Data;
    setArr(tempArr);
  }
  function sortArray(){
    const tempArr = [...arr];
    tempArr.sort((a, b) => a.price-b.price);
    setArr(tempArr);
  }
  function searchArray(value){
    const tempArr = [...arr];
    let searchProducts = [];
    searchProducts = tempArr.filter(obj=>obj.title.includes(value));
    setArr(searchProducts);
  }
  function filterCategory(value){
    const tempArr = [...arr];
    let searchProducts = [];
    searchProducts = tempArr.filter(obj=>obj.category.includes(value));
    setArr(searchProducts);
  }
  return (
    <div className="App container-fluid">
      <div class="row">

        <div className="col-4 options">
          <Option sortArray = {sortArray} originalArray = {originalArray} searchArray = {searchArray} filterCategory = {filterCategory} />
        </div>
        <div className="col-8 display">
          <Comp1 arr={arr} deleteItem = {deleteItem}/>
        </div>

      </div>
    </div>
  );
}

export default App;
