"use client"
import React from "react";
import Drop from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

const DropFile = () => {   
   
   const handleChangeStatus = ({ meta, file }, status) => {
      console.log(status, meta, file);
   };
   
   const handleSubmit = (files) => {
      console.log(files.map((f) => f.meta));
   };
   return (
      <Drop         
         onChangeStatus={handleChangeStatus}
         onSubmit={handleSubmit}
         inputContent="Drop files here to upload"
         accept="image/*,audio/*,video/*"
         styles={{
            dropzone: {
               minHeight: 200,
               maxHeight: 250,
               width: "100%",
               backgroundColor: "#f2f4fa",
               border: "1px dashed #DDDFE1",
               overflow: "hidden",
            },
            inputLabel: {
               color: "#7e7e7e",
               fontSize: "18px",
               fontWeight: "normal",
               backgroundColor: "#f2f4fa",
            },
         }}
      />
   );
};
export default DropFile;