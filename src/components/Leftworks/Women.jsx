import React from "react";

export default function Women() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] bg-white px-6 py-10">
      <div className="max-w-3xl w-full border rounded-2xl shadow-md p-8">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-pink-600 mb-3 text-center">
          Women Helpline & Safety Zone 💗
        </h1>
        <p className="text-gray-700 text-center mb-8 leading-relaxed">
          Every woman deserves safety, respect, and justice.  
          Below are verified helpline numbers, important laws, and preventive steps you can follow to stay safe and aware.
        </p>

        {/* Helpline Numbers */}
        <div className="bg-pink-50 border-l-4 border-pink-500 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📞 Important Helpline Numbers</h2>
          <ul className="text-gray-700 space-y-2">
            <li>👩‍💼 <strong>Women Helpline (All India):</strong> 1091</li>
            <li>🚨 <strong>Police Emergency:</strong> 112</li>
            <li>💬 <strong>Domestic Violence Helpline:</strong> 181</li>
            <li>📱 <strong>Cyber Crime Reporting:</strong> 1930 or <a href="https://cybercrime.gov.in" className="text-blue-600 hover:underline">cybercrime.gov.in</a></li>
            <li>🤝 <strong>National Commission for Women (NCW):</strong> 011-26942369 / 26944754</li>
          </ul>
        </div>

        {/* Legal Guidelines */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">⚖️ Key Laws Protecting Women</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>IPC Section 354:</strong> Protects women from assault or criminal force with intent to outrage modesty.</li>
            <li><strong>Section 498A:</strong> Protects women from cruelty by husband or his relatives.</li>
            <li><strong>POSH Act (2013):</strong> Prevention of Sexual Harassment at the workplace.</li>
            <li><strong>Dowry Prohibition Act (1961):</strong> Bans giving or taking of dowry.</li>
            <li><strong>Protection of Women from Domestic Violence Act (2005):</strong> Ensures safety, residence, and maintenance rights.</li>
          </ul>
        </div>

        {/* Security Measures */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">🛡️ Smart Security Measures</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Always share your live location with a trusted contact when traveling late.</li>
            <li>Use emergency SOS buttons available in most smartphone settings.</li>
            <li>Keep emergency contacts like family, friends, and 1091 saved on speed dial.</li>
            <li>Be aware of your rights — no one can touch, harass, or threaten you without consequence.</li>
            <li>If you ever feel unsafe, speak up immediately or contact authorities — silence never protects, awareness does.</li>
          </ul>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-8">
          <p className="text-gray-600 italic">
            “Empowered women empower society. Let’s stand together for safety, equality, and respect.” 💪
          </p>
        </div>
      </div>
    </div>
  );
}
