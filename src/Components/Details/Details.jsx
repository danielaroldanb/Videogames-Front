import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../store/actions/index";
import { useEffect } from "react";
import styles from "./Details.module.css";

export default function Detail(props) {
const dispatch = useDispatch();
const videogameById = useSelector((state) => state.detail);

useEffect(() => {
    dispatch(getDetail(props.match.params.id));
}, [dispatch,props.match.params.id]);

return <div className={styles.all}>
<div className={styles.container}><Link to="/home"><button className={styles.button}>Home</button></Link></div>
{videogameById.inDatabase?
<div className={styles.total}>
<h1 className={styles.name}>{videogameById.name} </h1>
<div className={styles.img}><img className={styles.image} src={videogameById.background_image } alt="Not found" /></div>
<div className={styles.containerReleased}> <div className={styles.released}>Released: {videogameById.released} </div></div>
<div className={styles.containerRating}><div className={styles.rating}>Rating: {videogameById.rating} </div></div>
<div className={styles.containerDes}><div className={styles.description}><div dangerouslySetInnerHTML={{__html: videogameById.description,}}/> </div></div>
<div className={styles.containe}>
<div className={styles.containerPlat}><div className={styles.platforms}><h4>Platforms:</h4>{videogameById.platforms?.map((g)=><div key={g.platform.name}>{g.platform.name}</div>)}</div></div>
<div className={styles.containerGenres}><div className={styles.genres}><h4>Genres:</h4>{videogameById.genres?.map((g)=><div key={g.name}>{g.name}</div>)}</div></div>
</div></div>

:<div className={styles.total}>
<h1 className={styles.name}>{videogameById.name} </h1>
<div className={styles.img}><img className={styles.image} src={videogameById.background_image } alt="Not found" /></div>
<div className={styles.containerReleased}>  <div className={styles.released}>Released: {videogameById.released} </div></div>
<div className={styles.containerRating}><div className={styles.rating}>Rating: {videogameById.rating} </div></div>
<div className={styles.containerDes}><div className={styles.description}><div dangerouslySetInnerHTML={{__html: videogameById.description,}}/> </div></div>
<div className={styles.containe}>
<div className={styles.containerPlat}><div className={styles.platforms}><h4>Platforms:</h4> {videogameById.platforms?.map((g)=><div key={g}>{g}</div>)}</div></div>
<div className={styles.containerGenres}><div className={styles.genres}><h4>Genres: </h4>{videogameById.genres?.map((g)=><div key={g}>{g} </div>)}</div></div></div>
</div>
}
</div>;


}
