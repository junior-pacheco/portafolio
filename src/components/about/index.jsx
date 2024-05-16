import { useState } from 'react';
import Projects from '../projects';
import { Element } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };


  return (
    <div className="bg-slate-950 gap-7 text-white min-h-screen flex flex-col justify-center items-center relative">
      <Element
        name="about"
        className="w-full p-5 mt-2 gap-5 flex flex-col md:flex-row justify-center items-center"
        style={{ height: '100vh' }}
      >
        <div className="flex w-[70%]  flex-col justify-center items-center">
          <motion.p
            whileHover={{ scale: 1.10 }}
            className={`text-center text-4xl cursor-pointer md:text-6xl`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={handleAnimationComplete}
          >
            ¡Hola! somos un equipo de desarrollo 
          </motion.p>
          <motion.span
            className={`text-center text-3xl md:text-4xl font-bold text-green-400`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Especializados en Web Development.
          </motion.span>
          <AnimatePresence>
            {animationComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
              >
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Element>


      <div className="relative p-10 ">
        <Element
          name="info"
          className="w-full p-5 mt-4 flex justify-center gap-5 rounded-xl flex-col"
        >

        <div className='flex flex-col justify-center gap-6 md:flex-row'>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800/90 flex flex-col items-center shadow-2xl justify-start p-5 rounded-2xl w-full md:w-1/3 lg:w-1/3 card"
          >
            <h2 className="text-3xl text-green-400 font-semibold mb-5">Acerca de nosotros</h2>
            <p className="text-base">
            Equipo de expertos en diseño web comprometidos en crear experiencias sorprendentes a través de una combinación de sólidas habilidades de diseño y tecnología, siempre enfocados en la comunicación efectiva y la colaboración en equipo para lograr resultados excepcionales.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col bg-slate-800/90 shadow-2xl items-center justify-start p-5 rounded-2xl w-full md:w-1/3 lg:w-1/3 card"
          >
            <h2 className="text-3xl text-green-400 font-semibold mb-5">Frontend</h2>
            <ul className="list-disc text-base list-inside">
              <li>Web and software development with React, Next, Vite, Vue</li>
              <li>HTML5, CSS3, and Sass</li>
              <li>Styling with Tailwind CSS</li>
              <li>Development in TypeScript, JavaScript</li>
              <li>Project building with Node.js-Express</li>
              <li>Containerization with Docker</li>
              <li>English (intermediate)</li>
              <li>SCRUM methodology</li>
            </ul>
          </motion.div>


          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col bg-slate-800/90 shadow-2xl items-center justify-start p-5 rounded-2xl w-full md:w-1/3 lg:w-1/3 card"
          >
            <h2 className="text-3xl text-green-400 font-semibold mb-5">Backend</h2>
            <ul className="list-disc text-base list-inside">
              <li>Nest</li>
              <li>MySQL</li>
              <li>Type ORM</li>
              <li>DBeaver</li>
            </ul>
          </motion.div>
        </div>
        

        </Element>
      </div>

      <Element name="projects">
        <Projects />
      </Element>
    </div>
  );
};

export default About;
