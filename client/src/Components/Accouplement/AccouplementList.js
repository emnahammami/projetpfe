import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_articles } from '../../Redux/Action/articleAction';
import AccouplementCard from './AccouplementCard';

const AccouplementList = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_articles());
  }, []);
  const { articles } = useSelector((state) => state.articleReducer);
  const [searchInput, setSearchInput] = useState("");
  const [selectedId, setSelectedId] = useState("accouplement");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setSelectedId(e.target.value);
  };
  const filtredarticles = articles.filter((el) => {
    //if no input the return the original
    if (searchInput === '') {
        return el;
    }
    //return the item which contains the user input
    else {
        return el.title.includes(searchInput)
    }
})
  /*let filtredarticles=articles.filter(item=>item.title===searchInput||item.description===searchInput)*/
  if(searchInput===""){  return (
<div>   
  
<select onChange={handleSelectChange} name="ids" id="ids" className="customselect" style={{marginLeft:"auto",marginRight:"auto",display:"block"}} >
<option>accouplement</option>
      <option>dressage</option>
     
      <option value="vaccination">vaccination</option>
              <option value="accouplement">accouplement</option>

              <option value="achat">achat</option>
      </select>
   <input type="search"  className="searchinput" placeholder="search here by title" onChange={handleChange} value={searchInput} style={{marginLeft:"auto",marginRight:"auto",display:"block"}}/>

    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {articles.map((el) => el.role===String(selectedId) && (
        <div key={el._id}>
          <AccouplementCard el={el}  added={el.added}/>
        </div>
      ))}  
    </div></div>
  )
}
else{ return (
  <div>  
    <select onChange={handleSelectChange} name="ids" id="ids" className="customselect" style={{marginLeft:"auto",marginRight:"auto",display:"block"}} >
      <option>article</option>
      <option vlaue="dressage">dressage</option>
              
              <option value="vaccination">vaccination</option>

              <option value="achat">achat</option>
      </select>
    
      <input type="search"  className="searchinput" placeholder="search here by title" onChange={handleChange} value={searchInput} style={{marginLeft:"auto",marginRight:"auto",display:"block"}}/>
  
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {filtredarticles.map((el) => el.role===String(selectedId) && (
          <div key={el._id}>
            <AccouplementCard el={el}  added={el.added}/>
          </div>
        ))}  
      </div></div>
    )

}


}

export default AccouplementList