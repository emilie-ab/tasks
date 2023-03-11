import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🥂");
    // Christmas, Halloween, NewYears, StPatricks, Valentines
    function alphabetical(): void {
        let temp = "";
        if (holiday === "🎄") {
            temp = "🎃";
        } else if (holiday === "🎃") {
            temp = "🥂";
        } else if (holiday === "🥂") {
            temp = "☘️";
        } else if (holiday === "☘️") {
            temp = "👩‍❤️‍👨";
        } else {
            temp = "🎄";
        }
        setHoliday(temp);
    }
    function year(): void {
        let temp = "";
        if (holiday === "🎄") {
            temp = "🥂";
        } else if (holiday === "🥂") {
            temp = "👩‍❤️‍👨";
        } else if (holiday === "👩‍❤️‍👨") {
            temp = "☘️";
        } else if (holiday === "☘️") {
            temp = "🎃";
        } else {
            temp = "🎄";
        }
        setHoliday(temp);
    }
    return (
        <div>
            <Button onClick={alphabetical}>Alphabetical</Button>
            <Button onClick={year}>Year</Button>
            <br></br>
            Holiday: {holiday}
        </div>
    );
}
