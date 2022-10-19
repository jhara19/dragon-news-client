import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Main = () => {
    return (
        <div>
          <Header></Header>
          <Container>
          <Outlet></Outlet>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default Main;