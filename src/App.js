import { Route, Routes } from 'react-router-dom';
import './App.css';
import CompanyListComponent from './pages/CompanyListComponent';
import CompanyRegister from './pages/CompanyRegister';
import ProductAdd from './pages/ProductAdd';
import Sidebar from './components/Sidebar';
import PriceSheet from './pages/PriceSheet';
import SignIn from './pages/SignIn';


const App = () => {
  return (
    <>
    <Sidebar>
    <Routes>
      <Route exact path='/' element={<CompanyListComponent/>}/>
      <Route path='/companyRegister' element={<CompanyRegister/>}/>
      <Route path='/productRegister' element={<ProductAdd/>}/>
      <Route path='/pricesheet' element={<PriceSheet/>}/>
      <Route path='/signin' element={<SignIn/>}/>
    </Routes>
    </Sidebar>
    </>
  );
};

export default App;
