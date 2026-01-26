import { DrawingIdea } from './index';
import { idea as whatToDrawWhenBored } from './what-to-draw-when-bored';
import { idea as easyDrawingIdeas } from './easy-drawing-ideas';
import { idea as cuteDrawingIdeas } from './cute-drawing-ideas';
import { idea as simpleDrawingIdeas } from './simple-drawing-ideas';
import { idea as aestheticDrawingIdeas } from './aesthetic-drawing-ideas';
import { idea as whatToDrawWhenSad } from './what-to-draw-when-sad';
import { idea as whatToDrawWhenStressed } from './what-to-draw-when-stressed';
import { idea as funThingsToDraw } from './fun-things-to-draw';

export const allIdeas: DrawingIdea[] = [
  whatToDrawWhenBored,
  easyDrawingIdeas,
  cuteDrawingIdeas,
  simpleDrawingIdeas,
  aestheticDrawingIdeas,
  whatToDrawWhenSad,
  whatToDrawWhenStressed,
  funThingsToDraw,
];

export function getIdeaBySlug(slug: string): DrawingIdea | undefined {
  return allIdeas.find(idea => idea.slug === slug);
}

export function getAllIdeas(): DrawingIdea[] {
  return allIdeas;
}

export function getIdeasByCategory(category: string): DrawingIdea[] {
  return allIdeas.filter(idea => idea.slug.includes(category));
}
