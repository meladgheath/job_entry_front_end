import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import useFetchwithID from "../controller/useFetchwithID";
import wahda_logo from '../icons/logo.svg'
import MyUrl from "../controller/url";
import Btn from "../component/Btn";

import {convert} from "../controller/word";


const A5 = () => {

const location = useLocation();
const query = new URLSearchParams(location.search);
const [amountBefore , setAmountBefore] = useState()
const [amountAfter , setAmountAfter] = useState()

    const kyd = {
        position: 'absolute',
        right: '0%',
        top:'0%',
        // width: '150px',
        // height: '150px',
        padding:'2%',
        fontFamily: 'Montserrat',
        fontSize: '25px',
        fontWeight: 'bold',
        // border: '1px solid ',
    }
    const account_detail = {
        position: 'absolute',
        right: '0%',
        bottom:'0%',
        padding:'2%',
        fontFamily: 'Montserrat',
        fontSize: '25px',
        fontWeight: 'bold',
    }
    const money = {
        position: 'absolute',
        right: '4%',
        bottom:'5%',
        fontFamily: 'Montserrat',
        fontSize: '25px',
        fontWeight: 'bold',
    }
    const money_letter = {
        position: 'absolute',
        right: '4%',
        bottom:'25%',
        fontFamily: 'Montserrat',
        fontSize: '18px',
        // fontWeight: 'bold',
    }
    const dates = {
        position: 'absolute',
        right: '32%',
        top: '15%'
    }
    const job_entry = {
        position: 'absolute',
        right: '5%',
        top: '5%',
        fontFamily: 'sans-serif',
        fontSize: '20px',
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
        fontFamily: 'sans-serif',
        fontSize: '20px',
        fontWeight: 'bold',
    }
    const sign = {
        position: 'absolute',
        right: '15%',
        bottom:'22%',
        fontFamily: 'sans-serif',
        fontSize: '20px',
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
    const crosLine = {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '25%',
        // paddingTop: '2%',
        border: '1px solid ',
    }
    const first_squre = {
        position: 'absolute',
        left: '3%',
        // right:'2%' ,
        top:'2%',

        width: '93%',
        height: '35%',
        padding:'5%',
        border: '1px solid ',
    }
    const second_squre = {
        position: 'absolute',
        left: '3%',
        top:'38%',
        width: '93%',
        height: '30%',
        padding:'5%',
        border: '1px solid ',
    }
    const tird_squre = {
        position: 'absolute',
        right:'4%' ,
        top:'69%',
        width: '49%',
        height: '30%',
        padding:'5%',
        border: '1px solid ',
    }
    const fourth_squre = {
        position: 'absolute',
        left :'3%' ,
        top:'69%',
        width: '43%',
        height: '30%',
        padding:'5%',
        border: '1px solid ',
    }

    const image_size = {
        position:'absolute',
        left:'5%',
        top: '10px',
        width: '30%',
        height: '60%',
    }
    const bb = {
        position: 'absolute',
        left:'0%'
    }


    const [data , err, loading ] = useFetchwithID(MyUrl+'/restrictions/ID/',query.get('id'))

    useEffect(() => {
        if (loading) {
            const number = data[0].debit + data[0].credit

            const numberString = number.toString();
            const [beforeDot, afterDot] = numberString.split('.');

            setAmountBefore(beforeDot); // Output: "521480"
            setAmountAfter(afterDot); // Output: "5210"

        }
    }, [loading]);


    return (
        <>
            {/*<p>{query.get('id')}</p>*/}
            {/*{JSON.stringify(data)}*/}

            {loading &&
                // <div style={squre}>
                        <div>
                    <div style={first_squre}>
                        <img src={wahda_logo} style={image_size} alt="wahda"/>
                        <div style={kyd}>
                            <p>قيد</p>
                            <p>{(data[0].debit != 0) ? '  خصم' : ' إضافة'}</p>
                        </div>
                        <div style={account_detail}>
                            <p>{data[0].accountName}</p>
                                <p>{data[0].account} : رقم الحساب </p>
                        </div>
                        <div style={dates}>
                            <p> {new Date(data[0].rest_date).toISOString().split('T')[0]}  :  التـــاريخ  </p>
                        </div>
                    </div>
                            <div style={second_squre}>
                                <div style={job_entry}>
                                    <p>{data[0].resID} : رقم القيد </p>
                                    <p>{data[0].name}</p>
                                </div>
                            </div>
                            <div style={tird_squre}>
                                <div style={user_name}>
                                <p> مســـتخدم النـــظام  :  ميلاد التاورغي   </p>
                        </div>
                        <div style={sign}>
                            <p>.........................................  : التــــوقيـــع  </p>
                        </div>
                    </div>
                    <div style={fourth_squre}>
                        <div style={money_title}>
                            قيمـــــة القيد
                        </div>
                        <hr style={crosLine}/>

                        <div style={money_letter}>

                            {convert(parseFloat(amountBefore)) +   "دينار و " + convert(parseFloat(amountAfter)) + "درهم"}
                        </div>
                        <div style={money}>
                            {/*<p>المبلغ</p>*/}
                            <p>  { "  دل "  + amountBefore+"."+amountAfter  }  </p>
                        </div>
                    </div>
                            {/*<button type='button' className='b' onClick={()=> window.print()}>here</button>*/}
                            <div style={bb}>
                            <Btn  type='button' caption='طبــاعة' click={()=> window.print()} />
                            </div>
                        </div>

            }
            {/*<div style={firstHorizontalLineStyle}></div>*/}
            {/*<div style={secondHorizontalLineStyle}></div>*/}

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