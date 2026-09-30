"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";


const whatsapp =
"https://wa.me/34600142568?text=Olá%2C%20equipe%20Next%20Duo%20Studio!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto";


export default function Navbar(){

return (

<motion.nav

initial={{
y:-50,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

transition={{
duration:.6
}}

className="
fixed
top-0
left-0
right-0
z-50
border-b
border-white/10
bg-black/30
backdrop-blur-xl
"

>


<div

className="
max-w-7xl
mx-auto
px-8
py-5
flex
items-center
justify-between
"

>



{/* LOGO */}

<a

href="#inicio"

className="
text-2xl
font-bold
bg-gradient-to-r
from-blue-500
to-purple-500
bg-clip-text
text-transparent
"

>

Next Duo Studio

</a>





{/* MENU */}

<div

className="
hidden
md:flex
items-center
gap-8
text-gray-300
"

>


<a
href="#inicio"
className="
hover:text-white
transition
"
>

Início

</a>


<a
href="#servicos"
className="
hover:text-white
transition
"
>

Serviços

</a>


<a
href="#projetos"
className="
hover:text-white
transition
"
>

Projetos

</a>


<a
href="#design"
className="
hover:text-white
transition
"
>

Design

</a>


<a
href="#contato"
className="
hover:text-white
transition
"
>

Contato

</a>





<a

href={whatsapp}

target="_blank"

className="
px-6
py-3
rounded-full
bg-gradient-to-r
from-blue-600
to-purple-600
font-semibold
hover:scale-105
transition
"

>

Solicitar orçamento

</a>



</div>





{/* MOBILE */}

<div

className="
md:hidden
"

>

<Menu />

</div>




</div>


</motion.nav>

)

}