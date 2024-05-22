import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import useFetchwithID from "../controller/useFetchwithID";
import wahda_logo from '../icons/logo.svg'
import MyUrl from "../controller/url";


const A5 = () => {

const location = useLocation();
const query = new URLSearchParams(location.search);



    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };
    const kyd = {
        position: 'absolute',
        right: '10%',
        top:'10%',
        width: '150px',
        height: '150px',
        padding:'3.5%',
        border: '1px solid ',
    }
    const money = {
        position: 'absolute',
        left: '10%',
        bottom:'15%',
        width: '150px',
        height: '150px',
        padding:'2%',
        border: '1px solid ',
    }
    const names = {
        position: 'absolute',
        right: '32%',
        top: '15%'
    }
    const job_entry = {
        position: 'absolute',
        right: '75px',
        top: '60px',
        fontFamily: 'sans-serif',
        fontSize: '25px',
        fontWeight: 'bold',
    }
    const account = {
        position: 'absolute',
        right: '20%',
        top: '15%',
        fontFamily: 'sans-serif',
        fontSize: '25px',
        fontWeight: 'bold',
    }
    const management = {
        position: 'absolute',
        right: '15%',
        bottom:'29%',

    }
    const sign = {
        position: 'absolute',
        right: '15%',
        bottom:'22%',

    }
    /*const squre = {
        position: 'absolute',
        left: '2%',
        bottom:'2%',

        width: '95%',
        height: '95%',
        // padding:'2%',
        // border: '1px solid ',
    }*/
    const first_squre = {
        position: 'absolute',
        left: '2%',
        right:'2%' ,
        top:'1%',

        width: '95%',
        height: '35%',
        padding:'5%',
        border: '1px solid ',
    }
    const second_squre = {
        position: 'absolute',
        left: '2%',
        right:'2%' ,
        top:'37%',
        // bottom:'2%',

        width: '95%',
        height: '30%',
        padding:'5%',
        border: '1px solid ',
    }
    const tird_squre = {
        position: 'absolute',
        // left: '2%',
        right:'3%' ,
        top:'68%',
        // bottom:'2%',

        width: '50%',
        height: '31%',
        padding:'5%',
        border: '1px solid ',
    }
    const fourth_squre = {
        position: 'absolute',
        left :'2%' ,
        top:'68%',
        width: '44%',
        height: '31%',
        padding:'5%',
        border: '1px solid ',
    }

    const image_size = {
        // position : 'relative',
        position:'absolute',
        // left: '1%',
        // top:'0%',
        // padding: '2%',
        // bottom: '10%',
        left:'15px',
        top: '1px',
        width: '35%',
        height: '65%',
    }

    const [data , err, loading ] = useFetchwithID(MyUrl+'/restrictions/ID/',query.get('id'))


    return (
        <>
            {/*<p>{query.get('id')}</p>*/}
            {/*{JSON.stringify(data)}*/}
            {loading &&
                // <div style={squre}>
                        <div>
                    <div style={first_squre}>

                        <div style={job_entry}>
                            <p>{data[0].resID} : رقم القيد </p>
                        </div>
                        <img src={wahda_logo} style={image_size} alt="wahda"/>

                        <div style={kyd}>
                            <p>قيد</p>
                            {(data[0].debit != 0) ? '  خصم' : ' إضافة'}
                        </div>
                        <div style={names}>
                            <p>{data[0].name}</p>
                        </div>

                    </div>
                    <div style={second_squre}>
                        <div style={account}>
                            <p>{data[0].account} : رقم الحساب </p>
                        </div>
                    </div>
                    <div style={tird_squre}>
                        <div style={management}>
                            <p> إدارة/فرع : {data[0].management_rel.name} </p>
                        </div>
                        <div style={sign}>
                            <p>التـــوقيـــع</p>
                        </div>
                    </div>
                    <div style={fourth_squre}>
                        <div style={money}>
                            <p>المبلغ</p>
                            <p>{parseFloat(data[0].debit + data[0].credit)}</p>
                        </div>
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
  
  .no-print {
    display: none !important;
  }
  @page {
    size: auto;   /* auto is the initial value */
    margin: 0;  /* this affects the margin in the printer settings */
}
}
`;

const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);