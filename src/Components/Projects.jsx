import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const fadeInLeft = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1 },
};

function Projects() {
  return (
    <div className="pb-4 container-xl lg:container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 py-4 flex flex-wrap lg:justify-center bg-sky-500/90 rounded-xl shadow-md"
          >
            {/* Project Image */}
            <motion.div
              {...fadeInLeft}
              className="w-full flex justify-center items-center"
            >
              <img
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="mb-6 px-4 rounded"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div {...fadeInRight} className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-black text-2xl">
                {project.title}
              </h3>
              <p className="mb-4 text-xl">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-5 flex flex-wrap gap-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.codeLink}
                  className="bg-black rounded-full px-4 py-2 text-sm text-white"
                >
                  Source Code
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.liveLink}
                  className="bg-black rounded-full px-4 py-2 text-sm text-white"
                >
                  Live Link
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
