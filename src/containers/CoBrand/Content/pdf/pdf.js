import React, { useState } from 'react'
import { Document, Page, pdfjs} from 'react-pdf'


export const Pdf = () => {
  pdfjs.GlobalWorkerOptions.workerSrc=`` 
  const url="http://www.africau.edu/images/default/sample.pdf"
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  //when document gets loaded successfully
  function onDocumentLoadSuccess({ numPages}) {
    setNumPages(numPages);
    setPageNumber(1);
  }


  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }


  return (
    <div className='container'>
      <Document file={url}
      onLoadSuccess={onDocumentLoadSuccess}
      >
      <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <div className="pagec">
        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </div>
        <div className="buttonc">
        <button 
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          className="Pre"
        
        >
          Previous
        </button>
        <button 
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}  
        >
          Next
        </button>
        </div>
      </div>

    </div>
  )
}

export default Pdf