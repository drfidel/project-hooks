import React, { useState } from "react";

const InputElement = () => {

    const [inputText, setInputText] = useState('');
    const [hxList, setHxList] = useState([]);

    return  <div>
        <input 
        placeholder="Enter some text" 
        onChange={(e) => {
        setInputText(e.target.value);
        setHxList([...hxList,e.target.value]);
        }}/>
            {inputText}

            <hr/><br/>
            <ul>
                {hxList.map((rec) => {
                    return <div>{rec}</div>
                })}
            </ul>
            </div>
}

export default InputElement;