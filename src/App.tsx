import { useEffect, useState } from 'react'
import './App.css'
import { Group } from './types/GroupsTypes';
import TableComponent from './components/TableComponent/TableComponent';
import { LineWave } from 'react-loader-spinner';

function App() {

  const [data, setData] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true)
    const fetchGroups = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      try {
        const response = await fetch('./data/groups.json')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json();
        if (!data) {
          console.error('Data is not available or result is 0');
          return;
        }
        setData(data)
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchGroups()
  }, [])
  console.log(data);

  return (
    <>
    <div className="app__container">
      <h1 className='app__title'>Group filter</h1>
      {isLoading ?
        <LineWave
            visible={true}
            height="150"
            width="150"
            color="#4fa94d"
            ariaLabel="line-wave-loading"
            wrapperStyle={
              {
                display: 'flex',
                justifyContent: 'center'
              }
            }
            />
        :
        <TableComponent data={data}
        />}
    </div>
    </>
  )
}

export default App
