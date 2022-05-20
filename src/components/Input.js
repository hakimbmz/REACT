import { Fragment } from "react";
import "./Input.css";

function Input(props) {
  return (
    <Fragment>
      <div className={`ui input ${props.className}`} >
        <label  className="label__style" htmlFor={props.id}>{props.id}</label>
        <input
        className="input__style"
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    </Fragment>
  );
}

export default Input;
