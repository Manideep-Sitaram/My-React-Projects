import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, deleteItem } from '../actions/cartAction'

function Cart() {

  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  console.log("store",state)
  return (
    <div className='cart'>
      <h2> Number of Items in the cart :{state.numOfItems}</h2>
      <button className='green' onClick={() => dispatch(addItem())}>Add Item</button>
      <button className='red'onClick={() => dispatch(deleteItem())}>Delete Item</button>
    </div>
  )
}

export default Cart