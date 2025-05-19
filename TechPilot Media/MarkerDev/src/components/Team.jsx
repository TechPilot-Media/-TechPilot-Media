import React, { useEffect, useRef } from 'react';

const DoodleCanvas = () => {
  const canvasRef = useRef(null);
  const shapes = ['arrow', 'chat', 'gear', 'eye', 'plane', 'word', 'word', 'word'];
  const words = ['CLICK', 'TEAM', 'LOGIN', 'CHAT', 'START'];

  const random = (min, max) => Math.random() * (max - min) + min;
  const randInt = (min, max) => Math.floor(random(min, max));

  const drawArrow = (ctx, x, y, size) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - size);
    ctx.moveTo(x - size * 0.2, y - size + size * 0.2);
    ctx.lineTo(x, y - size);
    ctx.lineTo(x + size * 0.2, y - size + size * 0.2);
    ctx.stroke();
  };

  const drawChat = (ctx, x, y, size) => {
    ctx.beginPath();
    ctx.arc(x, y, size * 0.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x - size * 0.2, y + size * 0.5);
    ctx.lineTo(x, y + size * 0.3);
    ctx.lineTo(x + size * 0.1, y + size * 0.5);
    ctx.stroke();
  };

  const drawGear = (ctx, x, y, size, teeth = 6) => {
    const angleStep = (2 * Math.PI) / teeth;
    for (let i = 0; i < teeth; i++) {
      const angle = i * angleStep;
      const x1 = x + Math.cos(angle) * size;
      const y1 = y + Math.sin(angle) * size;
      const x2 = x + Math.cos(angle + angleStep / 2) * (size * 0.7);
      const y2 = y + Math.sin(angle + angleStep / 2) * (size * 0.7);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.closePath();
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(x, y, size * 0.4, 0, 2 * Math.PI);
    ctx.stroke();
  };

  const drawEye = (ctx, x, y, size) => {
    ctx.beginPath();
    ctx.ellipse(x, y, size, size * 0.5, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, size * 0.1, 0, 2 * Math.PI);
    ctx.fill();
  };

  const drawPlane = (ctx, x, y, size) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size * 0.8, y + size * 0.3);
    ctx.lineTo(x + size * 0.3, y + size * 0.1);
    ctx.lineTo(x + size * 0.7, y + size * 0.8);
    ctx.lineTo(x + size * 0.4, y + size * 0.4);
    ctx.stroke();
  };

  const drawWord = (ctx, x, y, word, size) => {
    ctx.save();
    ctx.font = `${size}px "Comic Sans MS", cursive`;
    ctx.strokeText(word, x, y);
    ctx.restore();
  };

  const drawShape = (ctx, shape, x, y, size) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(random(0, Math.PI * 2));
    ctx.translate(-x, -y);
    switch (shape) {
      case 'arrow': drawArrow(ctx, x, y, size); break;
      case 'chat': drawChat(ctx, x, y, size); break;
      case 'gear': drawGear(ctx, x, y, size); break;
      case 'eye': drawEye(ctx, x, y, size); break;
      case 'plane': drawPlane(ctx, x, y, size); break;
      case 'word': drawWord(ctx, x, y, words[randInt(0, words.length)], size); break;
    }
    ctx.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';
    ctx.fillStyle = '#000';

    let count = 0;
    let drawInterval = null;
    let inactivityTimeout = null;

    const clearCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const startDrawing = () => {
      drawInterval = setInterval(() => {
        const shape = shapes[randInt(0, shapes.length)];
        const x = randInt(0, canvas.width);
        const y = randInt(0, canvas.height);
        const size = random(20, 50);
        drawShape(ctx, shape, x, y, size);
        count++;
        if (count > 500) clearInterval(drawInterval);
      }, 80);
    };

    const stopDrawing = () => {
      clearInterval(drawInterval);
      drawInterval = null;
    };

    const resetInactivityTimer = () => {
      count = 0;
      stopDrawing();
      if (inactivityTimeout) clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(startDrawing, 5000);
    };

    const onScroll = () => {
      clearCanvas();
      resetInactivityTimer();
    };

    window.addEventListener('mousemove', resetInactivityTimer);
    window.addEventListener('keydown', resetInactivityTimer);
    window.addEventListener('click', resetInactivityTimer);
    window.addEventListener('scroll', onScroll);

    resetInactivityTimer();

    return () => {
      stopDrawing();
      clearTimeout(inactivityTimeout);
      window.removeEventListener('mousemove', resetInactivityTimer);
      window.removeEventListener('keydown', resetInactivityTimer);
      window.removeEventListener('click', resetInactivityTimer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};

const TeamSection = () => {
  return (
    <div className="relative bg-gray-300 text-black overflow-hidden z-10">
      <DoodleCanvas />
      <style>
        {`
          @keyframes tiltScale {
            0% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(-7deg) scale(1.09); }
            50% { transform: rotate(7deg) scale(1.11); }
            75% { transform: rotate(0deg) scale(1.14); }
            100% { transform: rotate(0deg) scale(1.15); }
          }

          .group:hover .tilt-anim {
            animation: tiltScale 0.6s ease-in-out forwards;
          }

          .group:hover .name-label {
            opacity: 1;
          }
        `}
      </style>

      <div className="flex justify-center items-end relative mt-20 h-[420px] md:h-[520px]">
      
        <div className="relative group h-full -mr-4 md:-mr-8 z-10 hover:z-50">
          <img
            src="/images/p2.png"
            alt="Person 1"
            className="h-full object-contain transition-all duration-500 tilt-anim"
          />
          <span className="absolute bottom-31 left-60 transform -translate-x-1/1 text-blue-500 text-3xl font-bold opacity-0 transition-opacity duration-300 name-label">
            PARTHA GHOSH
          </span>
        </div>

  
        <div className="relative group h-full z-10 hover:z-50">
          <img
            src="/images/d2.png"
            alt="Person 2"
            className="h-full object-contain transition-all duration-500 tilt-anim"
          />
          <span className="absolute bottom-31 left-60 transform -translate-x-1/1 text-blue-500 text-3xl font-bold opacity-0 transition-opacity duration-300 name-label">
            DHRUV SHARMA
          </span>
        </div>

  
        <div className="relative group h-full -ml-4 md:-ml-8 z-10 hover:z-50">
          <img
            src="/images/g2.png"
            alt="Person 3"
            className="h-full object-contain transition-all duration-500 tilt-anim"
          />
          <span className="absolute bottom-31 left-60 transform -translate-x-1/1 text-blue-500 text-3xl font-bold opacity-0 transition-opacity duration-300 name-label">
            GAUTAM BASTIA
          </span>
        </div>

     
        <h1
          className="absolute top-[79%] left-1/2 transform -translate-x-1/2 text-[#C6F906] text-[120px] md:text-[180px] z-60 leading-none"
          style={{ fontFamily: 'Impact, sans-serif' }}
        >
          TEAM
        </h1>

        <h1
          className="absolute top-[74%] left-1/2 transform -translate-x-1/2 text-white text-3xl md:text-5xl font-bold z-50"
          style={{ fontFamily: 'sans-serif' }}
        >
          Who We Are
        </h1>
      </div>

      <div className="p-6 md:p-12 max-w-2xl ml-auto text-right text-lg md:text-xl leading-relaxed font-serif -mt-10">
        <p>
          These agencies have demonstrated success in crafting tailored digital strategies that drive
          engagement and growth. When selecting an agency.
        </p>
      </div>
    </div>
  );
};

export default TeamSection;
