import React from "react";
import {
    CNavbar,
    CContainer,
    CNavbarBrand,
    CNavbarNav,
    CNavItem,
    CNavLink,
    CBreadcrumb,
    CBreadcrumbItem,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
    return (
        <>
            <CNavbar
                position="fixed"
                expand="lg"
                colorScheme="light"
                className="bg-light pb-1"
            >
                <CContainer fluid>
                    <CNavbarNav>
                        <CNavbarBrand>CiaTécnica</CNavbarBrand>
                        <CNavItem>
                            <CNavLink layout="justified" href="/" active>
                                Users
                            </CNavLink>
                        </CNavItem>
                    </CNavbarNav>
                    <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
                        <CBreadcrumbItem>Home</CBreadcrumbItem>
                        <CBreadcrumbItem active>Users</CBreadcrumbItem>
                        <CBreadcrumbItem active>List</CBreadcrumbItem>
                    </CBreadcrumb>
                </CContainer>
            </CNavbar>
        </>
    );
}
export default Header;
