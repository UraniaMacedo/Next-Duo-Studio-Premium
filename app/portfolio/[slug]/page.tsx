import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ExternalLink, Play, Globe, Code } from "lucide-react";


function createSlug(title:string){

return title
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"")
.replaceAll(" ","-");

}



export default async function ProjectPage({
params
}:{
params: Promise<{
slug:string
}>
})
{


const { slug } = await params;



const project = projects.find(
(item)=>
createSlug(item.title) === slug
);



if(!project){

notFound();

}



return (

<main
className="
min-h-screen
bg-black
text-white
py-24
"
>


<div
className="
max-w-5xl
mx-auto
px-8
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

{project.category}

</p>





<h1
className="
text-5xl
font-bold
mt-5
"
>

{project.title}

</h1>





<p
className="
text-gray-400
text-xl
mt-8
leading-relaxed
"
>

{project.description}

</p>







{/* IMAGEM DO PROJETO */}


<div
className="
mt-12
h-[450px]
rounded-3xl
overflow-hidden
border
border-white/10
bg-white/5
flex
items-center
justify-center
shadow-2xl
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
rounded-2xl
"

/>


:

<div
className="
text-8xl
"
>

{project.icon}

</div>


}


</div>








{/* DESAFIO E SOLUÇÃO */}



<div
className="
grid
md:grid-cols-2
gap-8
mt-12
"
>



<div
className="
p-8
rounded-3xl
bg-white/5
border
border-white/10
"
>


<h2
className="
text-2xl
font-bold
mb-4
"
>

Desafio

</h2>


<p
className="
text-gray-400
"
>

{project.challenge}

</p>


</div>






<div
className="
p-8
rounded-3xl
bg-white/5
border
border-white/10
"
>


<h2
className="
text-2xl
font-bold
mb-4
"
>

Solução

</h2>


<p
className="
text-gray-400
"
>

{project.solution}

</p>


</div>


</div>









{/* TECNOLOGIAS */}



<div
className="
mt-12
"
>


<h2
className="
text-2xl
font-bold
mb-5
"
>

Tecnologias

</h2>



<div
className="
flex
flex-wrap
gap-3
"
>


{

project.technologies.map((tech)=>(


<span

key={tech}

className="
px-4
py-2
rounded-full
bg-white/10
text-sm
"

>

{tech}

</span>


))


}


</div>


</div>









{/* BOTÕES */}



<div
className="
flex
flex-wrap
gap-4
mt-12
"
>



{

project.playStore &&


<a

href={project.playStore}

target="_blank"

className="
px-6
py-3
rounded-full
bg-green-600
flex
items-center
gap-2
hover:scale-105
transition
"

>

<Play size={18}/>

Google Play

</a>


}







{

project.demo &&


<a

href={project.demo}

target="_blank"

className="
px-6
py-3
rounded-full
bg-gradient-to-r
from-blue-600
to-purple-600
flex
items-center
gap-2
hover:scale-105
transition
"

>

<Globe size={18}/>

Abrir projeto

</a>


}







{

project.github &&


<a

href={project.github}

target="_blank"

className="
px-6
py-3
rounded-full
bg-white/10
border
border-white/20
flex
items-center
gap-2
hover:bg-white/20
transition
"

>

<Code size={18}/>

GitHub

</a>


}





</div>







</div>


</main>

)

}