import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);
    function decreaseAttempt(): void {
        setAttempts(attempts - 1);
    }
    function increaseAttempt(): void {
        setAttempts(attempts + 1);
    }
    function starting(): void {
        setProgress(true);
        decreaseAttempt();
    }
    function ending(): void {
        setProgress(false);
    }
    return (
        <div>
            <Button onClick={starting} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={ending} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={increaseAttempt} disabled={inProgress}>
                Mulligan
            </Button>
            <br></br>
            Attempts: {attempts}
        </div>
    );
}
