import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteSmurf } from '../../redux/actions'

const SmurfList = () => {
  const { smurfs } = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <>
      {smurfs.map(smurf => (
        <div className='card' key={smurf.id}>
          <h2>{smurf.name}</h2>
          <h3>{smurf.age}</h3>
          <h3>{smurf.height}</h3>
          <button onClick={() => dispatch(deleteSmurf(smurf.id))} type='button'>Delete</button>
        </div>
      ))}
    </>
  )
}

export default SmurfList
