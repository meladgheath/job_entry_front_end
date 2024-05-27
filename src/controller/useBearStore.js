import { create } from 'zustand'


export const useBearStore = create((set ) => ({
    username : null,
    name: null,
    isLogin: false ,
    login : (username , name)=> set(()=>({isLogin:true ,username , name})),
    logout: ()=> set(()=> ({isLoading: false ,username: null , name: null}))
}))
