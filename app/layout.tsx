import './globals.css';

export const metadata = {

title:
"Next Duo Studio | Tecnologia, Design e Inteligência Artificial",

description:
"Criamos sites, aplicativos, sistemas personalizados, inteligência artificial e soluções digitais para empresas.",


keywords:[
"desenvolvimento de sites",
"criação de aplicativos",
"sistemas personalizados",
"inteligência artificial",
"design digital",
"Next Duo Studio",
"automação empresarial"
],


authors:[
{
name:"Next Duo Studio"
}
],


openGraph:{

title:
"Next Duo Studio | Tecnologia, Design e IA",

description:
"Soluções digitais inteligentes para empresas.",

type:"website",

locale:"pt_BR"

}

}


export default function Layout({
children
}:{
children:React.ReactNode
}){

return (

<html lang="pt-BR">

<body>

{children}

</body>

</html>

)

}