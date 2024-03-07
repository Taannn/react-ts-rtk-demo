import { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {
  // using a local state hook to finalize the total item to be restocked :)
  const [value, setValue] = useState(1)

  // const numOfIceCreams = useSelector((state) => state.icecream.numOfIceCreams)
  // const dispatch = useDispatch()
  const numOfIceCreams = useAppSelector((state) => state.icecream.numOfIceCreams)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of Ice creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>
        Order Ice cream
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Ice creams
      </button>
    </div>
  )
}

export default IcecreamView