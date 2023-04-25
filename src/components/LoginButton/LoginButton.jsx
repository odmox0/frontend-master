import {useAuth0} from '@auth0/auth0-react'


function LoginButton (){
    const { loginWithRedirect} = useAuth0();
    return(
        <button className="btn btn-primary" onClick={() => { 
            console.log('login') 
            debugger
            loginWithRedirect()

        }}> Login </button>
    )
}

export default LoginButton;