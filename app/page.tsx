import styles from "./aeo.module.css";

const systems = [
  {
    number: "01",
    title: "Technical SEO",
    tagline: "Find what is limiting search performance.",
    body: "Investigate crawling, indexation, canonicals, redirects, architecture, rendering, structured data, Core Web Vitals, migrations, implementation, and validation to isolate root causes and define production-safe fixes.",
    className: "primary-system",
  },
  {
    number: "02",
    title: "Search Opportunity Analysis",
    tagline: "Find where organic growth is justified.",
    body: "Combine search demand, Search Console evidence, page targeting, intent, architecture, and SERP evidence to decide what deserves improvement, expansion, creation, internal-link support—or protection.",
    className: "",
  },
  {
    number: "03",
    title: "AEO / GEO & AI Search Visibility",
    tagline: "Understand and improve visibility across emerging search experiences.",
    body: "Investigate retrieval, entity understanding, answer readiness, citations, sources, prompt-to-page relationships, crawler access, and measurable AI-search visibility where evidence permits.",
    className: "",
  },
];

const opportunityQuestions = [
  "What should we improve?",
  "Where is targeting weak?",
  "Where is demand fragmented?",
  "What should expand?",
  "What deserves a new page?",
  "Where can internal linking help?",
  "What should we protect?",
];

const problems = [
  ["01", "Important pages are not being indexed", "Separate genuine indexation barriers from pages that do not belong in search."],
  ["02", "Multiple pages compete for the same search intent", "Clarify page ownership, internal linking, and consolidation opportunities."],
  ["03", "High-impression queries are not producing enough traffic", "Investigate rankings, CTR, page ownership, SERP intent, and on-page alignment before recommending changes."],
  ["04", "Organic performance changes unexpectedly", "Reconcile GSC, GA4, crawl, page-level, and implementation evidence to determine what actually changed."],
  ["05", "SEO recommendations are not reaching production", "Turn findings into prioritized, implementation-ready work with clear acceptance criteria."],
  ["06", "The brand is weak or inconsistent in AI-powered search", "Investigate retrieval, entity understanding, citations, competitors, and answer accuracy before recommending action."],
];

const process = [
  ["01", "Research", "Establish business context and review GSC, GA4, crawl, SERP, competitor, page-level, and implementation evidence."],
  ["02", "Diagnose", "Separate actual SEO problems and opportunities from reporting noise, harmless conditions, and unsupported assumptions."],
  ["03", "Prioritize", "Rank work by expected search impact, confidence, business relevance, implementation effort, and dependency."],
  ["04", "Implement", "Convert approved work into clear on-page changes, internal-link mappings, SEO tasks, or developer requirements."],
  ["05", "Validate", "Confirm that implementation matches the intended SEO requirement and has not introduced regressions."],
  ["06", "Measure", "Track search visibility, traffic, conversions where available, implementation status, and unresolved issues."],
];

const decisions = [
  ["Crawled, currently not indexed", "Determine whether the URL deserves indexation before trying to force it into Google."],
  ["Redirected URL", "Confirm that the redirect is intentional and that internal references point to the final destination."],
  ["Duplicate page", "Establish the correct page owner and whether to merge, redirect, canonicalize, or retain both."],
  ["Canonical difference", "Compare declared, rendered, linked, sitemap, and Google-selected canonical signals."],
  ["Orphan URL", "Confirm whether the page is valuable, obsolete, newly published, or intentionally isolated."],
  ["Long title", "Assess search intent and SERP clarity before shortening useful wording."],
];

const aeoCapabilities = [
  {
    number: "01",
    title: "Retrieval eligibility",
    question: "Can search and answer systems reliably access and interpret the right pages?",
    scope: "Evaluate relevant crawling, indexability, canonicals, robots controls, rendered content, structured data, internal discovery, sitemaps, and answer-engine retrieval constraints.",
  },
  {
    number: "02",
    title: "Entity understanding",
    question: "Do answer systems understand what the business is, what it offers, and where it operates?",
    scope: "Reconcile website content, structured data, approved business information, services, locations, claims, entities, and external corroborating sources.",
  },
  {
    number: "03",
    title: "AI visibility testing",
    question: "Does the business appear when people ask realistic branded and non-branded questions?",
    scope: "Run controlled prompt observations across relevant AI search and answer platforms using stable prompts and documented test conditions.",
    platforms: "Potential coverage: ChatGPT · Perplexity · Gemini · Claude · Copilot",
  },
  {
    number: "04",
    title: "Citation & competitor analysis",
    question: "Which businesses and sources are answer engines relying on instead?",
    scope: "Inspect company mentions, recommendations, citations, exact cited URLs, third-party sources, competitors, answer accuracy, and recurring source patterns.",
  },
];

