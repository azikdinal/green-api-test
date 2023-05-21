import React, {useState} from 'react';

const Modal = () => {
    const [active, setActive] = useState(true)


    return (
        <div className={active ? 'modal' : 'none'} onClick={() => setActive(false)}>
            <div className="content" onClick={e => e.stopPropagation()}>
                <div>Enter your data</div>
                <input type="text" placeholder="idInstance"/>
                <input type="text" placeholder="Token"/>
                <button>Sign up</button>
            </div>
        </div>
    );
};

export default Modal;