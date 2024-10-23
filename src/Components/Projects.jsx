import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="pb-4 container-xl lg:container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 ">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 pb-8 py-4 flex flex-wrap lg:justify-center bg-sky-500 bg-opacity-90 rounded-xl shadow-md relative"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-4/4  flex justify-center items-center "
            >
              <img
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="mb-6 px-4 rounded "
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-black text-2xl">
                {project.title}
              </h3>
              <p className="mb-4 text-xl">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  key={index}
                >
                  {tech}
                </span>
              ))}

              <motion.div className="mt-5">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.codeLink}
                  className="bg-black rounded-full p-3 my-5 mx-2 text-sm text-white mb-10"
                >
                  Source Code
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.liveLink}
                  className="bg-black rounded-full p-3 my-5 mx-2  text-sm text-white mb-10"
                >
                  Live Link
                </a>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
