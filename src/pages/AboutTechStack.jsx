import React from 'react';
import '@carbon/styles/css/styles.css';
import { FlexGrid, Row, Column, Tile } from '@carbon/react';
import Navigation from '../components/Navigation';
import Reveal from '../components/motion/Reveal';
import TechStackMarquee from '../components/TechStackMarquee';

const categories = {
  Frontend: ['React', 'Vite', 'Tailwind'],
  Automation: ['Make', 'Zapier', 'n8n'],
  'AI / LLM': ['Anthropic', 'OpenAI', 'Cohere'],
  Ops: ['Linear', 'Notion', 'Slack'],
};

const categoryDescriptions = {
  Frontend: 'Interfaces built with React, Vite, and Tailwind to keep things fast, clean, and easy to iterate.',
  Automation: 'Make, Zapier, and n8n connect every intake point so no enquiry is left hanging.',
  'AI / LLM': 'Anthropic, OpenAI, and Cohere power voice, chat, and knowledge flows that feel trustworthy.',
  Ops: 'Linear, Notion, and Slack keep delivery transparent so teams actually adopt what we build.',
};

const AboutTechStack = () => (
  <div className="min-h-screen bg-brand-bg text-text-primary">
    <Navigation />
    <main className="pt-24 pb-16 space-y-10 max-w-6xl mx-auto px-6 md:px-10">
      <Reveal className="text-center space-y-3">
        <p className="text-xs tracking-[0.4em] uppercase text-premium-green">About</p>
        <h1 className="text-4xl font-semibold leading-tight">Tech Stack</h1>
        <p className="text-text-secondary">Modern tooling – no black boxes.</p>
      </Reveal>

      <Reveal>
        <FlexGrid fullWidth className="space-y-4 [&_.cds--tile]:bg-brand-surface/70 [&_.cds--tile]:border [&_.cds--tile]:border-white/5 [&_.cds--tile]:rounded-2xl [&_.cds--tile]:p-5">
          <Row condensed className="gap-y-4">
            {Object.entries(categories).map(([title, items]) => (
              <Column key={title} lg={5} md={4} sm={4}>
                <Tile className="!bg-brand-surface/70 !text-white h-full">
                  <p className="text-xs tracking-[0.3em] uppercase text-premium-green mb-1">{title}</p>
                  <h2 className="text-lg font-semibold mb-2">Preferred tools</h2>
                  <ul className="text-sm text-text-secondary space-y-1.5 mb-3">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3 items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-premium-green" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-text-secondary/90 leading-relaxed">{categoryDescriptions[title]}</p>
                </Tile>
              </Column>
            ))}
          </Row>
        </FlexGrid>
      </Reveal>

      <Reveal>
        <p className="text-center text-xs text-text-secondary">
          Every tool snaps together so enquiries, delivery, and reporting stay in sync.
        </p>
      </Reveal>

      <Reveal>
        <TechStackMarquee />
      </Reveal>
    </main>
  </div>
);

export default AboutTechStack;
