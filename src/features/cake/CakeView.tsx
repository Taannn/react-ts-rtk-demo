
// import { useSelector, useDispatch } from 'react-redux'
// how exactly does we get access to the store via useSelector, by default it takes it the entirety of store as its argument for the function parameter it has. This store is provided by the Provider wrapper in the main component so we can access the store anywhere using useSelector the Provider wrapper store prop has the store passed innit

import { useAppDispatch, useAppSelector } from '../../app/hook'
import { increment, ordered, restocked } from './cakeSlice'

const CakeView = () => {
  // const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  // const dispatch = useDispatch()
  // we replace the non-typed one with our imported typed ones
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(increment())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  )
}

export default CakeView