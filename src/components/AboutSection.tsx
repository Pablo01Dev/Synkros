import React from 'react'

export default function AboutSection() {
  return (
    <section className="mt-12 w-full flex justify-center px-4">
      {/* Abaixo: w-[80%] define a largura e mx-auto centraliza. 
          Removi a div max-w-4xl externa para não dar conflito de larguras.
      */}
      <div className="relative h-[420px] w-full md:w-[50%] mx-auto overflow-hidden rounded-xl shadow-2xl bg-black">
        
        <video
          src="/placeholders/video-sobre.mp4"
          /* O object-cover aqui vai garantir que as barras laterais 
             do vídeo original sumam, preenchendo todo o espaço.
          */
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          Seu navegador não suporta vídeos.
        </video>

      </div>
    </section>
  )
}