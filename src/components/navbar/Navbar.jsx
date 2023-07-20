import { useState, useContext } from "react";
import { MainContext } from "@/states";
import styles from "./index.module.scss";
import { auth } from "@/utils/firebase";
import { provider } from "@/utils/firebase";
import { signInWithPopup } from "firebase/auth";

const Navbar = () => {
    const { state, dispatch } = useContext(MainContext);
    const [inputUsername, setInputUsername] = useState("");


    const onHandleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "SET_USERNAME", payload: inputUsername });
        setInputUsername("");
    };
    const onHandleGoogleLogin = async () => {
        const res = await signInWithPopup(auth, provider)
        setInputUsername(res.user.email)
    }





    return (
        <div className={styles.Navbar}>
            <button onClick={onHandleGoogleLogin}>Accedi con Google</button>
            <h5>{inputUsername}</h5>
            <form onSubmit={onHandleSubmit}>
            </form>
        </div>
    );
};

export default Navbar;