import React from 'react'
import NeuralNetworkGrid from './NeuralNetworkGrid'

export default function AboutSection({ full = false }: { full?: boolean }) {
  return (
    <section className="relative mt-16 w-full min-h-[500px] flex items-center justify-center px-4 overflow-hidden">

      {/* CAMADA 1: FUNDO GIGANTE (A MALHA)
          Ela ocupa 100% da largura e altura desta SEÇÃO, não do vídeo.
          Colocamos z-0 para ser o papel de parede.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-45">
        <NeuralNetworkGrid />
      </div>

      <div className={`relative z-10 w-full ${full ? 'md:w-[70%]' : 'md:w-[45%]'} aspect-video rounded-xl shadow-xl overflow-hidden border border-white/10`}>
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
