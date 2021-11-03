import React,{useState,useEffect} from 'react'
import axios from '../api-request-component/localaxios'
import '../css/Row.css'

function Row({title,isLargeRow,fetchURL}) {
const [movie,setMovie] = useState([])
const base_url = "http://image.tmdb.org/t/p/original/";
useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(fetchURL);

        setMovie(request.data.results);
        return request
    }
    fetchData();
},[fetchURL])
    return (
        <div className="row">
            <h3>{title}</h3>
            <div className='row__posters'>
                {
                   movie.map(movie=>{
                       return <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                       className={`rowposter ${isLargeRow && "largeImage"}`} key={movie.id}/>
                   })
                }

                

            </div>
        </div>
    )
}

export default Row
