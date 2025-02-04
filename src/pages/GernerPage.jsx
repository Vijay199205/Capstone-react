import React, { useContext, useEffect, useState } from 'react';
import {AppContext} from '../Context/AppContext';
import styles from './gernerPage.module.css';
import defaultGeners from '../data/geners';
import { useNavigate } from 'react-router-dom';

function GernerPage() {
  const [error, setError] = useState()
  const {selectedGerners, setSelectedGerners} = useContext(AppContext);
  const navigate = useNavigate()

  useEffect(()=>{
    if(selectedGerners.length >= 3){
      setError(false);
    }
  },[selectedGerners])
 const  handleSlectedGerners = (genres) =>{
  console.log(selectedGerners);
    if(selectedGerners.includes(genres)){
      setSelectedGerners(selectedGerners.filter((selectedGerner) => selectedGerner !== genres))
    }else{
      setSelectedGerners([...selectedGerners, genres])
    }
 };
 const handlerNext = () =>{
if(selectedGerners.length <= 3){
  setError(true);
}else{
    navigate('/carousel');
  }
}
 
  return (
    <div className={styles.container}>
     <div className={styles.left}>
      <h3 className={styles.heading}>
        Super App
      </h3>
      <h2>Choose your entertainment category</h2>
      <div className={styles.slectedgeners}>
        {selectedGerners.map((gerne, index)=>(
          <div key={index}
          onClick={()=>{handleSlectedGerners(gerne)}}
          className={styles.SelectedGerner}>{gerne}</div>
        ))}
      </div>
      {error && <p className={styles.error}>Selected minium 3 geners required</p>}
     </div>
     <div className={styles.right}>
      <div className={styles.genes}>
     
        {defaultGeners.map((genre, index)=>(
          <div key={index} className={styles.genre}
          onClick={()=>{handleSlectedGerners(genre)}}>
         {genre}
          </div>
          
        ))}
      </div>
      
      <button onClick={handlerNext}>Next</button>
     </div>
    
    </div>
  )
}

export default GernerPage
