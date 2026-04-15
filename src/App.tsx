// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

// function AppPage() {
//   return (
//    <h1 className="text-3xl font-bold underline">
//     Hello world!
//   </h1>
//   )
// }

// export default AppPage;

import React from 'react';

const AppPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif p-8 md:p-16 max-w-4xl">
      
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Surakshya Khatri</h1>
        <p className="text-lg text-gray-600">Frontend Web Developer</p>
      </header>

      {/* About Me */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="leading-relaxed">
          I am an aspiring frontend developer with a deep passion for learning and building digital experiences. Currently, I am honing my skills in HTML, CSS, and JavaScript to create responsive, user-friendly websites that turn creative ideas into reality.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* Projects */}
      {/* Alt+0150 key press = – */}

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            <a href="#" className="text-blue-600 underline hover:text-blue-800">Portfolio Website</a>
            <span className="text-gray-700"> – A personal portfolio built with HTML, CSS, and JS</span>
          </li>
          <li>
            <a href="#" className="text-blue-600 underline hover:text-blue-800">To-Do List App</a>
            <span className="text-gray-700"> – A simple task tracker using local storage</span>
          </li>
          <li>
            <a href="#" className="text-blue-600 underline hover:text-blue-800">Weather Dashboard</a>
            <span className="text-gray-700"> – Displays weather data using a public API</span>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="space-y-2">
          <p>
            Email: <a href="mailto:surakshyakhatri08@gmail.com" className="text-blue-600 underline">surakshyakhatri08@gmail.com</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-blue-600 underline">github.com/surakshyakhatri08-cyber</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AppPage;
