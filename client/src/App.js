import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
// import PrivateRoute from './components/routing/PrivateRoute'

import LoginScreen from './components/screens/LoginScreen'
import RegisterScreen from './components/screens/RegisterScreen'
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen'
import ResetPasswordScreen from './components/screens/ResetPasswordScreen'
import PrivateScreen from './components/screens/PrivateScreen';
import styled  from 'styled-components';

import HomeScreen from './components/screens/HomeScreen';

const App = () => {
  return (
    
    <Router>
    <div className="App">
     <Routes>
      <Route  path="/" element={<PrivateScreen/>} />
      <Route   path='/login' element={<LoginScreen/>} /> 
      <Route   path='/register' element={<RegisterScreen/>} />
      <Route   path='/forgotpassword' element={<ForgotPasswordScreen/>} />
      <Route   path='/passwordreset/:resetToken' element={<ResetPasswordScreen/>} />
      <Route   path='/home' element={<HomeScreen/>} />
     </Routes>
    </div>
    </Router>
   
  );
}

export default App;
