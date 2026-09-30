"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Globe } from "lucide-react";


const whatsapp =
"https://wa.me/34600142568?text=Olá%2C equipe Next Duo Studio! Vim pelo site e gostaria de conversar sobre um projeto digital";


export default function Contact(){

return (

<section
id="contato"
className="
relative
py-32
bg-black
overflow-hidden
"
>


<div
className="
absolute
left-0
top-20
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
right-0
bottom-20
w-96
h-96
bg-purple-600/20
blur-[140px]
rounded-full
"
/>



<div
className="
relative
max-w-5xl
mx-auto
px-8
text-center
"
>


<p
className="
text-cyan-400
uppercase
tracking-[5px]
text-sm
mb-5
"
>
Contato
</p>



<h2
className="
text-5xl
font-bold
"
>

Vamos transformar sua ideia

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
em realidade?
</span>

</h2>



<p
className="
mt-6
text-gray-400
text-lg
"
>

Entre em contato com a Next Duo Studio
e vamos criar uma solução digital para seu negócio.

</p>





<motion.a

href={whatsapp}

target="_blank"

whileHover={{
scale:1.05
}}

className="
inline-flex
items-center
gap-3
mt-10
px-10
py-5
rounded-full
bg-gradient-to-r
from-blue-600
to-purple-600
font-bold
"

>

<MessageCircle size={22}/>

Solicitar orçamento

</motion.a>






<div
className="
grid
md:grid-cols-3
gap-6
mt-16
"
>





<a

href="https://instagram.com/nextduostudio"

target="_blank"

className="
p-6
rounded-3xl
bg-white/5
border
border-white/10
hover:border-blue-500/50
transition
"

>

<Globe
className="mx-auto mb-4 text-cyan-400"
/>


<h3
className="
font-bold
"
>
Instagram
</h3>


<p
className="
text-gray-400
mt-2
"
>
@nextduostudio
</p>


</a>








<a

href="#"

className="
p-6
rounded-3xl
bg-white/5
border
border-white/10
hover:border-blue-500/50
transition
"

>

<Globe
className="mx-auto mb-4 text-cyan-400"
/>


<h3
className="
font-bold
"
>
Facebook
</h3>


<p
className="
text-gray-400
mt-2
"
>
Next Duo Studio Tecnologia
</p>


</a>








<a

href="mailto:macedourania@icloud.com"

className="
p-6
rounded-3xl
bg-white/5
border
border-white/10
hover:border-blue-500/50
transition
"

>

<Mail
className="mx-auto mb-4 text-cyan-400"
/>


<h3
className="
font-bold
"
>
Email
</h3>


<p
className="
text-gray-400
mt-2
"
>
macedourania@icloud.com
</p>


</a>





</div>


</div>


</section>

)

}