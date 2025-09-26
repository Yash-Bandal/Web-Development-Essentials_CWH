import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './index.css';

function BrandNameAnimation({ onComplete }) {
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Brand name animation
    tl.from(".brand-name", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });

    // Hold the brand name for a moment
    tl.to(".brand-name", {
      opacity: 1,
      duration: 1,
    });

    // Fade out the brand name
    tl.to(".brand-name", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.in",
    });
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1001] bg-black">
      <h1 className="brand-name text-6xl text-white font-bold uppercase tracking-wider">Brand Name</h1>
    </div>
  );
}

function DoorAnimation({ onComplete }) {
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Door opening animation - left door moves left, right door moves right
    tl.to(".door-left", {
      x: "-100%",
      duration: 2.0,
      ease: "power2.inOut",
    });

    tl.to(
      ".door-right",
      {
        x: "100%",
        duration: 2.0,
        ease: "power2.inOut",
      },
      "<"
    );
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] pointer-events-none">
      <div className="door-left absolute top-0 left-0 w-1/2 h-full bg-black z-[1000] origin-left"></div>
      <div className="door-right absolute top-0 right-0 w-1/2 h-full bg-black z-[1000] origin-right"></div>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl text-gray-800 font-bold">Welcome</h1>
      <p className="text-lg text-gray-600 max-w-xl text-center mt-4">
        This is a temporary landing page for your website.
      </p>
    </div>
  );
}

function App() {
  const [loadingPhase, setLoadingPhase] = useState(1); // 1: Brand Name, 2: Door Animation with Landing Page
  const [showLandingPage, setShowLandingPage] = useState(false);

  useEffect(() => {
    // Register GSAP plugin
    gsap.registerPlugin(useGSAP);
  }, []);

  const handleBrandNameComplete = () => {
    setShowLandingPage(true); // Show landing page behind the doors
    setLoadingPhase(2); // Move to door animation phase
  };

  const handleDoorAnimationComplete = () => {
    // Door animation is complete, landing page is already visible
  };

  return (
    <>
      {loadingPhase === 1 && (
        <BrandNameAnimation onComplete={handleBrandNameComplete} />
      )}
      
      {showLandingPage && <LandingPage />}
      
      {loadingPhase === 2 && (
        <DoorAnimation onComplete={handleDoorAnimationComplete} />
      )}
    </>
  );
}

export default App;











---



  import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./index.css";

function BrandNameAnimation({ onComplete }) {
  const textRef = useRef(null);

  useGSAP(() => {
    const textEl = textRef.current;
    if (!textEl) return;

    // Wrap every letter in a span
    const letters = textEl.textContent.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      return span;
    });

    // Clear and append letters
    textEl.textContent = "";
    letters.forEach((span) => textEl.appendChild(span));

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete && onComplete();
      },
    });

    // Fade in letters one by one
    tl.fromTo(
      letters,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
      }
    );

    // Hold the text
    tl.to({}, { duration: 1 });

    // Fade out the whole word
    tl.to(textEl, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.in",
    });
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1001] bg-black">
      <h1
        ref={textRef}
        className="brand-name text-6xl text-white font-bold uppercase tracking-wider"
      >
        Brand Name
      </h1>
    </div>
  );
}

function DoorAnimation({ onComplete }) {
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Slide the top panel up
    tl.to(".door-top", { y: "-100%", duration: 2, ease: "power2.inOut" });

    // Slide the bottom panel down simultaneously
    tl.to(
      ".door-bottom",
      { y: "100%", duration: 2, ease: "power2.inOut" },
      "<" // start at same time as top panel
    );
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] pointer-events-none">
      <div className="door-top absolute top-0 left-0 w-full h-1/2 bg-black z-[1000] origin-top"></div>
      <div className="door-bottom absolute bottom-0 left-0 w-full h-1/2 bg-black z-[1000] origin-bottom"></div>
    </div>
  );
}


function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl text-gray-800 font-bold">Welcome</h1>
      <p className="text-lg text-gray-600 max-w-xl text-center mt-4">
        This is a temporary landing page for your website.
      </p>
    </div>
  );
}

function App() {
  const [loadingPhase, setLoadingPhase] = useState(1); // 1: Brand Name, 2: Door Animation with Landing Page
  const [showLandingPage, setShowLandingPage] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(useGSAP);
  }, []);

  const handleBrandNameComplete = () => {
    setShowLandingPage(true);
    setLoadingPhase(2);
  };

  const handleDoorAnimationComplete = () => {};

  return (
    <>
      {loadingPhase === 1 && (
        <BrandNameAnimation onComplete={handleBrandNameComplete} />
      )}
      {showLandingPage && <LandingPage />}
      {loadingPhase === 2 && (
        <DoorAnimation onComplete={handleDoorAnimationComplete} />
      )}
    </>
  );
}

export default App;

