import Input from "../components/Input";
import { Navigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import "./SignUpForm.css";
import useName from "../hooks/Use-name";
import donation from "../assets/donation.png";

function SignUpForm() {
  const [formIsValid, setFormIsValid] = useState(null);
  const [gender, setGender] = useState('male')
  const [dob, setDob] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    value: firstnameValue,
    hasErrors: firstnameHasErrors,
    isValid: firstnameIsValid,
    onValueChange: onFirstnameChangeHandler,
    onBlurChange: onFirstnameBlur,
  } = useName((value) => value.trim().length > 2);
  const {
    value: lastnameValue,
    hasErrors: lastnameHasErrors,
    isValid: lastnameIsValid,
    onValueChange: onLastnameChangeHandler,
    onBlurChange: onLastnameBlur,
  } = useName((value) => value.trim().length > 2);
  const {
    value: emailValue,
    hasErrors: emailHasErrors,
    isValid: emailIsValid,
    onValueChange: onEmailChangeHandler,
    onBlurChange: onEmailBlur,
  } = useName((value) => value.includes("@"));
  const {
    value: regionValue,
    hasErrors: regionHasErrors,
    isValid: regionIsValid,
    onValueChange: regionChangeHandler,
    onBlurChange: regionBlur,
  } = useName((value) => value.trim().length > 2);

  const {
    value: passwordValue,
    hasErrors: passwordHasErrors,
    isValid: passwordIsValid,
    onValueChange: onPasswordChangeHandler,
    onBlurChange: onPasswordBlur,
  } = useName((value) => value.length > 6);
  const {
    value: confirmedPasswordValue,
    hasErrors: confirmedPasswordHasErrors,
    isValid: confirmedPasswordIsValid,
    onValueChange: onConfirmedPasswordChangeHandler,
    onBlurChange: onConfirmedPasswordBlur,
  } = useName((value) => value.length > 6 && value === passwordValue);

  const maleHandler=()=>{
    setGender("male")
  }
  const femaleHandler=()=>{
    setGender("female")
  }
  const datechangeHandler=(event)=>{
    setDob(event.target.value)
  }

  useEffect(() => {
    if (
      firstnameIsValid &&
      lastnameIsValid &&
      emailIsValid &&
      regionIsValid &&
      passwordIsValid &&
      confirmedPasswordIsValid
    ) {
      setFormIsValid(true);
    }
  }, [
    firstnameIsValid,
    lastnameIsValid,
    emailIsValid,
    passwordIsValid,
    confirmedPasswordIsValid,
  ]);

  async function onSubmitHandler(event) {
    event.preventDefault();
    await fetch("http://localhost:8080/api/registration/registerDonor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstnameValue,
        lastName: lastnameValue,
        email: emailValue,
        password: passwordValue,
        region:regionValue,
        dateOfBirth:dob.toString(),
        sex:gender

      }),
    });
 
    setFormSubmitted(true);
  }
  const confirmationLength =
    confirmedPasswordValue.length < 7 && "your password is too short";
  const confirmationPass =
    confirmedPasswordValue.length > 6 &&
    confirmedPasswordValue !== passwordValue &&
    "your password is not matching confirmed password";

  
  return (
    <Fragment>
      <img src={donation} alt="" className="sign" />
      <form className="ui segment" id="signUp" onSubmit={onSubmitHandler}>
        <Input
          id="firstname"
          className={firstnameHasErrors && "error"}
          type="text"
          placeholder="please enter your first name "
          value={firstnameValue}
          onChange={onFirstnameChangeHandler}
          onBlur={onFirstnameBlur}
        />
        {firstnameHasErrors && (
          <div className="ui pointing red basic label">
            please enter more than 2 caracters
          </div>
        )}
        <Input
          id="lastname"
          className={lastnameHasErrors && "error"}
          type="text"
          placeholder="please enter your last name "
          value={lastnameValue}
          onChange={onLastnameChangeHandler}
          onBlur={onLastnameBlur}
        />
        {lastnameHasErrors && (
          <div className="ui pointing red basic label">
            please enter more than 2 caracters
          </div>
        )}

        <Input
          id="email"
          className={emailHasErrors && "erros"}
          type="email"
          placeholder="please enter your email "
          value={emailValue}
          onChange={onEmailChangeHandler}
          onBlur={onEmailBlur}
        />
        {emailHasErrors && (
          <div className="ui pointing red basic label">
            please enter valid email
          </div>
        )}

        <Input
          id="region"
          className={regionHasErrors && "erros"}
          type="text"
          placeholder="please enter your region "
          value={regionValue}
          onChange={regionChangeHandler}
          onBlur={regionBlur}
        />
        {regionHasErrors && (
          <div className="ui pointing red basic label">
            please enter valid region
          </div>
        )}
        <Input id="date of birth" type="date"  onChange={datechangeHandler}/>
   
        
    <legend>gender</legend>

    <div>
      <label htmlFor="male">male</label>
      <input type="radio" id="male" name="gender" value="male" onClick={maleHandler}
             defaultChecked/>
    </div>

    <div>
      <label htmlFor="female">female</label>
      <input type="radio" id="female" name="gender" value="female" onClick={femaleHandler}/>
    </div>



        <Input
          id="password"
          className={passwordHasErrors && "error"}
          type="password"
          placeholder="please enter your password "
          value={passwordValue}
          onChange={onPasswordChangeHandler}
          onBlur={onPasswordBlur}
        />
        {passwordHasErrors && (
          <div className="ui pointing red basic label">
            Your password should be more than 6 caracters
          </div>
        )}

        <Input
          id="confirm password"
          className={confirmedPasswordHasErrors && "error"}
          type="password"
          value={confirmedPasswordValue}
          placeholder="please confirm your password "
          onChange={onConfirmedPasswordChangeHandler}
          onBlur={onConfirmedPasswordBlur}
        />
        {confirmedPasswordHasErrors && (
          <div className="ui pointing red basic label">
            {confirmationLength || confirmationPass}
          </div>
        )}
        <div>
          <button
            className="ui primary button submit"
            type="submit"
            disabled={!formIsValid}
          >
            submit
          </button>
        </div>
      </form>
      {formSubmitted && <Navigate to="/signin" />}
    </Fragment>
  );
}

export default SignUpForm;
