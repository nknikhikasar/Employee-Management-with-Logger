import react from "react";
import { useNavigate } from 'react-router-dom';
function adbutton() {
    //let history = useNavigate();
    return (
        <div><button onClick={() => { useNavigate('/add'); }}>Login</button></div>
    );

}
export default adbutton;