"use client";

import { motion } from "framer-motion";
import {
  Send,
  Globe,
  Smartphone,
  Brain,
  Palette,
  Megaphone,
  Layout
} from "lucide-react";


const options = [

{
icon:Globe,
title:"Site Profissional"
},

{
icon:Smartphone,
title:"Aplicativo Mobile"
},

{
icon:Layout,
title:"Sistema / Dashboard"
},

{
icon:Brain,
title:"Inteligência Artificial"
},

{
icon:Palette,
title:"Design & Marca"
},

{
icon:Megaphone,
title:"Marketing Digital"
}

];


export default function Quote(){


const whatsapp =
"https://wa.me/34600142568?text=Olá!%20Vim%20pelo%20site%20da%20Next%20Duo%20Studio%20e%20gostaria%20de%20solicitar%20um%20orçamento.";



return (

<section className="
py-32
bg-black
relative
overflow-hidden
">


<div className="
absolute
w-96
h-96
bg-blue-600/20
blur-[140px]
rounded-full
left-0
"/>


<div className="
max-w-5xl
mx-auto
px-8
text-center
relative
">


<p className="
text-cyan-400
uppercase
tracking-widest
text-sm
mb-6
">

Vamos criar algo incrível

</p>


<h2 className="
text-5xl
font-bold
">

Conte sua ideia.

<span className="
block
bg-gradient-to-r
from-blue-500
to-purple-500
bg-clip-text
text-transparent
">

Nós transformamos em realidade.

</span>

</h2>



<p className="
mt-6
text-gray-400
text-lg
">

Escolha o tipo de projeto e fale diretamente
com a Next Duo Studio.

</p>




<div className="
grid
md:grid-cols-3
gap-5
mt-12
">


{
options.map((item,index)=>{


const Icon=item.icon;


return (

<motion.div

key={item.title}

whileHover={{
y:-8
}}

className="
p-6
rounded-3xl
border
border-white/10
bg-white/5
cursor-pointer
hover:border-blue-500/50
transition
"

>


<Icon
size={32}
className="
mx-auto
mb-4
text-cyan-400
"/>


<h3 className="
font-semibold
">

{item.title}

</h3>


</motion.div>

)

})

}


</div>




<a

href={whatsapp}

target="_blank"

className="
inline-flex
items-center
gap-3
mt-12
px-10
py-5
rounded-full
bg-gradient-to-r
from-blue-600
to-purple-600
font-bold
hover:scale-105
transition
"

>

Solicitar orçamento

<Send size={20}/>

</a>



</div>


</section>

)

}