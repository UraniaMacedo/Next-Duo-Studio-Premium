"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import TechVisual from "./TechVisual";


export default function Hero() {

  return (

    <section
      id="inicio"
      className="
      relative
      min-h-screen
      bg-hero-gradient
      flex
      items-center
      overflow-hidden
      pt-24
    "
    >


      {/* Luzes de fundo */}

      <div
        className="
        absolute
        w-96
        h-96
        bg-blue-600/30
        blur-[120px]
        rounded-full
        top-20
        left-20
      "
      />


      <div
        className="
        absolute
        w-96
        h-96
        bg-purple-600/30
        blur-[120px]
        rounded-full
        bottom-20
        right-20
      "
      />



      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-8
        grid
        lg:grid-cols-2
        gap-12
        items-center
      "
      >



        {/* TEXTO */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

        >



          <div
          className="
            flex
            items-center
            gap-2
            text-cyan-400
            mb-6
            text-sm
            uppercase
            tracking-widest
          "
          >

            <Sparkles size={18}/>

            Tecnologia • Design • Inteligência Artificial

          </div>





          <h1
          className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
          "
          >

            Transformamos ideias em


            <span
            className="
              block
              bg-gradient-to-r
              from-blue-500
              via-cyan-400
              to-purple-500
              bg-clip-text
              text-transparent
            "
            >

              soluções digitais inteligentes.

            </span>


          </h1>





          <p
          className="
            mt-8
            text-xl
            text-gray-300
            max-w-xl
            leading-relaxed
          "
          >

            Criamos sites, aplicativos, sistemas,
            dashboards e experiências digitais
            utilizando tecnologia, design e inteligência artificial.

          </p>





          <div
          className="
            mt-10
            flex
            flex-wrap
            gap-5
          "
          >



            {/* COMEÇAR PROJETO */}

            <a

            href="#contato"

            className="
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              font-semibold
              flex
              items-center
              gap-2
              shadow-neon
              hover:scale-105
              transition
            "

            >

              Começar projeto

              <ArrowRight size={18}/>

            </a>





            {/* VER PORTFÓLIO */}

            <a

            href="#projetos"

            className="
              px-8
              py-4
              rounded-full
              border
              border-white/20
              bg-white/5
              backdrop-blur
              hover:bg-white/10
              transition
            "

            >

              Ver portfólio

            </a>



          </div>



        </motion.div>





        {/* VISUAL TECNOLÓGICO */}

        <motion.div

          initial={{
            opacity:0,
            scale:.8
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:1
          }}

        >

          <TechVisual />

        </motion.div>



      </div>



    </section>

  );

}