import React from "react";
import { Outlet } from "react-router-dom";

import Footers from "./components/Footers/Footers";
import Headers from "./components/Headers/Headers";

export default function Layout(){
    return(
    <>
    <Headers />
    {/* This outlet used this Layout as a based and the whatever the thing which we want to change it will change that thing and keep remail same the header and footer part */}
    <Outlet />
    <Footers  />
    </>
    )
}