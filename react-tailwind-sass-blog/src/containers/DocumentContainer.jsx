import React, { useState, useEffect } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
// import './App.css';

function DocumentContainer() {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);

  // Dummy uploaded documents
  const dummyDocuments = [
    { name: 'Sample Document 1.pdf' },
    { name: 'Sample Document 2.pdf' },
    { name: 'Sample Document 3.pdf' },
  ];

  // Initialize documents with dummy documents
  useEffect(() => {
    setDocuments(dummyDocuments);
  }, []);

  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
  };

  const handleUpload = (e) => {
    const newDocuments = [...documents];

    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      newDocuments.push(file);
      // Notify the user of the upload status
      NotificationManager.success(`Uploaded: ${file.name}`, 'Document Upload');
    }

    setDocuments(newDocuments);
  };

  const handleDownload = (document) => {
    const blobURL = window.URL.createObjectURL(document);
    window.open(blobURL, '_blank');
    window.URL.revokeObjectURL(blobURL);

    // Show a notification when the file is downloaded
    NotificationManager.info(`Downloaded: ${document.name}`, 'Document Download');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const newDocuments = [...documents];

    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      const file = e.dataTransfer.files[i];
      newDocuments.push(file);
      // Notify the user of the upload status
      NotificationManager.success(`Uploaded: ${file.name}`, 'Document Upload');
    }

    setDocuments(newDocuments);
  };

  return (
    <div className="App" onDragOver={handleDragOver} onDrop={handleDrop}>
      <h1>Documents Tab</h1>
      <div className="document-list">
        {documents.map((document, index) => (
          <div key={index} className="document">
            <h3>{document.name}</h3>
            <button onClick={() => handleDocumentClick(document)}>Preview</button>
            <button onClick={() => handleDownload(document)}>Download</button>
          </div>
        ))}
      </div>
      <input type="file" multiple onChange={handleUpload} />
      {selectedDocument && (
        <div className="document-preview">
          <iframe
            src={window.URL.createObjectURL(selectedDocument)}
            width="100%"
            height="500px"
            title="Document Preview"
          ></iframe>
        </div>
      )}
      <NotificationContainer />
    </div>
  );
}

export default DocumentContainer;


// import React, { useState, useEffect } from 'react';
// import { NotificationContainer, NotificationManager } from 'react-notifications';
// import 'react-notifications/lib/notifications.css';
// // import './App.css';

// function DocumentContainer() {
//   const [documents, setDocuments] = useState([]);
//   const [selectedDocument, setSelectedDocument] = useState(null);

//   // Dummy uploaded documents
//   const dummyDocuments = [
//     { name: 'Sample Document 1.pdf' },
//     { name: 'Sample Document 2.pdf' },
//     { name: 'Sample Document 3.pdf' },
//   ];

//   // Initialize documents with dummy documents
//   useEffect(() => {
//     setDocuments(dummyDocuments);
//   }, []);

//   const handleDocumentClick = (document) => {
//     setSelectedDocument(document);
//   };

//   const handleUpload = (e) => {
//     const newDocuments = [...documents];

//     for (let i = 0; i < e.target.files.length; i++) {
//       const file = e.target.files[i];
//       newDocuments.push(file);

//       // Notify the user of the upload status
//       NotificationManager.success(`Uploaded: ${file.name}`, 'Document Upload');
//     }

//     setDocuments(newDocuments);
//   };

//   const handleDownload = (document) => {
//     const blobURL = window.URL.createObjectURL(document);
//     window.open(blobURL, '_blank');
//     window.URL.revokeObjectURL(blobURL);

//     // Show a notification when the file is downloaded
//     NotificationManager.info(`Downloaded: ${document.name}`, 'Document Download');
//   };

//   return (
//     <div className="App">
//       <h1>Documents Tab</h1>
//       <div className="document-list">
//         {documents.map((document, index) => (
//           <div key={index} className="document">
//             <h3>{document.name}</h3>
//             <button onClick={() => handleDocumentClick(document)}>Preview</button>
//             <button onClick={() => handleDownload(document)}>Download</button>
//           </div>
//         ))}
//       </div>
//       <input type="file" multiple onChange={handleUpload} />
//       {selectedDocument && (
//         <div className="document-preview">
//           <iframe
//             src={window.URL.createObjectURL(selectedDocument)}
//             width="100%"
//             height="500px"
//             title="Document Preview"
//           ></iframe>
//         </div>
//       )}
//       <NotificationContainer />
//     </div>
//   );
// }

// export default DocumentContainer;


// import React, { useState, useEffect } from 'react';
// import { NotificationContainer, NotificationManager } from 'react-notifications';
// import 'react-notifications/lib/notifications.css';
// // import './App.css';

