import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/buttonSlice/buttonSlice';

export default function TrialButton() {

    const dispatch = useDispatch();
  return (
    <div onClick = {() => dispatch(increment())}>
        Add to cart
    </div>
  )
}
