import React, {useState} from 'react';

const TypeBar = () => {
    const [message, setMessage] = useState('')

    const handleChange = event => {
        setMessage(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log(message);
        }
    };


    return (
        <div className='type-bar'>
               <input type="text" placeholder='Type a message' onChange={handleChange} value={message} onKeyDown={handleKeyDown}/>
        </div>
    );
};

export default TypeBar;