'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight,
  Sparkles,
  FileText,
  Brain,
  Layers
} from 'lucide-react';

// Blog posts with real content
const blogPosts = [
  {
    id: 1,
    title: "I Don't Trust AI Tools — Until I Understand the System Beneath Them",
    excerpt: "Every week, a new AI tool launches. Agents. IDE copilots. AutoGPTs. But I noticed something: the more tools I used, the less I actually understood. AI tools don't remove complexity — they hide it. If I can't explain how a system works end-to-end, I don't trust it.",
    content: `Every week, a new AI tool launches. Agents. IDE copilots. AutoGPTs. "Write code in one click." But I noticed something: the more tools I used, the less I actually understood. That scared me.

So I made a rule: If I can't explain how a system works end-to-end, I don't trust it.

**What I Learned**

AI tools don't remove complexity — they hide it. Under every "AI magic" button, there is:
- A prompt strategy
- A context window limit
- A memory mechanism (or lack of one)
- Deterministic code wrapped around probabilistic output

Once I started tracing: User Intent → Prompt → Model → Tool Call → State Update → Output — AI became less magical and more powerful.

**My Mental Shift**

I stopped asking: "What tool should I use?" I started asking: "What system is this tool quietly implementing?" That single change made me faster than blindly copying AI output.

**Takeaway**: If you're serious about AI — Learn systems, not shortcuts. Tools change monthly — principles don't.`,
    category: 'AI Philosophy',
    readTime: '5 min read',
    date: 'Feb 4, 2026',
    featured: true,
    icon: Brain,
  },
  {
    id: 2,
    title: 'Why Reading AI Research Feels Impossible (And How I Fixed It)',
    excerpt: "AI papers feel like dense math, new terminology every paragraph, and assumptions you were 'supposed to already know'. For a long time, I thought maybe I'm not research material. That was wrong.",
    content: `**The Honest Problem**

AI papers feel like: Dense math, new terminology every paragraph, assumptions you were "supposed to already know". For a long time, I thought: "Maybe I'm not research material." That was wrong.

**The Real Issue**

I was reading papers linearly. Research papers are not textbooks.

**My 3-Pass Strategy**

I now read papers like this:

**Pass 1 — Narrative**: Skip equations. Ask: What problem are they solving and why does it matter?

**Pass 2 — Mechanism**: Focus only on diagrams, algorithm blocks, system flow. Ignore proofs.

**Pass 3 — Depth (Optional)**: Only if needed: math, ablations, edge cases. Most papers don't deserve Pass 3.

**Result**

Now I can: Extract ideas without memorizing formulas, rebuild concepts in code, spot weak contributions fast.

**Takeaway**: You don't fail at research because of intelligence — you fail because no one teaches how to read papers.`,
    category: 'Learning',
    readTime: '6 min read',
    date: 'Feb 4, 2026',
    featured: true,
    icon: FileText,
  },
  {
    id: 3,
    title: 'Building AI Systems Taught Me More Than Any Model Ever Could',
    excerpt: "I believed mastering AI meant knowing PyTorch deeply, training models from scratch, reading cutting-edge papers daily. What actually made me better? Building end-to-end AI systems — even with a basic model.",
    content: `**What I Thought**

I believed mastering AI meant: Knowing PyTorch deeply, training models from scratch, reading cutting-edge papers daily.

**What Actually Made Me Better**

Building end-to-end AI systems: Prompt → Memory → Tool → API → Feedback loop. Even with a basic model.

**Example Insight**

When I built a simple AI agent, I learned: Most failures weren't "model issues" — they were state, context, or data flow problems. AI isn't just intelligence. It's software engineering under uncertainty.

**New Definition of Skill**

A strong AI engineer can: Debug reasoning, control hallucinations, design fallback logic, decide when NOT to use AI.

**Takeaway**: If you want to grow fast — Build ugly systems early. Polish theory later.`,
    category: 'AI Engineering',
    readTime: '5 min read',
    date: 'Feb 4, 2026',
    featured: false,
    icon: Layers,
  },
  {
    id: 4,
    title: "AI Didn't Kill Coding — It Exposed Who Actually Understands It",
    excerpt: "People ask: 'Is coding dead?' What they really mean is: 'Is memorizing syntax still valuable?' Syntax was never the real skill. AI exposed this brutally.",
    content: `**The Fear**

People ask: "Is coding dead?" What they really mean: "Is memorizing syntax still valuable?"

**The Answer**

Syntax was never the real skill. AI exposed this brutally.

**What Still Matters**

AI can generate code. But it cannot: Own architecture decisions, understand long-term tradeoffs, debug invisible assumptions, design systems for scale and failure.

**The New Engineer Split**

**Group A**: Copies AI output, can't explain why it works, breaks under complexity.

**Group B**: Uses AI as a multiplier, reads code critically, designs before generating.

Only one group survives long-term.

**Takeaway**: AI didn't replace engineers. It removed the hiding place.

**Final Note**: You're not meant to consume AI content endlessly, chase every new tool, or memorize everything. You're meant to think deeply, build deliberately, and question assumptions.`,
    category: 'Industry Insights',
    readTime: '5 min read',
    date: 'Feb 4, 2026',
    featured: false,
    icon: Sparkles,
  },
];



export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="label text-accent-primary mb-3 block">Knowledge Sharing</span>
          <h2 className="heading-lg mb-4">
            Blog & <span className="text-gradient">Insights</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            Technical deep-dives, learnings from building AI systems, and thoughts on 
            AI engineering philosophy. Honest reflections on what actually works.
          </p>
        </motion.div>

        {/* Featured Insight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 mb-12 text-center border-accent-primary/30"
        >
          <Sparkles className="mx-auto mb-3 text-accent-primary" size={32} />
          <h3 className="heading-sm mb-2">Thoughts on AI Engineering</h3>
          <p className="text-slate-400 max-w-lg mx-auto">
            Sharing honest insights about building AI systems, reading research papers, 
            and navigating the rapidly evolving AI landscape as an engineer.
          </p>
        </motion.div>

        {/* Blog Posts Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 group hover:border-accent-primary/30 transition-all cursor-pointer opacity-80 hover:opacity-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary shrink-0">
                  <post.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-full text-xs bg-accent-primary/10 text-accent-primary">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="px-2 py-0.5 rounded-full text-xs bg-yellow-500/10 text-yellow-500">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-white mb-2 group-hover:text-accent-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                    </div>
                    <ArrowRight size={14} className="text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-4">
            Want to be notified when new articles are published?
          </p>
          <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-primary/50 transition-colors"
            />
            <motion.button
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen size={18} />
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
