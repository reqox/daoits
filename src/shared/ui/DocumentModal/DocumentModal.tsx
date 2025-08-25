import clsx from 'clsx';
import styles from './DocumentModal.module.scss';
import { useEffect, useRef, type FC } from 'react';

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

  return (
    isOpen && (
      <section className={styles['document']}>
        <div className={clsx(styles['document__inner'])}>
          <div className={styles['document-header']}>
            <h2 className={styles['document-title']}>PDF</h2>
            <button onClick={f} className={styles['document-button']}>
              <span></span>
              <span></span>
            </button>
          </div>

          <div className={styles['document__pdf']}>
            <iframe src={pdfUrl} className={styles['document__pdf-frame']} />
          </div>
        </div>
      </section>
    )
  );
};
