import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white px-6">
      <div className="max-w-lg w-full text-center border rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-semibold text-blue-600 mb-4">Contact Us 💬</h1>
        
        <p className="text-gray-700 mb-6">
          We’d love to hear from you! Whether you have a question, suggestion, or
          just want to say hello, feel free to reach out.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 text-gray-800 mb-8">
          <div>
            <strong>📧 Email:</strong> {" "}
            <a
              href="mailto:teamspidyupi@gmail.com"
              className="text-blue-600 hover:underline"
            >
              teamspidyupi@gmail.com
            </a>
          </div>
          <div>
            <strong>📞 Mobile:</strong> {" "}
            <a href="tel:+919876543210" className="text-blue-600 hover:underline">
              +91 98765 43210
            </a>
          </div>
        </div>

        {/* Heartfelt Note */}
        <div className="bg-blue-50 rounded-xl p-5">
          <p className="text-gray-700 italic leading-relaxed">
            “Every message you send means the world to us.  
            We started this project with passion, and hearing from you keeps that fire alive.  
            Let’s keep building something beautiful together. 💙”
          </p>
        </div>
      </div>
    </div>
  );
}
