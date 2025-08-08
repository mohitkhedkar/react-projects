import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-3">
      <a href="#" className="mx-5 text-4xl font-serif" aria-label="Home">
        React Projects
      </a>

      <div>
        <a
          href="https://github.com/mohitkhedkar/react-projects"
          className="text-base px-4 py-2 rounded transition-colors duration-200 hover:bg-white/10"
        >
          Source Code
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
