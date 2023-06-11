import Vote from '../../modules/Vote/Vote';
import AccordionItem from '../../modules/AccordionItem/AccordionItem';


const VoteAccordeonPage = () => {
    return (
        <div className='container Sun'>
            <h2 className='pageTitle'>Vote & Accordeon Item</h2>
            <Vote />
            <AccordionItem/>
        </div>
    )
 }

export default VoteAccordeonPage