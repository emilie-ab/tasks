import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// <div data-testid="something" style={{ backgroundColor: a color}}>

export function ChangeColor(): JSX.Element {
    const [currColor, setCurrColor] = useState<string>("");
    const colorOptions = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrColor(event.target.value);
        event.target.checked = true;
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colorOptions.map((color: string) => (
                <Form.Check
                    inline={true}
                    type="radio"
                    name="colors"
                    key={color}
                    id={color}
                    label={color}
                    value={color}
                    checked={currColor === color}
                    onChange={changeColor}
                    style={{ backgroundColor: color }}
                ></Form.Check>
            ))}
            <br></br>
            You have chosen{" "}
            <span
                data-testid="colored-box"
                style={{ backgroundColor: currColor }}
            >
                {currColor}
            </span>
            .
        </div>
    );
}
