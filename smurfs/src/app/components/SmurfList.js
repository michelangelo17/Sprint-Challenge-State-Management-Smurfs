import React from 'react'
import { useSelector } from 'react-redux'

const SmurfList = () => {
  const { smurfs } = useSelector(state => state)
  return (
    <>
      {smurfs.map(smurf => (
        <div className='card' key={smurf.id}>
          <h2>{smurf.name}</h2>
          <h3>{smurf.age}</h3>
          <h3>{smurf.height}</h3>
        </div>
      ))}
    </>
  )
}

export default SmurfList
