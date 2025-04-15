import { Outlet } from "react-router-dom";
import Log from "../pages/log/Log";

export default function Protected({user}){
    return user ? <Outlet /> : <Log />
}