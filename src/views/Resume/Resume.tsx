import React from 'react';
import styles from './Resume.module.css';
import resumePdf from '../../assets/resume.pdf';

const Resume: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Resume</h1>
        <p className={styles.description}>
          Review my professional experience below, or download a copy for your records.
        </p>

        {/* The download attribute forces the browser to download instead of navigate */}
        <a
          href={resumePdf}
          download="DallinJackson_Resume.pdf"
          className={styles.downloadBtn}
        >
          Download PDF
        </a>
      </div>

      {/* The PDF Viewer Container */}
      <div className={styles.viewerContainer}>
        <object
          data={resumePdf}
          type="application/pdf"
          className={styles.pdfObject}
        >
          {/* Fallback for browsers that don't support native PDF rendering */}
          <div className={styles.fallback}>
            <p>Your browser does not support inline PDFs.</p>
            <a href={resumePdf} download="Jackson_Resume.pdf" className={styles.downloadBtn}>
              Download the PDF instead
            </a>
          </div>
        </object>
      </div>
    </div>
  );
};

export default Resume;
