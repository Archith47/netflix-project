import React ,{useState ,useEffect}from 'react'
import '../css/Banner.css'
import axios from '../api-request-component/localaxios'
import userrequests from '../api-request-component/Request'

function Banner() {
    const [movie,setMovie] = useState([])

    useEffect(() => {
       async function fetchdata(){
           const request = await axios.get(userrequests.fetchNetflixOriginals )
             setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)])
        }
        fetchdata();
    }, [])


    return (
        <div className="banner" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize:'cover',
        backgroundPsition: 'center'}}>
            <div className="banner__content">
                <h1 className="banner__title">
                   { movie?.title || movie?.original_name || movie?.name }
                </h1>
                <div className="banner__buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <div className="banner__discription">
                    <p>{movie?.overview}</p>
                </div>
            </div>
            <div className="banner__fade"></div>
            
        </div>
    )
}

export default Banner
