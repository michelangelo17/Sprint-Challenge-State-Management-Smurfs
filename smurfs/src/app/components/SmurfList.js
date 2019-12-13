import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteSmurf, toggleEditing } from '../../redux/actions'
import EditSmurfForm from './EditSmurfForm'

const SmurfList = () => {
  const { smurfs, editing, editId } = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <>
      {smurfs.map(smurf => (
        <div className='card' key={smurf.id}>
          <h2>{smurf.name}</h2>
          <h3>{smurf.age}</h3>
          <h3>{smurf.height}</h3>
          <button onClick={() => dispatch(deleteSmurf(smurf.id))} type='button'>Delete</button>
          <button onClick={() => dispatch(toggleEditing(smurf.id))} type='button'>Edit</button>
          {editing && smurf.id === editId && <EditSmurfForm smurf={smurf}/>}
        </div>
      ))}
    </>
  )
}

export default SmurfList
