import React from "react";
import { useState} from "react";


function CancelButton(){
const [ inputValue, setInputValue ] = useState("Value from onchanges");

const handleCancel = () => {
    setInputValue("");
};
return (
    <div>
        <button type="submit" variant="outline-secondary" onClick={handleCancel}>Cancel</button>
    </div>
    );
}
export default CancelButton