"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  Cpu,
  Rocket
} from "lucide-react";


const steps = [

{
icon: Lightbulb,
number:"01",
title:"Ideia",
text:"Transformamos conceitos em oportunidades digitais."
},

{
icon: Target,
number:"02",
title:"Estratégia",
text:"Planejamos a melhor solução para cada desafio."
},

{
icon: Cpu,
number:"03",
title:"Tecnologia",
text:"Desenvolvemos usando ferramentas modernas."
},

{
icon: Rocket,
number:"04",
title:"Resultado",
text:"Entregamos experiências digitais completas."
}

];


export default function TechVisual(){


return (

<div className="
relative
h-[520px]
flex
items-center
justify-center
">


{/* Luzes */}

<div className="
absolute
w-80
h-80
bg-blue-600/30
blur-[120px]
rounded-full
"/>


<div className="
absolute
bottom-0
right-0
w-72
h-72
bg-purple-600/30
blur-[120px]
rounded-full
"/>



<motion.div

animate={{
y:[0,-10,0]
}}

transition={{
duration:5,
repeat:Infinity
}}

className="
relative
w-[390px]
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-8
shadow-2xl
"

>


<p className="
text-gray-400
text-sm
tracking-widest
mb-8
">

NEXT DUO DIGITAL FLOW

</p>



<div className="
space-y-6
">


{
steps.map((step,index)=>{


const Icon = step.icon;


return (

<div
key={step.title}
className="
relative
flex
gap-5
items-start
"
>


{/* linha */}

{
index !== steps.length-1 && (

<div className="
absolute
left-6
top-12
h-12
w-px
bg-gradient-to-b
from-blue-500
to-purple-500
"/>

)
}




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
shrink-0
">

<Icon size={22}/>

</div>



<div>


<div className="
text-xs
text-cyan-400
">

{step.number}

</div>


<h3 className="
font-bold
text-lg
">

{step.title}

</h3>


<p className="
text-gray-400
text-sm
">

{step.text}

</p>


</div>



</div>

)

})

}


</div>



</motion.div>


</div>

)

}