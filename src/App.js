import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Layout from './components/layout/Layout';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Missing from './components/Missing/Missing';
import CustomerHome from './components/CustomerHome/CustomerHome';
import RequireAuth from './components/RequireAuth/RequireAuth';
import { AuthProvider } from './context/AuthContext';

function App() {


  return (
    <div className="App">
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link> */}
      {/* <Navbar/> */}
      <AuthProvider>
        <Routes>

          {/* Visitor pages */}
          <Route path='/' element={<Layout/>}>
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

            {/* Admin pages */}
            <Route path='/admin/' element={<AdminDashboard allowedRoles={['admin']}/>}/>

            {/* Customer pages */}
            <Route element={<RequireAuth allowedRoles={['customer']}/>}>
              <Route path='/customer/' element={<CustomerHome/>}/>
            </Route>
            

            {/* Missing */}
            <Route path='*' element={<Missing/>}/>

          </Route>
        </Routes>
        </AuthProvider>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
