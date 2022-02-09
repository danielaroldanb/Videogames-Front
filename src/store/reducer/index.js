const initialState= {
    videogames:[],
    genres:[],
    allVideogamesFilteredByGenre:[],
    bysearch:[],
    platforms:[],
    detail:[]
}

const rootReducer=(state=initialState,action)=>{

if(action.type==="GET_VIDEOGAMES"){
    return {...state,videogames:action.payload, allVideogamesFilteredByGenre:action.payload,bysearch:action.payload}
}

if(action.type==="FILTER_BY_GENRES"){
const allVideogames=state.bysearch
let filteredByGenres=allVideogames.filter((v)=>v.genres?.includes(action.payload))
return{...state,videogames:filteredByGenres,allVideogamesFilteredByGenre:filteredByGenres}
}

if(action.type==="FILTER_BY_ORIGIN"){
  const allVideogame=state.allVideogamesFilteredByGenre
const filterByOrigin=action.payload==="Database"?allVideogame.filter(v=>v.inDatabase):allVideogame.filter(v=>!v.inDatabase)
    return {...state,videogames:action.payload==="All"?state.allVideogamesFilteredByGenre:filterByOrigin}}



if (action.type==="ALPHA_ORDER"){
let ordered=action.payload==="asc-alfa"?state.videogames.sort(function(a,b){
    if(a.name>b.name){return 1}
    if(b.name>a.name){return -1}
    return 0
}):state.videogames.sort(function(a,b){
    if(a.name>b.name){return -1}
    if(b.name>a.name){return 1}
    return 0
})
    return{...state,videogames:ordered}
}

if(action.type==="RATING_ORDER"){
    let orderedRating=action.payload==="asc-rating"?state.videogames.sort((a,b)=>
     ( a.rating-b.rating)
    ):state.videogames.sort((a,b)=>
       ( b.rating-a.rating)
)
return{...state,videogames:orderedRating}
}

if (action.type==="SEARCH_BY_NAME"){
    return {...state,videogames:action.payload,allVideogamesFilteredByGenre:action.payload,bysearch:action.payload}
}

if(action.type==="POST_CREATE"){
    return {...state}
}

if (action.type==="GET_GENRES"){
    return{...state,genres:action.payload}
}

if (action.type==="GET_PLATFORMS"){
    return{...state,platforms:action.payload}
}

if(action.type==="GET_DETAIL"){
    return {...state,detail:action.payload}
}

return state
}




export default rootReducer