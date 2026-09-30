"use client";

import { motion } from "framer-motion";

import {
  Code,
  Smartphone,
  Brain,
  Palette,
  BarChart,
  Megaphone,
  Search,
  Workflow
} from "lucide-react";


const services = [

  {
    icon: Code,
    title: "Desenvolvimento Web",
    description:
      "Criamos sites, landing pages e plataformas digitais rápidas, modernas e preparadas para gerar resultados."
  },

  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description:
      "Desenvolvemos aplicativos Android e iOS personalizados para transformar ideias em produtos digitais."
  },

  {
    icon: Brain,
    title: "Inteligência Artificial",
    description:
      "Soluções inteligentes com IA para automatizar processos, melhorar produtividade e criar novas oportunidades."
  },

  {
    icon: Workflow,
    title: "Sistemas Personalizados",
    description:
      "Criamos sistemas exclusivos para empresas, com funcionalidades adaptadas ao seu negócio."
  },

  {
    icon: Palette,
    title: "Design & Identidade Visual",
    description:
      "Construímos marcas fortes através de logos, identidade visual, UI/UX e experiências digitais."
  },

  {
    icon: BarChart,
    title: "Dashboards & BI",
    description:
      "Transformamos dados em informações estratégicas através de dashboards inteligentes."
  },

  {
    icon: Megaphone,
    title: "Presença Digital",
    description:
      "Gerenciamos conteúdos, posts, reels e stories para manter sua empresa sempre presente."
  },

  {
    icon: Search,
    title: "SEO & Marketing Digital",
    description:
      "Estratégias digitais para aumentar sua visibilidade, alcance e oportunidades de negócio."
  }

];



export default function Services() {


  return (

    <section
      id="servicos"
      className="
      relative
      py-32
      bg-black
      overflow-hidden
      "
    >


      {/* efeitos de luz */}

      <div
        className="
        absolute
        top-0
        left-1/3
        w-96
        h-96
        bg-blue-600/20
        blur-[140px]
        rounded-full
        "
      />


      <div
        className="
        absolute
        bottom-0
        right-1/3
        w-96
        h-96
        bg-purple-600/20
        blur-[140px]
        rounded-full
        "
      />



      <div
        className="
        relative
        max-w-7xl
        mx-auto
        px-8
        "
      >


        <div
          className="
          text-center
          mb-20
          "
        >


          <p
            className="
            text-cyan-400
            uppercase
            tracking-[5px]
            text-sm
            mb-5
            "
          >
            Nossas soluções
          </p>



          <h2
            className="
            text-4xl
            md:text-6xl
            font-bold
            "
          >

            Tecnologia para


            <span
              className="
              block
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
              "
            >
              transformar negócios
            </span>


          </h2>



          <p
            className="
            mt-6
            text-gray-400
            max-w-3xl
            mx-auto
            text-lg
            "
          >

            Unimos desenvolvimento, design e inteligência artificial
            para criar soluções digitais completas.

          </p>


        </div>





        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >



          {
            services.map((service, index) => {


              const Icon = service.icon;


              return (


                <motion.div

                  key={service.title}

                  initial={{
                    opacity: 0,
                    y: 50
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}

                  transition={{
                    duration: 0.5,
                    delay: index * 0.08
                  }}

                  viewport={{
                    once: true
                  }}


                  className="
                  group
                  relative
                  rounded-3xl
                  p-7
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  overflow-hidden
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  "

                >


                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-blue-600/20
                    to-purple-600/20
                    opacity-0
                    group-hover:opacity-100
                    transition
                    "
                  />



                  <div className="relative">


                    <div
                      className="
                      w-14
                      h-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-blue-600
                      to-purple-600
                      mb-6
                      shadow-lg
                      "
                    >

                      <Icon size={28} />

                    </div>





                    <h3
                      className="
                      text-xl
                      font-bold
                      mb-3
                      "
                    >

                      {service.title}

                    </h3>





                    <p
                      className="
                      text-gray-400
                      text-sm
                      leading-relaxed
                      "
                    >

                      {service.description}

                    </p>



                  </div>



                </motion.div>


              )


            })

          }



        </div>



      </div>


    </section>

  );

}