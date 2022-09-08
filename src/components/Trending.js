import {useEffect, useState} from "react"
import { Card, Container, Row, Col, Image} from "react-bootstrap"
import mencuriradensalehImages from "../assets/images/trending/mencuriradensaleh.jpg"
import mendaratdaruratImages from "../assets/images/trending/mendaratdarurat.jpg"
import miracleImages from "../assets/images/trending/miracle.jpg"
import sayapsayappatahImages from "../assets/images/trending/sayapsayappatah.jpg"
import thorthunderImages from "../assets/images/trending/thorthunder.jpg"
import topgunImages from "../assets/images/trending/topgun.jpg"

import axios from "axios"

const Trending = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/popular/`, {
       
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY
            

          }  
        }).then((response) => {
            
            setMovies(response.data.results)
        })
    },[])

    return (
        <div>
            <Container>
                <br />
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br /> 
            <Row>
                {movies.map((result, index) => {
                    return(
             <Col md={4} className="movieWrapper" id="trending" key={index}>
                <Card className="movieImage">
      <Image 
      src={`${process.env.REACT_APP_IMG_URL}${result.poster_path}`}
       alt="test" className="images"
         />
         <div className="bg-dark">
            <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">{result.title}</Card.Title>
        <Card.Text className="text-justify"> 
          {result.overview}
        </Card.Text>
        <Card.Text className="text-center">{result.release_date}</Card.Text>
        <Card.Text className="text-left">Rating : {result.vote_average}</Card.Text>
        </div>
        </div>
    </Card>
    </Col>
                    
                    )
                })}
              
                
    
                </Row>
                </Container>
             
        </div>
    )
}

export default Trending