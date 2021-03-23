import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './Components/ui/Header';
import axios from 'axios';
import CharacterGrid from './Components/characters/CharacterGrid';
import Search from './Components/ui/Search';

const App=()=> {
  
  const [items,setItems]=useState([]);
  const [ loading,isLoading]=useState(true);
  const [query, setQuery]=useState('');


  useEffect(()=>{

    
    const fetchItesm = async ()=>{
       
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data);
      setItems(result.data);
      isLoading(false);
    }
    fetchItesm()

  },[query])
  
console.log("query is",query)
  return (
    <div className="container">
      
       <Header/> 
       <Search getQuery={(r)=>{
    setQuery(r);

  }}/>
       <CharacterGrid loading={loading} items={items}/>
      </div>
  )
}

export default App;
