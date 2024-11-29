import React, { useState } from 'react';
import './PDFConverter.css'; // Import the CSS file for styling
import '../MainContent.css';
import { jsPDF } from 'jspdf';

const PdfConverter: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
    } else {
      alert('Please drop a valid image file.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
    } else {
      alert('Please select a valid image file.');
    }
  };

  const handleBrowseClick = () => {
    document.getElementById('fileInput')?.click();
  };

  const convertToPdf = () => {
    if (!selectedFile) {
      alert('No file selected.');
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const imageUrl = event.target?.result as string;

      const pdf = new jsPDF('portrait', 'mm', 'a4');
      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = img.width;
        const imgHeight = img.height;

        // Scale the image to fit within the page dimensions
        const scaleFactor = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);

        const imgScaledWidth = imgWidth * scaleFactor;
        const imgScaledHeight = imgHeight * scaleFactor;

        const xOffset = (pageWidth - imgScaledWidth) / 2;
        const yOffset = (pageHeight - imgScaledHeight) / 2;

        pdf.addImage(img, 'JPEG', xOffset, yOffset, imgScaledWidth, imgScaledHeight);
        pdf.save('converted.pdf');
      };
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
    <main className="main-container">
      <div className="main-content">
        <div className="converter">
          <h1>Pdf Converter</h1>
          <h2>The Vision Behind Lalolens</h2>
          <p>Drop an image or upload it to convert to a PDF.</p>

          <div
            className="drop-zone"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={handleBrowseClick}
          >
            Drag and Drop an Image Here or Click to Browse
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
            />
          </div>
          <button
            onClick={convertToPdf}
            disabled={!selectedFile}
            className="convert-btn"
          >
            Convert to PDF
          </button>
        </div>
      </div>
    </main>
  );
};

export default PdfConverter;
