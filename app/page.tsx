const caseStudies = [
  {
    number: "01",
    label: "Indexation & crawl efficiency",
    title: "Turning a noisy index into a focused acquisition channel",
    challenge:
      "A large content site was losing crawl attention to parameter URLs, duplicates, and low-value indexable pages.",
    work: [
      "Mapped crawl paths against Google Search Console indexation data",
      "Defined canonical, robots, sitemap, and redirect rules by URL type",
      "Worked with developers to deploy and validate changes safely",
    ],
    outcome:
      "Cleaner index coverage, stronger crawl prioritization, and a repeatable monitoring process for future releases.",
    tools: ["Google Search Console", "Screaming Frog", "Log analysis", "Cloudflare"],
  },
  {
    number: "02",
    label: "Migration & URL governance",
    title: "Protecting organic visibility through a complex site migration",
    challenge:
      "A business-critical restructure introduced new URL patterns, content consolidation, and a high risk of redirect gaps.",
    work: [
      "Built and QA-tested the redirect map before launch",
      "Validated canonicals, internal links, XML sitemaps, and status codes",
      "Created launch-day and post-launch monitoring checkpoints",
    ],
    outcome:
      "A controlled migration with traceable redirect coverage and rapid detection of launch defects before they scaled.",
    tools: ["Screaming Frog", "Google Search Console", "Ahrefs", "Laravel"],
  },
  {
    number: "03",
    label: "Core Web Vitals",
    title: "Moving performance work from audit findings to shipped fixes",
    challenge:
      "Recurring performance issues affected key templates, but recommendations were difficult to translate into development tasks.",
    work: [
      "Isolated template-level causes behind LCP, INP, and CLS regressions",
      "Converted findings into prioritized, testable engineering tickets",
      "Verified field impact after releases and guarded against regressions",
    ],
    outcome:
      "A clearer SEO–engineering workflow, faster implementation, and durable performance ownership across releases.",
    tools: ["PageSpeed Insights", "Chrome DevTools", "CrUX", "WordPress"],
  },
];

const capabilities = [
  ["Technical SEO strategy", "Audits, prioritization, roadmaps, and measurable delivery plans."],
  ["Crawling & indexation", "Canonicalization, robots directives, sitemaps, rendering, and crawl budget."],
  ["Migrations & redirects", "URL mapping, launch QA, redirect governance, and post-migration monitoring."],
  ["SEO leadership", "Cross-functional planning, developer enablement, QA standards, and stakeholder reporting."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Marcous De Villa, home">
          <span>MDV</span>
          <small>Technical SEO</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Case studies</a>
          <a href="#expertise">Expertise</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="mailto:devillamarcousalexis@gmail.com">Let&apos;s talk</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Senior Technical SEO Specialist · SEO Lead</p>
          <h1>I turn complex search problems into <em>shippable growth.</em></h1>
          <p className="hero-intro">
            I help teams diagnose technical SEO issues, prioritize what matters,
            and work directly with developers to move recommendations into production.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <span>↘</span></a>
            <a className="button text" href="mailto:devillamarcousalexis@gmail.com">Email me <span>→</span></a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Professional summary">
          <p className="panel-kicker">At the intersection of</p>
          <div className="orbit" aria-hidden="true"><span>SEO</span><span>DEV</span><span>DATA</span></div>
          <p>I bridge search strategy and implementation—so critical fixes don&apos;t get stuck in an audit deck.</p>
          <div className="availability"><span /> Open to remote opportunities</div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Core strengths">
        <p>Search strategy</p><span>◆</span><p>Technical implementation</p><span>◆</span><p>Cross-functional leadership</p><span>◆</span><p>Production-safe delivery</p>
      </section>

      <section className="section work" id="work">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Selected work</p><h2>Case studies</h2></div>
          <p>Selected engagements are anonymized to respect client confidentiality. Verified metrics can be added where disclosure is permitted.</p>
        </div>
        <div className="case-list">
          {caseStudies.map((item) => (
            <article className="case" key={item.number}>
              <div className="case-index">{item.number}</div>
              <div className="case-main">
                <p className="case-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p className="challenge">{item.challenge}</p>
                <div className="case-detail">
                  <div><h4>What I did</h4><ul>{item.work.map((point) => <li key={point}>{point}</li>)}</ul></div>
                  <div><h4>Business outcome</h4><p>{item.outcome}</p></div>
                </div>
                <div className="tags">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section expertise" id="expertise">
        <div className="section-heading"><div><p className="eyebrow light"><span /> How I contribute</p><h2>From diagnosis to delivery.</h2></div></div>
        <div className="capability-grid">
          {capabilities.map(([title, body], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
        <div className="toolbox">
          <p>Working toolkit</p>
          <div>{["Google Search Console", "Screaming Frog", "Ahrefs", "Semrush", "WordPress", "Laravel", "Cloudflare", "HTML / CSS / JS"].map((tool) => <span key={tool}>{tool}</span>)}</div>
        </div>
      </section>

      <section className="section about" id="about">
        <p className="eyebrow"><span /> About</p>
        <div className="about-grid">
          <h2>Technical depth.<br />Commercial focus.<br /><em>Calm execution.</em></h2>
          <div>
            <p>I&apos;m Marcous Alexis De Villa, a Technical SEO Specialist with a development-driven approach. My background in Laravel and full-stack development lets me investigate issues at code level, communicate clearly with engineers, and validate fixes after release.</p>
            <p>I&apos;ve worked in distributed teams where good SEO depends on prioritization, accountability, and making the next action unmistakably clear.</p>
            <a className="button primary" href="mailto:devillamarcousalexis@gmail.com">Start a conversation <span>→</span></a>
          </div>
        </div>
      </section>

      <footer>
        <div><p>Have a search problem worth solving?</p><h2>Let&apos;s make it shippable.</h2></div>
        <a href="mailto:devillamarcousalexis@gmail.com">devillamarcousalexis@gmail.com <span>↗</span></a>
        <div className="footer-bottom"><span>© 2026 Marcous Alexis De Villa</span><span>Calapan City, Philippines · Available remotely</span></div>
      </footer>
    </main>
  );
}
