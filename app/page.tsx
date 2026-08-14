const problems = [
  ["01", "Important pages are not being indexed", "Separate genuine indexation barriers from URLs that do not belong in search."],
  ["02", "Multiple URLs compete for the same intent", "Clarify page ownership and consolidate signals without removing useful coverage."],
  ["03", "Redirects and canonicals conflict", "Trace legacy signals, internal references, and intended destinations before changing them."],
  ["04", "A migration introduces search risk", "Protect discovery, equity, and indexation through pre-launch requirements and post-launch QA."],
  ["05", "The audit never reaches production", "Convert findings into scoped requirements developers can implement and verify."],
  ["06", "Organic performance changes unexpectedly", "Reconcile crawl, Search Console, analytics, releases, and page-level evidence."],
];

const process = [
  ["01", "Investigate", "Collect crawl, Search Console, analytics, rendering, site-file, and implementation evidence."],
  ["02", "Diagnose", "Separate actual search problems from expected exclusions, harmless conditions, and reporting noise."],
  ["03", "Prioritize", "Rank work by search impact, business risk, implementation effort, dependencies, and reversibility."],
  ["04", "Hand off", "Define affected scope, expected behavior, safeguards, acceptance criteria, and ownership."],
  ["05", "Verify", "Re-crawl and inspect source, rendered output, redirects, canonicals, schema, and platform evidence."],
  ["06", "Monitor", "Track indexation, visibility, regressions, unresolved dependencies, and post-release outcomes."],
];

