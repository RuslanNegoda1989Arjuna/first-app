
import './shared/styles/styles.scss';
import Navbar from './modules/Navbar/Navbar.jsx';

import navbarMenuItems from "./data/navbarMenuItems.json"
import ToggleButton from './shared/components/ToggleButton/ToggleButton';
import Vote from "./modules/Vote/Vote"
import AccordionItem from './modules/AccordionItem/AccordionItem';
import ModuleFaq from './modules/ModuleFaq/ModuleFaq';
import GoodsList from './modules/GoodsList/GoodsList';



function App() {
  return (
    <>
      <Navbar menuItems={navbarMenuItems} />
      <div className='container'>
        {/* <ToggleButton text='Click me' />
        <Vote /> */}
        <AccordionItem />
        {/* <ModuleFaq/> */}
        <GoodsList/>
  
      </div>
      
    </>
  );
}

export default App;
