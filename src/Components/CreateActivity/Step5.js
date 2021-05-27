import React, { useState } from 'react'
import { ViewPdf } from '../ViewPdf'

export const Step5 = () => {

    const [pdfViewer, setPdfViewer] = useState('');

    const handleChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                setPdfViewer(e.target.result)
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    }

    return (
        <div>
            <input type="file" onChange={handleChange} accept="application/pdf" />
            <ViewPdf src={pdfViewer} />
        </div>
    )
}
