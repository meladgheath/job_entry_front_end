import { PDFViewer } from '@react-pdf/renderer';
import MyDoc from "./MyDoc";
import React from "react";

const Page = () => {

    return (
        <div >
        <PDFViewer style={{ width: '80%', height: '100%', alignContent:'center', paddingTop: '10%' }}>
            <MyDoc />
        </PDFViewer>
        </div>

    )
}
export default Page;
