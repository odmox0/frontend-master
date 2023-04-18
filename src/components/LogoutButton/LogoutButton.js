import { useAuth0 } from '@auth0/auth0-react'

function LogoutButton(props) {
    const  { logout } = useAuth0();
    return (
        <button className="btn btn-danger" onClick={()=>logout()}>Logout</button>
    );
}

export default LogoutButton;