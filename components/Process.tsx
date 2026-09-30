"use client";

import { motion } from "framer-motion";

const steps=[

{
number:"01",
title:"Descoberta",
text:"Entendemos sua ideia, objetivo e desafios."
},

{
number:"02",
title:"Estratégia",
text:"Definimos a melhor solução digital."
},

{
number:"03",
title:"Criação",
text:"Desenvolvemos design, tecnologia e experiência."
},

{
number:"04",
title:"Evolução",
text:"Acompanhamos resultados e melhorias."
}

];


export default function Process(){

return(

<section className="
py-32
bg-black
">


<div className="
max-w-7xl
mx-auto
px-8
">


<div className="
text-center
mb-20
">

<p className="
text-cyan-400
uppercase
tracking-widest
text-sm
">

Nosso processo

</p>


<h2 className="
text-5xl
font-bold
mt-5
">

Da ideia ao

<span className="
bg-gradient-to-r
from-blue-500
to-purple-500
bg-clip-text
text-transparent
">

resultado digital

</span>

</h2>

</div>



<div className="
grid
md:grid-cols-4
gap-6
">


{
steps.map((step,index)=>(


<motion.div

key={step.number}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*.1
}}

viewport={{
once:true
}}

className="
border
border-white/10
rounded-3xl
p-8
bg-white/5
"

>


<span className="
text-cyan-400
text-sm
">

{step.number}

</span>


<h3 className="
text-2xl
font-bold
mt-4
">

{step.title}

</h3>


<p className="
text-gray-400
mt-4
">

{step.text}

</p>


</motion.div>


))

}


</div>


</div>


</section>

)

}