const aeoLifecycle = [
  ["01", "INVESTIGATE", "Cross-match website, business, search, AI visibility, citation, entity, and competitor evidence."],
  ["02", "AUDIT", "Document what the evidence proves, why it matters, and the supported root cause."],
  ["03", "HUMAN DIAGNOSIS", "Review findings before anything becomes an implementation task."],
  ["04", "HANDOFF", "Convert only approved findings into production-ready implementation requirements."],
  ["05", "IMPLEMENT", "Deploy controlled changes through the appropriate owner."],
  ["06", "VALIDATE", "Separate successful implementation from delayed changes in AI visibility or answer behavior."],
];

const caseStudies = [
  {
    number: "01", label: "Indexation recovery", title: "Restoring index coverage for a healthcare website", context: "Anonymized healthcare client · Agency engagement",
    problem: "Important pages were being discovered but were not consistently entering Google’s index.",
    evidence: "Google Search Console coverage was reconciled with live crawl evidence and page-level implementation checks.",
    decision: "Focus engineering effort on validated blockers while leaving expected or low-value exclusions alone.",
    work: "Prepared implementation-ready requirements, coordinated the affected fixes, and revalidated the page set after release.",
    metrics: [["25", "178", "Indexed pages"], ["75", "18", "Discovered—not indexed"]],
    outcome: "A larger share of the website became indexed while the principal discovery backlog was substantially reduced.",
  },
  {
    number: "02", label: "Crawl and indexation", title: "Clearing exclusion groups for an investment marketplace", context: "Anonymized financial-services client · Agency engagement",
    problem: "A marketplace had a small indexed footprint and a high proportion of discovered or crawled URLs outside the index.",
    evidence: "Coverage patterns were checked against site architecture, live URL behavior, and the implementation state.",
    decision: "Prioritize the patterns with a confirmed path to indexation instead of treating every GSC exclusion as an error.",
    work: "Converted the diagnosis into developer tasks, tracked implementation, and verified the affected groups after deployment.",
    metrics: [["15", "63", "Indexed pages"], ["83", "0", "Discovered—not indexed"], ["6", "0", "Crawled—not indexed"]],
    outcome: "The documented exclusion groups were cleared while indexed pages increased more than fourfold during the measured period.",
  },
  {
    number: "03", label: "Redirect and canonical cleanup", title: "Reducing crawl noise across service websites", context: "Anonymized local-service clients · Agency engagement",
    problem: "Internal redirect references and conflicting canonical signals weakened otherwise straightforward site structures.",
    evidence: "Crawl exports were used to trace source URLs, destination behavior, canonical declarations, and internal references.",
    decision: "Update internal sources and canonical signals without disturbing redirects that still served a valid legacy purpose.",
    work: "Specified safe destinations, coordinated source-level updates, and ran post-change acceptance crawls.",
    metrics: [["149", "29", "Redirect URLs · automotive"], ["38", "6", "Redirect URLs · dental"], ["15", "0", "Alternate canonicals · dental"]],
    outcome: "The implementations produced cleaner internal signals and fewer unnecessary crawl hops across the measured sites.",
  },
];

