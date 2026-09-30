"use client";

import {
Mail,
MessageCircle,
Globe
} from "lucide-react";


const whatsapp =
"https://wa.me/34600142568?text=Olá, equipe Next Duo Studio! Vim pelo site e gostaria de conversar sobre um projeto";


export default function Footer(){

return (

<footer
className="
bg-black
border-t
border-white/10
py-12
"
>


<div
className="
max-w-7xl
mx-auto
px-8
grid
md:grid-cols-4
gap-10
"
>



<div>

<h3
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
</h3>


<p
className="
text-gray-400
mt-4
leading-relaxed
"
>

Tecnologia • Design • Inteligência Artificial

</p>


</div>







<div>

<h4
className="
font-bold
mb-4
"
>
Contato
</h4>


<a

href={whatsapp}

target="_blank"

className="
flex
items-center
gap-2
text-gray-400
hover:text-white
"

>

<MessageCircle size={18}/>

WhatsApp

</a>



<a

href="mailto:macedourania@icloud.com"

className="
flex
items-center
gap-2
mt-3
text-gray-400
hover:text-white
"

>

<Mail size={18}/>

Email

</a>


</div>








<div>

<h4
className="
font-bold
mb-4
"
>
Redes
</h4>



<a

href="https://instagram.com/nextduostudio"

target="_blank"

className="
flex
items-center
gap-2
text-gray-400
hover:text-white
"

>

<Globe size={18}/>

@nextduostudio

</a>





<div

className="
flex
items-center
gap-2
mt-3
text-gray-400
"

>

<Globe size={18}/>

Next Duo Studio Tecnologia

</div>


</div>








<div>

<h4
className="
font-bold
mb-4
"
>
Sobre
</h4>


<p
className="
text-gray-400
text-sm
leading-relaxed
"
>

Criamos sites, aplicativos, sistemas e soluções digitais inteligentes para empresas.

</p>


</div>



</div>





<div
className="
max-w-7xl
mx-auto
px-8
mt-10
pt-8
border-t
border-white/10
text-center
text-gray-500
text-sm
"
>

© 2026 Next Duo Studio. Todos os direitos reservados.

</div>



</footer>

)

}