import React from 'react'

export default function ClientsGrid() {
  const logos = [
    'logo1.png', 'logo2.png', 'logo3.png', 'logo4.svg'
  ];

  return (
    <section className="mt-12 px-4">
      <h3 className="text-xl font-semibold mb-8 text-center text-slate-100">
        Alguns clientes
      </h3>

      {/* Container flexível centralizado */}
      <div className="flex flex-wrap justify-center items-center gap-6 max-w-5xl mx-auto">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="w-40 h-24 bg-slate-100 border border-slate-700 rounded-xl flex items-center justify-center p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={`/placeholders/${logo}`}
              alt={`Cliente ${i + 1}`}
              className="max-w-full max-h-full object-contain grayscale opacity-100 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  )
}