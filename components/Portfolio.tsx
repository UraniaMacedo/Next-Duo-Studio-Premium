"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";


function createSlug(title:string){

return title
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"")
.replaceAll(" ","-");

}



export default function Portfolio(){


return (

<section
id="projetos"
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
top-20
left-0
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
bottom-20
right-0
w-96
h-96
bg-purple-600/20
blur-[140px]
rounded-full
"
/>





<div
className="
max-w-7xl
mx-auto
px-8
relative
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
"
>

Portfólio

</p>



<h2
className="
text-5xl
font-bold
mt-5
"
>

Projetos que


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

transformam ideias em realidade

</span>


</h2>




<p
className="
text-gray-400
mt-6
max-w-2xl
mx-auto
"
>

Conheça algumas soluções digitais desenvolvidas
com tecnologia, criatividade e inovação.

</p>



</div>







<div
className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"
>



{

projects.map((project,index)=>(



<motion.div


key={project.title}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
delay:index*0.1
}}


viewport={{
once:true
}}


whileHover={{
y:-10
}}


className="
group
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
overflow-hidden
hover:border-blue-500/40
transition-all
duration-300
"

>



{/* IMAGEM DO PROJETO */}


<div
className="
relative
h-64
overflow-hidden
bg-gradient-to-br
from-blue-600/20
to-purple-600/20
flex
items-center
justify-center
"
>


{

project.image ?


<img

src={project.image}

alt={project.title}

className="
max-h-full
max-w-full
object-contain
rounded-xl
group-hover:scale-105
transition-transform
duration-700
"

/>


:


<div
className="
flex
items-center
justify-center
h-full
text-6xl
"
>

{project.icon}

</div>


}



<div
className="
absolute
inset-0
bg-gradient-to-t
from-black/80
via-transparent
to-transparent
pointer-events-none
"
/>



</div>







<div
className="
p-8
"
>




<p
className="
text-cyan-400
text-sm
mb-3
"
>

{project.category}

</p>





<h3
className="
text-2xl
font-bold
mb-4
"
>

{project.title}

</h3>





<p
className="
text-gray-400
leading-relaxed
"
>

{project.description}

</p>







<div
className="
flex
flex-wrap
gap-2
mt-5
"
>


{

project.technologies.map((item)=>(


<span

key={item}

className="
text-xs
px-3
py-1
rounded-full
bg-white/10
"

>

{item}

</span>


))


}


</div>







<a


href={`/portfolio/${createSlug(project.title)}`}


className="
mt-6
inline-flex
items-center
gap-2
text-white
hover:text-cyan-400
transition
"

>


Ver Case

<ExternalLink size={16}/>


</a>





</div>





</motion.div>



))


}



</div>





</div>



</section>

)

}