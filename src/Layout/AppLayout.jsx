import { Header } from "./Header"
import { Outlet } from "react-router"
import { Footor } from "./Footor"
export const Applayout = () =>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footor/>
        
        </>
    )
}