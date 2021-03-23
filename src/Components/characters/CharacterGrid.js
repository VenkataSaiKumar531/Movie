import React from 'react';
import spinner from '../../img/spinner.gif'
import CharacterItem from './CharacterItem';


const CharacterGrid =({loading,items})=>{
    

return loading? <img src= {spinner} alt="Loading......"/>: <section className="cards">
    {
        items.map((item)=>{
            return(
                < React.Fragment key={item.char_id}>
                <CharacterItem item={item}/>
                </React.Fragment >
            )
           
        })
    }


</section>
    
    
    }

export default CharacterGrid;