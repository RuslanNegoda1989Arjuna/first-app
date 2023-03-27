
import './shared/styles/styles.scss';
import Navbar from './modules/Navbar/Navbar.jsx';

import navbarMenuItems from "./data/navbarMenuItems.json"

function App() {
  return (
    <div className="App">
      <h1>Hello react</h1>
      <Navbar menuItems={navbarMenuItems} />
    </div>
  );
}

export default App;
