import { useEffect, useState } from 'react'
import './App.css'
import { Group } from './types/GroupsTypes';
import TableComponent from './components/TableComponent/TableComponent';

function App() {

  const [data, setData] = useState<Group[]>([]);

  useEffect(() => {
    const fetchGroups = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      try {
        const response = await fetch('./data/groups.json')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json();
        setData(data)
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error)
      }
      console.log(data);
    }
    fetchGroups()
  }, [data])

  return (
    <>
    <div className="app__container">
      <h1 className='app__title'>Group filter</h1>
      <TableComponent data={data} />
    </div>
    </>
  )
}

export default App
