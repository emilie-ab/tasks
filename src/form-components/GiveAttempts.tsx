import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [numRequested, setNumRequested] = useState<number>(0);
    function requestAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        isNaN(+event.target.value)
            ? setNumRequested(numRequested)
            : setNumRequested(+event.target.value);
    }

    function gainButton() {
        setNumAttempts(numRequested + numAttempts);
    }
    function useButton() {
        setNumAttempts(numAttempts - 1);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Control
                    type="number"
                    value={numRequested}
                    onChange={requestAttempts}
                ></Form.Control>
            </Form.Group>
            <Button onClick={useButton} disabled={numAttempts === 0}>
                use
            </Button>
            <br></br>
            Number of attempts: {numAttempts}
            <br></br>
            <Button onClick={gainButton}>gain</Button>
            <br></br>
            Number of attempts requested: {numRequested}
        </div>
    );
}
