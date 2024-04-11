import React from "react";

function Navbar() {
  return (
    <nav class="flex flex-wrap items-center justify-between p-4 bg-white">
      <div class="w-auto lg:order-2 lg:w-1/5 lg:text-center">
        <a class="text-2xl font-semibold text-gray-800 font-heading" href="#">
          React Mini Projects
        </a>
      </div>
      {/* <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 text-indigo-500 border border-indigo-500 rounded navbar-burger">
          <svg
            class="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div> */}
      <div class="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5"></div>
      <div class="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
        <a
          class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
          href="#"
        >
          Source Code
        </a>
        <a
          class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
          href="#"
        >
          Github
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
