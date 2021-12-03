import React, {useState} from "react";
import { Document, Page } from "react-pdf";


function Pdf2() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages}) {
        setNumPages(numPages);
    }

    return (
        <div>
            
        </div>
    )
}