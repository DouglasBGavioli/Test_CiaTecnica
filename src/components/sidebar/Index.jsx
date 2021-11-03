import React from "react";
import {
    CSidebar,
    CSidebarBrand,
    CSidebarNav,
    CNavTitle,
} from "@coreui/react";
import { IoIosPeople } from "react-icons/io";
import "../sidebar/Style.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Sidebar() {
    return (
        
            <CSidebar className="sidebar">
                <CSidebarBrand>Navegation</CSidebarBrand>
                <CSidebarNav>
                    <CNavTitle><IoIosPeople size="15em"/></CNavTitle>
                </CSidebarNav>
            </CSidebar>
     
    );
}
export default Sidebar;
