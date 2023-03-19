import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [display, setDisplay] = useState<string>("❌");
    function checkEqual(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
        expectedAnswer === event.target.value
            ? setDisplay("✔️")
            : setDisplay("❌");
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Control
                    type="string"
                    value={answer}
                    onChange={checkEqual}
                ></Form.Control>
            </Form.Group>
            {display}
        </div>
    );
}
