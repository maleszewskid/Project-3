import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import Quote from '../Components/Doc'


const Page = () => {
    return (
        <PDFViewer>
            <Quote />

        </PDFViewer>
    );
};

export default Page;

