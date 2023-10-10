import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    name: "Flutter/Dart",
    description:
      "Desarrollé la app Monopolio con Flutter/Dart, utilizando arquitectura limpia, BLoC, y librerías como Dio y Modular, además de integrar Unity y funcionalidades de mapeo avanzadas.",
    link: "#monopolio",
  },
  {
    name: "React Native",
    description:
      "Creé la app Bellpi para Casa Toro, facilitando la gestión de procesos vehiculares con React Native y Redux para manejar estados.",
    link: "#bellpi",
  },
  {
    name: "Laravel",
    description:
      "Mantenimiento y desarrollo de funcionalidades para un monolito en Laravel, asegurando operatividad e implementación de nuevas características.",
    link: "#laravel",
  },
  {
    name: "Aplicaciones Médicas",
    description:
      "Desarrollé una app para la clínica Medihelp durante la pandemia, proporcionando soluciones médicas digitales con Flutter y Dart.",
    link: "#medihelp",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Desarrollador de software especializado en transformar ideas en
              aplicaciones móviles y soluciones backend eficientes, utilizando
              Flutter, Dart, React Native y Laravel.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    key={index}
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  >
                    <div className="max-w-[472px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a className="text-gradient text-sm">{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
