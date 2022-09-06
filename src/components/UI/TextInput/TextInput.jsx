import classNames from "classnames";
import Form from 'react-bootstrap/Form';
import {input} from "./text-input.module.scss"
import {useMemo} from "react";

const TextInput = ({value, label, placeholder, parentClass, helpText}) => {
    const id = useMemo(() => Date.now(), [])
    return (
        <>
            <Form.Label htmlFor={id}>{label}</Form.Label>
            <Form.Control
                id={id}
                type="text"
            ></Form.Control>
            <Form.Text>
                {helpText}
            </Form.Text>
        </>
    )
}
export default TextInput