"use client"
import React, { Fragment, useEffect, useState } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const CkEditorBlog = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true); 
    }, []);
    return (
        <Fragment>
            {isClient && (
                <CKEditor
                    editor={ ClassicEditor }            
                    onReady={ editor => {                    
                        console.log( 'Editor is ready to use!', editor );
                    } }
                /> 
            )}
        </Fragment>
    );
};

export default CkEditorBlog;