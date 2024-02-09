import { CardWrapper, Card } from "@/components/cards";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between 
    lg:p-12
    md:p-8
    sm:p-4
    xs:p-0
    min-w-full
    overflow-hidden
     overflow-y-scroll
    "
    style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      zIndex: "9999",
    }}>
      <div className="z-10 max-w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed items-center justify-center flex w-full bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-white dark:via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a className="m-8 border-y-purple-600 shadow-md rounded-full w-32 h-32 bg-slate-300 overflow-hidden pointer-events-none flex place-items-center p-8 lg:pointer-events-auto p-0" href="#" 
          target="_blank" 
          style={{borderBottom: "4px solid #df00ff", borderLeft: "2px solid #df00ff"}}
          rel="noopener noreferrer">
            <Image
              src="/jurizzogineco.jpeg"
              alt="Julianna Rizzo logo link tree"
              className="rounded-full"
              width={135}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <CardWrapper>
          <>
          <a href="https://wa.me/+5562996881504" target="_blank">
            <Card extraClasses="hover:bg-pink-200" banner="/lacos-whatsapp.jpeg" title="Laços Ginecologia & Obstetrícia" description="ELA Centro Consultórios - R. 6-A, 72 - St. Aeroporto, Goiânia - GO, 74075-220 | Tel: (62) 9 9688-1504" />
          </a>

          <a href="https://wa.me/+5562996025884" target="_blank">
            <Card extraClasses="hover:bg-cyan-500" banner="/cendi-whatsapp-button.jpeg" title="Cendi WhatsApp" description="Av. T-4, 619 – 19º andar - St. Bueno, Goiânia/GO" />
          </a>
          <a href="https://www.instagram.com/jurizzogineco/" target="_blank">
            <Card extraClasses="hover:bg-pink-500" banner="/instagram-button.jpeg" title="Instagram" description="CRM-GO 16073 - RQE 9802
Avaliação microscópica do conteúdo vaginal a fresco e pelo método de Gram🔬. Prof universitária." />
          </a>
          <a href="https://www.youtube.com/@jurizzogineco" target="_blank">
            <Card extraClasses="hover:bg-red-600" banner="/YouTube-button.jpeg" title="YouTube" />
          </a>
          <a href="https://heyzine.com/flip-book/3c259b76af.html" target="_blank">
            <Card extraClasses="hover:bg-red-800 hover:text-white" banner="/UTEROS.jpeg" title="ÚTEROS" description={`ÚTEROS | Três não é demais: Um empate técnico coloca três alunos da T8 no pódio! Conheça Milena da Turma B. \nE OS AMIGOS E VIZINHOS VITÓRIA E SÉRGIO FILHO DA TURMA A`} />
          </a>
          </>
        </CardWrapper>
      </div>

    </main>
  );
}
