"use client";

import { motion } from "framer-motion";

import {
  BrainCircuit,
  Bot,
  Workflow,
  Database,
  Sparkles
} from "lucide-react";


const items = [

{
icon:BrainCircuit,
title:"Inteligência Artificial",
text:"Soluções inteligentes para transformar processos."
},

{
icon:Bot,
title:"Agentes Digitais",
text:"Automações que trabalham junto com sua equipe."
},

{
icon:Workflow,
title:"Automação",
text:"Menos tarefas manuais, mais produtividade."
},

{
icon:Database,
title:"Dados Inteligentes",
text:"Informações transformadas em decisões."
}

];



export default function AILab(){


return (

<section className="
relative
py-32
bg-black
overflow-hidden
">


<div className="
absolute
w-[500px]
h-[500px]
bg-purple-600/20
blur-[150px]
rounded-full
right-0
top-20
"/>



<div className="
max-w-7xl
mx-auto
px-8
grid
lg:grid-cols-2
gap-16
items-center
">


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


<div className="
flex
gap-2
items-center
text-cyan-400
uppercase
tracking-widest
text-sm
mb-6
">

<Sparkles size={18}/>

Next Duo AI Lab

</div>



<h2 className="
text-5xl
font-bold
leading-tight
">


O futuro dos negócios será

<span className="
block
bg-gradient-to-r
from-blue-500
to-purple-500
bg-clip-text
text-transparent
">

inteligente.

</span>


</h2>



<p className="
mt-8
text-gray-400
text-lg
leading-relaxed
">

Criamos soluções utilizando inteligência artificial,
automação e tecnologia para empresas que querem
ganhar eficiência e inovar.

</p>


</motion.div>




{/* PAINEL */}


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
text-sm
tracking-widest
mb-8
">

AI DIGITAL CORE

</div>



<div className="
space-y-5
">


{
items.map((item)=>{


const Icon=item.icon;


return (

<div

key={item.title}

className="
flex
gap-5
items-center
p-5
rounded-2xl
bg-black/40
border
border-white/10
hover:border-purple-500/50
transition
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
">

{item.title}

</h3>


<p className="
text-gray-400
text-sm
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