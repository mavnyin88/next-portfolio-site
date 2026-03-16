"use client";

import { useEffect, useRef, useState } from "react";

const experiments = [
  {
    title: "Object-Oriented Design",
    tech: "P5.js",
    description: "Randomization and constraints to programmatically generate design systems.",
    image: "https://www.michaelavnyin.com/img/oodesign.png",
    sketch: (p) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.HSL);
        p.background(0, 0, 83);
        p.noStroke();

        const drawPattern = (tx, ty, sz1, sz2, pts, c1, c2) => {
          p.push();
          p.translate(tx, ty);
          p.beginShape();
          for (let i = 0; i <= 360; i += 360 / pts) {
            const x = p.cos(p.radians(i)) * sz1;
            const y = p.sin(p.radians(i)) * sz1;
            if (i === 0) {
              p.vertex(x, y);
            } else {
              p.fill(c1);
              p.quadraticVertex(23, 23, x, y);
            }
          }
          p.endShape();

          p.translate(10, 10);
          p.beginShape();
          for (let i = 0; i <= 360; i += 360 / pts) {
            const x = p.cos(p.radians(i)) * (sz1 - 25);
            const y = p.sin(p.radians(i)) * (sz1 - 25);
            if (i === 0) {
              p.vertex(x, y);
            } else {
              p.fill(c2);
              p.ellipse(x - 9, y - 9, 23, 23);
            }
          }
          p.endShape();
          p.pop();
        };

        drawPattern(p.width / 2, p.height / 2, 300, 275, 33, p.color(p.random(10, 30), 50, 50), p.color(p.random(100, 360), 50, 60));
        drawPattern(p.width, p.height, 400, 375, 33, p.color(p.random(360), 50, 50), p.color(p.random(100, 360), 50, 60));
        drawPattern(p.width / 5, p.height, 200, 175, 33, p.color(p.random(360), 50, 50), p.color(p.random(100, 360), 50, 60));
        drawPattern(p.width / 6, p.height / 3, 100, 100, 23, p.color(p.random(360), 50, 50), p.color(p.random(100, 360), 50, 60));
        drawPattern((p.width / 1.2) | 0, p.height / 3.9, 100, 100, 23, p.color(p.random(360), 50, 50), p.color(p.random(100, 360), 50, 60));
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      p.draw = () => {
        // one-time sketch, no loop required but we can keep for animation
      };
    },
  },
  {
    title: "Procedural Art Generation",
    tech: "P5.js",
    description: "Sine and cosine algorithms producing randomized procedural shapes.",
    image: "https://www.michaelavnyin.com/img/itchyart.png",
    sketch: (p) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(20);
      };
      p.draw = () => {
        p.noStroke();
        p.fill(p.random(0, 360), 80, 70);
        p.ellipse(p.random(p.width), p.random(p.height), p.random(20, 80));
      };
      p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
    },
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
    sketch: (p) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
      };
      p.draw = () => {
        p.background(0);
        p.stroke(255);
        p.noFill();
        for (let i = 0; i < 20; i++) {
          p.ellipse(p.width / 2, p.height / 2, i * 40 + p.frameCount % 40);
        }
      };
      p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
    },
  },
];

const CreativeCoding = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeExperiment, setActiveExperiment] = useState(null);
  const [p5Instance, setP5Instance] = useState(null);
  const sketchRef = useRef(null);

  useEffect(() => {
    if (!modalOpen || !activeExperiment?.sketch) return;

    let instance = null;
    let cancelled = false;

    import("p5").then((p5Module) => {
      if (cancelled || !sketchRef.current) return;
      const P5 = p5Module.default || p5Module;
      instance = new P5(activeExperiment.sketch, sketchRef.current);
      setP5Instance(instance);
    });

    return () => {
      cancelled = true;
      if (instance) {
        instance.remove();
      }
      setP5Instance(null);
    };
  }, [modalOpen, activeExperiment]);

  const openModal = (exp) => {
    setActiveExperiment(exp);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    if (p5Instance) {
      p5Instance.remove();
      setP5Instance(null);
    }
    setActiveExperiment(null);
  };

  return (
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
            className="group cursor-pointer"
            onClick={() => openModal(exp)}
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

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative w-full max-w-2xl rounded-xl bg-white p-6 shadow-xl">
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-100"
              aria-label="Close modal"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{activeExperiment?.title}</h3>

            {activeExperiment?.sketch ? (
              <div
                ref={sketchRef}
                className="h-[min(70vh,calc(100vw-4rem))] w-full overflow-hidden"
                aria-label="p5 canvas container"
              />
            ) : (
              <div className="text-sm text-gray-800 space-y-3">
                <p>{activeExperiment?.description}</p>
              </div>
            )}

            <p className="mt-4 text-xs text-muted-foreground">Click outside or close to stop the sketch.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CreativeCoding;