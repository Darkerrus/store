import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/Star 1.png'

const DevicePage = () => {
    const device = {id: 1, name: "13 pro max", rating: 5, price: 75000,img: "https://img.freepik.com/free-vector/focus-spotlight-background-with-black-dark-background_485485-27.jpg"}
    const description = [
        {id: 1, title: 'Оперативная память', description: '5 гб'},
        {id: 2, title: 'Камера', description: '12 мб'},
        {id: 3, title: 'Процессор', description: 'Пентиум 5'},
        {id: 4, title: 'Аккумулятор', description: '4000'},
    ]
        return (
        <Container className="mt-4">
            <Row className="d-flex">
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 align="center">{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height:240,
                                backgroundSize: 'cover', fontSize: 64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="flex-column d-flex mt-2">
                <h2>Характеристики</h2>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : "wheat", padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;