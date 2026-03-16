const experiments = [
  {
    title: "Object-Oriented Design",
    tech: "P5.js",
    description: "Randomization and constraints to programmatically generate design systems.",
    image: "https://www.michaelavnyin.com/img/oodesign.png",
  },
  {
    title: "Procedural Art Generation",
    tech: "P5.js",
    description: "Sine and cosine algorithms producing randomized procedural shapes.",
    image: "https://www.michaelavnyin.com/img/itchyart.png",
  },
  {
    title: "Depth with Box-Shadow",
    tech: "CSS",
    description: "Mimicking realistic depth using box-shadow and positioning techniques.",
    image: "https://www.michaelavnyin.com/img/cssdepth.png",
  },
  {
    title: "Animated Background Patterns",
    tech: "P5.js",
    description: "Procedurally animated background patterns with code.",
    image: "https://www.michaelavnyin.com/img/patterns.jpg",
  },
];

const CreativeCoding = () => (
  <section id="creative" className="px-8 py-24 max-w-5xl mx-auto">
    <h2
      className="font-display text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-16"
    >
      Creative Coding
    </h2>
    <div className="grid sm:grid-cols-2 gap-8">
      {experiments.map((exp) => (
        <div
          key={exp.title}
          className="group"
        >
          <div className="overflow-hidden rounded-lg mb-4">
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full aspect-[4/3] object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="font-display text-base font-semibold text-foreground mb-1">
            {exp.title}
          </h3>
          <span className="text-xs text-accent font-medium tracking-wide">{exp.tech}</span>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default CreativeCoding;