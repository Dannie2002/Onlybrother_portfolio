import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";

const GITHUB_URL = "https://github.com/YOUR_GITHUB_USERNAME"; // Replace with your GitHub URL

export default function GitConnect() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(GITHUB_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      setCopied(false);
    }
  };

  return (
    <section
      className="flex flex-col items-center justify-center min-h-[40vh] w-full py-16 px-4 bg-[#F2EBDF]"
     
    >
      <FaGithub size={64} className="text-[#c137ff] mb-4 drop-shadow-lg" />
      <h2 className="mb-6 text-2xl font-bold text-center text-white md:text-3xl">
        Collaborate easy. Code with me.
      </h2>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#23232b] border border-[#c137ff] text-white font-semibold shadow-md hover:bg-[#c137ff]/20 transition-colors duration-200 mb-2"
      >
        <FaRegCopy className="text-[#07c6ff]" />
        {copied ? "Copied!" : "Copy my GitHub URL"}
      </button>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8b949e] text-sm underline hover:text-[#c137ff] transition-colors"
      >
        Or visit my repositories directly
      </a>
    </section>
  );
}