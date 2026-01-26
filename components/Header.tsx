'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [ideasOpen, setIdeasOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-art-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-art-700 font-display">
            WhatToDraw.art
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Tools Dropdown */}
            <div className="relative" onMouseEnter={() => setToolsOpen(true)} onMouseLeave={() => setToolsOpen(false)}>
              <button className="text-art-700 hover:text-art-600 font-medium py-2">
                Tools ▾
              </button>
              {toolsOpen && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-xl shadow-lg border border-art-200 overflow-hidden">
                  <Link href="/tools/generator" className="block px-4 py-3 hover:bg-art-50 text-art-700 transition-colors">
                    What to Draw Generator
                  </Link>
                  <Link href="/tools/wheel" className="block px-4 py-3 hover:bg-art-50 text-art-700 transition-colors">
                    What to Draw Wheel
                  </Link>
                  <Link href="/tools/random" className="block px-4 py-3 hover:bg-art-50 text-art-700 transition-colors">
                    Random Drawing Prompt
                  </Link>
                </div>
              )}
            </div>

            {/* Ideas Dropdown */}
            <div className="relative" onMouseEnter={() => setIdeasOpen(true)} onMouseLeave={() => setIdeasOpen(false)}>
              <button className="text-art-700 hover:text-art-600 font-medium py-2">
                Ideas ▾
              </button>
              {ideasOpen && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-xl shadow-lg border border-art-200 overflow-hidden">
                  <Link href="/ideas/what-to-draw-when-bored" className="block px-4 py-3 hover:bg-art-50 text-art-700 transition-colors">
                    What to Draw When Bored
                  </Link>
                  <Link href="/ideas/easy-drawing-ideas" className="block px-4 py-3 hover:bg-art-50 text-art-700 transition-colors">
                    Easy Drawing Ideas
                  </Link>
                  <Link href="/ideas/cute-drawing-ideas" className="block px-4 py-3 hover:bg-art-50 text-art-700 transition-colors">
                    Cute Drawing Ideas
                  </Link>
                  <Link href="/ideas/simple-drawing-ideas" className="block px-4 py-3 hover:bg-art-50 text-art-700 transition-colors">
                    Simple Drawing Ideas
                  </Link>
                </div>
              )}
            </div>

            {/* Challenges */}
            <Link href="/challenges" className="text-art-700 hover:text-art-600 font-medium py-2">
              Challenges
            </Link>
          </nav>

          {/* CTA Button */}
          <Link href="/tools/random" className="art-button art-button-primary">
            🎲 Random Prompt
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
