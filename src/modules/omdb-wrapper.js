import axios from "axios";
 const APIKEY ="7b62fa5d";//PonétuAPIKEY,estanofunciona. 
 const OMDBSearchByPage = async (searchText, page = 1) => { 
    let returnObject={ 
        respuesta :false,
        cantidadTotal:0,
        datos :{} 
    };

    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`; 
    const apiResponse=await axios.get(requestString); 
    //return apiResponse.data;

    returnObject.respuesta = apiResponse.data.Response;
    returnObject.cantidadTotal = apiResponse.data.totalResults;
    returnObject.datos = apiResponse.data.Search;
    return returnObject;
}; 
const OMDBSearchComplete = async (searchText) => { 
    let returnObject = { 
        respuesta :false,
        cantidadTotal:0,
        datos :{} 
    }; //Noseasvago,acáhayquehacerelcuerpodelafunción!!! 
    return returnObject; 
}; 
const OMDBGetByImdbID = async(imdbID) => { 
    let returnObject={ 
        respuesta :false,
        cantidadTotal:0,
        datos :{} 
    };
    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${imdbID}`; 
    const apiResponse=await axios.get(requestString); 
    returnObject.ID = apiResponse.data.imdbID;
    return returnObject; 
}; //Exportotodoloqueyoquieroexponerdelmódulo: 

export{OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};