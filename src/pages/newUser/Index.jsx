import React, { useState } from "react";
import "../newUser/Style.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    CContainer,
    CForm,
    CFormLabel,
    CFormInput,
    CCol,
    CFormCheck,
    CButton,
    CInputGroup,
    CInputGroupText,
    CFormSelect,
} from "@coreui/react";

function NewUser(props) {
    const [expire, setExpire] = useState("yes");
    const [page, setPage] = useState("userRegistry");


    const [userName, setUserName] = useState(props.userName);
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);

    const checkExpires = (event) => {
        setExpire(event);
    };

    const checkPage = (event) => {
        setPage(event);
    };

    const handleName = (e) => {
        setUserName(e);
    };
    const handleFirstName = (e) => {
        setFirstName(e);
    };
    const handleLastName = (e) => {
        setLastName(e);
    };

    return (
        <CContainer sm className="ml-5">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton
                    
                    color="secondary"
                    id="userRegistry"
                    className="me-md-2"
                    onClick={(event) => checkPage(event.target.id)}
                >
                    User Registry
                </CButton>
                <CButton
                    color="secondary"
                    id="profile"
                    className="me-md-2"
                    onClick={(event) => checkPage(event.target.id)}
                >
                    Profile
                </CButton>
            </div>

            {page === "userRegistry" ? (
                <div className="container">
                    <CForm className="row g-3">
                        <CCol xs={12}>
                            <CFormLabel htmlFor="inputName">
                                UserName
                            </CFormLabel>
                            <CFormInput
                                type="name"
                                id="inputName"
                                defaultValue={userName}
                                onChange={(event) =>
                                    handleName(event.target.value)
                                }
                            />
                        </CCol>

                        <CFormLabel htmlFor="inputFullName">
                            Full name
                        </CFormLabel>

                        <CInputGroup className="mb-3">
                            <CFormInput
                                placeholder="First name"
                                id="inputFirstName"
                                defaultValue={firstName}
                                onChange={(event) =>
                                    handleFirstName(event.target.value)
                                }
                            />
                            <CInputGroupText></CInputGroupText>
                            <CFormInput
                                type="name"
                                id="inputLastName"
                                placeholder="Last name"
                                defaultValue={lastName}
                                onChange={(event) =>
                                    handleLastName(event.target.value)
                                }
                            />
                        </CInputGroup>

                        <CCol xl={12}>
                            <CFormLabel htmlFor="emailInput">
                                Email address
                            </CFormLabel>
                            <CFormInput
                                type="email"
                                id="emailInput"
                                placeholder="name@example.com"
                            />
                        </CCol>

                        <CCol md={6}>
                            <CFormLabel htmlFor="inputPhone">
                                Phone Number
                            </CFormLabel>
                            <CFormInput
                                type="tel"
                                id="inputPhone"
                                placeholder="55-999933698"
                                pattern="[0-9]{2}[0-9]{9}"
                            />
                        </CCol>
                        <CCol md={6}>
                            <CFormLabel htmlFor="inputMobilePhone">
                                Mobile Phone
                            </CFormLabel>
                            <CFormInput
                                type="tel"
                                id="inputMobilePhone"
                                placeholder="55-999933698"
                                pattern="[0-9]{2}[0-9]{9}"
                            />
                        </CCol>
                        <CCol xl={12}>
                            <CFormLabel htmlFor="inputName">
                                Password
                            </CFormLabel>
                            <CFormInput type="password" id="inputPassword" />
                        </CCol>

                        <CCol xl={12}>
                            <CFormLabel htmlFor="inputName">
                                Confirm Password
                            </CFormLabel>
                            <CFormInput
                                type="password"
                                id="inputConfirmPassword"
                            />
                        </CCol>

                        <CCol md={3}>
                            <CFormLabel htmlFor="inputName">Expire</CFormLabel>{" "}
                            <CFormCheck
                                inline
                                type="radio"
                                name="flexRadioDefault"
                                id="yes"
                                label="Yes"
                                defaultChecked
                                onClick={(event) =>
                                    checkExpires(event.target.id)
                                }
                            />
                        </CCol>
                        <CCol md={3}>
                            <CFormCheck
                                inline
                                type="radio"
                                name="flexRadioDefault"
                                id="never"
                                label="Never"
                                onClick={(event) =>
                                    checkExpires(event.target.id)
                                }
                            />
                        </CCol>

                        <CCol md={4}>
                            <CFormSelect aria-label="Default select example">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </CFormSelect>
                        </CCol>

                        <CCol xl={12}>
                            {expire === "yes" ? (
                                <CCol md={8}>
                                    <CFormLabel htmlFor="inputDate">
                                        Expire Date
                                    </CFormLabel>
                                    <CFormInput type="date" id="inputDate" />
                                </CCol>
                            ) : null}
                        </CCol>

                        <CCol xl={12}>
                            <CButton className="save" type="submit">
                                Save
                            </CButton>

                            <CButton className="cancel" type="submit">
                                Cancel
                            </CButton>
                        </CCol>
                    </CForm>
                </div>
            ) : null}
            {page === "profile" ? (
                <div className="container">
                    <CForm className="row g-3">
                        <CCol xs={12}>
                            <CFormLabel htmlFor="inputName">
                                UserName
                            </CFormLabel>
                            <CFormInput
                                type="name"
                                value={userName}
                                id="inputName"
                            />
                        </CCol>
                        <CFormLabel htmlFor="inputFullName">
                            Full name
                        </CFormLabel>
                        <CInputGroup className="mb-3">
                            <CFormInput
                                placeholder="First name"
                                id="inputFirstName"
                                value={firstName}
                            />
                            <CInputGroupText></CInputGroupText>
                            <CFormInput
                                type="name"
                                id="inputLastName"
                                placeholder="Last name"
                                value={lastName}
                            />
                        </CInputGroup>

                        <CCol md={6}>
                            <CFormSelect aria-label="Default select example">
                                <option value="active">Owner</option>
                                <option value="inactive">Driver</option>
                                <option value="inactive">Office</option>
                            </CFormSelect>
                        </CCol>
                        <CCol md={6}>
                            <CFormSelect aria-label="Default select example">
                                <option value="active">Company 1</option>
                                <option value="inactive">Company 2</option>
                                <option value="inactive">Company 3</option>
                            </CFormSelect>
                        </CCol>

                        <CCol xl={12}>
                            <CButton className="save" type="submit">
                                Save
                            </CButton>

                            <CButton className="cancel" type="submit">
                                Cancel
                            </CButton>
                        </CCol>
                    </CForm>
                </div>
            ) : null}
        </CContainer>
    );
}
export default NewUser;
