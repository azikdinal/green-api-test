import React from 'react';

const Message = (props) => {

    const str = 'И предупредите, чтобы немного смекалки проявили коллеги, чтобы не все ИЗ и отчёты руководителя были одинаковые ( про ответственность, внимательность можно дополнить, можно недостатки или замечания мелкие написать).'

    const strs = str.split('\n').filter(s => s);
    const message = strs.map(e => <>{e}<br/></>)


    return (
        <div className='message' style={{justifyContent:props.isUser ? 'flex-end' : 'flex-start'}}>
            <div className='rectangle' style={{backgroundColor: props.isUser ? '#005c4b' : '#202c33'}}>
                {message}
            </div>
        </div>
    );
};

export default Message;