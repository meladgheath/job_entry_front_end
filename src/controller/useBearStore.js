import { create } from 'zustand'
import {useShallow} from "zustand/react/shallow";

export const useBearStore = create((set ) => ({
    username : null,
    login : (username)=> set(()=>({username})),
}))
