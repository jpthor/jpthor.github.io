import { useState } from "react";
import { Offcanvas } from "@/app/components/OffCanvas/OffCanvas";
import React from 'react';
import { OffcanvasProvider } from "@/app/components/OffCanvas/Context";
import { Trigger } from "@/app/components/OffCanvas/Trigger";
import Image from "next/image";


export const NavBar: React.FC = () => {
    const handleOpen = () => console.log("");
    const handleClose = () => console.log("");
    return (
        <>
            <div className="w-100 d-flex py-4 justify-content-between" id="menu">
                <a className="navbar-brand d-flex align-items-center col-6 col-lg-4" href="./index.html">
                    <Image width={140} height={40} src="./img/jpthor-logo.svg" className="d-inline-block align-top" id="header-logo" alt="JPThor Logo" />
                </a>
                <OffcanvasProvider onOpen={handleOpen} onClose={handleClose}>
                    <Trigger />
                    <Offcanvas />
                </OffcanvasProvider>
            </div>

        </>
    )
}