// function DocumentContainer() {
//   const [documents, setDocuments] = useState([]);
//   const [selectedDocument, setSelectedDocument] = useState(null);
//   const [uploadedFileNames, setUploadedFileNames] = useState([]);

//   // Load file names from local storage on component mount
//   useEffect(() => {
//     const storedFileNames = localStorage.getItem('uploadedFileNames');
//     if (storedFileNames) {
//       setUploadedFileNames(JSON.parse(storedFileNames));
//     }
//   }, []);

//   // Update local storage whenever uploadedFileNames change
//   useEffect(() => {
//     localStorage.setItem('uploadedFileNames', JSON.stringify(uploadedFileNames));
//   }, [uploadedFileNames]);

//   // Dummy uploaded documents
//   const dummyDocuments = [
//     { name: 'Sample Document 1.pdf' },
//     { name: 'Sample Document 2.pdf' },
//     { name: 'Sample Document 3.pdf' },
//   ];

//   // Initialize documents with dummy documents
//   useEffect(() => {
//     setDocuments(dummyDocuments);
//   }, []);

//   const handleDocumentClick = (document) => {
//     setSelectedDocument(document);
//   };

//   const handleUpload = (e) => {
//     const newDocuments = [...documents];
//     const newFileNames = [...uploadedFileNames];

//     for (let i = 0; i < e.target.files.length; i++) {
//       const file = e.target.files[i];
//       newDocuments.push(file);
//       newFileNames.push(file.name);

//       // Notify the user of the upload status
//       NotificationManager.success(`Uploaded: ${file.name}`, 'Document Upload');
//     }

//     setDocuments(newDocuments);
//     setUploadedFileNames(newFileNames);
//   };

//   const handleDownload = (document) => {
//     const blobURL = window.URL.createObjectURL(document);
//     window.open(blobURL, '_blank');
//     window.URL.revokeObjectURL(blobURL);
//   };

//   return (
//     <div className="App">
//       <h1>Documents Tab</h1>
//       <div className="document-list">
//         {documents.map((document, index) => (
//           <div key={index} className="document">
//             <h3>{document.name}</h3>
//             <button onClick={() => handleDocumentClick(document)}>Preview</button>
//             <button onClick={() => handleDownload(document)}>Download</button>
//           </div>
//         ))}
//       </div>
//       <input type="file" multiple onChange={handleUpload} />
//       {selectedDocument && (
//         <div className="document-preview">
//           <iframe
//             src={window.URL.createObjectURL(selectedDocument)}
//             width="100%"
//             height="500px"
//             title="Document Preview"
//           ></iframe>
//         </div>
//       )}
//       <NotificationContainer />
//     </div>
//   );
// }

// export default DocumentContainer;


// import React, { useState, useEffect } from 'react';
// import { NotificationContainer, NotificationManager } from 'react-notifications';
// import 'react-notifications/lib/notifications.css';
// // import './App.css';

// function DocumentContainer() {
//   const [documents, setDocuments] = useState([]);
//   const [selectedDocument, setSelectedDocument] = useState(null);
//   const [uploadedFileNames, setUploadedFileNames] = useState([]);

//   // Load file names from local storage on component mount
//   useEffect(() => {
//     const storedFileNames = localStorage.getItem('uploadedFileNames');
//     if (storedFileNames) {
//       setUploadedFileNames(JSON.parse(storedFileNames));
//     }
//   }, []);

//   // Update local storage whenever uploadedFileNames change
//   useEffect(() => {
//     localStorage.setItem('uploadedFileNames', JSON.stringify(uploadedFileNames));
//   }, [uploadedFileNames]);

//   // Dummy uploaded documents
//   const dummyDocuments = [
//     { name: 'Sample Document 1.pdf' },
//     { name: 'Sample Document 2.pdf' },
//     { name: 'Sample Document 3.pdf' },
//   ];

//   // Initialize documents with dummy documents
//   useEffect(() => {
//     setDocuments(dummyDocuments);
//   }, []);

//   const handleDocumentClick = (document) => {
//     setSelectedDocument(document);
//   };

//   const handleUpload = (e) => {
//     const newDocuments = [...documents];
//     const newFileNames = [...uploadedFileNames];

//     for (let i = 0; i < e.target.files.length; i++) {
//       const file = e.target.files[i];
//       newDocuments.push(file);
//       newFileNames.push(file.name);

//       // Notify the user of the upload status
//       NotificationManager.success(`Uploaded: ${file.name}`, 'Document Upload');
//     }

//     setDocuments(newDocuments);
//     setUploadedFileNames(newFileNames);
//   };

