
import './shared/styles/styles.scss';
import Navbar from './modules/Navbar/Navbar.jsx';

import navbarMenuItems from "./data/navbarMenuItems.json"
import ToggleButton from './shared/components/ToggleButton/ToggleButton';



function App() {
  return (
    <>
      <Navbar menuItems={navbarMenuItems} />
      <div className='container'>
        <ToggleButton text='Click me'/>
      </div>
  
    </>
  );
}

export default App;
