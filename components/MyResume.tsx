"use client";
import React, { useCallback, useState } from "react";
import { Document, pdfjs, Page } from "react-pdf";
import { useResizeObserver } from "@wojtekmaj/react-hooks";

import type { PDFDocumentProxy } from "pdfjs-dist";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Button from "./ui/Button";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const resizeObserverOptions = {};

const maxWidth = 800;

type PDFFile = string | File | null;

export default function MyResume() {
  const [file, setFile] = useState<PDFFile>("../BrandonMitchellResume-web.pdf");
  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { files } = event.target;

    if (files && files[0]) {
      setFile(files[0] || null);
    }
  }

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <div className="max-w-[800px] m-auto px-4 lg:px-0" ref={setContainerRef}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        {/* <Page
          key={`page_${1}`}
          pageNumber={1}
          width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
        /> */}
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={
              containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
            }
            className={`page_${index + 1} ${index === 1 && "mt-4"}`}
          />
        ))}
      </Document>
      <Button
        href={"../BrandonMitchellResume-web.pdf"}
        download="Brandon Mitchell Resume"
        className="mt-16 border-dark bg-dark text-light block max-w-xs m-auto text-center md:text-lg xl:text-xl hover:bg-transparent hover:text-dark transition-all"
      >
        Download PDF
      </Button>
    </div>
  );
}
