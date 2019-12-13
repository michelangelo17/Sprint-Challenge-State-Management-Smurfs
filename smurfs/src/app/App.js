import React, { useEffect } from 'react'
import './App.scss'
import { getSmurfs } from '../redux/actions'
import { useDispatch } from 'react-redux'
import SmurfList from './components/SmurfList'
import CreateSmurfForm from './components/CreateSmurfForm'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSmurfs())
  }, [dispatch])
  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <CreateSmurfForm />
      <SmurfList />
    </div>
  )
}

export default App
