const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Creative Coding", href: "#creative" },
  { label: "Resume", href: "#contact" },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-md border-b border-border/50" style={{opacity: 1, transform: 'none'}}>
    <span className="font-display text-xl font-bold tracking-tight text-foreground">MA</span>
    <div className="flex gap-8">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          {link.label}
        </a>
      ))}
    </div>
  </nav>
);

export default Navbar;