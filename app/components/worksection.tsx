const projects = [
  {
    title: "Tech Talent Pipeline",
    description: "NYC campaign across subways and buses driving 1,000+ sign-ups for tech training programs.",
    tech: "SquareSpace · JavaScript · jQuery",
    image: "https://www.michaelavnyin.com/img/ttp-nyc.jpg",
    url: "https://ttp.nyc/",
  },
  {
    title: "Spire Energy",
    description: "Interactive HTML5 annual report replacing the traditional PDF format for a major energy provider.",
    tech: "Greensock · JavaScript · CSS",
    image: "https://www.michaelavnyin.com/img/spire.jpg",
    url: "https://www.spireenergy.com/spire-year-review/",
  },
  {
    title: "Cassidy Coordinates",
    description: "Wedding coordinator site designed in Sketch with a custom WordPress build and SASS architecture.",
    tech: "WordPress · SASS · BEM · Sketch",
    image: "https://www.michaelavnyin.com/img/casscoord.png",
    url: "http://www.cassidycoordinates.com/",
  },
];

const WorkSection = () => (
  <section id="work" className="px-8 py-24 max-w-5xl mx-auto">
    <h2 className="font-display text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-16">
      Selected Work
    </h2>
    <div className="grid gap-16 md:gap-20">
      {projects.map((project, i) => (
        <a
          key={project.title}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid md:grid-cols-2 gap-8 items-center"
        >
          <div className={`overflow-hidden rounded-lg ${i % 2 === 1 ? "md:order-2" : ""}`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className={i % 2 === 1 ? "md:order-1" : ""}>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>
            <span className="text-xs tracking-wide text-muted-foreground/70">
              {project.tech}
            </span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default WorkSection;