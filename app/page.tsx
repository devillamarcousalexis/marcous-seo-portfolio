const measuredCaseStudies = [
  {
    number: "01",
    label: "Indexation recovery",
    title: "Restoring index coverage for an Australian health clinic",
    context: "Anonymized client · Australian digital marketing agency",
    challenge:
      "Important pages were being discovered but not consistently indexed, limiting the site’s ability to build search visibility.",
    work: [
      "Audited Google Search Console coverage alongside live crawl evidence",
      "Separated confirmed indexation blockers from low-priority observations",
      "Prepared implementation-ready handoffs and coordinated with developers",
      "Revalidated the affected page set after implementation",
    ],
    metrics: [
      ["25", "178", "Indexed pages"],
      ["75", "18", "Discovered, not indexed"],
    ],
    outcome:
      "A substantially larger share of the site became eligible to compete in search, while the principal discovery backlog was reduced.",
    tools: ["Google Search Console", "Screaming Frog", "Developer handoff", "Post-launch QA"],
  },
  {
    number: "02",
    label: "Crawl & indexation",
    title: "Clearing indexation exclusions for an investment marketplace",
    context: "Anonymized client · Australian digital marketing agency",
    challenge:
      "A private-equity marketplace had a small indexed footprint and a high proportion of discovered or crawled URLs that Google had not indexed.",
    work: [
      "Investigated coverage patterns across GSC and the live site architecture",
      "Converted validated findings into developer-ready implementation tasks",
      "Tracked implementation status and verified outcomes after release",
    ],
    metrics: [
      ["15", "63", "Indexed pages"],
      ["83", "0", "Discovered, not indexed"],
      ["6", "0", "Crawled, not indexed"],
    ],
    outcome:
      "The excluded URL groups shown in the engagement evidence were cleared while the number of indexed pages increased more than fourfold.",
    tools: ["Google Search Console", "Crawl validation", "Issue prioritization", "Developer QA"],
  },
  {
    number: "03",
    label: "Redirect & canonical cleanup",
    title: "Reducing technical noise across local-service websites",
    context: "Anonymized client examples · Australian agency engagement",
    challenge:
      "Redirected URLs and conflicting canonical signals were consuming crawl attention and weakening otherwise straightforward site structures.",
    work: [
      "Mapped internal redirect references and canonical inconsistencies",
      "Specified safe destination URLs and source-level updates",
      "Coordinated implementation and ran post-change crawls for acceptance",
    ],
    metrics: [
      ["149", "29", "Redirect URLs · automotive"],
      ["38", "6", "Redirect URLs · dental"],
      ["15", "0", "Alternate canonicals · dental"],
    ],
    outcome:
      "Cleaner internal signals, fewer unnecessary crawl hops, and an implementation trail that developers and account teams could verify.",
    tools: ["Screaming Frog", "Redirect mapping", "Canonical QA", "Implementation tracking"],
  },
];

const currentEngagements = [
  {
    sector: "Financial services",
    title: "U.S. alternative investment marketplace",
    body: "Technical SEO oversight for a platform focused on certificates of deposit and access to pre-IPO opportunities.",
    status: ["Technical SEO healthy", "Security headers healthy", "Page-speed baseline healthy"],
  },
  {
    sector: "Multi-industry local services",
    title: "Florida digital agency portfolio",
    body: "Audit and implementation guidance across HVAC, roofing, and other service-business websites in Florida.",
    status: ["Technical SEO healthy", "Security headers healthy", "Page-speed baseline healthy"],
  },
];

const capabilities = [
  ["Evidence-led audits", "GSC findings are cross-validated against crawl data, live-page behavior, architecture, and implementation context."],
  ["Developer handoffs", "Exact scope, priority, implementation logic, safeguards, acceptance criteria, and QA steps—ready for engineering."],
  ["SEO execution", "Metadata, internal linking, redirects, content, CMS changes, and other actionable work completed independently."],
  ["Deployment QA", "Implementation review, regression checks, and post-release validation that closes the loop between audit and outcome."],
];

