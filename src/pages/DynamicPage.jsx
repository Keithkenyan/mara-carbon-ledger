import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import SectionReveal from '@/components/shared/SectionReveal';
import HorizonLine from '@/components/shared/HorizonLine';

function TextBlock({ block }) {
  return (
    <SectionReveal>
      <div className="space-y-5 max-w-3xl">
        {block.heading && (
          <h2 className="font-display text-3xl md:text-4xl text-ether tracking-tight leading-tight">{block.heading}</h2>
        )}
        {block.body && (
          <p className="font-body text-base text-white/50 leading-relaxed whitespace-pre-wrap">{block.body}</p>
        )}
      </div>
    </SectionReveal>
  );
}

function ImageBlock({ block }) {
  if (!block.imageUrl) return null;
  return (
    <SectionReveal>
      <figure className="space-y-3">
        <img src={block.imageUrl} alt={block.imageCaption || ''} className="w-full max-h-[60vh] object-cover" />
        {block.imageCaption && (
          <figcaption className="font-tech text-[10px] tracking-[0.2em] text-white/30 uppercase">{block.imageCaption}</figcaption>
        )}
      </figure>
    </SectionReveal>
  );
}

function TextImageBlock({ block }) {
  return (
    <SectionReveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-5">
          {block.heading && (
            <h2 className="font-display text-3xl md:text-4xl text-ether tracking-tight leading-tight">{block.heading}</h2>
          )}
          {block.body && (
            <p className="font-body text-base text-white/50 leading-relaxed whitespace-pre-wrap">{block.body}</p>
          )}
        </div>
        {block.imageUrl && (
          <figure className="space-y-3">
            <img src={block.imageUrl} alt={block.imageCaption || ''} className="w-full object-cover" />
            {block.imageCaption && (
              <figcaption className="font-tech text-[10px] tracking-[0.2em] text-white/30 uppercase">{block.imageCaption}</figcaption>
            )}
          </figure>
        )}
      </div>
    </SectionReveal>
  );
}

export default function DynamicPage() {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    base44.entities.Page.filter({ slug, published: true }).then(results => {
      if (results.length > 0) {
        setPage(results[0]);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    });
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen bg-basalt flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-white/10 border-t-ochre rounded-full animate-spin" />
    </div>
  );

  if (notFound) return (
    <div className="min-h-screen bg-basalt flex flex-col items-center justify-center gap-4 pt-32">
      <p className="font-tech text-[11px] tracking-[0.3em] uppercase text-white/25">Page not found</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-basalt pt-32">
      <section className="px-[5vw] lg:px-[8vw] pb-12">
        <SectionReveal>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[90px] text-ether tracking-tight leading-[0.92]">
            {page.title}
          </h1>
        </SectionReveal>
      </section>

      <HorizonLine />

      <div className="px-[5vw] lg:px-[8vw] py-20 space-y-20">
        {(page.blocks || []).map((block, i) => {
          if (block.type === 'text')       return <TextBlock key={i} block={block} />;
          if (block.type === 'image')      return <ImageBlock key={i} block={block} />;
          if (block.type === 'text_image') return <TextImageBlock key={i} block={block} />;
          return null;
        })}
      </div>
    </div>
  );
}