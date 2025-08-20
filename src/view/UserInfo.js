import Title from "../component/Title";
import React, {useRef} from "react";
import Inputs from "../component/Inputs";
import Btn from "../component/Btn";
import MyUrl from "../controller/url";
import {clear} from "@testing-library/user-event/dist/clear";
import Tables from "../component/Tables";
import useFetch from "../controller/useFetch";
import CenterPage from "../component/CenterPage";

const UserInfo = () => {

    const name = useRef(null)
    const username = useRef(null)
    const password = useRef(null)

    const [users , err ] = useFetch(MyUrl+'/users')

    const fun = (e) => {
        e.preventDefault();
        // console.log(window.location.hostname)
        console.log(name.current.value,username.current.value,password.current.value)
        fetch(MyUrl+"/users", {
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },body:JSON.stringify({name:name.current.value , username:username.current.value , password:password.current.value})
        }).then(res => res.json())
            .then((result)=> {
                if (result.success)
                    alert('successfully . . . ')
                else
                    throw new Error(result.message)
            }).catch((err)=> alert(err.message))
            .finally(() => clear())

        }

    function ex (id) {
        fetch(MyUrl + '/users/' + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
                if (result.success)
                    alert('the element with id ' + id + ' was removed successfuly')
                else
                    throw new Error(result.message)
            }).catch((err) =>
            alert(err.message));

        const clear = ()=> {
            name.current.value = ''
            username.current.value = ''
            password.current.value = ''
        }
    }
    const colums = [
        {name:'#'},
        {name:'ID'},
        {name:'Name'},
    ]
    return (
        <>
        <CenterPage>
                <Title title='Users Info'  />
                <form onSubmit={fun}>
                    <Inputs name='Name' label='Name' holder='name of User ' r={name}/>
                    <Inputs name='username' label='UserName' holder='UserName' r={username}/>
                    <Inputs name='password' label='Password' holder='Password' r={password}/>
                    <Btn type='submit' caption='SAVE' />
                </form>
        </CenterPage>
        <Tables tableItems={users} colums={colums}  toggle={[]} togglename={[]} delete_id='username' deleteBtn={ex} />
        </>
    )
}

export default UserInfo