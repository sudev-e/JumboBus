import { useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import "./ResetPasswordScreen.css"

const ResetPasswordScreen = ({match}) =>{
    const [password,setPassword]= useState("")
    const [confirmPassword,setConfirmPassword]= useState("")
    const [error,setError]= useState("")
    const [success,setSuccess] = useState("")

    const resetPasswordHandler = async(e) =>{
        e.preventDefault();
        const config ={
            headers : {
                "content-Type" : "application/json",

            },
        }
        if(password!==confirmPassword){
            setPassword("")
            setConfirmPassword("")
            setTimeout(()=>{
            setError(" ")
            },5000)
            return setError("password don't match")
        }
        try {
            const {data} = await axios.put(
                `/api/auth/resetpassword/${match.params.resetToken}`,{password},config
            );
            setSuccess(data.data)
        } catch (error) {
            setError(error.response.data.error)
            setTimeout(()=>{
                setError("")
            },5000)
        }
    }
    return(
        <div className="resetpassword-screen">
            <form onSubmit={resetPasswordHandler} className='resetpassword-screen_form'>
                <h3 className="resetpassword-screen_title">Reset Password</h3>
                {error&& <span className="error-message">{error}</span>}
                {success && <span className="success-message">{success} <Link to ="/login">Login</Link></span>}
                <div className="form-group">
                    
                    <label htmlFor="password">New Password:</label>
                    <imput type="password" required
                    id="password" placeholder="Enter new password"
                    autoComplete="true"
                    value={password} onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    
                    <label htmlFor="confirmpassword">COnfirm New Password:</label>
                    <imput type="password" required
                    id="confirmpassword" placeholder="Confirm password"
                    autoComplete="true"
                    value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn-btn-primary">Reset Password </button>

            </form>
        </div>
    )
}
export default ResetPasswordScreen