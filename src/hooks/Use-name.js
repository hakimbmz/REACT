import { useState } from "react";


function useName(validateInput) {
    const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid =validateInput(value); 
  const hasErrors = !isValid && touched ; 

  const onValueChange = (event) => {
     setValue(event.target.value); 
  };
  const onBlurChange=()=>{
      setTouched(true)
  }

    return {value : value , isValid,hasErrors,onBlurChange,onValueChange}
}

export default useName;