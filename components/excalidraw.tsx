"use client";
import {
  Excalidraw,
  convertToExcalidrawElements,
} from "@excalidraw/excalidraw";
// import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
  return (
    <>
      <style jsx global>{`
        body,
        html {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>
      <main style={{ height: "100vh", width: "100vw", margin: 0, padding: 0 }}>
        <Excalidraw />
      </main>
    </>
  );
};

export default ExcalidrawWrapper;
