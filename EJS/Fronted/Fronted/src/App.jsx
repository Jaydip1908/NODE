
import './App.css'
import { useState,useEffect } from 'react';
import axios  from 'axios';

function App() {
  const [Data,setData]=useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/Data")
      .then((response) => {
        console.log(response.data);
        setData(response.data.name);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{textAlign:'center',fontSize:'40px'}}>
      {
        Data && Data.length >0 ?Data.map((el,index)=><p key={index}>{el}</p>)
        :(
          <p>Loading</p>
        )
      }
        
    </div>
  )
}

export default App
