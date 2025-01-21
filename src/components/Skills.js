import React from 'react';
import '../custom_css/Skills.css';

const SkillSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white bg-fixed bg-cover bg-center relative pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-50"></div>

      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-center text-blue-300 mb-16 relative z-10 pt-20">Musical Ritik Skills</h2>

      {/* Skill Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 relative z-10">
        {/* Instrument Skill */}
        <div
          className="skill-card group relative cursor-pointer bg-cover bg-center p-6 rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-opacity-80 animate__animated animate__fadeIn animate__delay-1s"
          style={{ backgroundImage: 'url(/path-to-your-image/instrument.jpg)' }}
        >
          <h3 className="text-3xl font-semibold text-center mb-4 transition duration-300 ease-in-out group-hover:text-light-blue-300">
            Instruments
          </h3>
          <div className="sub-skills opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-10 transition-all duration-300 ease-in-out">
            <ul className="text-lg space-y-2 text-center">
              <li>Piano</li>
              <li>Guitar</li>
              <li>Drums</li>
              <li>Violin</li>
            </ul>
          </div>
        </div>

        {/* Vocal Skill */}
        <div
          className="skill-card group relative cursor-pointer bg-cover bg-center p-6 rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-opacity-80 animate__animated animate__fadeIn animate__delay-2s"
          style={{ backgroundImage: 'url(/path-to-your-image/vocal.jpg)' }}
        >
          <h3 className="text-3xl font-semibold text-center mb-4 transition duration-300 ease-in-out group-hover:text-light-blue-300">
            Vocals
          </h3>
          <div className="sub-skills opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-10 transition-all duration-300 ease-in-out">
            <ul className="text-lg space-y-2 text-center">
              <li>Classical Singing</li>
              <li>Contemporary Singing</li>
              <li>Voice Modulation</li>
              <li>Pitch Control</li>
            </ul>
          </div>
        </div>

        {/* Public & Stage Singing */}
        <div
          className="skill-card group relative cursor-pointer bg-cover bg-center p-6 rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-opacity-80 animate__animated animate__fadeIn animate__delay-3s"
          style={{ backgroundImage: 'url(/path-to-your-image/stage-singing.jpg)' }}
        >
          <h3 className="text-3xl font-semibold text-center mb-4 transition duration-300 ease-in-out group-hover:text-light-blue-300">
            Public & Stage Singing
          </h3>
          <div className="sub-skills opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-10 transition-all duration-300 ease-in-out">
            <ul className="text-lg space-y-2 text-center">
              <li>Live Performances</li>
              <li>Crowd Engagement</li>
              <li>Stage Presence</li>
            </ul>
          </div>
        </div>

        {/* Interpersonal Skill */}
        <div
          className="skill-card group relative cursor-pointer bg-cover bg-center p-6 rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-opacity-80 animate__animated animate__fadeIn animate__delay-4s"
          style={{ backgroundImage: 'url(/path-to-your-image/interpersonal.jpg)' }}
        >
          <h3 className="text-3xl font-semibold text-center mb-4 transition duration-300 ease-in-out group-hover:text-light-blue-300">
            Interpersonal Skills
          </h3>
          <div className="sub-skills opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-10 transition-all duration-300 ease-in-out">
            <ul className="text-lg space-y-2 text-center">
              <li>Communication</li>
              <li>Leadership</li>
              <li>Collaboration</li>
              <li>Conflict Resolution</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="mt-20 px-4 text-center animate__animated animate__fadeIn animate__delay-5s">
        <p className="text-2xl text-gray-300">
          "Music is the divine way to tell beautiful, poetic things to the heart." – Pablo Casals
        </p>
        <p className="text-lg text-gray-400 mt-4">
          Music transcends all boundaries, whether it’s through the melody of instruments, the power of vocals, or the energy of stage performances. It brings people together and speaks the language of the soul.
        </p>
      </div>
    </section>
  );
};

export default SkillSection;