const services = [
  ["SEO Audits & Diagnostics", "Technical, on-page, indexation, site architecture, internal linking, search-performance, and implementation diagnostics using multiple evidence sources."],
  ["Search Opportunity & On-Page Analysis", "Keyword and query analysis, search intent, page ownership, competitor review, titles, headings, internal linking, content opportunities, and cannibalization checks."],
  ["Technical SEO", "Crawlability, indexation, canonicals, redirects, sitemaps, structured data, rendering, site architecture, Core Web Vitals, and migration risk."],
  ["SEO Implementation & QA", "Prioritized SEO actions, developer-ready handoffs, implementation support, deployment QA, focused recrawls, and post-release validation."],
  ["SEO Measurement & Reporting", "GSC and GA4 performance analysis, organic traffic and conversion review, material-change investigation, implementation follow-through, and clear next-step reporting."],
  ["AI Search Visibility", "Evidence-led investigation of retrieval eligibility, entity understanding, AI answer visibility, citations, competitors, answer accuracy, and known AI referral performance."],
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Marcous De Villa, home"><span className="monogram" aria-hidden="true">MDV</span><span className="brand-copy"><strong>Marcous De Villa</strong><small>SEO Specialist</small></span></a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#work">Case studies</a><a href="#process">Process</a><a href="#about">About</a></nav>
        <a className="header-cta" href="mailto:devillamarcousalexis@gmail.com?subject=SEO%20website%20discussion">Discuss a website <span>↗</span></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> SEO Specialist</p>
          <h1 id="hero-title">SEO decisions that turn into <em>measurable action.</em></h1>
          <p className="hero-intro">I help businesses identify organic search opportunities, diagnose technical and on-page issues, prioritize what matters, and turn the findings into implementation-ready work that can be measured and validated.</p>
          <p className="service-line">SEO strategy <i>·</i> Technical SEO <i>·</i> On-page SEO <i>·</i> Search intent <i>·</i> GSC &amp; GA4 <i>·</i> AI search visibility</p>
          <div className="hero-actions"><a className="button primary" href="#work">View SEO work <span>↓</span></a><a className="button secondary" href="mailto:devillamarcousalexis@gmail.com?subject=SEO%20website%20discussion">Discuss a website <span>↗</span></a></div>
          <p className="trust-line">Google Search Console · GA4 · Screaming Frog · PageSpeed Insights · Ahrefs · Semrush</p>
        </div>
        <aside className="hero-console" aria-label="SEO operating model">
          <div className="console-top"><span>WORKING MODEL</span><span className="live"><i /> AVAILABLE REMOTELY</span></div>
          <div className="console-title"><small>CORE WORKFLOW</small><strong>Opportunity through measurement</strong></div>
          <dl><div><dt>01</dt><dd>Research</dd><span>FIND</span></div><div><dt>02</dt><dd>Diagnose</dd><span>VALIDATE</span></div><div><dt>03</dt><dd>Implement</dd><span>EXECUTE</span></div><div><dt>04</dt><dd>Measure</dd><span>REVIEW</span></div></dl>
          <p className="console-note">Development-literate. Production-conscious. Clear enough for developers and stakeholders.</p>
        </aside>
      </section>

      <section className="section systems" aria-labelledby="systems-heading">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Connected search systems</p><h2 id="systems-heading">Three systems. One evidence-first methodology.</h2></div>
          <p>Technical SEO remains the foundation. Search Opportunity Analysis extends verified search evidence into defensible growth decisions, while AEO/GEO applies the same investigation discipline to emerging search experiences.</p>
        </div>
        <div className="systems-grid">
          {systems.map((item) => <article className={`system-card ${item.className}`} key={item.number}><span className="system-number">{item.number}</span><h3>{item.title}</h3><strong>{item.tagline}</strong><p>{item.body}</p></article>)}
        </div>
        <div className="methodology-strip" aria-label="Shared methodology"><span>Evidence first</span><i>→</i><span>Human diagnosis</span><i>→</i><span>Production-safe action</span><i>→</i><span>Validation</span></div>
        <div className="opportunity-questions">
          <div className="opportunity-copy"><p className="case-label">Search Opportunity Analysis</p><h3>Use search evidence to determine where organic growth is actually justified.</h3><p>Instead of generating a large keyword list, the system is built to answer the practical questions that determine what deserves action—and what should stay untouched.</p></div>
          <div className="opportunity-grid">{opportunityQuestions.map((question, index) => <div key={question}><span>0{index + 1}</span><strong>{question}</strong></div>)}</div>
        </div>
      </section>

      <section className="section problems" aria-labelledby="problems-heading">
        <div className="section-heading"><div><p className="eyebrow"><span /> Business-critical search problems</p><h2 id="problems-heading">When search performance becomes a business problem.</h2></div><p>The visible symptom is often not the root cause. The investigation has to establish what is affected, why it matters, and what can change safely.</p></div>
        <div className="problem-grid">{problems.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="section process" id="process" aria-labelledby="process-heading">
        <div className="section-heading"><div><p className="eyebrow light"><span /> From evidence to measurement</p><h2 id="process-heading">A closed-loop SEO process.</h2></div><p>SEO work is useful only when opportunities are identified correctly, recommendations are implemented safely, and performance is measured after the change.</p></div>
        <div className="process-grid">{process.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="section searchops" aria-labelledby="searchops-heading">
        <div className="searchops-intro"><p className="eyebrow"><span /> Independent SEO Operations Project</p><h2 id="searchops-heading">SearchOps</h2><p>I built SearchOps to make SEO work more repeatable from evidence collection through diagnosis, implementation, monitoring, and reporting. It brings GSC, GA4, crawl, SERP, and governed analysis workflows into one operating system so recommendations remain traceable and implementation-focused.</p></div>
        <div className="searchops-grid"><article><span>01</span><h3>Evidence-led</h3><p>Keeps analysis tied to admitted source data instead of unsupported assumptions.</p></article><article><span>02</span><h3>Execution-focused</h3><p>Converts findings into prioritized, implementation-ready work and tracks follow-through.</p></article><article><span>03</span><h3>Measurement-aware</h3><p>Connects SEO analysis with GSC and GA4 performance review and post-implementation validation.</p></article></div>
      </section>

      <section className="section judgment" aria-labelledby="judgment-heading">
        <div className="judgment-intro"><p className="eyebrow"><span /> Technical judgment</p><h2 id="judgment-heading">Not every SEO warning needs a fix.</h2><p>SEO tools surface conditions and opportunities—not final decisions. I validate findings against search intent, indexation behavior, canonical signals, internal linking, site architecture, business purpose, performance evidence, and implementation risk before recommending a change.</p></div>
        <div className="decision-table" role="table" aria-label="Examples of findings and required investigation"><div className="decision-head" role="row"><span role="columnheader">Tool finding</span><span role="columnheader">Investigation required</span></div>{decisions.map(([finding, investigation]) => <div className="decision-row" role="row" key={finding}><strong role="cell">{finding}</strong><span role="cell">{investigation}</span></div>)}</div>
      </section>

      <section className={`section ${styles.section}`} id="ai-search-visibility" aria-labelledby="ai-search-heading">
        <div className={styles.heading}>
          <div><p className="eyebrow light"><span /> AEO / GEO &amp; AI Search Visibility</p><h2 id="ai-search-heading">AI visibility needs investigation, not guesswork.</h2></div>
          <div className={styles.headingCopy}><p>Search visibility no longer ends with traditional search results. I investigate how businesses are discovered, understood, cited, and recommended across AI-powered search and answer platforms using the same evidence-first approach I apply to Technical SEO.</p><p>The objective is not to manufacture AI mentions. It is to establish what answer systems can retrieve, what they understand about the business, which sources they rely on, where competitors appear, and whether the resulting answers accurately represent the company.</p></div>
        </div>

        <div className={styles.capabilityGrid}>
          {aeoCapabilities.map((item) => <article className={styles.capabilityCard} key={item.number}><span className={styles.cardNumber}>{item.number}</span><h3>{item.title}</h3><p className={styles.question}>{item.question}</p><p className={styles.scope}>{item.scope}</p>{item.platforms && <p className={styles.platforms}>{item.platforms}</p>}</article>)}
        </div>

        <div className={styles.evidence}><h3>Evidence, not AI guesswork.</h3><div className={styles.evidenceCopy}><p>AEO investigations combine technical search evidence, page-level AEO extraction, verified business information, and controlled AI prompt testing.</p><p>Where available, additional evidence such as Bing AI performance, known AI referral analytics, crawler activity, external entity sources, and historical test results can strengthen the investigation.</p><p>Missing optional evidence is treated as a limitation—not automatically as a website defect.</p></div></div>

        <div className={styles.lifecycle}><div className={styles.lifecycleHeader}><h3>A controlled AEO investigation lifecycle</h3><p>The same production discipline applies to AI search: findings are investigated and reviewed before they become implementation work.</p></div><div className={styles.lifecycleGrid}>{aeoLifecycle.map(([number, title, body]) => <article className={styles.lifecycleStep} key={number}><span>{number}</span><strong>{title}</strong><p>{body}</p></article>)}</div></div>

        <p className={styles.methodologyNote}><strong>An AI platform failing to mention a business is not automatically an AEO defect.</strong> The investigation determines whether the cause relates to retrieval, entity understanding, available evidence, answer usefulness, citation sources, competitive visibility, business truth, or simply an expected no-action condition.</p>

        <div className={styles.cta}><p>Not sure how your business appears in AI-powered search?</p><a className={styles.ctaLink} data-event="aeo_service_cta_click" href="mailto:devillamarcousalexis@gmail.com?subject=AI%20Search%20Visibility%20discussion">Discuss AI search visibility <span>↗</span></a></div>
      </section>

      <section className="section work" id="work" aria-labelledby="work-heading">
        <div className="section-heading"><div><p className="eyebrow"><span /> Selected case studies</p><h2 id="work-heading">Evidence over adjectives.</h2></div><p>Client identities are anonymized. Figures come from retained engagement evidence, and no unverified traffic, revenue, or causal attribution is claimed.</p></div>
        <div className="case-list">{caseStudies.map((item) => <article className="case" key={item.number}><div className="case-index"><span>{item.number}</span><i /></div><div className="case-main"><p className="case-label">{item.label}</p><h3>{item.title}</h3><p className="case-context">{item.context}</p><div className="case-story"><div><h4>Problem</h4><p>{item.problem}</p></div><div><h4>Evidence</h4><p>{item.evidence}</p></div><div><h4>Decision</h4><p>{item.decision}</p></div><div><h4>Implementation</h4><p>{item.work}</p></div></div><div className="metric-grid">{item.metrics.map(([before, after, label]) => <div className="metric" key={label}><span>{label}</span><div><del>{before}</del><i>→</i><strong>{after}</strong></div><small>before / after</small></div>)}</div><div className="outcome"><h4>Verified outcome</h4><p>{item.outcome}</p></div></div></article>)}</div>
      </section>

      <section className="section services" id="services" aria-labelledby="services-heading">
        <div className="section-heading"><div><p className="eyebrow light"><span /> Services</p><h2 id="services-heading">SEO that reaches implementation.</h2></div><p>From opportunity analysis and diagnosis through implementation, validation, and measurement.</p></div>
        <div className="service-grid">{services.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p>{index === 5 && <a className="service-inline-link" href="#ai-search-visibility">View AEO/GEO investigation approach →</a>}</article>)}</div>
        <div className="service-package"><div><p className="case-label">Start with the evidence</p><h3>Need help with an SEO problem?</h3></div><p>Tell me what is happening, what has already been tried, and what evidence is available.</p><a className="button primary" data-event="seo_service_cta_click" href="mailto:devillamarcousalexis@gmail.com?subject=SEO%20website%20discussion">Discuss the website <span>↗</span></a></div>
      </section>

      <section className="section about" id="about" aria-labelledby="about-heading">
        <p className="eyebrow"><span /> About Marcous</p><div className="about-grid"><h2 id="about-heading">Technical depth.<br />Clear direction.<br /><em>Calm ownership.</em></h2><div><p>I&apos;m an SEO Specialist with a strong Technical SEO and development background. I work across search opportunity analysis, technical and on-page SEO, site architecture, internal linking, measurement, implementation, and AI-search visibility.</p><p>My development experience helps me investigate implementation-level issues, communicate clearly with developers, and distinguish reporting symptoms from actual technical causes.</p><p>I work from evidence rather than generic checklists: GSC, GA4, crawl data, SERP and competitor observations, live-page behavior, implementation state, and code-level evidence where needed.</p><p>My work does not stop at recommendations. I turn validated findings into clear implementation work, verify deployed changes, and measure what happened afterward.</p><p>Based in the Philippines, I&apos;m comfortable collaborating asynchronously with distributed teams and documenting decisions so implementation does not depend on another meeting.</p></div></div>
      </section>

      <section className="final-cta" aria-labelledby="contact-heading"><p className="eyebrow light"><span /> Start with the problem</p><h2 id="contact-heading">Tell me what is happening with your search performance.</h2><p>If you&apos;re dealing with an indexing issue, weak organic visibility, unclear page ownership, an on-page opportunity, an implementation problem, or an unexpected change in GSC or GA4, tell me what you&apos;re seeing and what has already been tried.</p><a className="button primary" data-event="seo_service_cta_click" href="mailto:devillamarcousalexis@gmail.com?subject=SEO%20website%20discussion">Discuss your website <span>↗</span></a></section>

      <footer><div className="footer-brand"><strong>Marcous Alexis De Villa</strong><span>SEO Specialist</span></div><a href="mailto:devillamarcousalexis@gmail.com">devillamarcousalexis@gmail.com <span>↗</span></a><div className="footer-bottom"><span>© 2026 Marcous Alexis De Villa</span><span>Calapan City, Philippines · Available for remote work</span></div></footer>
    </main>
  );
}
