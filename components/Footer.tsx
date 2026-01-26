import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-art-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Column 1 - Tools */}
          <div>
            <h3 className="text-lg font-bold text-art-800 mb-4 font-display">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/generator" className="text-art-600 hover:text-art-700 transition-colors">
                  What to Draw Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/wheel" className="text-art-600 hover:text-art-700 transition-colors">
                  What to Draw Wheel
                </Link>
              </li>
              <li>
                <Link href="/tools/random" className="text-art-600 hover:text-art-700 transition-colors">
                  Random Drawing Prompt
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Drawing Ideas */}
          <div>
            <h3 className="text-lg font-bold text-art-800 mb-4 font-display">Drawing Ideas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ideas/what-to-draw-when-bored" className="text-art-600 hover:text-art-700 transition-colors">
                  What to Draw When Bored
                </Link>
              </li>
              <li>
                <Link href="/ideas/easy-drawing-ideas" className="text-art-600 hover:text-art-700 transition-colors">
                  Easy Drawing Ideas
                </Link>
              </li>
              <li>
                <Link href="/ideas/cute-drawing-ideas" className="text-art-600 hover:text-art-700 transition-colors">
                  Cute Drawing Ideas
                </Link>
              </li>
              <li>
                <Link href="/ideas/simple-drawing-ideas" className="text-art-600 hover:text-art-700 transition-colors">
                  Simple Drawing Ideas
                </Link>
              </li>
              <li>
                <Link href="/ideas/aesthetic-drawing-ideas" className="text-art-600 hover:text-art-700 transition-colors">
                  Aesthetic Drawing Ideas
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - More */}
          <div>
            <h3 className="text-lg font-bold text-art-800 mb-4 font-display">More</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-art-600 hover:text-art-700 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-art-600 hover:text-art-700 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-art-600 hover:text-art-700 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-art-600 hover:text-art-700 transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Challenges */}
          <div>
            <h3 className="text-lg font-bold text-art-800 mb-4 font-display">Challenges</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/challenges/7-day" className="text-art-600 hover:text-art-700 transition-colors">
                  7-Day Drawing Challenge
                </Link>
              </li>
              <li>
                <Link href="/challenges/30-day" className="text-art-600 hover:text-art-700 transition-colors">
                  30-Day Drawing Challenge
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-art-200 text-center text-art-600">
          <p>© 2026 WhatToDraw.art – Free drawing ideas for everyone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
