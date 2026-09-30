import { ArrowUpRight, Check, Network } from "lucide-react"
const benefits = [
  ["Business context comes first", "I understand the day-to-day work behind the system — from onboarding and billing to customer support and executive operations."],
  ["A connected view of your operations", "CRM, inventory, reporting, and automation work better together. I help connect the pieces and make handoffs clearer."],
  ["Systems your team can actually use", "Clear workflows, practical documentation, and repeatable processes help your team take ownership of the tools."],
]
export function WhyHireMe() {
  return <section className="section-space why-section"><div className="site-container why-layout">
    <div><p className="eyebrow">04 / THE WAY I WORK</p><h2>Technology is better<br />with <span className="gradient-text">business sense.</span></h2><p className="why-intro">I bridge operations and technical implementation, so the systems we build solve the problems your team faces every day.</p><a href="#contact" className="text-link">Start a conversation <ArrowUpRight size={17} /></a><Network className="why-graphic" size={110} strokeWidth={0.7} aria-hidden="true" /></div>
    <div className="benefit-list">{benefits.map(([title, description]) => <div key={title}><span className="benefit-check"><Check size={18} /></span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div>
  </div></section>
}
