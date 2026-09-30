const technologies = [
  {
    title: "CRM & Operations",
    tools: ["Zoho CRM", "HubSpot", "Pipedrive", "GoHighLevel", "Zoho Inventory", "Zoho Desk", "Zoho Projects"],
  },
  {
    title: "Automation & Integration",
    tools: ["Zapier", "Make.com", "n8n", "Zoho Flow", "APIs", "Webhooks", "Deluge (Zoho Scripting)"],
  },
  {
    title: "E-Commerce & Platforms",
    tools: ["WordPress", "WooCommerce", "Stripe", "Simpro", "Freshdesk"],
  },
  {
    title: "Productivity & Collaboration",
    tools: ["Google Workspace", "Microsoft 365", "LinkedIn Sales Navigator", "WhatsApp"],
  },
]

export function TrustedTechnologies() {
  return (
    <section id="technologies" className="section-space trusted-technologies" aria-labelledby="technologies-heading">
      <div className="site-container">
        <div className="technologies-heading">
          <h2 id="technologies-heading">Trusted Technologies</h2>
          <p>I specialize in modern business systems that scale with your company</p>
        </div>
        <div className="technology-card-grid">
          {technologies.map(category => (
            <article className="technology-card" key={category.title}>
              <h3>{category.title}</h3>
              <ul>{category.tools.map(tool => <li key={tool}><span aria-hidden="true" className="technology-bullet" /><span>{tool}</span></li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
