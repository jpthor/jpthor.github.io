"use client";
import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/app/components/Header";
import { Principles } from "@/app/components/Principles";

// Lazy load components for better performance
const MeetJP = dynamic(() => 
    import("@/app/components/MeetJP").then(mod => ({ default: mod.MeetJP })), { 
    ssr: true,
    loading: () => <div className="py-4">Loading...</div>
});

const Founder = dynamic(() => 
    import("@/app/components/Founder").then(mod => ({ default: mod.Founder })), { 
    ssr: true,
    loading: () => <div className="py-4">Loading...</div> 
});

const Engineer = dynamic(() => 
    import("@/app/components/Engineer").then(mod => ({ default: mod.Engineer })), { 
    ssr: true,
    loading: () => <div className="py-4">Loading...</div> 
});

const Explorer = dynamic(() => 
    import("@/app/components/Explorer").then(mod => ({ default: mod.Explorer })), { 
    ssr: true,
    loading: () => <div className="py-4">Loading...</div> 
});

const Investor = dynamic(() => 
    import("@/app/components/Investor").then(mod => ({ default: mod.Investor })), { 
    ssr: true,
    loading: () => <div className="py-4">Loading...</div> 
});

const Media = dynamic(() => 
    import("@/app/components/Media").then(mod => ({ default: mod.Media })), { 
    ssr: true,
    loading: () => <div className="py-4">Loading...</div> 
});

const Bio = dynamic(() => 
    import("@/app/components/Bio").then(mod => ({ default: mod.Bio })), { 
    ssr: true,
    loading: () => <div className="py-4">Loading...</div> 
});

// Components loaded dynamically for performance

export default function Landing() {
    // Track if page is mounted
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        // Mark component as mounted
        setIsMounted(true);
        

        
        // Handle scroll without jQuery
        const handleScroll = () => {
            const menu = document.querySelector("#menu");
            if (!menu) return;
            
            if (window.scrollY > 300) {
                menu.classList.add('fixed-top');
            } else {
                menu.classList.remove('fixed-top');
            }
        };
        
        // Add scroll listener
        window.addEventListener('scroll', handleScroll);
        

        
        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Header />
            <div className="container mt-lg-high">
                <div className="vertical-line"></div>
                <div className="section" style={{ marginTop: "-120px" }}>
                    <div className="bullet top-bullet" style={{ top: "-100px" }}></div>
                </div>
                
                {/* Wrap components in Suspense for better loading performance */}
                <Suspense fallback={<div className="py-5">Loading profile...</div>}>
                    <MeetJP />
                </Suspense>
                
                <Suspense fallback={<div className="py-5">Loading founder info...</div>}>
                    <Founder />
                </Suspense>
                
                <Suspense fallback={<div className="py-5">Loading section...</div>}>
                    <Engineer />
                </Suspense>
                
                <Suspense fallback={<div className="py-5">Loading section...</div>}>
                    <Explorer />
                </Suspense>
                
                <Suspense fallback={<div className="py-5">Loading section...</div>}>
                    <Investor />
                </Suspense>
                
                <Suspense fallback={<div className="py-5">Loading section...</div>}>
                    <Media />
                </Suspense>
                
                <Suspense fallback={<div className="py-5">Loading section...</div>}>
                    <Bio />
                </Suspense>
                
                <Suspense fallback={<div className="py-5">Loading section...</div>}>
                    <Principles />
                </Suspense>
            </div>
        </>
    )
}