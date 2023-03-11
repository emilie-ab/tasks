import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftRoll, setLeftRoll] = useState<number>(4);
    const [rightRoll, setRightRoll] = useState<number>(1);
    function rollLeft(): void {
        setLeftRoll(d6());
    }
    function rollRight(): void {
        setRightRoll(d6());
    }
    return (
        <div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <span data-testid="left-die">{leftRoll}</span>
            <Button onClick={rollRight}>Roll Right</Button>
            <span data-testid="right-die">{rightRoll}</span>
            <br></br>
            <div>
                {leftRoll === rightRoll && leftRoll !== 1 ? (
                    <span>Win</span>
                ) : (
                    <span></span>
                )}
                {leftRoll === rightRoll && leftRoll === 1 ? (
                    <span>Lose</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
