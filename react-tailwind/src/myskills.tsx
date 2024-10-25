import React from "react";

const MySkills: React.FC = () => {
  const skills = [
    {
      name: "React JS",
      description:
        "React JS is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
      icon: "⚛️", // Placeholder icon, can be replaced with actual images
    },
    {
      name: "Tailwind CSS",
      description:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. It provides low-level utility classes to create designs without writing custom CSS.",
      icon: "💨",
    },
    {
      name: "JavaScript",
      description:
        "JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
      icon: "🟨",
    },
    {
      name: "TypeScript",
      description:
        "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
      icon: "🔷",
    },
    {
      name: "MySQL",
      description:
        "MySQL is an open-source relational database management system that allows users to manage and store their data in a structured way.",
      icon: "🐬",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <h2 className="text-3xl text-center text-white font-semibold mb-10">
        My Skills
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center text-white"
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-gray-400">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
