// src/pages/About.jsx
export default function About() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      
      <p className="text-lg mb-4">
        Hi, I'm Himanshu 👋<br />
        I'm an engineering student passionate about Web Development, DSA, and AI/ML.<br />
        I love building projects, exploring new technologies, and solving problems through code. 🚀
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>
      <ul className="list-disc list-inside mb-4">
        <li>React, JavaScript, TailwindCSS</li>
        <li>Java, C++, Spring Boot</li>
        <li>Machine Learning & Deep Learning</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Hobbies</h2>
      <p className="mb-4">
        I enjoy coding challenges, playing cricket, watching tech tutorials, and learning new frameworks.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
      <p>
        You can reach me at <a href="mailto:himanshu@example.com" className="text-sky-500">himanshu@example.com</a>
      </p>
    </div>
  );
}
