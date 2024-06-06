import { useCreateMyUser } from "@/api/MyUserApi";
import { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
const AuthCallbackPage = () => {
    const { createUser } = useCreateMyUser();
    const { user } = useAuth0();
    const navigate = useNavigate();
    const hasCreatedUser = useRef(false);

    useEffect(() => {
        if (user?.sub && user?.email && !hasCreatedUser.current) {
            createUser({ auth0Id: user.sub, email: user.email });
            hasCreatedUser.current = true;
        }
        navigate("/");
    }, [navigate, createUser, user])
    return <>
        Loading...
    </>

}

export default AuthCallbackPage;