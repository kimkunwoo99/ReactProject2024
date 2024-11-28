import React, {useState} from "react";
import BoilinggVerdict from "./BoilinggVerdict";

function Calculator(props){
    const [temperature, setTemperature] = useState();

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }
    return(
      <fieldset>
          <legend>섭씨 온도를 입력하세요:</legend>
          <input type="text" value={temperature} onChange={handleChange}/>
          <BoilinggVerdict
              celsius={parseFloat(temperature)}
          />
      </fieldset>
    );
}

export default Calculator