export default function About() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <p className="text-lg mb-6">
        Hi, I'm Himanshu 👋<br />
        I'm an engineering student passionate about Web Development, DSA, and AI/ML.<br />
        I love building projects, exploring new technologies, and solving problems through code. 🚀
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>
      <ul className="list-disc list-inside mb-6">
        <li>React, JavaScript, TailwindCSS</li>
        <li>Java, C++, Spring Boot</li>
        <li>Machine Learning & Deep Learning</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Hobbies</h2>
      <p className="mb-6">
        Coding challenges, cricket, tech tutorials, learning new frameworks.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
      <p>
        Reach me at <a href="mailto:himanshu@example.com" className="text-sky-500">himanshu@example.com</a>
      </p>
    </div>
  );
}
