import { useEffect, useRef, useState} from "react";
import Management from "./Management";
import Restrictions from "./Restrictions";
import PrintPage from "./PrintPage";
import Account from "./account";
import {useBearStore} from "../controller/useBearStore";
import UserInfo from "./UserInfo";
import {useNavigate} from "react-router-dom";
import Store from "./Store";




const Menu = (props) => {
    const { children, items } = props
    const [isOpened, setIsOpened] = useState(false)


    return (
        <div className="">
            <button className="w-full flex items-center justify-between text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                    onClick={() => setIsOpened(!isOpened)}
            >
                <div className="flex items-center gap-x-2">
                    <p>melad is here mother fucker </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 duration-150 ${isOpened ? 'rotate-180' : ''}`}>
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            {
                isOpened ? (
                    <ul className="mx-4 px-2 border-l text-sm font-medium">
                        {
                            items.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.href} className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                                        {
                                            item.icon ? (
                                                <div className="text-gray-500">{item.icon}</div>
                                            ) : ""
                                        }
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                ) : ""
            }
        </div>
    )
}

const Sidebar = () => {
    const username = useBearStore((state)=> state.username)
    const name = useBearStore((state)=> state.name)
    const logout = useBearStore((state)=> state.logout)

    const Navigator = useNavigate()


    const mohasaba = [
        /*{
            href: 'javascript:void(0)',

            name: 'الحسابات المصرفية',
            icon: <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" strokeWidth={1.5} className="w-5 h-5" stroke="currentColor"
                       fill="none">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M18.68,8.18C18.68,13.19,12,19,12,19S5.32,13.19,5.32,8.18a6.68,6.68,0,0,1,13.36,0Z" />
                <path className="cls-1"
                      d="M14.86,6.27H11.52A1.43,1.43,0,0,0,10.09,7.7h0a1.43,1.43,0,0,0,1.43,1.44h1a1.43,1.43,0,0,1,1.43,1.43h0A1.43,1.43,0,0,1,12.48,12H9.14" />
                <line className="cls-1" x1="12" y1="4.36" x2="12" y2="6.27"></line>
                <line className="cls-1" x1="12" y1="12" x2="12" y2="13.91"></line>
                <polyline className="cls-1"
                          points="16.52 13.91 19.64 13.91 22.5 22.5 1.5 22.5 4.36 13.91 7.49 13.91"></polyline>
            </svg>,
            ev:'account'
        },*/
        {
            href: '#',
            name: 'الإدارات/الفروع',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
            ,
            ev:'Management'
        },
        {
            href:'javascript:void(0)',
            name:'القيود المحاسبية',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
            </svg>,
            ev:'restrictions'
        },
        {
            href: 'javascript:void(0)',
            name: 'طباعة القيـــود',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
            </svg>,
            ev:'print'
        },
        {
            href: 'javascript:void(0)',
            name: 'Users',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path
                    d="M17 11.8c-0.28-1.4-1.4-2.52-2.84-2.84-0.36-1.68-1.84-2.92-3.6-2.92h-6.88c-2.040 0-3.68 1.64-3.68 3.68v6.88c0 1.76 1.24 3.24 2.92 3.6 0.28 1.4 1.4 2.52 2.84 2.84 0.36 1.68 1.84 2.92 3.6 2.92h6.88c2.040 0 3.68-1.64 3.68-3.68v-6.88c0-1.76-1.24-3.24-2.92-3.6zM18.24 15.4v6.88c0 0.080 0 0.16 0 0.24-0.48-1.12-1.32-2.080-2.4-2.72 0.24-0.48 0.36-1 0.36-1.56 0-1.88-1.52-3.4-3.4-3.4s-3.4 1.52-3.4 3.4c0 0.56 0.12 1.080 0.36 1.56-1.080 0.64-1.88 1.6-2.4 2.72 0-0.080 0-0.16 0-0.24v-6.88c0-1.12 0.88-2 2-2h6.88c1.12 0 2 0.88 2 2zM11.040 18.28c0-0.96 0.76-1.72 1.72-1.72s1.72 0.76 1.72 1.72c0 0.96-0.76 1.72-1.72 1.72-0.92 0-1.72-0.76-1.72-1.72zM1.68 16.6v-6.88c0-1.12 0.88-2 2-2h6.88c0.8 0 1.48 0.48 1.8 1.16h-5.84c-2.040 0-3.68 1.64-3.68 3.68v5.88c-0.68-0.32-1.16-1.040-1.16-1.84zM4.52 19.44v-6.88c0-1.12 0.88-2 2-2h6.88c0.8 0 1.48 0.48 1.8 1.16h-5.84c-2.040 0-3.68 1.64-3.68 3.68v5.88c-0.68-0.32-1.16-1.040-1.16-1.84zM9.36 24.28c-0.28 0-0.52-0.040-0.76-0.16 0-0.040 0.040-0.080 0.040-0.12 0.28-1.24 1.12-2.32 2.28-2.92 0.56 0.36 1.2 0.56 1.88 0.56s1.36-0.2 1.88-0.56c1.16 0.6 2 1.64 2.28 2.92 0 0.040 0.040 0.080 0.040 0.12-0.24 0.080-0.48 0.16-0.76 0.16h-6.88z">
                </path>
            </svg>,
            ev:'users'
        },
       /* {
            href:'javascript:void(0)',
            name:'Store',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
            </svg>,
            ev:'store'
        },*/
        /* {
             href: '#',
             name: 'Page',
             icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
             </svg>
             ,
             ev:'page'
         },*/
    ]
    const navigation = [
        {
            href: 'javascript:void(0)',
            name: 'Rating',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"/>
            </svg>,
            ev: 'rating'
        },
        {
            href: 'javascript:void(0)',
            name: 'Standers',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
            </svg>,
            ev:'Stander'
        },
        {
            href: '#',
            // name: 'Integration',
            name:'Informations',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
            </svg>
            ,
            ev:'Info'
        },
        {
            href: '#',
            name: 'Management',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
            ,
            ev:'Management'
        },
        {
            href: '#',
            // name: 'Integration',
            name:'Report data',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
            </svg>
            ,
            ev:'report'
        },
        {
            href: '#',
            // name: 'Integration',
            name:'Department',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
            </svg>
            ,
            ev:'Department'
        },
        {
            href: 'javascript:void(0)',
            name: 'Employment',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
            </svg>,
            ev:'Employment'
        },
        {
            href: 'javascript:void(0)',
            name: 'Position',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>,
            ev:'Position',
        },
        {
            href: '#',
            name: 'تنقلات الموظفين',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
            ,
            ev:'trans'
        },
        {
            href: 'javascript:void(0)',
            name: 'Plans',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>,
            ev:'hh'

            ,
        },
        {
            href: 'javascript:void(0)',
            name: 'pp',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
            </svg>,
            ev:'pp'
        },
        {
            href: 'javascript:void(0)',
            name: 'Transactions',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
            </svg>,
        }

    ]

    const navsFooter = [
        {
            href: 'javascript:void(0)',
            name: 'Help',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            ,
        },
        {
            href: 'javascript:void(0)',
            name: 'Settings',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            ,
        }
    ]

    const nestedNav = [{ name: "Cards", href: "javascript:void(0)", icon: "" }, { name: "Chekouts", href: "javascript:void(0)", icon: "" }, { name: "Payments", href: "javascript:void(0)", icon: "" }, { name: "Get paid", href: "javascript:void(0)", icon: "" }]

    const profileRef = useRef()

    const [isProfileActive, setIsProfileActive] = useState(false)

    useEffect(() => {
        const handleProfile = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) setIsProfileActive(false)
        }
        document.addEventListener('click', handleProfile)
    }, [])
    const [currentPage, setCurrentPage] = useState('home');




    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <h1></h1>;
            case 'Management' :
                return <Management />;
            case 'restrictions' :
                return <Restrictions />
            case 'print' :
                return <PrintPage/>
            case 'account' :
                return <Account />
            case 'users' :
                return <UserInfo />
            case 'store':
                return <Store />
            default:
                return null;
        }
    };

    const onLogout = () => {
        logout()
        Navigator('/Login')
    }

    return (
        <>
            <nav
                className="fixed top-0 left-0 w-full h-full border-r bg-white space-y-8 sm:w-80">
                <div class="flex flex-col h-full px-4">
                    <div className='h-20 flex items-center pl-2'>
                        <div className="w-full flex items-center gap-x-4">
                            {/*<img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full" />*/}
                            <div>
                                <span className="block text-gray-700 text-sm font-semibold">{name}</span>
                                <span
                                    className="block mt-px text-gray-600 text-xs"
                                >

                                </span>

                            </div>
                            <div className="relative flex-1 text-right">
                                <button ref={profileRef}
                                        className="p-1.5 rounded-md text-gray-500 hover:bg-gray-50 active:bg-gray-100"
                                        onClick={() => setIsProfileActive(!isProfileActive)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {
                                    isProfileActive ? (
                                        <div className="absolute z-10 top-12 right-0 w-64 rounded-lg bg-white shadow-md border text-sm text-gray-600">
                                            <div className="p-2 text-left">
                                                {/*<span className="block text-gray-500/80 p-2">alivika@gmail.com</span>
                                                <a href="javascript:void(0)" className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150">
                                                    Add another account
                                                </a>
                                                <div className="relative rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 absolute right-1 inset-y-0 my-auto pointer-events-none">
                                                        <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
                                                    </svg>
                                                    <select className="w-full cursor-pointer appearance-none bg-transparent p-2 outline-none">
                                                        <option disabled selected>Theme</option>
                                                        <option>Dark</option>
                                                        <option>Light</option>
                                                    </select>
                                                </div>*/}
                                                <button className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150"
                                                        onClick={onLogout}
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    ) : ""
                                }
                            </div>
                        </div>
                    </div>
                    <div className="overflow-auto">

                        <ul className="text-sm font-medium flex-1">
                            {
                                mohasaba.map((item, idx) => (
                                    (item.ev !== 'users' || username === '104734') ?
                                <li key={idx}>

                                        {(idx == 2 ) &&<div className="pt-2 mt-2 border-t">
                                        </div>}
                                        <a href='#'
                                           className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                                           onClick={() => setCurrentPage(item.ev)}>
                                            <div className="text-gray-500">{item.icon}</div>
                                            {item.name}
                                        </a>
                                    </li> : <p></p>
                                ))
                            }
                        </ul>

                        {/*<div className="pt-2 mt-2 border-t">
                        </div>
                        <ul className="text-sm font-medium flex-1">
                            //todo

                            {
                                navigation.map((item, idx) => (
                                    <li key={idx}>
                                        <a href='#'
                                           className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                                           onClick={() => setCurrentPage(item.ev)}>
                                            <div className="text-gray-500">{item.icon}</div>
                                            {item.name}
                                        </a>

                                    </li>
                                ))
                            }
                            <li>
                                <Menu items={nestedNav}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/>
                                    </svg>
                                    Billing
                                </Menu>
                            </li>
                        </ul>
                        <div className="pt-2 mt-2 border-t">
                            <ul className="text-sm font-medium">
                                {
                                    navsFooter.map((item, idx) => (
                                        <li key={idx}>
                                            <a href={item.href}
                                               className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                                                <div className="text-gray-500">{item.icon}</div>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>*/}
                    </div>
                </div>
            </nav>
            <nav style={{
                width:"70%",
                position:"absolute",
                left:"30%"
            }}>
                {renderPage()}
            </nav>
        </>
    );
};

export default Sidebar;