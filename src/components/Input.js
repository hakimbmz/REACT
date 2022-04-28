import { Fragment } from "react";
import "./Input.css";

function Input(props) {
  return (
    <Fragment>
      <div className={`ui input ${props.className}`} >
        <label htmlFor={props.id}>{props.id}</label>
        <input
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