const process = [
  ["01", "Investigate", "Collect signals from Search Console, crawl exports, page templates, and live behavior."],
  ["02", "Validate", "Confirm the cause, affected scope, search impact, dependencies, and production risk."],
  ["03", "Make it executable", "Separate SEO actions from developer work and define what ‘done’ must look like."],
  ["04", "Ship & verify", "Coordinate delivery, inspect the implementation, and validate the result after release."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Marcous De Villa, home">
          <span className="monogram">MDV</span>
          <span className="brand-copy"><strong>Marcous De Villa</strong><small>Technical SEO Lead</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Evidence</a>
          <a href="#system">My system</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="mailto:devillamarcousalexis@gmail.com">Start a conversation <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Technical SEO Lead · Audit to implementation</p>
          <h1>I make technical SEO <em>clear, executable,</em> and safe to ship.</h1>
          <p className="hero-intro">
            I own the path from investigation to deployment: validating complex search issues,
            translating evidence into implementation-ready handoffs, and working with developers through QA.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Review the evidence <span>↓</span></a>
            <a className="button text" href="#system">See how I work <span>→</span></a>
          </div>
        </div>
        <aside className="hero-console" aria-label="Professional operating profile">
          <div className="console-top"><span>OPERATING PROFILE</span><span className="live"><i /> AVAILABLE REMOTELY</span></div>
          <div className="console-title"><small>PRIMARY FUNCTION</small><strong>Technical SEO ownership</strong></div>
          <dl>
            <div><dt>01</dt><dd>Audit &amp; diagnosis</dd><span>LEAD</span></div>
            <div><dt>02</dt><dd>Implementation handoff</dd><span>LEAD</span></div>
            <div><dt>03</dt><dd>SEO-side execution</dd><span>SHIP</span></div>
            <div><dt>04</dt><dd>Developer QA</dd><span>VERIFY</span></div>
          </dl>
          <p className="console-note">Development-literate. Production-conscious. Built for distributed teams.</p>
        </aside>
      </section>

      <section className="signal-strip" aria-label="Professional proof points">
        <div><strong>≈20</strong><span>full-site audits in a two-month agency engagement</span></div>
        <div><strong>4×+</strong><span>indexed-page growth in a documented client example</span></div>
        <div><strong>0</strong><span>speculative issues promoted without validation</span></div>
      </section>

      <section className="section work" id="work">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Documented outcomes</p><h2>Evidence over adjectives.</h2></div>
          <p>Client and agency identities are anonymized. Figures below come from engagement evidence; no unverified traffic or revenue attribution is claimed.</p>
        </div>
        <div className="case-list">
          {measuredCaseStudies.map((item) => (
            <article className="case" key={item.number}>
              <div className="case-index"><span>{item.number}</span><i /></div>
              <div className="case-main">
                <p className="case-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p className="case-context">{item.context}</p>
                <p className="challenge">{item.challenge}</p>
                <div className="metric-grid">
                  {item.metrics.map(([before, after, label]) => (
                    <div className="metric" key={label}>
                      <span>{label}</span><div><del>{before}</del><i>→</i><strong>{after}</strong></div><small>before / after</small>
                    </div>
                  ))}
                </div>
                <div className="case-detail">
                  <div><h4>My contribution</h4><ul>{item.work.map((point) => <li key={point}>{point}</li>)}</ul></div>
                  <div><h4>Outcome</h4><p>{item.outcome}</p></div>
                </div>
                <div className="tags">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section current-work" aria-labelledby="current-heading">
        <div className="section-heading compact">
          <div><p className="eyebrow"><span /> Current engagements</p><h2 id="current-heading">Healthy foundations. Early momentum.</h2></div>
          <p>Work began July 17, 2026. Longer-term organic performance is still accumulating, so these are presented as verified implementation and health signals—not mature growth studies.</p>
        </div>
        <div className="engagement-grid">
          {currentEngagements.map((item) => (
            <article key={item.title}>
              <p>{item.sector}</p><h3>{item.title}</h3><div className="status-row">{item.status.map((status) => <span key={status}><i />{status}</span>)}</div><p className="engagement-body">{item.body}</p>
            </article>
          ))}
        </div>
        <article className="sitelink-win">
          <div><p className="case-label">Early implementation outcome</p><h3>Supporting Google’s display of organic sitelinks</h3></div>
          <div>
            <p>A Florida home-services referral platform wanted greater prominence in its branded search result. I investigated how Google interpreted its pages and site structure, then prepared the audit findings and implementation handoff.</p>
            <p>Following implementation, Google began displaying two organic sitelinks beneath the primary branded result. Because sitelinks are selected algorithmically, I present this as a supported outcome—not a guaranteed or solely attributable result.</p>
          </div>
          <div className="sitelink-result"><strong>2</strong><span>organic sitelinks observed</span><small>Audit · investigation · handoff · validation</small></div>
        </article>
      </section>

      <section className="section system" id="system">
        <div className="section-heading">
          <div><p className="eyebrow light"><span /> My operating system</p><h2>Not another audit deck.</h2></div>
          <p>My process was developed through hands-on SEO and implementation work. Its purpose is simple: reduce ambiguity before a task reaches production.</p>
        </div>
        <div className="process-grid">
          {process.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
        <div className="capability-grid">
          {capabilities.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
        <div className="toolbox">
          <p>Working toolkit</p>
          <div>{["Google Search Console", "Screaming Frog", "Ahrefs", "Semrush", "PageSpeed Insights", "WordPress", "Laravel", "Cloudflare", "HTML / CSS / JavaScript"].map((tool) => <span key={tool}>{tool}</span>)}</div>
        </div>
      </section>

      <section className="section about" id="about">
        <p className="eyebrow"><span /> About Marcous</p>
        <div className="about-grid">
          <h2>Technical depth.<br />Clear direction.<br /><em>Calm ownership.</em></h2>
          <div>
            <p>I&apos;m Marcous Alexis De Villa, a Technical SEO specialist based in the Philippines. I&apos;m most effective when I can own technical audits, prioritize validated opportunities, and work directly with developers through implementation and QA.</p>
            <p>My Laravel and full-stack background lets me investigate at code level, assess engineering constraints, and implement appropriate fixes myself. For template, infrastructure, or application-level work, I create handoffs detailed enough that developers do not need to repeat the investigation.</p>
            <p>I&apos;ve worked across distributed agency and in-house environments, including financial services, healthcare, and multi-industry local-service websites.</p>
            <a className="button primary" href="mailto:devillamarcousalexis@gmail.com">Discuss a role <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer>
        <div><p>Technical SEO Lead · Remote</p><h2>Bring me the difficult search problem.</h2></div>
        <a href="mailto:devillamarcousalexis@gmail.com">devillamarcousalexis@gmail.com <span>↗</span></a>
        <div className="footer-bottom"><span>© 2026 Marcous Alexis De Villa</span><span>Calapan City, Philippines · Available for remote teams</span></div>
      </footer>
    </main>
  );
}

