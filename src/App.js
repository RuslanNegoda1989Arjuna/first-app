
import './shared/styles/styles.scss';
import Navbar from './modules/Navbar/Navbar.jsx';

import navbarMenuItems from "./data/navbarMenuItems.json"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VoteAccordeonPage from './pages/VoteAccordeonPage/VoteAccordeonPage';
import FaqGoodsPage from './pages/FaqGoodsPage/FaqGoodsPage';
import TabListPage from './pages/TabListPage/TabListPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar menuItems={navbarMenuItems} />
        <Routes>
          <Route path='/vote' element={<VoteAccordeonPage />} />
          <Route path='/faq' element={<FaqGoodsPage />} />
          <Route path='/tabList' element={<TabListPage />} />
          <Route path='/register' element={<RegisterPage/> } /> 
        </Routes>
      </BrowserRouter>      
    </>
  );
}

export default App;
