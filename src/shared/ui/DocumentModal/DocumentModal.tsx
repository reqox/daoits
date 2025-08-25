import clsx from 'clsx';
import styles from './DocumentModal.module.scss';
import { useEffect, useRef, useState, type FC } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface DocumentModalProps {
  isOpen: boolean;
  pdfUrl: string;
  f: () => void;
}
export const DocumentModal: FC<DocumentModalProps> = ({
  isOpen,
  f,
  pdfUrl,
}) => {
  const bodyRef = useRef(document.body);
  useEffect(() => {
    const style = bodyRef.current.style;
    if (isOpen) {
      style.overflow = 'hidden';
    } else {
      style.overflow = 'auto';
    }
    return () => {
      style.overflow = 'auto';
    };
  }, [isOpen]);

  const [numPages, setNumPages] = useState<number>(0);
  const pages = Array.from({ length: numPages }, (_, i) => i + 1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      f();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        f();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, f]);

  return (
    isOpen && (
      <section className={styles['document']} onClick={handleBackdropClick}>
        <div className={clsx(styles['document__inner'])}>
          <div className={styles['document-header']}>
            <h2 className={styles['document-title']}>PDF</h2>
            <button onClick={f} className={styles['document-button']}>
              <span></span>
              <span></span>
            </button>
          </div>

          <div className={styles['document__body']}>
            <Document
              className={styles['document__body-viewer']}
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {pages.map((page) => (
                <Page
                  className={styles['document__body-page']}
                  key={`page_${page}`}
                  pageNumber={page}
                  renderAnnotationLayer={true}
                  renderTextLayer={true}
                  scale={1.3}
                />
              ))}
            </Document>
          </div>
        </div>
      </section>
    )
  );
};
