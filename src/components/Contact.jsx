import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Get in touch with me via the details below</p>
        </div>

        <div className="text-lg space-y-4">
          <p>
            📧 <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-cyan-400 hover:underline"
            >
              prabuddhi.rath2@gmail.com
            </a>
          </p>
          <p>
            📞 <span className="font-semibold">Phone:</span>{" "}
            <a
              href="tel:+94 710 100 434"
              className="text-cyan-400 hover:underline"
            >
              +94 710 100 434
            </a>
          </p>
          <p>
            📍 <span className="font-semibold">Location:</span> Colombo, Sri
            Lanka
          </p>
          {/* Add more fields if needed */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
