import React, { Component } from "react";
import { Form, Col, Row, ToggleButton, ButtonGroup, Container, Badge } from "react-bootstrap";
import Header from "./Header";

class Calculator extends Component {
  state = {
    s: 0,
    a: 0,
    h: 0,
    w: 0,
    l: 0,
  };

  render() {
    return (
      <>
        <Header>
          <h1 className="display-1">Калькулятор</h1>
          <h1 className="display-3 text-primary">Введи свои данные</h1>
        </Header>

        <Container className="mb-4">
          <Row className="justify-content-between">
            <Col lg md className="py-3 bg-body">
              <Row className="mb-3">
                <h4 className="text-muted">Пол</h4>
                <ButtonGroup>
                  {[
                    { name: "Мужчина", value: 5 },
                    { name: "Женщина", value: -161 },
                  ].map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant="outline-primary"
                      name="radio"
                      value={radio.value}
                      checked={this.state.s === radio.value}
                      onChange={e => this.setState(e.currentTarget.value)}
                      onClick={() => this.setState({ s: radio.value })}>
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <h4 className="text-muted">Возраст</h4>
                    <Form.Control
                      type="text"
                      placeholder="0"
                      value={this.state.a}
                      onChange={e =>
                        this.setState({
                          a: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <h4 className="text-muted">Рост</h4>
                    <Form.Control
                      type="text"
                      placeholder="0"
                      value={this.state.h}
                      onChange={e => this.setState({ h: e.target.value })}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <h4 className="text-muted">Вес</h4>
                    <Form.Control
                      type="text"
                      placeholder="0"
                      value={this.state.w}
                      onChange={e => this.setState({ w: e.target.value })}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Form.Group className="mb-3">
                  <h4 className="text-muted">Уровень физической активности</h4>
                  <Form.Check type="radio" label="Низкая" name="l" onChange={() => this.setState({ l: 1.2 })} />
                  <Form.Text className="text-muted">Сидячая работа и отсутствие физической активности.</Form.Text>

                  <Form.Check type="radio" label="Минимальная" name="l" onChange={() => this.setState({ l: 1.375 })} />
                  <Form.Text className="text-muted">
                    Редкие, нерегулярные физические нагрузки, повседневная деятельность.
                  </Form.Text>

                  <Form.Check type="radio" label="Средняя" name="l" onChange={() => this.setState({ l: 1.55 })} />
                  <Form.Text className="text-muted">Тренировки в тренажерном зале 3-5 раз в неделю.</Form.Text>

                  <Form.Check type="radio" label="Высокая" name="l" onChange={() => this.setState({ l: 1.725 })} />
                  <Form.Text className="text-muted">Тренируйтесь в тренажерном зале 6-7 раз в неделю.</Form.Text>

                  <Form.Check type="radio" label="Очень высокая" name="l" onChange={() => this.setState({ l: 1.9 })} />
                  <Form.Text className="text-muted">7+ тренировок в неделю и физическая работа.</Form.Text>
                </Form.Group>
              </Row>
            </Col>

            <Col lg md className="bg-body d-flex flex-column justify-content-around">
              <h2 className="mx-auto">
                Как много{" "}
                <Badge pill bg="danger">
                  КАЛОРИЙ
                </Badge>{" "}
                тебе нужно
              </h2>
              <h3 className="mx-auto text-uppercase">
                <Badge bg="primary">Чтобы не терять в весе:</Badge>{" "}
                <Badge bg="primary">
                  {Math.round(10 * this.state.w + 6.25 * this.state.h - 5 * this.state.a + this.state.s * this.state.l)}
                </Badge>
              </h3>

              <h3 className="mx-auto text-uppercase">
                <Badge bg="primary">Чтобы терять вес:</Badge>{" "}
                <Badge bg="primary">
                  {Math.round(10 * this.state.w + 6.25 * this.state.h - 5 * this.state.a + this.state.s * this.state.l)}
                </Badge>
              </h3>

              <h3 className="mx-auto text-uppercase">
                <Badge bg="primary">Чтобы терять вес быстро:</Badge>{" "}
                <Badge bg="primary">
                  {Math.round(
                    10 * this.state.w + 6.25 * this.state.h - 5 * this.state.a + this.state.s * this.state.l * 0.6
                  )}
                </Badge>
              </h3>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Calculator;
