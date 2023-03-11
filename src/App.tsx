import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import "./App.css";
import lucy from "./lucy.jpg";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Emilie and UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. Hello World. This page
                will automatically reload.
            </p>
            <h1>This is about my cat!</h1>
            <img src={lucy} className="App-image" alt="A picture of my cat" />
            <p>These are the things she likes:</p>
            <ul className="App-list">
                <li>Treats</li>
                <li>Toys</li>
                <li>Me!</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>First Column!</Col>
                    <Col>Second Column!</Col>
                </Row>
                <Row>
                    <Col
                        className="App-firstCol"
                        style={{ border: "5px solid white", padding: "4px" }}
                    >
                        Pretty red rectangle
                    </Col>
                    <Col
                        className="App-secondCol"
                        style={{ border: "5px solid white", padding: "4px" }}
                    >
                        Another pretty red rectangle
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
