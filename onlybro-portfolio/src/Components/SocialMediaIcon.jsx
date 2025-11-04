import React from 'react'
import { FaGithub, FaXTwitter, FaLinkedinIn, FaDiscord } from 'react-icons/fa6';
import { FaFileDownload } from 'react-icons/fa';

const SocialMediaIcon = () => {
  return (
    <div className="flex justify-center space-x-6">
    <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-[#177A96] hover:bg-[#5176A3]" aria-label="GitHub">
        <FaGithub className="text-white" size={20} />
    </a>
    <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-[#177A96] hover:bg-[#5176A3]" aria-label="Twitter/X">
        <FaXTwitter className="text-white" size={20} />
    </a>
    <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-[#177A96] rounded-full hover:bg-[#5176A3]" aria-label="LinkedIn">
        <FaLinkedinIn className="text-white" size={20} />
    </a>
    <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-[#177A96] rounded-full hover:bg-[#5176A3]" aria-label="Discord">
        <FaDiscord className="text-white" size={20} />
    </a>
</div>
  )
}

export default SocialMediaIcon; 