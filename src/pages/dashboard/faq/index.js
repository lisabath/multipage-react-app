import Accordion from '../../../../src/pages/dashboard/faq/';
import {data} from './data';

function FAQ() {
    return (
        <div className="FAQ">
            <h1>FAQ</h1>
            { 
            data.map(function(item, index){
                return (
                    <Accordion title= {item.question}>
                        {item.answer}
                </Accordion> 
                )
            } )   
        }
        </div>
    );
}
export default FAQ;