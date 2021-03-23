import React,{useState} from 'react';

const Search=({getQuery})=>{
    const [text,setText]=useState('');

    const handleChange=(q)=>{
        setText(q);
        getQuery(q);
        
    }
    return(
        <section className="search">
            <form>

                <input type="text" className="form-control" placeholder="Search Characters" autoFocus onChange={(e)=>{handleChange(e.target.value)}} value={text}/>

            </form>
        </section>


    )
}

export default Search;