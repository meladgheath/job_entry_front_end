import {useRef} from "react";
import {useBearStore} from "../controller/useBearStore";


const Login = ()=> {

    const userID = useRef(null)
    // const { username, login} = useBearStore()
    const username = useBearStore((state)=> state.username)
    const login = useBearStore((state)=> state.login)


    const fun = (e) => {
        e.preventDefault()
        // loginAs(userID.current.value)
        login(userID.current.value)
        // alert(username.current.value)
        // window.location.href = '/mydoc?id=1'
    }
    return (

        <form onSubmit={fun}>
            <div class="flex justify-center h-screen w-screen items-center">
                <div class="w-full md:w-1/2 flex flex-col items-center ">
                    <h1 class="text-center text-2xl font-bold text-gray-600 mb-6">{username}LOGIN</h1>
                    <div class="w-3/4 mb-6">
                        <input ref={userID} type="text" name="email" id="email"
                               class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                               placeholder="User Name"/>
                    </div>
                    <div class="w-3/4 mb-6">
                        <input type="password" name="password" id="password"
                               class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
                               placeholder="Password"/>
                    </div>
                    {/*<div class="w-3/4 flex flex-row justify-between">
                    <div class=" flex items-center gap-x-1">
                        <input type="checkbox" name="remember" id="" class=" w-4 h-4  " />
                            <label for="" class="text-sm text-slate-400">Remember me</label>
                    </div>
                    <div>
                        <a href="#" class="text-sm text-slate-400 hover:text-blue-500">Forgot?</a>
                    </div>
                </div>*/}

                    <div class="w-3/4 mt-4">
                        <button type="submit"
                                className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"> LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login