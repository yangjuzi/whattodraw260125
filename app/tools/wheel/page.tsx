'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const wheelItems = [
  'Landscape',
  'Portrait',
  'Animal',
  'Food',
  'Fantasy',
  'Abstract',
  'Plant',
  'Building',
  'Character',
  'Object',
  'Space',
  'Water',
];

export default function WheelPage() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    drawWheel();
  }, []);

  const drawWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const colors = [
      '#e6d6c4', '#f5e6d3', '#ecd8c9', '#faf4ee', '#e9ddd3',
      '#f7efe7', '#dcd0c5', '#f0e4da', '#e6dace', '#faf0e6',
      '#e8dcd2', '#f2e6dc'
    ];

    const anglePerSegment = (2 * Math.PI) / wheelItems.length;

    for (let i = 0; i < wheelItems.length; i++) {
      const startAngle = i * anglePerSegment + rotation;
      const endAngle = startAngle + anglePerSegment;

      // Draw segment
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();
      ctx.strokeStyle = '#ab897e';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw text
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + anglePerSegment / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#543a35';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(wheelItems[i], radius - 20, 5);
      ctx.restore();
    }

    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
    ctx.fillStyle = '#ab897e';
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('SPIN', centerX, centerY + 5);
  };

  useEffect(() => {
    drawWheel();
  }, [rotation]);

  const spin = () => {
    if (spinning) return;

    setSpinning(true);
    setResult(null);

    const spins = 5 + Math.random() * 5;
    const finalRotation = rotation + spins * 2 * Math.PI;
    const duration = 4000;
    const startTime = Date.now();
    const startRotation = rotation;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentRotation = startRotation + (finalRotation - startRotation) * easeOut;

      setRotation(currentRotation);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setSpinning(false);
        calculateResult(finalRotation);
      }
    };

    animate();
  };

  const calculateResult = (finalRotation: number) => {
    const normalizedRotation = finalRotation % (2 * Math.PI);
    const anglePerSegment = (2 * Math.PI) / wheelItems.length;
    const winningAngle = (2 * Math.PI - normalizedRotation + 3 * Math.PI / 2) % (2 * Math.PI);
    const winningIndex = Math.floor(winningAngle / anglePerSegment) % wheelItems.length;

    const drawingIdeas = {
      'Landscape': 'A peaceful mountain landscape at sunrise',
      'Portrait': 'A whimsical character with oversized glasses',
      'Animal': 'A curious fox peering through autumn leaves',
      'Food': 'An elaborate sushi platter',
      'Fantasy': 'A magical floating castle in the clouds',
      'Abstract': 'Geometric shapes in a spiral pattern',
      'Plant': 'A blooming orchid in a vintage pot',
      'Building': 'A cozy cottage with a thatched roof',
      'Character': 'A brave knight facing a tiny dragon',
      'Object': 'An antique pocket watch',
      'Space': 'An astronaut floating among stars',
      'Water': 'A serene waterfall in a lush forest'
    };

    setResult(wheelItems[winningIndex]);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-art-600">
          <Link href="/" className="hover:text-art-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-art-800 font-medium">What to Draw Wheel</span>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-art-900 mb-4 font-display">
            🎡 What to Draw Wheel
          </h1>
          <p className="text-xl text-art-600">
            Spin the wheel and let chance decide what you draw!
          </p>
        </header>

        {/* Wheel Section */}
        <div className="art-card p-8 mb-8">
          <div className="flex flex-col items-center">
            {/* Pointer */}
            <div className="relative w-4 h-8 mb-0" style={{ transform: 'translateY(-50%)' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-art-700" />
            </div>

            {/* Canvas */}
            <canvas
              ref={canvasRef}
              width={400}
              height={400}
              className="max-w-full h-auto"
            />

            {/* Spin Button */}
            <button
              onClick={spin}
              disabled={spinning}
              className={`art-button art-button-primary text-2xl px-12 py-4 mt-8 ${
                spinning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
              }`}
            >
              {spinning ? '🎡 Spinning...' : '🎡 Spin the Wheel!'}
            </button>
          </div>

          {/* Result */}
          {result && !spinning && (
            <div className="mt-8 text-center">
              <div className="bg-art-50 rounded-2xl p-6 border-2 border-art-200 max-w-md mx-auto">
                <h2 className="text-xl font-bold text-art-800 mb-2">The wheel says:</h2>
                <p className="text-3xl font-bold text-art-700 font-display mb-4">
                  {result}!
                </p>
                <button
                  onClick={spin}
                  className="art-button art-button-secondary"
                >
                  🎡 Spin Again
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-4xl mb-3">🎰</div>
            <h3 className="font-bold text-art-800 mb-2">Fun</h3>
            <p className="text-art-600">Gamified drawing experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-art-800 mb-2">12 Categories</h3>
            <p className="text-art-600">Wide variety of subjects</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎲</div>
            <h3 className="font-bold text-art-800 mb-2">Random</h3>
            <p className="text-art-600">Completely unpredictable</p>
          </div>
        </div>

        {/* Related Tools */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-art-900 mb-4 font-display">
            Try Our Other Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tools/generator" className="art-button art-button-secondary">
              🎯 Generator
            </Link>
            <Link href="/tools/random" className="art-button art-button-secondary">
              🎲 Random
            </Link>
          </div>
        </div>

        {/* More Ideas CTA */}
        <div className="text-center bg-art-100/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-art-900 mb-4 font-display">
            Want More Inspiration?
          </h2>
          <Link href="/ideas" className="art-button art-button-primary text-lg">
            Browse Drawing Ideas
          </Link>
        </div>
      </div>
    </div>
  );
}
