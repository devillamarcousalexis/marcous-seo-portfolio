import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Growth Team | SEO, Paid Media & Creative | Marcous De Villa",
  description: "An AI-enabled specialist team for SEO, paid media, social, funnels, creative, video, and digital operations. Engagements start at $1,500/week.",
  alternates: { canonical: "/digital-growth-team" },
  openGraph: {
    title: "AI-Enabled Digital Growth Team | Marcous De Villa",
    description: "One point of contact. Multiple specialists. Coordinated execution across SEO, paid media, social, creative, funnels, web, and digital operations.",
    url: "/digital-growth-team",
    type: "website",
  },
};

const capabilities = [
  { number: "01", title: "SEO & Organic Growth", lead: "Marcous", items: ["Technical SEO and audits", "Crawl and indexation diagnostics", "Keyword and search-intent research", "On-page and content optimization", "Internal linking and site architecture", "Measurement, reporting, and implementation QA"] },
  { number: "02", title: "Paid Acquisition", lead: "Myr + Renz", items: ["Google Ads", "Meta Ads", "TikTok Ads", "Campaign support", "Paid-media operations"] },
  { number: "03", title: "Social Media", lead: "Myr + Renz", items: ["Social media management", "Publishing and operational support", "Campaign coordination", "Supporting administrative workflows"] },
  { number: "04", title: "Web, Funnels & Conversion", lead: "Annie", items: ["ClickFunnels", "Landing pages", "Funnel implementation", "Wix", "Conversion-supporting page production"] },
  { number: "05", title: "Creative & Video", lead: "Annie", items: ["Canva and graphics", "Marketing assets", "CapCut", "Video editing", "Higgsfield"] },
  { number: "06", title: "Digital & Investor Operations", lead: "Myr + Renz", items: ["Administrative and IT support", "Digital operations", "Investor-platform administrative support", "Covercy", "InvestNext", "Cash Flow Portal"] },
];

const team = [
  { initials: "MDV", name: "Marcous Alexis De Villa", role: "Technical SEO & Digital Strategy Lead", summary: "Primary client contact and account lead.", items: ["Technical SEO", "Organic search strategy", "Implementation guidance", "Measurement and reporting", "Coordination and QA"] },
  { initials: "CAM", name: 'Crystel “Annie” Mendoza', role: "Web, Funnel & Creative Specialist", summary: "Owns conversion-supporting web and creative production.", items: ["ClickFunnels and landing pages", "Wix and funnel implementation", "Canva and creative assets", "CapCut and video editing", "Higgsfield"] },
  { initials: "MAM", name: "Myr Andiela Mendoza", role: "Paid Media & Digital Operations Specialist", summary: "Supports acquisition, social, and digital operations.", items: ["Google, Meta, and TikTok Ads", "Social media management", "Administrative and IT support", "Covercy", "InvestNext and Cash Flow Portal"] },
  { initials: "RBT", name: "Renz Bryan Tabay", role: "Paid Media & Digital Operations Specialist", summary: "Supports acquisition, social, and digital operations.", items: ["Google, Meta, and TikTok Ads", "Social media management", "Administrative and IT support", "Covercy", "InvestNext and Cash Flow Portal"] },
];

const engagement = [
  ["01", "Discovery", "Identify websites, channels, objectives, operational requirements, and current constraints."],
  ["02", "Scope", "Define active workstreams, deliverables, access requirements, responsibilities, and cadence."],
  ["03", "Assign", "Route work to the appropriate specialist while maintaining one coordinated account structure."],
  ["04", "Execute", "Deliver through documented, AI-enabled, human-reviewed workflows."],
  ["05", "Report", "Consolidate progress, results, blockers, and next priorities into one client-facing layer."],
];