//   const handleDownload = (document) => {
//     // Create a temporary anchor element to trigger the download
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(document);
//     link.download = document.name;
//     link.click();
//   };

//   return (
//     <div className="App">
//       <h1>Documents Tab</h1>
//       <div className="document-list">
//         {documents.map((document, index) => (
//           <div key={index} className="document">
//             <h3>{document.name}</h3>
//             <button onClick={() => handleDocumentClick(document)}>Preview</button>
//             <button onClick={() => handleDownload(document)}>Download</button>
//           </div>
//         ))}
//       </div>
//       <input type="file" multiple onChange={handleUpload} />
//       {selectedDocument && (
//         <div className="document-preview">
//           <iframe
//             src={URL.createObjectURL(selectedDocument)}
//             width="100%"
//             height="500px"
//             title="Document Preview"
//           ></iframe>
//         </div>
//       )}
//       <NotificationContainer />
//     </div>
//   );
// }

// export default DocumentContainer;



// import React, { useState } from 'react';
// import { NotificationContainer, NotificationManager } from 'react-notifications';
// import 'react-notifications/lib/notifications.css';
// // import './App.css';

// function DocumentContainer() {
//   const [documents, setDocuments] = useState([]);
//   const [selectedDocument, setSelectedDocument] = useState(null);

//   const handleDocumentClick = (document) => {
//     setSelectedDocument(document);
//   };

//   const handleUpload = (e) => {
//     const newDocuments = [...documents];
//     for (let i = 0; i < e.target.files.length; i++) {
//       const file = e.target.files[i];
//       newDocuments.push(file);
//       // Notify the user of the upload status
//       NotificationManager.success(`Uploaded: ${file.name}`, 'Document Upload');
//     }
//     setDocuments(newDocuments);
//   };

//   const handleDownload = (document) => {
//     // Replace this with actual download logic
//     alert(`Downloading: ${document.name}`);
//   };

//   return (
//     <div className="App">
//       <h1>Documents Tab</h1>
//       <div className="document-list">
//         {documents.map((document, index) => (
//           <div key={index} className="document">
//             <h3>{document.name}</h3>
//             <button onClick={() => handleDocumentClick(document)}>Preview</button>
//             <button onClick={() => handleDownload(document)}>Download</button>
//           </div>
//         ))}
//       </div>
//       <input type="file" multiple onChange={handleUpload} />
//       {selectedDocument && (
//         <div className="document-preview">
//           <iframe
//             src={URL.createObjectURL(selectedDocument)}
//             width="100%"
//             height="500px"
//           ></iframe>
//         </div>
//       )}
//       <NotificationContainer />
//     </div>
//   );
// }

// export default DocumentContainer;




// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { NotificationContainer, NotificationManager } from 'react-notifications';
// import 'react-notifications/lib/notifications.css';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// // import './App.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function DocumentContainer() {
//   const [documents, setDocuments] = useState([]);
//   const [selectedDocument, setSelectedDocument] = useState(null);
//   const [numPages, setNumPages] = useState(null);

//   const handleDocumentClick = (document) => {
//     setSelectedDocument(document);
//   };

//   const handleDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   const handleUpload = (e) => {
//     const newDocuments = [...documents];
//     for (let i = 0; i < e.target.files.length; i++) {
//       const file = e.target.files[i];
//       newDocuments.push(file);
//       // Notify the user of the upload status
//       NotificationManager.success(`Uploaded: ${file.name}`, 'Document Upload');
//     }
//     setDocuments(newDocuments);
//   };

//   const handleDownload = (document) => {
//     // Replace this with actual download logic
//     alert(`Downloading: ${document.name}`);
//   };

//   return (
//     <div className="App">
//       <h1>Documents Tab</h1>
//       <div className="document-list">
//         {documents.map((document, index) => (
//           <div key={index} className="document">
//             <h3>{document.name}</h3>
//             <button onClick={() => handleDocumentClick(document)}>Preview</button>
//             <button onClick={() => handleDownload(document)}>Download</button>
//           </div>
//         ))}
//       </div>
//       <input type="file" multiple onChange={handleUpload} />
//       {selectedDocument && (
//         <div className="document-preview">
//           <Document
//             file={selectedDocument}
//             onLoadSuccess={handleDocumentLoadSuccess}
//           >
//             {Array.from(new Array(numPages), (el, index) => (
//               <Page
//                 key={`page_${index + 1}`}
//                 pageNumber={index + 1}
//                 width={400}
//               />
//             ))}
//           </Document>
//         </div>
//       )}
//       <NotificationContainer />
//     </div>
//   );
// }

// export default DocumentContainer;
