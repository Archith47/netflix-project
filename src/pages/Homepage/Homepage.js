import React from 'react'
import Nav from '../../child-components/Nav'
import Banner from '../../child-components/Banner'
import Row from '../../child-components/Row'
import userrequests from '../../api-request-component/Request'

function Homepage() {
    return (
        <div>
           <Nav/>
           <Banner/>
           <Row title="Netflix Originals" isLargeRow fetchURL={userrequests.fetchNetflixOriginals}/>
           <Row title="Trending Now" fetchURL={userrequests.fetchTrending}/>
           <Row title="Top Rated" fetchURL={userrequests.fetchTopRated}/>
           <Row title="Action Movies" fetchURL={userrequests.fetchActionMovies}/>
           <Row title="Comedy Movies" fetchURL={userrequests.fetchComedyMovies}/>
           <Row title="Horror Movies" fetchURL={userrequests.fetchHorrorMovies}/>
           <Row title="Romance Movies" fetchURL={userrequests.fetchRomanceMovies}/>
           <Row title="Documentaries" fetchURL={userrequests.fetchDocumentaries}/>
           
           
        </div>
    )
}

export default Homepage
