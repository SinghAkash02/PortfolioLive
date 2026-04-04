import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const phoneNumber = "918104316760"; // replace with your number

    const handleClick = () => {
        window.open(
            `https://wa.me/${phoneNumber}?text=Hi%20Akash,%20I%20saw%20your%20portfolio`,
            "_blank"
        );
    };

    return (
        <button
            onClick={handleClick}
            className="
        fixed bottom-6 left-6 z-50
        p-4 rounded-full
        bg-[var(--color-primary)]
        shadow-lg shadow-green-400/30
        hover:scale-110
        transition-all duration-300
        animate-float
      "
        >
            <FaWhatsapp className="text-black text-xl" />
        </button>
    );
};

export default WhatsAppButton;