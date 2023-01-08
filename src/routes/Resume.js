import React, { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../index.css';

const Projects = () => {
  const [mode, setMode] = useState('light');
  useEffect(() => {
    if (window.location.pathname === '/projects') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, []);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
  const resumePath = "../../content/Inga_Zhuravleva_Resume.pdf"

  return (
    <div className={`${mode}`}>
      <Navbar />
      <Document file={resumePath} onLoadSuccess={onDocumentLoadSuccess}>
        <Page 
            pageNumber={pageNumber} 
            height={800}
            file={resumePath}
            onLoadSuccess={onDocumentLoadSuccess}/>
      </Document>   
      <Footer />
    </div>
  )
}

export default Projects;