import React, { useEffect } from 'react'
import './App.scss'
import { getSmurfs } from '../redux/actions'
import { useDispatch } from 'react-redux'
import SmurfList from './components/smurfList'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSmurfs())
  }, [])
  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfList />
    </div>
  )
}

export default App
