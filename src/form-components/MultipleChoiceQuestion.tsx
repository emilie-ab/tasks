import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    function changeAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="options">
                <Form.Label>Select an Answer</Form.Label>
                <Form.Select value={answer} onChange={changeAnswer}>
                    {options.map((answers: string) => (
                        <option key={answers} value={answers}>
                            {answers}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
