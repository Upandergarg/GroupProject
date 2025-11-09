import React from "react";

export default function About() {
  const creators = [
    {
      name: "Upander Garg",
      role: "Frontend Developer & Project Lead",
      email: "upander@example.com",
      contribution:
        "Designed and developed the UI components, integrated layout with React Router, and led the vision behind the project.",
      img: "https://via.placeholder.com/100", // replace with your actual image path
    },
    {
      name: "Keshav Sharma",
      role: "Backend Engineer",
      email: "keshav@example.com",
      contribution:
        "Built the backend logic and data connections, ensured smooth API integration, and handled database design.",
      img: "https://via.placeholder.com/100",
    },
    {
      name: "Sarvan Singh",
      role: "UI/UX Designer",
      email: "sarvan@example.com",
      contribution:
        "Created the wireframes, handled color consistency, and worked on responsive layout design across devices.",
      img: "https://via.placeholder.com/100",
    },
    {
      name: "Pannu Raj",
      role: "Research & Content",
      email: "pannu@example.com",
      contribution:
        "Curated meaningful content, helped shape project direction, and supported documentation and testing.",
      img: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] bg-white px-6">
      <div className="max-w-4xl w-full text-center border rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-semibold text-blue-600 mb-3">About Us 💡</h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We’re a team of passionate engineers who came together to build something
          meaningful — blending technology with purpose.  
          Our journey started with curiosity, and turned into collaboration, friendship,
          and innovation.
        </p>

        {/* Team Section */}
        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          {creators.map((person, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-5 text-center hover:shadow-lg transition-all duration-200"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border"
              />
              <h2 className="text-xl font-semibold text-gray-900">{person.name}</h2>
              <p className="text-sm text-blue-600">{person.role}</p>
              <p className="text-gray-700 text-sm mt-2">{person.contribution}</p>
              <a
                href={`mailto:${person.email}`}
                className="text-blue-600 text-sm mt-3 inline-block hover:underline"
              >
                {person.email}
              </a>
            </div>
          ))}
        </div>

        {/* Motive Section */}
        <div className="mt-10 bg-blue-50 rounded-xl p-6 text-gray-800">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            💙 Our Motive
          </h2>
          <p className="leading-relaxed text-gray-700">
            Our goal is to use technology to create impact —  
            to build platforms that connect people, simplify lives, and spread awareness.  
            Every line of code we write is driven by curiosity, collaboration, and the
            hope of making a difference.  
            <br />
            <br />
            <span className="italic">
              “Great things are built not by one mind, but by a united vision.”
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
