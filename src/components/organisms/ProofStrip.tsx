interface Stat {
  value: string;
  label: string;
  detail?: string;
}

const stats: Stat[] = [
  { value: "25+", label: "Anos de experiência", detail: "Desde 2000" },
  { value: "AMI", label: "Licença 11192", detail: "Mediação certificada" },
  { value: "3", label: "Serviços especializados", detail: "Imobiliário · Bancário · Energético" },
];

export default function ProofStrip() {
  return (
    <section className="relative bg-stone-900 py-20 overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0 sm:divide-x sm:divide-stone-800">
          {stats.map(({ value, label, detail }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center sm:px-12"
            >
              <span className="font-serif text-5xl font-bold text-gold-400 leading-none mb-3">
                {value}
              </span>
              <span className="text-white font-semibold text-sm uppercase tracking-widest mb-1">
                {label}
              </span>
              {detail && (
                <span className="text-stone-500 text-xs">{detail}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
