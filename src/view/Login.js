import {useRef, useState} from "react";
import {useBearStore} from "../controller/useBearStore";
import { useNavigate } from 'react-router-dom';
import MyUrl from "../controller/url";


const Login = ()=> {

    const username = useRef(null)
    const password = useRef(null)

    const [error , setError ] = useState()

    const login = useBearStore((state)=> state.login)
    const navigate = useNavigate()


    const fun = (e) => {
        e.preventDefault()

        fetch(MyUrl+"/login", {
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },body:JSON.stringify({ username:username.current.value , password:password.current.value})
        }).then(res => res.json())
            .then((result)=> {
                if (result.success) {
                    // alert('successfully . . . '+ result.message.name)
                    // setError(null)

                    login(
                        result.data.username.trim()
                        , result.data.name)
                    navigate("/")
                }
                else
                    throw new Error(result.message)
            }).catch((err)=> setError(err.message))
            /*.finally(() => {
                    username.current.value = ''
                    password.current.value = ''
                    username.current.focus()
                })
*/

        // login(username.current.value)
        // navigate("/")
    }
    const red = {
        fontFamily: 'Montserrat',
        fontSize: '20px',
        color: 'red'

    }
    return (

        <form onSubmit={fun}>
            <div class="flex justify-center h-screen w-screen items-center">
                <div class="w-full md:w-1/2 flex flex-col items-center ">
                    <h1 class="text-center text-2xl font-bold text-gray-600 mb-6">LOGIN</h1>
                    <div class="w-3/4 mb-6">
                        <input ref={username} type="text" name="username" id="username"
                               class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                               placeholder="User Name"/>
                    </div>
                    <div class="w-3/4 mb-6">
                        <input ref={password} type="password" name="password" id="password"
                               class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
                               placeholder="Password"/>
                    </div>


                    <div class="w-3/4 mt-4">
                        <button type="submit"
                                className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"> LOGIN
                        </button>

                    </div>
                    <p style={red}> {error} </p>
                </div>

            </div>

        </form>

    )
}

export default Login