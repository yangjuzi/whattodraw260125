import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getIdeaBySlug, getAllIdeas } from '@/content/ideas/utils';
import type { Metadata } from 'next';

interface IdeaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const ideas = getAllIdeas();
  return ideas.map((idea) => ({
    slug: idea.slug,
  }));
}

export async function generateMetadata({ params }: IdeaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const idea = getIdeaBySlug(slug);

  if (!idea) {
    return {
      title: 'Idea Not Found',
    };
  }

  return {
    title: `${idea.title} | WhatToDraw.art`,
    description: idea.description,
  };
}

export default async function IdeaPage({ params }: IdeaPageProps) {
  const { slug } = await params;
  const idea = getIdeaBySlug(slug);

  if (!idea) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-art-600">
          <Link href="/" className="hover:text-art-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/ideas" className="hover:text-art-700">Drawing Ideas</Link>
          <span className="mx-2">/</span>
          <span className="text-art-800 font-medium">{idea.title}</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-art-900 mb-4 font-display">
            {idea.title}
          </h1>
          <p className="text-xl text-art-600">
            {idea.description}
          </p>
        </header>

        {/* CTA */}
        <div className="mb-12 text-center">
          <Link href="/tools/random" className="art-button art-button-primary text-lg">
            🎲 Get a Random Drawing Prompt
          </Link>
        </div>

        {/* Sections */}
        {idea.sections.map((section, index) => (
          <section key={index} className="mb-12">
            {/* Image Placeholder */}
            

            <h2 className="text-2xl font-bold text-art-800 mb-6 font-display">
              {section.heading}
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.items.map((item, itemIndex) => (
              <article
                key={itemIndex}
                className="art-card p-4 hover:-translate-y-0.5 transition-transform"
              >
                <div className="mb-3 bg-art-100 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt || item.text}
                    className="w-full h-full object-contain p-2" 
                    loading="lazy"
                  />
                </div>

                <p className="text-art-700 text-sm">
                  {item.text}
                </p>
              </article>
            ))}
          </ul>

          </section>
        ))}

        {/* Related Ideas */}
        <section className="mt-16 pt-8 border-t border-art-200">
          <h2 className="text-2xl font-bold text-art-800 mb-6 font-display">
            More Drawing Ideas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {getAllIdeas()
              .filter(i => i.slug !== slug)
              .slice(0, 6)
              .map((relatedIdea) => (
                <Link
                  key={relatedIdea.slug}
                  href={`/ideas/${relatedIdea.slug}`}
                  className="art-card p-4 block hover:-translate-y-0.5"
                >
                  <h3 className="font-bold text-art-800 mb-2">{relatedIdea.title}</h3>
                  <p className="text-sm text-art-600 line-clamp-2">
                    {relatedIdea.description}
                  </p>
                </Link>
              ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="mt-16 text-center bg-art-100/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-art-900 mb-4 font-display">
            Ready to Start Drawing?
          </h2>
          <Link href="/tools/random" className="art-button art-button-primary text-lg">
            🎲 Get a Random Prompt Now
          </Link>
        </div>
      </div>
    </div>
  );
}
