import { Card, Container, Row, Col, Image} from "react-bootstrap"
import mencuriradensalehImages from "../assets/images/superhero/mencuriradensaleh.jpg"
import mendaratdaruratImages from "../assets/images/superhero/mendaratdarurat.jpg"
import miracleImages from "../assets/images/superhero/miracle.jpg"
import sayapsayappatahImages from "../assets/images/superhero/sayapsayappatah.jpg"
import thorthunderImages from "../assets/images/superhero/thorthunder.jpg"
import topgunImages from "../assets/images/superhero/topgun.jpg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <br />
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br /> 
            <Row>
                <Col md={4} className="movieWrapper" id="superhero">
                <Card className="movieImage">
      <Image 
      src={mencuriradensalehImages}
       alt="Mencuri Raden Saleh Movies" className="images"
         />
         <div className="bg-dark">
            <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Mencuri Raden Saleh</Card.Title>
        <Card.Text className="text-left"> 
          This is a wider card with supporting text below as a natural lead-in
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImage">
      <Image 
      src={mendaratdaruratImages}
       alt="Mendarat Darurat Movies" className="images"
         />
         <div className="bg-dark">
            <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Mendarat Darurat</Card.Title>
        <Card.Text className="text-left"> 
          This is a wider card with supporting text below as a natural lead-in
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImage">
      <Image 
      src={miracleImages}
       alt="Miracle Cell No.7 Movies" className="images"
         />
         <div className="bg-dark">
            <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Miracle Cell No.7</Card.Title>
        <Card.Text className="text-left"> 
          This is a wider card with supporting text below as a natural lead-in
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImage">
      <Image 
      src={sayapsayappatahImages}
       alt="Miracle Cell No.7 Movies" className="images"
         />
         <div className="bg-dark">
            <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Sayap Sayap Patah</Card.Title>
        <Card.Text className="text-left"> 
          This is a wider card with supporting text below as a natural lead-in
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImage">
      <Image 
      src={thorthunderImages}
       alt="Miracle Cell No.7 Movies" className="images"
         />
         <div className="bg-dark">
            <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Thor Thunder And Love</Card.Title>
        <Card.Text className="text-left"> 
          This is a wider card with supporting text below as a natural lead-in
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="movieImage">
      <Image 
      src={topgunImages}
       alt="Miracle Cell No.7 Movies" className="images"
         />
         <div className="bg-dark">
            <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">Top Gun Maverick</Card.Title>
        <Card.Text className="text-left"> 
          This is a wider card with supporting text below as a natural lead-in
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
        </div>
    </Card>
                </Col>
    
                </Row>
                </Container>
             
        </div>
    )
}

export default Superhero