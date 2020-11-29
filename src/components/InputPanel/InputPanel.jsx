import React, { useState } from 'react'
import './InputPanel.sass';

function InputPanel(props) {
    const {submitFunc} = props;
    const [inputValue, setInputValue] = useState('')

    const onChangeHandler = event => {
        setInputValue(event.target.value);
      };

      const handleSubmit = event => {
        submitFunc(inputValue)
        event.preventDefault();
      };

    return (

	// 	<form class="form">
    //     <input type="email" class="form__field" placeholder="Your E-Mail Address" />
    //     <button type="button" class="btn btn--primary btn--inside uppercase">Send</button>
    // </form>

        <form className="InputPanelForm" onSubmit = {handleSubmit}>
            <input className="InputPanelForm__field" type="text" placeholder="GitHub user Id" onChange={onChangeHandler}/>
            <button className="btn btn--primary btn--inside uppercase" type="submit">Serch</button>
        </form>
    )
}

export default InputPanel
