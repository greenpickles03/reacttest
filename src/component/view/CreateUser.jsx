import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import UserService from '../../service/UserService'
import { CreateButton } from '../button/ActionButton'

const CreateUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');

    let navigate = useNavigate();

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

    function onCreate() {
        let user = {firstName, lastName, emailId}
        console.log(JSON.stringify(user));
        UserService.createUser(user).then((res) => {
            if(res.status === 200){
                navigate('/');
            }else{
                alert('Unable to create account');
            }
        })
    }

    return (
        <div>
            <h2>Create User</h2>
            <form>
                <div className='form-group'>
                    <input onChange={onChangeFirstName} className='input-add form-control' type={'text'} placeholder='First Name'  />
                    <input onChange={onChangeLastName} className='input-add form-control' type={'text'} placeholder='Last Name'  />
                    <input onChange={onChangeEmailId} className='input-add form-control' type={'text'} placeholder='Email'  />
                </div>
            </form>
            <Link to={'/'}>
                <button className='btn-space btn btn-margin btn-padding btn-primary'>Go Back</button>
            </Link>
            <CreateButton onCreate={onCreate} className='btn-space btn btn-padding btn-margin btn-primary' />
        </div>
    )
}

export default CreateUser