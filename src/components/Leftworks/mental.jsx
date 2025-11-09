import React from "react";
import Im from "../../assets/image.png";
export default function Mental() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] bg-white px-6 py-10">
      <div className="max-w-3xl w-full border rounded-2xl shadow-md p-8">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-green-600 mb-3 text-center">
          Mental Health & Wellness Support 🌿
        </h1>
        <p className="text-gray-700 text-center mb-8 leading-relaxed">
          It’s okay to not be okay — help is available.  
          Whether you’re struggling, stressed, or just need to talk, reach out.  
          You are not alone, and your feelings are valid. 💚
        </p>

        {/* Positive Image */}
        <div className="flex justify-center mb-8">
          <img
            src={Im} // replace with your own positivity image if you have one
            alt="Positivity Illustration"
            className="rounded-2xl shadow-md w-full max-w-md object-cover"
          />
        </div>

        {/* Helpline Numbers */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📞 Mental Health Helpline Numbers (India)</h2>
          <ul className="text-gray-700 space-y-2">
            <li>🧠 <strong>National Mental Health Helpline (Tele MANAS):</strong> 14416 or 1-800-891-4416</li>
            <li>💚 <strong>AASRA Helpline (24x7):</strong> 91-9820466726</li>
            <li>🕊️ <strong>Vandrevala Foundation Helpline:</strong> 1860 266 2345 / 1800 233 3330</li>
            <li>☀️ <strong>iCall (TISS Initiative):</strong> 9152987821 or <a href="mailto:icall@tiss.edu" className="text-blue-600 hover:underline">icall@tiss.edu</a></li>
            <li>💌 <strong>Snehi Helpline:</strong> +91-9582208181 (10 AM–10 PM)</li>
          </ul>
        </div>

        {/* Self-care & Guidelines */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">🌻 Mental Wellness Guidelines</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Talk openly about your emotions — vulnerability is strength, not weakness.</li>
            <li>Take small breaks from social media and focus on real connections.</li>
            <li>Try deep breathing, journaling, or meditation for calmness and clarity.</li>
            <li>Reach out to a professional if your thoughts feel heavy — therapy heals.</li>
            <li>Keep reminding yourself: “I am enough, I am growing, I am healing.” 🌼</li>
          </ul>
        </div>

        {/* Positivity Section */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">💛 A Note of Positivity</h2>
          <p className="text-gray-700 leading-relaxed italic">
            “You are stronger than the storm you’re facing.  
            The sun will rise again — and so will you.” ☀️  
            <br />
            Remember, one small step towards help is one giant leap towards healing.
          </p>
        </div>

        {/* Footer message */}
        <div className="text-center mt-8">
          <p className="text-gray-600 italic">
            Let’s normalize mental health conversations.  
            Together, we heal, grow, and rise. 🌿
          </p>
        </div>
      </div>
    </div>
  );
}
