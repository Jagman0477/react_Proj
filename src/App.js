import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Layout from './components/layout/Layout';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Missing from './components/Missing/Missing';
import CustomerHome from './components/CustomerHome/CustomerHome';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AdminHome from './components/AdminComponents/AdminHome/AdminHome';
import Customers from './components/AdminComponents/AdminHome/Customers/Customers';

function App() {


  return (
    <div className="App">
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
            <Route element={<RequireAuth allowedRoles={['admin']}/>}>
              <Route path='/admin/' element={<AdminDashboard/>}>
                <Route path='/admin/' element={<AdminHome/>}/>
                <Route path='/admin/customers' element={<Customers/>}/>
              </Route>
              
            </Route>

            {/* Customer pages */}
            <Route element={<RequireAuth allowedRoles={['customer']}/>}>
              <Route path='/customer/' element={<CustomerHome/>}/>
            </Route>
            

            {/* Missing */}
            <Route path='*' element={<Missing/>}/>

          </Route>
        </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
