"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import AccountModal from "./AccountModal";

const AnimatedText = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCryingGif, setShowCryingGif] = useState(false);

  useEffect(() => {
    const letters = gsap.utils.toArray<HTMLSpanElement>(".letter");
    const tl = gsap.timeline();
    tl.fromTo(
      letters,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05 }
    ).fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "+=0.5"
    );
  }, []);

  const text = isSent ? "Thanks for sending!" : "Do me small funds";
  const letters = text.split("").map((char, index) => (
    <span key={index} className="letter inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  const handleYesClick = () => {
    setIsModalOpen(true);
  };

  const handleSent = () => {
    setIsSent(true);
  };

  const handleNoClick = () => {
    setShowCryingGif(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div ref={textRef} className="text-center md:text-8xl text-4xl font-bold">
        {letters}
      </div>
      {!isSent && !showCryingGif && (
        <div ref={buttonsRef} className="mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 m-2 rounded"
            onClick={handleNoClick}
          >
            No
          </button>
        </div>
      )}
      {isSent && (
        <div className="mt-4">
          {/* <p>Thanks for sending!</p> */}
          <img src="/images/happy.gif" alt="Sent GIF" />
        </div>
      )}
      {showCryingGif && (
        <div className="mt-4">
          <img src="/images/crying.gif" alt="Crying GIF" />
        </div>
      )}
      <AccountModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSent={handleSent}
      />

      <p className="absolute bottom-4">
        with ❤️ and sapa {""}.
        <a
          href="https://github.com/dtechoracle/send-funds"
          className="text-blue-300"
        >
          Repo
        </a>
      </p>
    </div>
  );
};

export default AnimatedText;
