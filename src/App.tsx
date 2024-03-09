import { useEffect, useState } from 'react'
import './App.css'
import { Group } from './types/GroupsTypes';

function App() {

  const [data, setData] = useState<Group[]>([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const response = await fetch('./data/groups.json')
      const data = await response.json();
      console.log(data);
      setData(data)
    }
    fetchGroups()
  }, [])

  return (
    <>
    <div className="app__container">
      <h1 className='app__title'>Group filter</h1>
    </div>
    </>
  )
}

export default App
