import React from "react";
import { Button, Card, Carousel, Col, Container, Image, Row } from "react-bootstrap";

import {
  EvgenyDakinov,
  NikitaNikitin,
  DanilaSikrier,
  MikhailBelov,
  apple,
  banana,
  orange,
  grapes,
  tomato,
} from "../assets/images";

import Header from "./Header";

const people = [
  {
    name: "Евгений Дакинов",
    link: "https://t.me/evgmay",
    desc: "Fullstack",
    linkVariant: "Telegram",
    image: EvgenyDakinov,
  },
  {
    name: "Никита Никитин",
    link: "https://vk.com/id506370702",
    desc: "Fullstack",
    linkVariant: "VK",
    image: NikitaNikitin,
  },
  {
    name: "Данила Сикриер",
    link: "https://vk.com/ama1erasuuuu",
    desc: "Frontend",
    linkVariant: "VK",
    image: DanilaSikrier,
  },
  {
    name: "Михаил Белов",
    link: "https://vk.com/captain777x",
    desc: "Frontend",
    linkVariant: "VK",
    image: MikhailBelov,
  },
];

const slides = [
  {
    name: "Яблоко",
    path: apple,
    size: "4 унции,",
    calories: 59,
    kJ: 249,
  },
  {
    name: "Банан",
    path: banana,
    size: "6 унций.",
    calories: 151,
    kJ: 632,
  },
  {
    name: "Апельсин",
    path: orange,
    size: "4 унции.",
    calories: 53,
    kJ: 222,
  },
  {
    name: "Виноград",
    path: grapes,
    size: "6 унций.",
    calories: 59,
    kJ: 249,
  },
  {
    name: "Помидор",
    path: tomato,
    size: "1 унция",
    calories: 22,
    kJ: 92,
  },
];

function About() {
  return (
    <>
      <Header>
        <h1>О нас</h1>
        <h1 className="text-primary fw-bolder">Разработчики</h1>
        <h2>А так же информация про калорийность продуктов</h2>
      </Header>
      <Cards />
      <Carousels />
    </>
  );
}

function Cards() {
  return (
    <div className="py-5">
      <h3 className="text-muted text-center">Разработчики</h3>
      <Container className="pt-5">
        <Row>
          {people.map(person => (
            <Col className="mb-3">
              <Card style={{ width: "18rem" }} className="mx-auto">
                <Card.Img variant="top" src={person.image} height={250} />
                <Card.Body>
                  <Card.Title>{person.name}</Card.Title>
                  <Card.Text>{person.desc}</Card.Text>
                  <div className="d-grid gap-2">
                    <Button variant="primary" href={person.link} target="_blank" rel="noreferrer">
                      {person.linkVariant}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function Carousels() {
  return (
    <div className="py-5">
      <Container>
        <Carousel variant="light" className="mx-auto">
          {slides.map(slide => (
            <Carousel.Item>
              <Image fluid src={slide.path} alt={slide.name} />
              <Carousel.Caption>
                <h5>{slide.name}</h5>
                <p>
                  Порция: {slide.size} | Калории: {slide.calories} | кДж: {slide.kJ}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default About;
