import React from 'react';

const Modal = ({active, setActive}) => {
    return (
        <div className="modal active">
            <div className="modal__content" onClick={e => e.stopPropagation()}>

            </div>
        </div>
    );
};

export default Modal;