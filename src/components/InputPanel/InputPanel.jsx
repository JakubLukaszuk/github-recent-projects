import React, { useState } from 'react'
import './InputPanel.sass';

function InputPanel(props) {
    const {submitFunc} = props;
    const [inputValue, setInputValue] = useState('')

    const onChangeHandler = event => {
        setInputValue(event.target.value);
      };

      const handleSubmit = event => {
          if(inputValue!= null && inputValue.length > 0)
          {
            submitFunc(inputValue)
          }
        event.preventDefault();
      };

    return (
        <form className="InputPanelForm" onSubmit = {handleSubmit}>
            <input className="InputPanelForm__field" type="text" placeholder="GitHub user Id" onChange={onChangeHandler}/>
            <button className="InputPanelForm__btn InputPanelForm__btn--primary InputPanelForm__btn--inside" type="submit">Serch</button>
        </form>
    )
}

export default InputPanel
