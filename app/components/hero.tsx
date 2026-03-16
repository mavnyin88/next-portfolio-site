const Hero = () => (
  <section className="min-h-screen flex items-center justify-center px-8">
    <div
      className="max-w-xl text-center"
    >
      <div className="mb-8 flex justify-center">
        <img
          src="https://www.michaelavnyin.com/img/mike_avnyin3.jpg"
          alt="Michael Avnyin"
          className="w-20 h-20 rounded-full object-cover border-2 border-border"
        />
      </div>
      <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
        Hi!
      </h1>
      <p className="text-base leading-relaxed font-body">
        I craft modern React interfaces that power seamless experiences for millions of users. I drive front-end experimentation with A/B tests, turning insights into smarter product decisions. During peak retail moments, I ensure our platform stays fast, reliable, and scalable for every user.
      </p>
    </div>
  </section>
);

export default Hero;