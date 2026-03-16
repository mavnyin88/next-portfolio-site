const Footer = () => (
  <footer id="contact" className="px-8 py-24 max-w-5xl mx-auto border-t border-border">
    <div
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      <div>
        <h2 className="font-display text-3xl font-bold text-foreground mb-4">
          Let's work together.
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          I deliver pixel-perfect work for brands that care about craft. Have a project in mind? Reach out.
        </p>
      </div>
      <div className="md:text-right">
        <a
          href="mailto:hi@michaelavnyin.com"
          className="font-display text-xl font-semibold text-foreground hover:text-accent transition-colors duration-300"
        >
          hi@michaelavnyin.com
        </a>
      </div>
    </div>
    <div className="mt-20 pt-8 border-t border-border/50 text-xs text-muted-foreground/50">
      © {new Date().getFullYear()} Michael Avnyin
    </div>
  </footer>
);

export default Footer;
