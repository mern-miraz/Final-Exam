import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './slice/counterSlice'

const Counte = () => {

    let dispatch = useDispatch()
    let data = useSelector((state)=>state.counter.value)
  return (
    <>
        <div className="container mx-auto flex justify-center">
            <div className=" mt-14">
                <div className=" flex gap-x-4 text-3xl">
                    <button onClick={()=>dispatch(decrement())}>-</button>
                    <h4>{data}</h4>
                    <button onClick={()=>dispatch(increment())}>+</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counte