const decisions = [
  ["Crawled, currently not indexed", "Determine whether the URL deserves indexation before trying to force it into Google."],
  ["Redirected URL", "Confirm that the redirect is intentional and that internal references point to the final destination."],
  ["Duplicate page", "Establish the correct page owner and whether to merge, redirect, canonicalize, or retain both."],
  ["Canonical difference", "Compare declared, rendered, linked, sitemap, and Google-selected canonical signals."],
  ["Orphan URL", "Confirm whether the page is valuable, obsolete, newly published, or intentionally isolated."],
  ["Long title", "Assess search intent and SERP clarity before shortening useful wording."],
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
  ["Technical SEO audits", "Crawlability, indexation, canonicals, redirects, sitemaps, structured data, rendering, performance, and site architecture."],
  ["Indexation diagnostics", "GSC exclusions, Google-selected canonicals, sitemap reconciliation, unexpected visibility changes, and page eligibility."],
  ["Content architecture", "Keyword-to-URL ownership, cannibalization, internal linking, and keep, refresh, merge, redirect, or remove decisions."],
  ["Implementation and verification", "Developer-ready handoffs, WordPress and Laravel support, migration QA, deployment validation, and regression checks."],
  ["Monthly technical oversight", "Technical monitoring, new-page QA, implementation follow-through, KPI history, and cross-functional support."],
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Marcous De Villa, home"><span className="monogram" aria-hidden="true">MDV</span><span className="brand-copy"><strong>Marcous De Villa</strong><small>Technical SEO Lead &amp; Consultant</small></span></a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#work">Case studies</a><a href="#process">Process</a><a href="#about">About</a><a href="/digital-growth-team">Team package</a></nav>
        <a className="header-cta" href="mailto:devillamarcousalexis@gmail.com?subject=Technical%20SEO%20enquiry">Discuss a website <span>↗</span></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Technical SEO Lead &amp; Organic Search Consultant</p>
          <h1 id="hero-title">Technical SEO recommendations that <em>make it into production.</em></h1>
          <p className="hero-intro">I help growing businesses diagnose crawling, indexation, page-ownership, and website-quality issues—then translate the findings into prioritized developer handoffs and verify the implementation after deployment.</p>
          <p className="service-line">Technical audits <i>·</i> Indexation diagnostics <i>·</i> Content architecture <i>·</i> Implementation QA</p>
          <div className="hero-actions"><a className="button primary" href="#work">View technical SEO work <span>↓</span></a><a className="button secondary" href="mailto:devillamarcousalexis@gmail.com?subject=Technical%20SEO%20enquiry">Discuss a website <span>↗</span></a></div>
          <p className="trust-line">Google Search Console · Screaming Frog · GA4 · WordPress · Laravel · Cloudflare</p>
        </div>
        <aside className="hero-console" aria-label="Technical SEO operating model">
          <div className="console-top"><span>ENGAGEMENT MODEL</span><span className="live"><i /> AVAILABLE REMOTELY</span></div>
          <div className="console-title"><small>CORE RESPONSIBILITY</small><strong>Diagnosis through verification</strong></div>
          <dl><div><dt>01</dt><dd>Evidence collection</dd><span>INVESTIGATE</span></div><div><dt>02</dt><dd>Technical diagnosis</dd><span>VALIDATE</span></div><div><dt>03</dt><dd>Implementation handoff</dd><span>SPECIFY</span></div><div><dt>04</dt><dd>Post-deployment QA</dd><span>VERIFY</span></div></dl>
          <p className="console-note">Development-literate. Production-conscious. Clear enough for developers and stakeholders.</p>
        </aside>
      </section>

      <section className="section problems" aria-labelledby="problems-heading">
        <div className="section-heading"><div><p className="eyebrow"><span /> Business-critical search problems</p><h2 id="problems-heading">When technical SEO becomes a business problem.</h2></div><p>The visible symptom is often not the root cause. The investigation has to establish what is affected, why it matters, and what can change safely.</p></div>
        <div className="problem-grid">{problems.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="section process" id="process" aria-labelledby="process-heading">
        <div className="section-heading"><div><p className="eyebrow light"><span /> From evidence to implementation</p><h2 id="process-heading">A closed-loop technical SEO process.</h2></div><p>An audit is useful only when teams can understand the decision, implement it safely, and verify that production behaves as intended.</p></div>
        <div className="process-grid">{process.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="section judgment" aria-labelledby="judgment-heading">
        <div className="judgment-intro"><p className="eyebrow"><span /> Technical judgment</p><h2 id="judgment-heading">Not every SEO warning needs a fix.</h2><p>SEO tools surface conditions—not final diagnoses. I validate findings against search intent, indexation behavior, canonical signals, internal linking, site architecture, business purpose, and implementation risk before recommending a change.</p></div>
        <div className="decision-table" role="table" aria-label="Examples of findings and required investigation"><div className="decision-head" role="row"><span role="columnheader">Tool finding</span><span role="columnheader">Investigation required</span></div>{decisions.map(([finding, investigation]) => <div className="decision-row" role="row" key={finding}><strong role="cell">{finding}</strong><span role="cell">{investigation}</span></div>)}</div>
      </section>

      <section className="section work" id="work" aria-labelledby="work-heading">
        <div className="section-heading"><div><p className="eyebrow"><span /> Selected case studies</p><h2 id="work-heading">Evidence over adjectives.</h2></div><p>Client identities are anonymized. Figures come from retained engagement evidence, and no unverified traffic, revenue, or causal attribution is claimed.</p></div>
        <div className="case-list">{caseStudies.map((item) => <article className="case" key={item.number}><div className="case-index"><span>{item.number}</span><i /></div><div className="case-main"><p className="case-label">{item.label}</p><h3>{item.title}</h3><p className="case-context">{item.context}</p><div className="case-story"><div><h4>Problem</h4><p>{item.problem}</p></div><div><h4>Evidence</h4><p>{item.evidence}</p></div><div><h4>Decision</h4><p>{item.decision}</p></div><div><h4>Implementation</h4><p>{item.work}</p></div></div><div className="metric-grid">{item.metrics.map(([before, after, label]) => <div className="metric" key={label}><span>{label}</span><div><del>{before}</del><i>→</i><strong>{after}</strong></div><small>before / after</small></div>)}</div><div className="outcome"><h4>Verified outcome</h4><p>{item.outcome}</p></div></div></article>)}</div>
      </section>

      <section className="section services" id="services" aria-labelledby="services-heading">
        <div className="section-heading"><div><p className="eyebrow light"><span /> Services</p><h2 id="services-heading">Technical SEO that reaches implementation.</h2></div><p>Engagements can begin with a focused health check, expand into a full investigation, or continue as ongoing technical oversight.</p></div>
        <div className="service-grid">{services.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        <div className="service-package"><div><p className="case-label">Recommended starting point</p><h3>Technical SEO Health Check</h3><small>Ongoing SEO support from <strong>$350/week per website</strong></small></div><p>A focused review of crawling, indexation, canonicals, redirects, sitemaps, internal linking, Search Console issues, and Core Web Vitals—with a prioritized action plan and developer-ready requirements for critical findings.</p><a className="button primary" data-event="seo_service_cta_click" href="mailto:devillamarcousalexis@gmail.com?subject=Technical%20SEO%20Health%20Check">Ask about the health check <span>↗</span></a></div>
      </section>

      <section className="section team-teaser" aria-labelledby="team-teaser-heading">
        <div className="team-teaser-panel">
          <div className="team-teaser-copy">
            <p className="eyebrow light"><span /> Client expansion</p>
            <h2 id="team-teaser-heading">Need more than SEO?</h2>
            <h3>One point of contact. Multiple specialists. <em>AI-enabled execution.</em></h3>
            <p>For clients who need support beyond organic search, I lead a multidisciplinary digital growth team covering paid acquisition, social media, landing pages, funnels, creative production, video, and digital operations.</p>
            <div className="capability-row" aria-label="Team capabilities"><span>SEO</span><span>Google Ads</span><span>Meta Ads</span><span>TikTok Ads</span><span>Social Media</span><span>ClickFunnels</span><span>Creative</span><span>Video</span><span>Digital Operations</span></div>
          </div>
          <aside className="team-teaser-offer">
            <p>Digital Growth Team</p><strong>From $1,500<small>/week</small></strong>
            <span>Specialist-led. AI-enabled. Human-reviewed.</span>
            <a className="button primary" data-event="team_package_cta_click" href="/digital-growth-team">Explore the team package <b>→</b></a>
          </aside>
        </div>
        <p className="team-microcopy">Designed for clients who need coordinated execution across multiple digital functions without managing several separate specialists.</p>
      </section>

      <section className="section about" id="about" aria-labelledby="about-heading">
        <p className="eyebrow"><span /> About Marcous</p><div className="about-grid"><h2 id="about-heading">Technical depth.<br />Clear direction.<br /><em>Calm ownership.</em></h2><div><p>I&apos;m a technical SEO specialist with a development background in Laravel and full-stack web projects. That experience helps me investigate SEO issues at the implementation level, communicate clearly with developers, and distinguish reporting symptoms from actual technical causes.</p><p>My work does not stop after an audit is delivered. I create implementation-ready requirements, support development and content teams, verify deployed changes, and monitor whether the intended search signals are working correctly.</p><p>I&apos;ve worked across financial services, consumer platforms, healthcare, professional services, and content-driven websites, with a particular focus on crawlability, indexation, canonicals, redirects, site architecture, and technical quality assurance.</p><p>Based in the Philippines, I&apos;m comfortable collaborating asynchronously with distributed teams and documenting decisions so implementation does not depend on another meeting.</p></div></div>
      </section>

      <section className="final-cta" aria-labelledby="contact-heading"><p className="eyebrow light"><span /> Start with the symptoms</p><h2 id="contact-heading">Tell me what is happening with your website.</h2><p>If your team is dealing with indexation problems, conflicting URLs, technical regressions, or an audit that has not reached production, tell me what you are seeing and what has already been attempted.</p><div className="cta-pair"><a className="button primary" data-event="seo_service_cta_click" href="mailto:devillamarcousalexis@gmail.com?subject=Technical%20SEO%20website%20discussion">Discuss your website <span>↗</span></a><a className="button secondary" href="/digital-growth-team">Need broader support? View the team <span>→</span></a></div></section>

      <footer><div className="footer-brand"><strong>Marcous Alexis De Villa</strong><span>Technical SEO Lead &amp; Organic Search Consultant</span></div><a href="mailto:devillamarcousalexis@gmail.com">devillamarcousalexis@gmail.com <span>↗</span></a><div className="footer-bottom"><span>© 2026 Marcous Alexis De Villa</span><span>Calapan City, Philippines · Available for remote work</span></div></footer>
    </main>
  );
}
