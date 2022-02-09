import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCreate, getGenres,getPlatforms } from "../../store/actions/index";
import styles from "./Create.module.css"

function control(input){
  let errors={}
  if(!input.name){
    errors.name="a name is required"
  }
  else if(!input.description){
    errors.description="a description is required"
  }
  else if(!input.released){
    errors.released="a date is required"
  }
  else if(input.rating>5){
errors.rating="the rating top is 5"
  }
  return errors
}


export default function Create() {
  const dispatch = useDispatch();
  const history=useHistory()
  const genres = useSelector((state) => state.genres);
  const platforms=useSelector((state)=>state.platforms)
  const [errors,setErrors]=useState({})
  const [active,setActive]=useState(true)
   const [input, setInput] = useState({
    name: "",
    description: "",
    background_image: "",
    released: "",
    rating: "",
    genres: [],
    platforms: [],
  
  });

  useEffect(() => {
    dispatch(getGenres())
    dispatch(getPlatforms())
     }, [dispatch]);

useEffect(()=>{if(input.name && input.description && input.released && input.rating<=5 && input.rating.length>0){setActive(false)}
else {setActive(true)}},[input,setActive])

  const handlechange=(e)=>{
setInput({...input,[e.target.name]: e.target.value})
setErrors(control({...input,[e.target.name]: e.target.value}))
  }

  const handleSelectGenres=(e)=>{
      setInput({...input, genres:[...input.genres,{name:e.target.value}]})
  }

  const handleSelectPlatforms=(e)=>{
    setInput({...input, platforms:[...input.platforms,{platform:{name:e.target.value}}]})
}

const handleDeleteE=(e)=>{
  setInput({...input,genres:[...input.genres.filter(g=> g!==e)]})
}

const handleDeleteP=(e)=>{
  setInput({...input,platforms:[...input.platforms.filter(x=>x!==e)]})
}


const handleSubmit=(e)=>{
e.preventDefault()
dispatch(postCreate(input))
alert("Videogame created!")
setInput({    name: "",
description: "",
background_image: "",
released: "",
rating: "",
genres: [],
platforms: [],})
history.push("/home")
  }

  return (
    <div className={styles.all}>

      <Link to="/home">
        <button className={styles.button}>Home</button>
      </Link>

   
      <h1 className={styles.title}>Create your videogame</h1>
      <div className={styles.container}>
      <form onSubmit={e=>handleSubmit(e)}>
        <div >
          <label>Name:</label>
          <input className={styles.input} onChange={e=>handlechange(e)} type="text" value={input.name} name="name"></input>
          {errors.name && (<p className={styles.error}>{errors.name}</p>)}
        </div>
        <div>
          <label>Description:</label>
          <textarea  className={styles.textarea}
         onChange={e=>handlechange(e)}
            
            value={input.description}
            name="description"
          ></textarea>
          {errors.description && (<p className={styles.error}>{errors.description}</p>)}
        </div>
        <div>
          <label>Image:</label>
          <input className={styles.input}
          onChange={e=>handlechange(e)}
            type="text"
            value={input.background_image}
            name="background_image"
          ></input>

        </div>
        <div>
          <label>Relesead:</label>
          <input className={styles.input} onChange={e=>handlechange(e)} type="text" value={input.released} name="released"></input>
          {errors.released && (<p className={styles.error}>{errors.released}</p>)}
        </div>
        <div>
          <label>Rating:</label>
          <input className={styles.input} onChange={e=>handlechange(e)} type="text" value={input.rating} name="rating"></input>
          {errors.rating && (<p className={styles.error}>{errors.rating}</p>)}
        </div>

        {/* <div>
          <label>Genres:</label>
          <select className={styles.input} onChange={(e) => handleSelectGenres(e)}>
            <option value="default" >
              Choose the genres:
            </option>
            <option value="Indie">Indie</option>
            <option value="Adventure">Adventure</option>
            <option value="Strategy">Strategy</option>
            <option value="RPG">RPG</option>
            <option value="Action">Action</option>
            <option value="Shooter">Shooter</option>
            <option value="Casual">Casual</option>
            <option value="Simulation">Simulation</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Arcade">Arcade</option>
            <option value="Platformer">Platformer</option>
            <option value="Racing">Racing</option>
            <option value="Massively Multiplayer">Massively Multiplayer</option>
            <option value="Fighting">Fighting</option>
            <option value="Sports">Sports</option>
            <option value="Family">Family</option>
            <option value="Board Games">Board Games</option>
            <option value="Educational">Educational</option>
            <option value="Card">Card</option>
          </select>
        <p>Genres selected:</p><p>{input.genres.map(e=>e.name+" | ")} </p> 
          </div> */}


          <label>Genres:</label>
          <select className={styles.input} onChange={e=>handleSelectGenres(e)}>
          <option value="default"  >Genres</option>
            {genres.map((g)=>(<option  key={g.name} value={g.name}>{g.name}</option>))}
          </select>
         <div>Genres selected:</div><div>{input.genres.map((e)=><div key={e.name}>{e.name} <button onClick={()=>{handleDeleteE(e)}} >x</button></div>)} </div>
       
       {/* <div>
          <label>Platforms:</label>
          <select className={styles.input} onChange={(e) => handleSelectPlatforms(e)}>
            <option value="default"  >
              Choose the platforms:
            </option>
            <option value="PC">PC</option>
            <option value="PlayStation 5">PlayStation 5</option>
            <option value="Xbox One">Xbox One</option>
            <option value="PlayStation 4">PlayStation 4</option>
            <option value="Xbox Series S/X">Xbox Series S/X</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
            <option value="iOS">iOS</option>
            <option value="Android">Android</option>
            <option value="Nintendo 3DS">Nintendo 3DS</option>
            <option value="Nintendo DS">Nintendo DS</option>
             </select>
             <label>Platforms selected:</label><ul>{input.platforms.map(e=>e.platform.name+" | ")} </ul>
          </div> */}

        <div>
          <label>Platforms:</label>
         <select className={styles.input} onChange={e=>handleSelectPlatforms(e)}> 
         <option value="default"  >Platforms</option>
           {platforms.map(p=>(<option key={p.name} value={p.name}>{p.name}</option>))}
         </select>
        <label>Platforms selected:</label><ul>{input.platforms.map((e)=><div key={e.platform.name}>{e.platform.name}<button onClick={()=>handleDeleteP(e)}>x</button></div>)} </ul>
        </div>

        <button className={styles.button} disabled={active} type="submit">Create</button>
        
      </form>
      </div>
    </div>
  );
}
