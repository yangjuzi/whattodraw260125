'use client';

import { useState } from 'react';
import Link from 'next/link';

const dayChallenges = [
  { day: 1, prompt: "Draw a peaceful landscape" },
  { day: 2, prompt: "Create a character design" },
  { day: 3, prompt: "Draw your favorite food" },
  { day: 4, prompt: "Sketch an animal from memory" },
  { day: 5, prompt: "Draw a scene from a dream" },
  { day: 6, prompt: "Create an abstract composition" },
  { day: 7, prompt: "Draw something you're grateful for" },
];

export default function SevenDayChallengePage() {
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());

  const toggleDay = (day: number) => {
    const newCompleted = new Set(completedDays);
    if (newCompleted.has(day)) {
      newCompleted.delete(day);
    } else {
      newCompleted.add(day);
    }
    setCompletedDays(newCompleted);
  };

  const progress = (completedDays.size / dayChallenges.length) * 100;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-art-600">
          <Link href="/" className="hover:text-art-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/challenges" className="hover:text-art-700">Challenges</Link>
          <span className="mx-2">/</span>
          <span className="text-art-800 font-medium">7-Day Drawing Challenge</span>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="text-6xl mb-4">📅</div>
          <h1 className="text-4xl md:text-5xl font-bold text-art-900 mb-4 font-display">
            7-Day Drawing Challenge
          </h1>
          <p className="text-xl text-art-600">
            Build a daily drawing habit with this week-long creative journey.
          </p>
        </header>

        {/* Progress Bar */}
        <div className="art-card p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-art-800">Your Progress</h2>
            <span className="text-lg font-medium text-art-700">
              {completedDays.size} / {dayChallenges.length} Days
            </span>
          </div>
          <div className="w-full bg-art-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-art-600 to-art-500 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Challenge Days */}
        <div className="space-y-4 mb-12">
          {dayChallenges.map((challenge) => (
            <div
              key={challenge.day}
              className={`art-card p-6 transition-all ${
                completedDays.has(challenge.day)
                  ? 'border-2 border-green-400 bg-green-50/50'
                  : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => toggleDay(challenge.day)}
                  className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold transition-all ${
                    completedDays.has(challenge.day)
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-art-300 hover:border-art-500 text-art-600'
                  }`}
                >
                  {completedDays.has(challenge.day) ? '✓' : challenge.day}
                </button>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-art-800 mb-1">
                    Day {challenge.day}
                  </h3>
                  <p className="text-art-600">{challenge.prompt}</p>
                </div>
                {completedDays.has(challenge.day) && (
                  <div className="text-2xl">🎉</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Completion Message */}
        {completedDays.size === dayChallenges.length && (
          <div className="art-card p-8 mb-8 text-center border-2 border-art-600 bg-art-50">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-3xl font-bold text-art-800 mb-4 font-display">
              Congratulations!
            </h2>
            <p className="text-xl text-art-600 mb-6">
              You've completed the 7-Day Drawing Challenge! Keep up the amazing work!
            </p>
            <Link href="/challenges/30-day" className="art-button art-button-primary text-lg">
              Take the 30-Day Challenge →
            </Link>
          </div>
        )}

        {/* Tips */}
        <div className="art-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-art-800 mb-4 font-display">Tips for Success</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-art-600">✦</span>
              <span className="text-art-700">Dedicate at least 15-30 minutes each day</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-art-600">✦</span>
              <span className="text-art-700">Don't worry about perfection – just draw!</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-art-600">✦</span>
              <span className="text-art-700">Try different styles and mediums</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-art-600">✦</span>
              <span className="text-art-700">Share your progress with friends</span>
            </li>
          </ul>
        </div>

        {/* Related */}
        <div className="text-center bg-art-100/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-art-900 mb-4 font-display">
            Ready for More?
          </h2>
          <Link href="/challenges/30-day" className="art-button art-button-primary text-lg">
            📅 30-Day Challenge
          </Link>
        </div>
      </div>
    </div>
  );
}
