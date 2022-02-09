import axios from "axios";

export const getVideogames = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://videogames-drb-api.herokuapp.com/videogames");
      return dispatch({
        type: "GET_VIDEOGAMES",
        payload: response.data,
      });
    } catch (error) {
      return "Videogame not found";
    }
  };
};

export const filterByGenres = (payload) => {
  return { type: "FILTER_BY_GENRES", payload };
};

export const filterByOrigin = (payload) => {
  return { type: "FILTER_BY_ORIGIN", payload };
};

export const alphaorder = (payload) => {
  return { type: "ALPHA_ORDER", payload };
};
export const ratingOrder = (payload) => {
  return { type: "RATING_ORDER", payload };
};

export const searchByName = (name) => {
  return async function (dispatch) {
    try {
      const responses = await axios.get(
        ` http://videogames-drb-api.herokuapp.com/videogames?name=${name}`
      );
      return dispatch({ type: "SEARCH_BY_NAME", payload: responses.data });
    } catch (error) {
      return "Videogame not found";
    }
  };
};

export const getGenres = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://videogames-drb-api.herokuapp.com/genres");
      return dispatch({
        type: "GET_GENRES",
        payload: response.data,
      });
    } catch (error) {
      return "Genre not found";
    }
  };
};

export const getPlatforms = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://videogames-drb-api.herokuapp.com/platforms");
      return dispatch({ type: "GET_PLATFORMS", payload: response.data });
    } catch (error) {
      return "Platform not found";
    }
  };
};


export const postCreate = (game) => {
  return async function (dispatch) {
    await axios.post("http://videogames-drb-api.herokuapp.com/videogame", game);
    return dispatch({
      type:"POST_CREATE"
    })
  };
};

export const getDetail=(id)=>{
  return async function (dispatch){
    try{
      let response=await axios.get("http://videogames-drb-api.herokuapp.com/videogame/"+id)
      return dispatch({type:"GET_DETAIL",payload:response.data})
    }
    catch(error){return "Not found"}
  }
}