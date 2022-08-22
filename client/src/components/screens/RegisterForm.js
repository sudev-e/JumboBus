import React, { useContext } from 'react'
import { BoldLink, BoxContainer,FormContainer,Input, MutedLink, SubmitButton } from './common'
import { Marginer } from '../marginer'
import { AccountContext } from '../AccountContext'
export function RegisterForm(props){
    const {switchToSignin} = useContext(AccountContext)
    return(
   
    <BoxContainer> 
        <FormContainer>
            <Input type="text" placeholder='Username' />
            <Input type="email" placeholder='Email'/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder='Confirm password'/>
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href='#'> Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.5em"/>
        <SubmitButton type='submit'>signup</SubmitButton> 
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href='#' >Already registered? {" "}<BoldLink href='#' onClick={switchToSignin}>signin</BoldLink></MutedLink>
     
    </BoxContainer>
    )
}