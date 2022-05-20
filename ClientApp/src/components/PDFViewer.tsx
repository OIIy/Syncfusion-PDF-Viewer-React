import React, { Component, useState } from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, Inject } from '@syncfusion/ej2-react-pdfviewer';
import axios from 'axios';

export const PDFViewer = () => {
    const[file, setFile] = useState("");
    const[fileName, setFileName] = useState("");

    const saveFile = (e: any) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    const uploadFile = async (e: any) => {
        console.log(file);
        const formData = new FormData();
        formData.append("formFile", file);
        formData.append("fileName", fileName);

        try {
            const res = await axios.post("Upload", formData);
            console.log(res);
        } catch (ex: any) {
            console.log(ex);
        }
    }

    return (
        <div>
        <h1>Hello World</h1>
        <div>
            <input type="file" onChange={saveFile} />
            <input type="button" className="btn btn-primary mb-2" value="Upload" onClick={uploadFile} />
        </div>
        <div className='control-section'>
                <PdfViewerComponent id="container" documentPath="pdf.pdf" serviceUrl="https://localhost:44365/pdfviewer" style={{ 'height': '640px' }}>
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields]} />
            </PdfViewerComponent>
        </div>
	 </div>
    );
}
