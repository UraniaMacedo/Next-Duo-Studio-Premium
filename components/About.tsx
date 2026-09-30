"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Eye,
  Gem
} from "lucide-react";


const values = [
{
icon:Target,
title:"Missão",
text:"Transformar ideias em soluções digitais inteligentes."
},

{
icon:Eye,
title:"Visão",
text:"Criar experiências digitais que conectam pessoas e tecnologia."
},

{
icon:Gem,
title:"Valores",
text:"Inovação, criatividade e excelência em cada projeto."
}

];


export default function About(){

return (

<section className="
py-32
bg-black
relative
overflow-hidden
">


<div className="
max-w-7xl
mx-auto
px-8
grid
lg:grid-cols-2
gap-16
items-center
">


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


<div className="
flex
items-center
gap-2
text-cyan-400
uppercase
tracking-widest
text-sm
mb-6
">

<Sparkles size={18}/>

Sobre a Next Duo Studio

</div>



<h2 className="
text-5xl
font-bold
leading-tight
">


Tecnologia, criatividade e inteligência para criar


<span className="
block
bg-gradient-to-r
from-blue-500
to-purple-500
bg-clip-text
text-transparent
">

o futuro digital.

</span>


</h2>



<p className="
mt-8
text-gray-400
text-lg
leading-relaxed
">

A Next Duo Studio une desenvolvimento,
design e inteligência artificial para criar
soluções digitais modernas, inteligentes e
preparadas para o futuro.

</p>



</motion.div>




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
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-10
"

>


<div className="
text-gray-400
tracking-widest
text-sm
mb-8
">

NOSSA ESSÊNCIA

</div>



<div className="
space-y-6
">


{
values.map((item)=>{

const Icon=item.icon;


return (

<div
key={item.title}
className="
flex
gap-5
items-start
"
>


<div className="
w-12
h-12
rounded-xl
bg-gradient-to-br
from-blue-600
to-purple-600
flex
items-center
justify-center
">

<Icon size={22}/>

</div>


<div>

<h3 className="
font-bold
text-xl
">

{item.title}

</h3>


<p className="
text-gray-400
mt-2
">

{item.text}

</p>


</div>


</div>

)

})

}


</div>


</motion.div>



</div>


</section>

)

}