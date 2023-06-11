import ModuleFaq from '../../modules/ModuleFaq/ModuleFaq';
import GoodsList from '../../modules/GoodsList/GoodsList'


const FaqGoodsPage = () => {
    return (
        <div className='container Sun'>
            <h2 className='pageTitle'>FAQ Module & Goods List</h2>
            <ModuleFaq />
            <GoodsList/>

        </div>
    )
 }

export default FaqGoodsPage