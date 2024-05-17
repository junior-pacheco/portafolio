import { useState } from 'react';
import {  IconTailwindcss, Iconjs,  IconReact, IconNextjs, IconTypescript, IconJamPadlockF,DeviconNestjs } from '../../../public/icons/icons';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsFillImageFill } from 'react-icons/bs';


Modal.setAppElement('#root');

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      name: 'Tekneo',
      description: "Se trata de una solución tecnológica destinada a mejorar la eficacia y la seguridad en las empresas, permitiendo visualizar las cámaras de seguridad, llevar un registro de las horas de entrada y gestionar el acceso a las distintas zonas conectadas a los sistemas domóticos.",
      images: ['/img/tekneo1.jpg', '/img/tekneo2.jpg','/img/tekneo3.jpg','/img/tekneo4.jpg'],
    },
    {
      name: 'Node maker',
      description: "Es un proyecto que simplifica la creación y gestión de fuentes de datos KNX y MQTT en una red local. Facilita la comunicación entre ellas, permite crear perfiles y rutas, y ofrece una interfaz de supervisión para la visualización de datos. El software agiliza la transferencia de datos entre fuentes, promoviendo una gestión eficiente de la red.",
      images: ['/img/node1.jpg', '/img/node2.jpg'],
    },
    {
      name: 'Mvsion',
      description: "MVision es un software para gestionar fotos y videos en pantallas de salas de espera y publicidad. Permite crear y configurar pantallas, subir contenido, y definir horarios y orden de reproducción. Las pantallas se conectan a un hardware controlado por MVision para administrar el modo quiosco.",
      
      images: ['/img/login.jpg', '/img/img1.jpg','/img/img2.jpg','/img/img3.jpg','/img/img4.jpg'],
    },
  ];

  return (
    <div className="p-10 bg-slate-950 overflow-y-auto">
      <h1 className="text-3xl font-bold text-yellow-500 mb-4">Proyectos</h1>
      <div className="grid grid-cols-1 bg-slate-900 p-5 rounded-2xl md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-slate-800/90 p-4 shadow-2xl rounded-2xl">
            <div className='flex items-center mb-2 justify-between'>
              <h2 className="text-xl text-green-400 font-semibold mb-2 inline-flex items-end">{project.name}</h2>
              {project.images ? (
                <button 
                  onClick={() => openModal(project)} 
                  className="flex items-center gap-3 justify-center px-1 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Ver <BsFillImageFill className="mr-2" />
                </button>
              ) : (
                <IconJamPadlockF className="w-6" /> 
              )}
            </div>
            <p className="text-white mb-2">{project.description}</p>
            <div className='flex gap-3'>
              <Iconjs className="w-8" />
              {/* Renderiza los iconos aquí */}
              <IconTypescript className="w-8" />
              <IconTailwindcss className="w-8" />
              <IconNextjs className="w-8" />
              <IconReact className="w-8" />
              <DeviconNestjs className="w-8" />
            </div>
          </motion.div>
        ))}
      </div>

      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Images"
        className="bg-slate-900 p-5 rounded-2xl shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[95%]"
      >
        {selectedProject && (
          <div className='flex p-2 rounded-sm h-[100%] flex-col '>
            <div className='flex items-center rounded-sm  text-left  h-[7%] '>
              <button onClick={closeModal} className="absolute top-2 right-2 text-white text-3xl hover:text-gray-300">×</button>
              <h2 className="text-2xl text-yellow-500 p-10 mb-4">Images - {selectedProject.name}</h2>
            </div>
            <div className='flex justify-center items-center rounded-sm overflow-hidden  h-[93%] relative'>
              <Slider 
                arrows={true} dots={true} className='cursor-pointer rounded-sm w-[90%]'
                beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
              >
                {selectedProject.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Project Image ${index + 1}`} className="w-full h-auto rounded-xl" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
};

export default Projects;
