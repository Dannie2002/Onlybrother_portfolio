import React from 'react'
import { FaGithub, FaXTwitter, FaLinkedinIn, FaDiscord } from 'react-icons/fa6';
import { FaFileDownload } from 'react-icons/fa';

const SocialMediaIcon = () => {
  return (
    <div className="flex justify-center pt-6 space-x-6">
    <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-gray-800 rounded-full hover:bg-pink-500" aria-label="GitHub">
        <FaGithub className="text-white" size={20} />
    </a>
    <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-gray-800 rounded-full hover:bg-blue-400" aria-label="Twitter/X">
        <FaXTwitter className="text-white" size={20} />
    </a>
    <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-gray-800 rounded-full hover:bg-blue-600" aria-label="LinkedIn">
        <FaLinkedinIn className="text-white" size={20} />
    </a>
    <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-gray-800 rounded-full hover:bg-purple-500" aria-label="Discord">
        <FaDiscord className="text-white" size={20} />
    </a>
</div>
  )
}

export default SocialMediaIcon; 