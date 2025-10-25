import { FaWhatsapp } from "react-icons/fa";

const WhatsappBtn = () => {
  const whatsappNumber = "+8801770935775"; // replace with your number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-[25%] right-6 z-50 group">
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40 pointer-events-none"></div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 animate-pulse hover:animate-none"
        aria-label="Open WhatsApp chat"
      >
        <FaWhatsapp className="text-2xl md:text-3xl" />
      </a>

      <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
        <span className="block">Chat with us on WhatsApp</span>
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};

export default WhatsappBtn;
