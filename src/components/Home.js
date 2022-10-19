import React from 'react';
import Carousels from './Carousels';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Home1 from '../assets/Home1.jpg';
import Home2 from '../assets/Home2.jpg';
import Home4 from '../assets/Home4.jpg';

const Home = () => {
    return (
        <div className=''>
            <Carousels></Carousels>
            <Container>
            <Row xs={1} md={3} className="g-4 mt-5">

<Col>
<Card>
    <Card.Img variant="top" src={Home1} />
    <Card.Body>
    <Card.Title>Single Room</Card.Title>
    <Card.Text>
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
    </Card.Text>
    </Card.Body>
</Card>
</Col>

<Col>
<Card>
    <Card.Img variant="top" src={Home2} />
    <Card.Body>
    <Card.Title>Couple Room</Card.Title>
    <Card.Text>
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
    </Card.Text>
    </Card.Body>
</Card>
</Col>

<Col>
<Card>
    <Card.Img variant="top" src={Home4 }/>
    <Card.Body>
    <Card.Title>Family Room</Card.Title>
    <Card.Text>
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
    </Card.Text>
    </Card.Body>
</Card>
</Col>

</Row>
            </Container>
        </div>
    );
};

export default Home;