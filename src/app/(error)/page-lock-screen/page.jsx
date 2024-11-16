"use client"
import React from "react";
import  Link from "next/link";
// image
import logo from "@/assets/images/logo/logo-full.png";
// import LogoWhite from '@/assets/images/logo/logofull-white.png';

import { redirect } from "next/navigation";
import Image from "next/image";


const LockScreen = () => {     
    const submitHandler = (e) => {
        e.preventDefault();
        redirect("/dashboard");
    };      
  return (

    <>
        <div className="authincation">
            <div className="container">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-md-6">
                        <div className="authincation-content">
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <div className="auth-form">
                                      <div className="text-center mb-3">
                                        <Link href="/dashboard">                                            
                                            <Image src={logo} alt="logo" />                                            
                                        </Link>
                                      </div>
                                        <h4 className="text-center mb-4">Account Locked</h4>
                                        <form onSubmit={(e) => submitHandler(e)}>
                                            <div className="mb-3">
                                                <label><strong>Password</strong><span className="required"> *</span></label>
                                                <input type="password" className="form-control" defaultValue="Password" />
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary btn-block">Unlock</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>  
  );
};

export default LockScreen;
