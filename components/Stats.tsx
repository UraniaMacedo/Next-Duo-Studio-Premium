"use client";

import { motion } from "framer-motion";


const stats = [
{
number:"+7",
title:"Projetos criados",
text:"Aplicações, sistemas e experiências digitais."
},

{
number:"7",
title:"Soluções digitais",
text:"Projetos em diferentes áreas da tecnologia."
},

{
number:"5+",
title:"Especialidades",
text:"Web, Mobile, IA, Design e Dados."
},

{
number:"∞",
title:"Possibilidades",
text:"Tecnologia sem limites para novas ideias."
}

];


export default function Stats(){

return (

<section className="
py-24
bg-black
">

<div className="
max-w-7xl
mx-auto
px-8
">


<div className="
grid
grid-cols-2
lg:grid-cols-4
gap-6
">


{
stats.map((item,index)=>(

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

viewport={{
once:true
}}

transition={{
delay:index*0.1
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
text-center
backdrop-blur-xl
hover:border-blue-500/50
transition
"

>


<h3 className="
text-5xl
font-bold
bg-gradient-to-r
from-blue-500
to-purple-500
bg-clip-text
text-transparent
">

{item.number}

</h3>


<h4 className="
mt-4
text-xl
font-semibold
">

{item.title}

</h4>


<p className="
mt-3
text-gray-400
text-sm
">

{item.text}

</p>


</motion.div>

))

}


</div>


</div>

</section>

)

}