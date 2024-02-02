import React from 'react'
import './Option.css';
import { useRef } from 'react';

export const Option = (props) => {
    const searchValue = useRef();
    const searchCategory = useRef();
  return (
        <div className='main'>
            <h2>E-Commerce website</h2>
            
                <div class="mb-5 mt-5 d-flex">
                    <input 
                        type="text" 
                        class="form-control" 
                        id="exampleInputEmail1" 
                        placeholder='Search'
                        ref = {searchValue}
                    />
                    <button className="btn" onClick = {()=> props.searchArray(searchValue.current.value)}>Search</button>
                </div>
                <div className='mb-5 mt-5 d-flex'>
                    <input 
                            type="text" 
                            class="form-control" 
                            id="exampleInputEmail1" 
                            placeholder='Search by category'
                            ref = {searchCategory}
                    />
                    <button className="btn" onClick = {()=> props.filterCategory(searchCategory.current.value)}>Filter</button>
                </div>

            <h5 onClick={()=> props.sortArray()} className='sort'>Sort By Prices</h5>        
            <h5 onClick={()=> props.originalArray()} className='back'>Back to Home</h5>

        </div>
    )
}
export default Option;
