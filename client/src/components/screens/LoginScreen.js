import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';  
import { Link, useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import styled from "styled-components";
import { LoginForm } from './LoginForm';
import { AccountContext } from '../AccountContext';
import { RegisterForm } from './RegisterForm';

const BoxContainer = styled.div`
margin-top:30px;
width: 280px;
min-height: 550px;
display:flex;
flex-direction:column;
border-radius:19px;
background-color:#fff;
box-shadow: 0 0 2px rgba(15,15,15,0.28);
position: relative;
overflow:hidden;
`;
const TopContainer = styled.div`
width: 100%;
height:250px;
display:flex;
flex-direction:column;
justify-content:flex-end;
padding:0 1.8em;
padding-bottom: 5em;
`;
const BackDrop = styled(motion.div)`
width:160%;
height:550px;
position:absolute;
display:flex;
flex-direction:column;
border-radius:50%;
transform: rotate(60deg);
top: -290px;
left: -70px;
background: rgb(242,68,38);
background: linear-gradient(90deg, rgba(242,68,38,1) 34%, rgba(252,108,69,1) 66%);
`;
const HeaderContainer = styled.div`
width:100%;
display:flex;
flex-direction: column;
`;
const HeaderText = styled.h2`
font-size : 30px;
font-weight:600;
line-height:1.24;
color: #fff;
z-index: 10;
margin:0;
`;
const SmallText = styled.h5`
color: #fff;
font-weight:500;
font-size:11px;
z-index:20;
margin:0;
margin-top:7px;
`;
const InnerContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
padding:0 1.8em;
`;
const AppContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items: center ;
justify-content:center;
`;
const backdropVariants ={
  expanded:{
    width:"233%",
    height:"1050px",
    transform:"rotate(60deg)"
  },
  collapsed:{
    width:"160%",
    height:"550px",
    borderRadius:"50%",
    transform:"rotate(60deg)"
  }
}
const expandingTransition ={
  type: "spring",
  duration: 2.3,
  stiffness: 30,
}

const LoginScreen = () => {
  const [isExpanded,setExpanded]=useState(false)
  const [active,setActive]=useState("signin")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]= useState("")
    const playExpandingAnimation =() =>{
      setExpanded(true);
      setTimeout(()=>{
        setExpanded(false);
      }, expandingTransition.duration * 1000 - 1500);
    }
    const switchToSignup = () =>{
      playExpandingAnimation();
      setTimeout(() =>{
          setActive("signup");
      }, 400)
    }
    const switchToSignin = () =>{
      playExpandingAnimation();
      setTimeout(()=>{
        setActive("signin")
      }, 400)
    }
    const contextValue = { switchToSignup,switchToSignin};
    const navigate= useNavigate();
   useEffect(()=>{
    if(localStorage.getItem("authToken")){
     navigate('/')
    }
   },[])

    const loginHandler =async (e) =>{
        e.preventDefault();

        const config={
            header:{
                "content-Type":"application/json"
            }
        }
         
        try {
            const {data} = await axios.post("/api/auth/login",{email,password},config)
            localStorage.setItem("authToken",data.token)
            navigate('/')
        } catch (error) {
            setError(error.response.data.error)
            setTimeout(()=>{
              setError("")
            },5000)
        }
    }

     
  return (
    
   <AccountContext.Provider value={contextValue}> <AppContainer>
  <BoxContainer>
    <TopContainer>
      <BackDrop initial={false} animate={isExpanded ? "expanded":"collapsed"} variants={backdropVariants}
      transition={expandingTransition} />
     {active=== "signin" && <HeaderContainer>
        <HeaderText>welcome</HeaderText>
        <HeaderText>Back</HeaderText>
        <SmallText>please sign-in to continue!</SmallText>
      </HeaderContainer>}
      {active=== "signup" && <HeaderContainer>
        <HeaderText>Create</HeaderText>
        <HeaderText>Account</HeaderText>
        <SmallText>please sign-up to continue!</SmallText>
      </HeaderContainer>}
    </TopContainer>
    <InnerContainer>
     {active === "signin" && <LoginForm/>}
     {active === "signup" && <RegisterForm/>}
      {/* <p onClick={playExpandingAnimation}>clickme</p> */}
    </InnerContainer>
  </BoxContainer> </AppContainer> </AccountContext.Provider> 
   /* /* <div className='login-main'>
<Row>
      <Col span={{ lg: 12,md: 12 ,sm:24}}>  
      <div className='login-image'>
         <img src=" https://static.abhibus.com/img/icons/left-img.png" alt="cbc"></img>
      </div>
      </Col>
      <Col span={{ lg: 12,md: 12 ,sm:24}}>
      <div className='login-box'>
      <h2>Login / Sign In</h2>
      <form onSubmit={loginHandler} className='login-screen form'>
            <h3 className='login-screen_title'> d</h3>
            {error && <span className='error-message'>{error}</span>}
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type="email" required id="email" placeholder="Enter email" value= {email} 
                onChange={(e)=> setEmail(e.target.value)}
                tabIndex={1}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password: 
                
                </label>
                <input type="password" required id="password" placeholder="Enter password" value= {password} 
                onChange={(e)=> setPassword(e.target.value)}
                tabIndex={2}/>
                <Link to="/forgotpassword" className="login-screen_forgotpassword" tabIndex={4}>Forgot password ?</Link>
            </div>
             
            <button type='submit' className='btn btn-primary' tabIndex={3}>Login</button>
            <span className='login-screen_subtext'> don't have an account? <Link to="/register">Register</Link></span>
        </form> 
        </div>  
      </Col>
    </Row>
  </div> */ 
    
       
  )
}

export default LoginScreen