export default function DigitalGrowthTeam() {
  return (
    <main id="top" className="team-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Marcous De Villa, homepage"><span className="monogram" aria-hidden="true">MDV</span><span className="brand-copy"><strong>Marcous De Villa</strong><small>Technical SEO Lead &amp; Consultant</small></span></a>
        <nav aria-label="Team page navigation"><a href="#capabilities">Capabilities</a><a href="#team">Team</a><a href="#model">Engagement</a><a href="#pricing">Pricing</a></nav>
        <a className="header-cta" data-event="team_package_contact_start" href="mailto:devillamarcousalexis@gmail.com?subject=Digital%20Growth%20Team%20engagement">Discuss an engagement <span>↗</span></a>
      </header>

      <section className="team-hero" aria-labelledby="team-title">
        <div className="team-hero-copy">
          <p className="eyebrow light"><span /> For clients who need more than SEO</p>
          <h1 id="team-title">One point of contact. <em>Multiple specialists.</em></h1>
          <p>An AI-enabled digital growth team for businesses that need coordinated execution across search, paid media, social, creative, funnels, web, and digital operations.</p>
          <div className="hero-actions"><a className="button primary" data-event="team_package_contact_start" href="mailto:devillamarcousalexis@gmail.com?subject=Digital%20Growth%20Team%20engagement">Discuss a team engagement <span>↗</span></a><a className="button secondary" href="#team">Meet the team <span>↓</span></a></div>
        </div>
        <aside className="team-price-card"><p>Managed team engagement</p><strong>$1,500<small>/week</small></strong><span>Starting investment</span><hr /><b>Specialist-led.</b><b>AI-enabled.</b><b>Human-reviewed.</b></aside>
      </section>

      <section className="section team-value" aria-labelledby="value-heading">
        <div className="section-heading"><div><p className="eyebrow"><span /> The operating advantage</p><h2 id="value-heading">One engagement. Coordinated delivery.</h2></div><p>You communicate primarily with Marcous as the strategy and account lead. Work is routed to the appropriate specialist based on the active workstream.</p></div>
        <div className="value-grid"><article><span>01</span><h3>One Point of Contact</h3><p>Centralized communication, prioritization, coordination, and reporting.</p></article><article><span>02</span><h3>Specialist Execution</h3><p>Work is assigned according to real domain capability—not forced through one generalist.</p></article><article><span>03</span><h3>AI-Enabled Operations</h3><p>AI supports appropriate research, analysis, production, documentation, and QA while people retain judgment and accountability.</p></article></div>
      </section>

      <section className="section capability-section" id="capabilities" aria-labelledby="capability-heading">
        <div className="section-heading"><div><p className="eyebrow light"><span /> Capability stack</p><h2 id="capability-heading">Specialists for the work in scope.</h2></div><p>The team is assembled around the channels and outcomes your business actually needs—not an unlimited menu of simultaneous output.</p></div>
        <div className="capability-grid">{capabilities.map((item) => <article key={item.number}><div className="capability-top"><span>{item.number}</span><small>Lead: {item.lead}</small></div><h3>{item.title}</h3><ul>{item.items.map((entry) => <li key={entry}>{entry}</li>)}</ul></article>)}</div>
      </section>

      <section className="section meet-team" id="team" aria-labelledby="team-heading">
        <div className="section-heading"><div><p className="eyebrow"><span /> Meet the team</p><h2 id="team-heading">Small by design. Clear by ownership.</h2></div><p>Marcous remains the primary client-facing lead, with specialists supporting delivery according to the agreed scope and access requirements.</p></div>
        <div className="profile-grid">{team.map((member) => <article key={member.name}><div className="profile-mark" aria-hidden="true">{member.initials}</div><p className="case-label">{member.role}</p><h3>{member.name}</h3><p>{member.summary}</p><ul>{member.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="section ai-operations" aria-labelledby="ai-heading">
        <div><p className="eyebrow light"><span /> AI-enabled operations</p><h2 id="ai-heading">AI-enabled workflows. <em>Human-led execution.</em></h2><p>We use AI where appropriate to improve research speed, analysis, production, documentation, creative iteration, and quality assurance. It supports the specialists—it does not replace domain judgment, client accountability, or final human review.</p></div>
        <ol className="ai-flow"><li><span>01</span>Research</li><li><span>02</span>Analyze</li><li><span>03</span>Produce</li><li><span>04</span>Review</li><li><span>05</span>Deliver</li></ol>
      </section>

      <section className="section engagement-model" id="model" aria-labelledby="model-heading">
        <div className="section-heading"><div><p className="eyebrow"><span /> Engagement model</p><h2 id="model-heading">Built around the work your business actually needs.</h2></div><p>One client may need SEO, Google Ads, and landing pages. Another may need social, Meta Ads, creative, and video. Scope determines the active workstreams.</p></div>
        <div className="engagement-steps">{engagement.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="section pricing-section" id="pricing" aria-labelledby="pricing-heading">
        <div className="section-heading"><div><p className="eyebrow light"><span /> Choose the right engagement</p><h2 id="pricing-heading">Specialist support or coordinated execution.</h2></div><p>Transparent starting points help both sides qualify fit before discovery.</p></div>
        <div className="pricing-grid">
          <article><p className="case-label">Work directly with Marcous</p><h3>Technical SEO &amp; Organic Growth</h3><div className="price">$350<small>/week per website</small></div><p>Dedicated technical SEO, search analysis, implementation guidance, reporting, and verification.</p><ul><li>One website</li><li>Technical SEO and organic strategy</li><li>Content and search opportunities</li><li>Internal linking and architecture</li><li>Implementation guidance and QA</li></ul><a className="button secondary" data-event="seo_service_cta_click" href="mailto:devillamarcousalexis@gmail.com?subject=Technical%20SEO%20support">Discuss SEO support <span>↗</span></a></article>
          <article className="featured-price"><p className="case-label">Coordinated team engagement</p><h3>AI-Enabled Digital Growth Team</h3><div className="price">$1,500<small>/week</small></div><p>Coordinated execution across multiple agreed digital functions, led through one client-facing structure.</p><ul><li>SEO and search strategy</li><li>Paid media and social support</li><li>Landing pages and funnels</li><li>Creative and video production</li><li>Digital and selected investor-platform operations</li></ul><a className="button primary" data-event="team_package_contact_start" href="mailto:devillamarcousalexis@gmail.com?subject=Digital%20Growth%20Team%20engagement">Discuss a team engagement <span>↗</span></a></article>
        </div>
        <p className="pricing-note">Final scope and pricing depend on the number of websites, active channels, ad accounts, social accounts, campaign complexity, creative volume, operational requirements, and expected delivery cadence.</p>
      </section>

      <section className="scope-strip"><div><p className="eyebrow light"><span /> Defined scope</p><h2>Clear boundaries protect delivery quality.</h2></div><p>Packages provide coordinated access to the capabilities included in the agreed scope. They are not unlimited-output retainers. Deliverables, active channels, account coverage, access permissions, and priorities are defined during onboarding.</p></section>

      <section className="section limited-model" aria-labelledby="limited-heading"><p className="eyebrow"><span /> Limited active engagements</p><div><h2 id="limited-heading">A small-team model by design.</h2><p>We maintain a limited number of active team engagements so each account receives direct coordination, specialist attention, and consistent delivery.</p><a className="button secondary dark-button" data-event="team_package_contact_start" href="mailto:devillamarcousalexis@gmail.com?subject=Digital%20Growth%20Team%20availability">Ask about availability <span>↗</span></a></div></section>

      <section className="final-cta team-final" aria-labelledby="team-contact-heading"><p className="eyebrow light"><span /> Team engagement</p><h2 id="team-contact-heading">Need more than a standalone SEO specialist?</h2><p>Tell us what you are currently managing, which channels need support, and where execution is getting stuck. Team engagements start at $1,500/week.</p><div className="cta-pair"><a className="button primary" data-event="team_package_contact_start" href="mailto:devillamarcousalexis@gmail.com?subject=Digital%20Growth%20Team%20engagement">Discuss a team engagement <span>↗</span></a><a className="button secondary" href="/#services">Only need SEO? View services <span>→</span></a></div></section>

      <footer><div className="footer-brand"><strong>Marcous Alexis De Villa</strong><span>Technical SEO Lead &amp; Organic Search Consultant</span></div><a href="mailto:devillamarcousalexis@gmail.com">devillamarcousalexis@gmail.com <span>↗</span></a><div className="footer-bottom"><span>© 2026 Marcous Alexis De Villa</span><span>Calapan City, Philippines · Available for remote work</span></div></footer>
    </main>
  );
}
