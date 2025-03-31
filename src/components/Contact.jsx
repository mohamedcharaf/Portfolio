import React from "react";

const Contact = () => {
  const handleClick = () => {
    window.location.href = "mailto:bouziddahomedcharafeddine@gmail.com";
  };

  return (
    <div
      id="contact" // <- Ajout de l'ID nécessaire pour react-scroll
      className="flex flex-col items-center justify-center py-12 px-4 bg-[#1B0E22] text-white"
    >
      <p className="text-center text-xl mb-6 font-medium max-w-2xl">
        Welcome to the lieny and I listen to all your problems
      </p>

      <button
        onClick={handleClick}
        className="w-full max-w-md py-4 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold text-lg rounded-xl shadow-xl transition-all duration-300"
      >
        Contact Us
      </button>
    </div>
  );
};

export default Contact;
