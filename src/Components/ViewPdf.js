import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export const ViewPdf = ({ src }) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [showReader, setShowReader] = useState(false);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setShowReader(true);
    };

    const onDocumentLoadErr = (e) => console.log(e);

    const nextPage = () => setPageNumber(pageNumber + 1);

    const previusPage = () => setPageNumber(pageNumber - 1);

    return (

        <div className="pdfViewer">

            <div className="pdfViewer_Content">

                <Document
                    className="pdf"
                    file={src}
                    options={{ workerSrc: "/pdf.worker.js" }}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onSourceError={onDocumentLoadErr}
                    loading={() => setShowReader(false)}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                {
                    showReader && (
                        <div className="controls-pdf">
                            {
                                pageNumber - 1 >= 1 ? (
                                    <div className="control" onClick={previusPage}>{"<"}</div>
                                ) : (
                                    <div className="control">{"<"}</div>
                                )
                            }
                            <div className="control page">{pageNumber} - {numPages}</div>
                            {
                                pageNumber + 1 <= numPages ? (
                                    <div className="control" onClick={nextPage}>{">"}</div>
                                ) : (
                                    <div className="control">{">"}</div>
                                )
                            }
                        </div>
                    )
                }

            </div>

        </div>
    )
}
