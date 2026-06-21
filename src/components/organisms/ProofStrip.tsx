import StatBlock from "@/components/molecules/StatBlock";

const stats = [
  { value: "25+", label: "Anos de experiência", detail: "Desde 2000" },
  { value: "AMI", label: "Licença 11192", detail: "Mediação certificada" },
  { value: "3", label: "Serviços especializados", detail: "Imobiliário · Bancário · Energético" },
];

export default function ProofStrip() {
  return (
    <section className="relative bg-blue-500 py-20 overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0 sm:divide-x sm:divide-white/20">
          {stats.map(({ value, label, detail }) => (
            <StatBlock
              key={label}
              value={value}
              label={label}
              detail={detail}
              inverted
              className="items-center text-center sm:px-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
