import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import UserService from '../../service/UserService'
import { Modal } from 'react-bootstrap'
import { DeleteButton, UpDateButton } from '../button/ActionButton'

const HomePage = () => {

    const [user, setUser] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [show, setShow] = useState(false);
    const [userID, setUserID] = useState('');

    function onDelete(id){
        UserService.deleteUser(id).then((res) => {
            setUser(user.filter(user => user.id !== id))
        })
    }

    function onUpdate(){
        let users = {firstName, lastName, emailId}
        UserService.updateUser(users, userID).then((res) => {
            if(res.status === 200){
                onLoadData();
                onHideModal();
            }else{
                alert('Unable to Update');
            }
        })
    }

    const onChangeFirstName = (event) =>{
        console.log(event.target.value);
        setFirstName(event.target.value);
    }

    const onChangeLastName = (event) =>{
        setLastName(event.target.value);
    }

    const onChangeEmailId = (event) => {
        setEmailId(event.target.value);
    }

    const onHideModal = e =>{
        setShow(false);
    }

    const showModal = (fname,lname,eid,uid) =>{
        setShow(!show);
        setFirstName(fname);
        setLastName(lname);
        setEmailId(eid);
        setUserID(uid);
    }

    const onLoadData = () =>{
        UserService.getAllUser().then((res) => {
            if(res.status === 200){
                setUser(res.data);
            }else{
                alert('Unble to load data');
            }
        })
    }
    console.log("DATA: " + JSON.stringify(user));
    useEffect(() => {
        onLoadData();
    },[]);


    return (
        <div>
            <h2>Home Page</h2>
           
            <div className='row'>
                <Link to={'/createUser'} >
                    <button className='btn-left btn btn-margin btn-padding btn-primary'> Goto Create User</button>
                </Link>
                <table className='table-color table table-bordered'>
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(
                                userVar =>
                                <tr key={userVar.id}>
                                    <td>{userVar.firstName}</td>
                                    <td>{userVar.lastName}</td>
                                    <td>{userVar.emailId}</td>
                                    <td>
                                        <button className='btn-space btn btn-margin btn-padding btn-primary' onClick={
                                            () => showModal(userVar.firstName, userVar.lastName, userVar.emailId, userVar.id)
                                        }>Update</button>
                                        {/* <button onClick={() => onDelete(userVar.id)} className='btn btn-margin btn-padding btn-danger'>Delete</button> */}
                                        <DeleteButton onDelete={onDelete} getIndex={userVar.id} className='btn-space btn btn-margin btn-padding btn-danger' />
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <Modal show={show} onHide={e=>onHideModal()}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='form-group'>
                            <input onChange={onChangeFirstName} type={'text'} value={firstName} placeholder="Firtname" className='form-control input-add'/>
                            <input onChange={onChangeLastName} type={'text'} value={lastName} placeholder="Lastname" className='form-control input-add'/>
                            <input onChange={onChangeEmailId} type={'text'} value={emailId} placeholder="Email" className='form-control input-add'/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-margin btn-padding btn-danger'>Close</button>
                    <UpDateButton onUpdate={onUpdate} className='btn btn-margin btn-padding btn-primary'/>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default HomePage