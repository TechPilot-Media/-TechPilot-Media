import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { useNavigate } from 'react-router-dom';

const tags = [
  { text: "SOLUTION", color: "bg-red-400" },
  { text: "MARKET", color: "bg-gray-300" },
  { text: "SERVER", color: "bg-white" },
  { text: "CLIENTS", color: "bg-blue-500" },
  { text: "WEB-APP", color: "bg-indigo-400" },
  { text: "DEVELOP", color: "bg-neutral-200" },
  { text: "DOMAIN", color: "bg-yellow-300" },
  { text: "SEO", color: "bg-indigo-300" },
  { text: "SERVICES", color: "bg-white" },
];

const TAG_WIDTH = 460;
const TAG_HEIGHT = 120;

const AboutPage = () => {
  const containerRef = useRef(null);
  const physicsRef = useRef(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    const physicsContainer = physicsRef.current;
    if (!container || !physicsContainer) return;

    const engine = Matter.Engine.create();
    const world = engine.world;

    const bounds = container.getBoundingClientRect();

    const wallThickness = 100;
    const walls = [
      Matter.Bodies.rectangle(bounds.width / 2, bounds.height + wallThickness / 2, bounds.width, wallThickness, { isStatic: true }),
      Matter.Bodies.rectangle(-wallThickness / 2, bounds.height / 2, wallThickness, bounds.height * 2, { isStatic: true }),
      Matter.Bodies.rectangle(bounds.width + wallThickness / 2, bounds.height / 2, wallThickness, bounds.height * 2, { isStatic: true }),
      Matter.Bodies.rectangle(bounds.width / 2, -wallThickness / 2, bounds.width, wallThickness, { isStatic: true }),
    ];
    Matter.World.add(world, walls);

    const bodies = tags.map(() => {
      const x = Math.random() * (bounds.width - TAG_WIDTH) + TAG_WIDTH / 2;
      const y = Math.random() * 200 + 50;
      return Matter.Bodies.rectangle(x, y, TAG_WIDTH, TAG_HEIGHT, {
        restitution: 0.5,
        friction: 0.8,
      });
    });
    Matter.World.add(world, bodies);

    const mouse = Matter.Mouse.create(physicsContainer);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Matter.World.add(world, mouseConstraint);

    const update = () => {
      setPositions(
        bodies.map((body) => ({
          x: body.position.x,
          y: body.position.y,
          angle: body.angle,
        }))
      );
      requestAnimationFrame(update);
    };
    update();

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    return () => {
      Matter.Runner.stop(runner);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
    };
  }, []);

  const navigate = useNavigate();

  const handleKnowMoree = () => {
    navigate("/aboutus");
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#240CF3] text-white px-4 py-8 md:p-12"
    >

      <div className="relative z-10 space-y-6 max-w-2xl">
        <h1 className="text-[10vw] leading-none text-white font-impact">About</h1>
        <p className="text-base md:text-lg mt-6 text-white">
          Offers a range of services including SEO, PPC, and social media marketing,
          with a focus on helping startups scale their digital presence effectively.
        </p>
        <button
          onClick={handleKnowMoree}
          className="bg-[#C6F906] mt-8 text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-xl font-semibold shadow-xl hover:scale-105 transition"
        >
          Know more
        </button>
      </div>

  
      <div
        ref={physicsRef}
        className="hidden md:block absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden"
      >
        {positions.map((pos, index) => {
          const tag = tags[index];
          return (
            <div
              key={index}
              className={`absolute ${tag.color} text-black font-extrabold px-32 py-16 rounded-full shadow-2xl text-7xl min-w-[460px] text-center flex items-center justify-center pointer-events-auto select-none`}
              style={{
                transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) rotate(${pos.angle}rad)`,
                touchAction: "none",
                userSelect: "none",
              }}
            >
              {tag.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutPage;
