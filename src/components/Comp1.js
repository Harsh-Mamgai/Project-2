import React from 'react'
import './Comp1.css';
import bin from '../assets/delete.png';

export const Comp1 = (props) => {
  return (
    <div className='intro'>
        <h1>Results</h1>
        <div>
        { props.arr.length!=0 ? props.arr.map((obj, index)=>{
            return <div className='patta' key={index}>                        
                        <div class="card">
                            <img src={obj.imgSrc} class="card-img-top" alt=""/>
                            <div class="card-body">
                            <a href={obj.amazonLink} class="anchor"><h5 class="card-title">{obj.title}</h5></a>
                                <p class="card-text">Category:- {obj.category}</p>
                                <p class="card-text">{obj.description}</p>
                                <div className='hy'>
                                    <p class="card-text"> Price:- {obj.price}Rs.</p>
                                    <img src={bin} className='img' onClick={()=> props.deleteItem(index) } alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
        }) : <h1>No item present in the results. Please click Back to Home</h1> }
        </div>
    </div>
  )
}
