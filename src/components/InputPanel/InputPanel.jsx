import React, { useState } from 'react'


function InputPanel(props) {
    const {submitFunc} = props;
    const [inputValue, setInputValue] = useState('')

    const onChangeHandler = event => {
        setInputValue(event.target.value);
      };

    return (
        <div>
            <input onChange={onChangeHandler}/>
            <button onClick={()=> submitFunc(inputValue)}>Serch</button>
        </div>
    )
}

export default InputPanel
