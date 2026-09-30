import { ArrowUpRight, Database, Workflow, PlugZap, Compass, ChartNoAxesCombined, Layers3 } from "lucide-react"
const services = [
  { title: "Zoho CRM implementation", description: "A CRM built around how your business works. Architecture, workflows, dashboards, and team training — all connected.", icon: Database, skills: ["Zoho CRM", "Dashboards", "Team training"] },
  { title: "Business process automation", description: "Turn repetitive work into reliable workflows with Zapier, Make.com, and Zoho Flow. Free your team to focus on higher-value work.", icon: Workflow, skills: ["Zapier", "Make.com", "Zoho Flow"] },
  { title: "Systems integration & APIs", description: "Connect your apps and keep data moving. From WooCommerce and Simpro to custom APIs, build a stack that works together.", icon: PlugZap, skills: ["APIs", "Webhooks", "Data sync"] },
  { title: "Operational consulting", description: "Find the bottlenecks, map a better process, and document it. Practical systems and SOPs that make daily operations simpler.", icon: Compass, skills: ["Process mapping", "SOPs", "Operations"] },
  { title: "Reporting & analytics", description: "Turn scattered data into a clear view of your business. Financial reporting, management dashboards, and KPIs that support decisions.", icon: ChartNoAxesCombined, skills: ["Reporting", "KPIs", "Analytics"] },
  { title: "Systems architecture", description: "Plan the tools, integrations, and operational structure your business needs to grow. Build a foundation that can grow with you.", icon: Layers3, skills: ["Systems design", "Scalability", "Tech strategy"] },
]
export function Services() {
  return <section id="services" className="section-space"><div className="site-container">
    <div className="section-heading"><div><p className="eyebrow">01 / WHAT I DO</p><h2>Less manual work.<br /><span className="text-muted-foreground">More momentum.</span></h2></div><p>Practical CRM and automation solutions that connect your tools, simplify your processes, and support your growth.</p></div>
    <div className="service-grid">{services.map(({ title, description, icon: Icon, skills }, i) => <article className="service-card" key={title}>
      <div className="card-top"><span className="service-icon"><Icon size={24} strokeWidth={1.5} /></span><span className="card-number">0{i + 1}</span></div>
      <h3>{title}</h3><p>{description}</p><div className="skill-tags">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
    </article>)}</div>
    <a href="#contact" className="text-link">Let’s find the right solution for your business <ArrowUpRight size={16} /></a>
  </div></section>
}
