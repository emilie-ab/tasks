import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): JSX.Element {
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setInEditMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function printStatus(): string {
        const studentStatus: string = isStudent
            ? " is a student."
            : " is not a student.";
        return name + studentStatus;
    }
    return (
        <>
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    type="switch"
                    id="in-edit-mode-check"
                    label="Enter edit mode?"
                    checked={inEditMode}
                    onChange={updateEditMode}
                ></Form.Check>
                {inEditMode ? (
                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="is-student-check"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={updateStudent}
                        ></Form.Check>
                        <Form.Control
                            type="string"
                            value={name}
                            onChange={updateName}
                        ></Form.Control>
                    </Form.Group>
                ) : null}
                {inEditMode === false ? printStatus() : null}
            </div>
        </>
    );
}
