import logo from './logo.svg';
import './App.css';

import Landing from './view/Landing';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Route, Routes } from 'react-router-dom';
import About from './page/About';
import AuthNavbar from './components/Navbars/AuthNavbar';
import Footer from './components/Footers/Footer';
import AdminNavbar from './components/Navbars/AdminNavbar';
import IndexNavbar from './components/Navbars/IndexNavbar';
import Service from './page/Service';
import Login from './page/login/Login';
import AdminDashboard from './page/Admin/AdminDashboard';


function App() {

  const token = localStorage.getItem('authToken');
  return (
    <>
      {
        token ?
          <AdminNavbar />
          :
          <AuthNavbar />
      }
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<AdminDashboard />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
