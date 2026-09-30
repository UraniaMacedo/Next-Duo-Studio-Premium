"use client";

import { motion } from "framer-motion";

import {
  Camera,
  Video,
  Calendar,
  TrendingUp
} from "lucide-react";


const services = [

  {
    icon: Camera,
    title: "Conteúdo Diário",
    text:
      "Posts e stories profissionais para manter sua marca ativa e conectada com o público."
  },

  {
    icon: Video,
    title: "Reels Estratégicos",
    text:
      "Vídeos planejados para gerar conexão, alcance e fortalecimento da marca."
  },

  {
    icon: Calendar,
    title: "Planejamento",
    text:
      "Calendário de conteúdo organizado para uma comunicação constante."
  },

  {
    icon: TrendingUp,
    title: "Crescimento",
    text:
      "Estratégias digitais para fortalecer sua presença e alcançar novos clientes."
  }

];



export default function SocialMedia(){


return (

<section
className="
py-32
bg-black
"
>


<div
className="
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
tracking-widest
text-sm
"
>

Presença Digital

</p>



<h2
className="
text-5xl
font-bold
mt-5
"
>

Sua marca presente

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

todos os dias.

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

Criamos estratégias de conteúdo para empresas
que querem crescer no ambiente digital.

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
services.map((item,index)=>{


const Icon = item.icon;


return (

<motion.div

key={item.title}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index * 0.1
}}

viewport={{
once:true
}}

whileHover={{
y:-10
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-7
hover:border-purple-500/50
transition
"

>


<Icon
size={32}
className="
text-cyan-400
mb-5
"
/>



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
mt-3
text-sm
leading-relaxed
"
>

{item.text}

</p>



</motion.div>

)


})

}


</div>


</div>


</section>

)

}