import React from "react";
import { Link, useNavigate } from "react-router-dom";

import JournalIcon from "../assets/journal-icon.png";
import AiIcon from "../assets/ai-icon.png";
import GraphIcon from "../assets/graph-icon.png";
import LightbulbIcon from "../assets/lightbulb.png";

const Home = () => {
  const navigate = useNavigate();

  const handleStartJournaling = () => {
    navigate("/dashboard");
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 border-b bg-white">
        <h1 className="text-xl font-bold">
          Founder<span className="text-green-500">Therapy</span>
        </h1>
        <nav className="space-x-4">
          <Link to="/dashboard" className="text-sm hover:text-blue-600 transition-all">Start Journaling</Link>
          <Link to="/" className="text-sm hover:text-blue-600 transition-all">Login</Link>
          <Link
            to="/register"
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm transition-all duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 active:scale-95"
          >
            Signup
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <main className="text-center py-16 px-4">
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          Reflect, Track, <span className="text-green-500">Thrive</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
          Journal anonymously and uncover AI-driven mood insights designed specifically for founders navigating the entrepreneurial journey.
        </p>
        <div className="space-x-4 mb-12">
          <button
            onClick={handleStartJournaling}
            className="bg-blue-600 text-white px-5 py-2 rounded transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-blue-700"
          >
            Start Journaling as Guest
          </button>
          
        </div>

        {/* WHY SECTION */}
        <section className="mt-16 max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-10">Why FounderTherapy?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              icon: JournalIcon,
              title: "Anonymous Journaling",
              text: "Express your thoughts freely without fear of judgment. Your privacy is our priority with end-to-end encryption."
            }, {
              icon: AiIcon,
              title: "AI Mood Analysis",
              text: "Get intelligent insights into your emotional patterns and stress levels through advanced AI analysis of your journal entries."
            }, {
              icon: GraphIcon,
              title: "Mood Trends",
              text: "Track your emotional journey over time with detailed analytics and personalized recommendations."
            }].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded shadow text-center transform transition-all duration-300 ease-in-out hover:scale-105">
                <img src={item.icon} alt={`${item.title} Icon`} className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 transition-all duration-300 ease-in-out hover:text-black">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BUILT FOR FOUNDERS */}
        <section className="mt-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6 leading-tight">
              Built for Founders, <br /> By Founders
            </h3>
            <p className="text-gray-700 mb-8 text-lg">
              We understand the unique challenges of entrepreneurship. FounderTherapy provides a sanctuary for processing the highs and lows of building a company.
            </p>
            <ul className="space-y-6 text-left">
              {[
                { color: "blue", title: "Stress Management", desc: "Learn to identify and manage stress patterns before they impact your business decisions." },
                { color: "green", title: "Emotional Intelligence", desc: "Develop better self-awareness and emotional regulation skills for leadership." },
                { color: "red", title: "Decision Clarity", desc: "Gain clarity on complex decisions through reflective journaling and mood insights." },
              ].map(({ color, title, desc }, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className={`bg-${color}-100 text-${color}-600 p-2 rounded-full text-lg font-bold`}>✔</span>
                  <div>
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl text-center shadow-md">
            <img src={LightbulbIcon} alt="Lightbulb Icon" className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">Start Your Journey Today</h4>
            <p className="text-gray-700 mb-6">
              Join thousands of founders who have found clarity and peace through reflective journaling.
            </p>
            <button
              onClick={handleStartJournaling}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
            >
              Begin Journaling
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10 px-6 mt-24">
        <div className="grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <h5 className="font-bold mb-2">Founder<span className="text-green-400">Therapy</span></h5>
            <p className="text-gray-300 hover:text-white transition-all duration-300">Anonymous journaling and AI mood tracking for founders.</p>
          </div>
          <div>
            <h5 className="font-bold mb-2">Features</h5>
            <p className="text-gray-300 hover:text-white transition-all duration-300">Anonymous Journaling</p>
            <p className="text-gray-300 hover:text-white transition-all duration-300">AI Mood Analysis</p>
            <p className="text-gray-300 hover:text-white transition-all duration-300">Mood Trends</p>
          </div>
          <div>
            <h5 className="font-bold mb-2">Support</h5>
            <p className="text-gray-300 hover:text-white transition-all duration-300">Help Center</p>
            <p className="text-gray-300 hover:text-white transition-all duration-300">Privacy Policy</p>
            <p className="text-gray-300 hover:text-white transition-all duration-300">Terms of Service</p>
          </div>
          <div>
            <h5 className="font-bold mb-4 text-base">Connect</h5>
            <div className="flex flex-row gap-3 text-lg">
              {["ⓕ", "🖂", "𝕏"].map((icon, i) => (
                <a key={i} href="#" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-gray-400 hover:text-white transition-all duration-300">
          © 2024 FounderTherapy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
