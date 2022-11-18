import { useState } from 'react';

function Accordion(props) {
    const { children, title } = props;
    const [contentIsShowing, setContentIsShowing] = useState(false);

    return (
        <div className="accordion">
            <h3 className="accordion-title" onClick={() => setContentIsShowing(!contentIsShowing)}>{title}</h3>
            {
                contentIsShowing ?

                <div className="accordion-content">
                    <h4>Answer</h4>
                    {children}
                </div>
                :
                ''
            }
        </div>
    )
}

export default Accordion;