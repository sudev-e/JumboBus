//  import  { Route } from 'react-router-dom'


//  import {   useNavigate } from 'react-router-dom';
//  const PrivateRoute = ({element:Component,...rest}) => {
//     const navigate= useNavigate();
//    return (
//     <Route 
//     {...rest}
//     render={
//         (props)=>{
//        localStorage.getItem("authToken") ?( <Component {...props} />):navigate('/login')
//         }
//     }
//      />
//    );
//  };
 
//  export default PrivateRoute