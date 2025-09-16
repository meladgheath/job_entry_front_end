import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import useFetchwithID from "../controller/useFetchwithID";
import wahda_logo from '../icons/WhatsApp Image 2025-07-02 at 12.13.42 PM2.jpeg'
import MyUrl from "../controller/url";
import Btn from "../component/Btn";

import {convert} from "../controller/word";
import {useBearStore} from "../controller/useBearStore";


const A5 = () => {

const location = useLocation();
const query = new URLSearchParams(location.search);
const [amountBefore , setAmountBefore] = useState()
const [amountAfter , setAmountAfter] = useState()
const [type , setType ] = useState()
    const [toggal , setToggle ] = useState()
    const [amount, setAmount ] = useState('')


    // const username = useBearStore((state) => state.username)
    const name = useBearStore((state)=> state.name)
    const username  = useBearStore((state) => state.username)


    const kyd = {
        position: 'absolute',
        right: '1%',
        top:'1%',
        // padding:'2%',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        fontWeight: 'bold',
        // border: '1px solid ',
    }
    const account_detail = {
        position: 'absolute',
        right: '15%',
        bottom:'0%',
        padding:'2%',
        fontFamily: 'Montserrat',
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'right'
    }
    const isBransh = {
        position: 'absolute',
        right: '55%',
        bottom:'0%',
        padding:'2%',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'right'
    }
    const money = {
        position: 'absolute',
        right: '4%',
        bottom:'18%',
        fontFamily: 'Montserrat',
        fontSize: '18px',
        // fontWeight: 'bold',
    }

    const dates = {
        position: 'absolute',
        right: '40%',
        top: '15%'
    }
    const job_entry = {
        position: 'absolute',
        right: '5%',
        top: '5%',
        fontFamily: 'sans-serif',
        fontSize: '18px',
        padding: '1%',
    }
    const job_entry_id = {
        position: 'absolute',
        right: '15%',
        top: '5%',
        fontFamily: 'sans-serif',
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'right',
    }
    const account = {
        position: 'absolute',
        right: '20%',
        top: '15%',
        fontFamily: 'sans-serif',
        fontSize: '25px',
        fontWeight: 'bold',
    }
    const user_name = {
        position: 'absolute',
        right: '15%',
        top:'10%',

    }
    const head_department = {
        position: 'absolute',
        right: '18%',
        top:'10%'
    }

    const sign = {
        position: 'absolute',
        right: '10%',
        bottom:'25%',
        textAlign: 'right',
        fontFamily: 'sans-serif',
        fontSize: '13px',
        fontWeight: 'bold',

    }

    const money_title = {
        position: 'absolute',
        left: '45%',
        top: '0%',
        fontFamily: 'Montserrat',
        fontSize: '25px',
        fontWeight: 'bold',
        paddingTop: '2%',

    }
    const total = {
        position: 'absolute',
        right: '4%',
        bottom:'2%',
        fontFamily: 'Montserrat',
        fontSize: '18px',
        fontWeight: 'bold',
    }
    const money_letter = {
        position: 'absolute',
        // right: '4%',
        // top: '25%',
        bottom:'2%',
        left: '10%',
        fontFamily: 'Montserrat',
        fontSize: '18px',
        textAlign: 'right'
        // fontWeight: 'bold',
    }

    const crosLine = {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '14%',
        // paddingTop: '2%',
        border: '1px solid ',
    }
    const crosLine2 = {
        position: 'absolute',
        left: '0%',
        right: '0%',
        bottom: '14%',
        // paddingTop: '2%',
        border: '1px solid ',
    }
    const first_squre = {
        position: 'absolute',
        left: '3%',
        // right:'2%' ,
        top:'2%',

        width: '93%',
        height: '20%',
        padding:'5%',
        border: '1px solid ',
    }
    const second_squre = {
        position: 'absolute',
        right: '4%',
        top:'23%',
        width: '55%',
        height: '51%',
        padding:'5%',
        border: '1px solid ',
        // textAlign: 'justify',
        textAlign: 'right',
        // direction:'rtl'
    }
    const tird_squre = {
        position: 'absolute',
        right:'4%' ,
        top:'75%',
        width: '30%',
        height: '22%',
        padding:'5%',
        border: '1px solid ',

        fontFamily: 'sans-serif',
        fontSize: '14px',
        fontWeight: 'bold',
    }
    const fourth_squre = {
        position: 'absolute',
        left :'3%' ,
        top:'23%',
        width: '37.5%',
        height: '51%',
        padding:'5%',
        border: '1px solid ',
    }
    const head_department_sign_squre = {
        position: 'absolute',
        right:'34.5%' ,
        top:'75%',
        width: '30%',
        height: '22%',
        padding:'5%',
        border: '1px solid ',

        fontFamily: 'sans-serif',
        fontSize: '16px',
        fontWeight: 'bold',
    }
    const management_sing_squre = {
        position: 'absolute',
        right:'65%' ,
        top:'75%',
        width: '32%',
        height: '22%',
        padding:'5%',
        border: '1px solid ',

        fontFamily: 'sans-serif',
        fontSize: '14px',
        fontWeight: 'bold',
    }
    const image_size = {
        position:'absolute',
        left:'1%',
        top: '0%',
        width: '30%',
        height: '60%',
    }
    const bb = {
        position: 'absolute',
        left:'0%'
    }
    const [data , err, loading ] = useFetchwithID(MyUrl+'/restrictions/ID/'+query.get('id'))

const [totalNumber , setTotalNumber] = useState()
    const [tasData, setTasData] = useState()




    useEffect(() => {
        if (loading) {
            let num = Number(data[0].credit) + Number(data[0].debit)
            console.log(num)
                if (data[0].status)
                    fetch(MyUrl+"/tas/"+num+"/"+data[0].resID)
                        .then(response => response.json())
                        .then(res => {
                            if (res.success)
                                setTasData(res.data)
                                else
                                throw new Error("unkonw error ")
                        })
                        .catch(err=> setTasData(undefined))

            const number = parseFloat(data[0].debit) + parseFloat(data[0].credit)
            const numberString = number.toString();
            const [beforeDot, afterDot] = numberString.split('.');
            setType((data[0].management_rel.type === 'M')? 'قيد' : 'إشعار')
            setToggle(data[0].management_rel.type)
/*

            setAmountBefore(beforeDot);
            setAmountAfter(afterDot);
*/


            let dd = convert(beforeDot) + ' دينار '

            dd = dd + ((afterDot > 0 ) ? ' و ' + convert(afterDot) + ' درهم ' : '' )
            setAmount(dd)

            setTotalNumber(number.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))
        }
    }, [loading]);


    return (
        <>
            <br/>
            {loading &&
                <div>
                    {/*{tasData && JSON.stringify(tasData)}*/}
                    <div style={first_squre}>
                        <div style={job_entry_id}>
                        <p>{data[0].resID} : رقم القيد </p>
                        </div>
                        <img src={wahda_logo} style={image_size} alt="wahda"/>
                        <div style={kyd}>
                            <p>{type}</p>
                            <p>{(data[0].debit != 0) ? '  خصم' : ' إضافة'}</p>
                        </div>
                        <div style={account_detail}>
                            <p>{data[0].accountName}</p>
                            <p>{data[0].account} : رقم الحساب </p>
                        </div>
                        <div style={dates}>
                            <p> {new Date(data[0].rest_date).toISOString().split('T')[0]} : التـــاريخ </p>
                        </div>
                        {  (toggal === 'B') &&
                        <div style={isBransh}>
                            <p>  إلي    :    مصرف الوحدة </p>
                            <p>العنوان : {data[0].management_rel.name} </p>
                        </div>
                        }
                    </div>
                    <div style={second_squre}>
                                <div style={job_entry}>
                                    <p>{data[0].name}</p>
                                </div>
                            </div>
                            <div style={tird_squre}>
                                <div style={user_name}>

                                <p dir='rtl'> مستخدم النظام  :  {name}</p>
                        </div>
                        <div style={sign}>
                            {/*<p>{username}</p>*/}
                            <p>........................................  : التــــوقيـــع  </p>
                        </div>
                    </div>
                    <div style={fourth_squre}>
                        <div style={money_title}>
                            قيمـــــة القيد
                        </div>
                        <hr style={crosLine}/>
                        <div style={money}>
                            {/*<p>المبلغ</p>*/}
                            {tasData && tasData.map((item)=>
                            <p>{item.value}</p>
                            )}
                            {/*<p>  { totalNumber}  </p>*/}
                        </div>

                        <hr style={crosLine2}/>
                        <div style={total}>
                            <p>{totalNumber}</p>
                        </div>

                        <div style={money_letter}>
                            { amount}
                        </div>

                    </div>
                    <div style={head_department_sign_squre}>
                        <div style={head_department}>
                            <p>رئيــــس القســـم</p>
                        </div>
                        <div style={sign}>
                            {/*<p>{username}</p>*/}
                            <p>...................................... : التــــوقيـــع </p>
                        </div>
                    </div>
                    <div style={management_sing_squre}>
                        <div style={head_department}>
                            <p>مـــــديـــر إدراة المحــاسبـــة</p>
                        </div>
                        <div style={sign}>
                            {/*<p>{username}</p>*/}
                            <p>........................................ : التــــوقيـــع </p>
                        </div>
                    </div>
                    <div style={bb}>
                        <Btn type='button' caption='طبــاعة' click={() =>
                            window.print()
                        }/>
                    </div>
                        </div>
            }
        </>
    );
};

export default A5;

// CSS Styles
const styles = `
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.horizontal-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background-color: black;
}

.horizontal-line:nth-child(1) {
  top: 33.33%; /* Divide the height into 3 equal parts */
}

.horizontal-line:nth-child(2) {
  top: 66.66%; /* Divide the height into 3 equal parts */
}

@media print {
  body {
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }
  button {
    display: none !important;
  }
  .no-print {
    display: none !important;
    
  }
  @page {
    size: auto;
     size : A5 landscape;
     margin: 0;  
}
}
`;

const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);