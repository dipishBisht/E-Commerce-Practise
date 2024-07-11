import { useState, useEffect } from 'react'
import useFetchData from '../hooks/useFetchData';

const Cards = () => {

  const [data, setData] = useState(null);
  const apiData = useFetchData();

  useEffect(() => {
    setData(apiData);
    console.log(data);
  })


  return (
    <div>api</div>
  )
}

export default Cards