
import React from "react";

const modules = [
  {
    title: "🧬 The Meaning Engine",
    description: "Analyzes job roles, goals, and daily actions using IBM Granite LLMs to deliver micro-interventions that gamify and re-enchant the workday—creative shifts, team reflection prompts, and surprise challenges that bring joy and agency.",
  },
  {
    title: "🌍 The Inclusive Growth Advisor",
    description: "A real-time, AI-driven coach that matches talent to opportunity using global labor data and UN SDG 8 indicators. Helps organizations increase their Decent Work Score and optimize job design for dignity and sustainability.",
  },
  {
    title: "🗣️ Empathy Threads Generator",
    description: "Daily AI-crafted narratives that speak to a worker’s personal values and aspirations, nurturing emotional engagement and psychological safety.",
  },
  {
    title: "🎨 AI Task Remixing",
    description: "Transforms drudgery into delight by injecting creativity into routine workflows with idea generation interludes, narrative sales flows, and reflective pauses that boost performance and morale.",
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-purple-50 via-blue-50 to-white text-gray-900 px-6 md:px-12 lg:px-24 py-16 flex flex-col">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
          WorkKind: The AI Empathy Engine for Humane Productivity
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          In a world where automation accelerates but fulfillment stagnates, WorkKind infuses modern workflows with meaning, equity, and creativity powered by IBM Granite and watsonx.ai.
        </p>
      </section>

      {/* Problem & Solution Section */}
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-20">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">The Problem Today’s Workforce Faces</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-10 space-y-3">
          <li><strong>Monotony:</strong> Repetitive, low-autonomy tasks drain engagement and stifle human potential.</li>
          <li><strong>Inequity:</strong> Millions lack access to meaningful work, fair wages, and career mobility.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-blue-700 mb-6">The WorkKind Solution: Core AI Modules</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          WorkKind’s AI modules collectively bring emotional intelligence and equity into the modern workplace through four innovative engines.
        </p>
      </section>

      {/* AI Modules Section */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {modules.map(({ title, description }) => (
          <article
            key={title}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 cursor-default"
            >
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">{title}</h3>
            <p className="text-gray-700 text-base leading-relaxed">{description}</p>
          </article>
        ))}
      </section>

      {/* Tech stack & social impact section */}
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">Built On a Bold Tech Stack</h2>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
          IBM Granite + watsonx.ai: The emotional and analytical brains behind WorkKind.<br />
          Open Jobs + SDG APIs: Real-world data for inclusive design and social impact.<br />
          Vite + React + TypeScript: Smooth, responsive, and easily embedded in work tools.
        </p>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          <strong>Why WorkKind Wins:</strong> Seamlessly bridges productivity and equity, brings emotional depth to enterprise AI, ready to deploy at scale with IBM-native integration, and aligns directly with UN Sustainable Development Goal 8 to elevate work globally.
        </p>
      </section>
    </main>
  );
};

export default Index;

