"use client"

import React, { Component } from 'react';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

import PageTitle from "@/layouts/PageTitle";



const CkEditorBlog = loadable(() =>
	pMinDelay(import("@/components/form/ckeditor/CkEditorBlog"), 1000)
);


class CkEditor extends Component {
    render() {
        return (
            <>
                <PageTitle activeMenu="CkEditor" motherMenu="Form" pageContent="CkEditor" />
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-xl-12 col-xxl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Form CkEditor</h4>
                                </div>
                                <div className="card-body custom-ekeditor">                                    
                                    <CkEditorBlog />
                                </div>
                            </div>
                        </div>        
                    </div>        
                </div>
            </>
        );
    }
}

export default CkEditor;