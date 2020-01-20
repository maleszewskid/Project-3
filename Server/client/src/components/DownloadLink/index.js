import React from 'react';
import { PDFDownloadLink} from '@react-pdf/renderer'
import Quote from '../PDF/index'

const Link = () => {
    return (
        <div>
            <PDFDownloadLink document={<Quote />} fileName="somename.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
        </div>
    )
}


export default Link;