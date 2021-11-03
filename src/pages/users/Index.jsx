import React, { useState } from "react";
import {
    CButton,
    CContainer,
    CCol,
    CFormSelect,
    CRow,
    CInputGroup,
    CInputGroupText,
    CFormInput,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../users/Style.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import NewUser from "../newUser/Index";

function Users() {

    const [users, setUsers] = useState([
        {
            id: 0,
            name: "Leticia Lopes",
            userName: "leticia.lopes",
            profile: "Ofice Support",
            status: "active",
        },
        {
            id: 1,
            name: "Maycon Cruz",
            userName: "maycon.cruz",
            profile: "Busines Contact",
            status: "active",
        },
        {
            id: 2,
            name: "Tiago Tapparo",
            userName: "tiago.taparo",
            profile: "Driver",
            status: "active",
        },
    ]);
    const [status, setStatus] = useState("active");
    const [hide, setHide] = useState(false);
    const [editIndex, setEditIndex] = useState();

    const changeStatus = (index) => (e) => {
        console.log("index" + index);
        console.log("Status" + e.target.status);
        setUsers(
            users.map((item) =>
                item.id === index ? { ...item, status: "inactive" } : item
            )
        );
    };
    const verifyStatus = (event) => {
        setStatus(event);
        console.log(status);
    };

    const editButton = (index) => {
        setEditIndex(index);
        setHide(true);
    };
    return hide === false ? (
        <div>
            <CContainer>
                <CRow className="justify-content-around">
                    <CCol xs={3}>
                        <CButton href="/NewUser" color="secondary">
                            +Add
                        </CButton>
                    </CCol>
                    <CCol xs={4}>
                        <CFormSelect
                            className="select"
                            aria-label="Default select example"
                            onChange={(event) =>
                                verifyStatus(event.target.value)
                            }
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </CFormSelect>
                    </CCol>
                    <CCol xs={5}>
                        <CInputGroup className="search_input">
                            <CInputGroupText id="inputGroup-sizing-default">
                                Search
                            </CInputGroupText>
                            <CFormInput
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </CInputGroup>
                    </CCol>
                </CRow>
            </CContainer>

            <div className="table">
                <CRow>
                    <CTable responsive="xl">
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">
                                    Name
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    Username
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    Profile
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    Status
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col">
                                    Actions
                                </CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>

                        <CTableBody>
                            {users.map((user, index) =>
                                user.status === status ? (
                                    <CTableRow key={index}>
                                        <CTableHeaderCell scope="row">
                                            {user.name}
                                        </CTableHeaderCell>
                                        <CTableDataCell>
                                            {user.userName}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {user.profile}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {user.status}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            <CRow className="justify-content-center">
                                                <CCol xs={3}>
                                                    {" "}
                                                    <CButton
                                                        color="secondary"
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() =>
                                                            editButton(index)
                                                        }
                                                    >
                                                        <FiEdit />
                                                    </CButton>{" "}
                                                </CCol>

                                                <CCol xs={9}>
                                                    {" "}
                                                    <CButton
                                                        color="secondary"
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={changeStatus(
                                                            index
                                                        )}
                                                    >
                                                        <RiDeleteBin6Line />
                                                    </CButton>{" "}
                                                </CCol>
                                            </CRow>
                                        </CTableDataCell>
                                    </CTableRow>
                                ) : null
                            )}
                        </CTableBody>
                    </CTable>
                </CRow>
            </div>
        </div>
    ) : 
    <NewUser
    lastName={users[editIndex].name.substring(users[editIndex].name.lastIndexOf(" "))}
    firstName ={users[editIndex].name.split(" ")[1]}
    userName={users[editIndex].userName}
/>;
}
export default Users;
