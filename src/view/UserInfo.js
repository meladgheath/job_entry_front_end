import Title from "../component/Title";
import React, {useRef} from "react";
import Inputs from "../component/Inputs";
import Btn from "../component/Btn";
import MyUrl from "../controller/url";
import {clear} from "@testing-library/user-event/dist/clear";

const UserInfo = () => {

    const name = useRef(null)
    const username = useRef(null)
    const password = useRef(null)
    const fun = (e) => {
        e.preventDefault();
        // console.log(name.current.value,username.current.value,password.current.value)
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

        const clear = ()=> {
            name.current.value = ''
            username.current.value = ''
            password.current.value = ''
        }
    }

    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <Title title='Users Info'  />
                <form onSubmit={fun}>
                    <Inputs name='Name' label='Name' holder='name of User ' r={name}/>
                    <Inputs name='username' label='UserName' holder='UserName' r={username}/>
                    <Inputs name='password' label='Password' holder='Password' r={password}/>
                    <Btn type='submit' caption='SAVE' />
                </form>
            </div>
        </div>
    )
}

export default UserInfo