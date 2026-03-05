import React from 'react'
import NeuralNetworkGrid from './NeuralNetworkGrid'

export default function AboutSection() {
  return (
    <section className="relative mt-12 w-full min-h-[500px] flex items-center justify-center px-4 overflow-hidden">
      
      {/* CAMADA 1: FUNDO GIGANTE (A MALHA)
          Ela ocupa 100% da largura e altura desta SEÇÃO, não do vídeo.
          Colocamos z-0 para ser o papel de parede.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <NeuralNetworkGrid />
      </div>

      {/* CAMADA 2: O VÍDEO (FLUTUANDO NO MEIO)
          - z-10: Fica na frente da malha.
          - relative: Para o z-index funcionar.
          - max-w: Para ele não ocupar a tela toda e deixar a malha aparecer nas bordas.
      */}
      <div className="relative z-10 w-full md:w-[45%] aspect-video rounded-xl shadow-xl overflow-hidden border border-white/10">
        <video
          src="/placeholders/video-sobre.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          Seu navegador não suporta vídeos.
        </video>
        <div className="absolute inset-0 bg-green-500/5 pointer-events-none mix-blend-overlay"></div>
      </div>

    </section>
  )
}