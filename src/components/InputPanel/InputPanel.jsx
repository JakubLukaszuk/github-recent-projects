import React from 'react'

function InputPanel(props) {
    const {submitFunc} = [props];
    return (
        <div>
            <input/>
            <button onClick={submitFunc}/>
        </div>
    )
}

export default InputPanel
