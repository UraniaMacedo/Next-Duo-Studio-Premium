"use client";

import { motion } from "framer-motion";

import {
  Palette,
  Layers,
  PenTool,
  Layout
} from "lucide-react";


const items = [

  {
    icon: Palette,
    title: "Branding",
    text:
      "Construção de marcas fortes e memoráveis para empresas que querem se destacar."
  },

  {
    icon: Layers,
    title: "Identidade Visual",
    text:
      "Elementos visuais que representam a essência e os valores da sua marca."
  },

  {
    icon: PenTool,
    title: "Criativos Digitais",
    text:
      "Artes, campanhas e materiais profissionais para comunicação digital."
  },

  {
    icon: Layout,
    title: "UI/UX Design",
    text:
      "Interfaces bonitas, intuitivas e focadas na experiência do usuário."
  }

];


export default function DesignStudio(){


return (

<section
id="design"
className="
py-32
bg-black
relative
overflow-hidden
"
>


<div
className="
absolute
w-96
h-96
bg-purple-600/20
blur-[140px]
rounded-full
right-0
"
/>



<div
className="
max-w-7xl
mx-auto
px-8
grid
lg:grid-cols-2
gap-16
items-center
"
>


{/* TEXTO */}

<motion.div

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

>


<p
className="
text-cyan-400
uppercase
tracking-widest
text-sm
mb-6
"
>

Design Studio

</p>



<h2
className="
text-5xl
font-bold
leading-tight
"
>

Criamos marcas que

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

deixam marcas.

</span>

</h2>



<p
className="
mt-8
text-gray-400
text-lg
leading-relaxed
"
>

Criamos experiências visuais completas,
unindo estratégia, criatividade e tecnologia
para fortalecer marcas no ambiente digital.

</p>


</motion.div>





{/* CARDS */}

<motion.div

initial={{
opacity:0,
scale:.9
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

className="
grid
grid-cols-2
gap-5
"

>


{
items.map((item)=>{


const Icon = item.icon;


return (

<div

key={item.title}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-6
hover:border-purple-500/50
transition
"

>


<div
className="
w-12
h-12
rounded-xl
bg-gradient-to-br
from-blue-600
to-purple-600
flex
items-center
justify-center
mb-5
"
>

<Icon size={24}/>

</div>


<h3
className="
font-bold
text-xl
"
>

{item.title}

</h3>


<p
className="
text-gray-400
text-sm
mt-3
"
>

{item.text}

</p>


</div>

)

})

}


</motion.div>


</div>


</section>

)

}