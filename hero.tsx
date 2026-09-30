import Image from "next/image"
import { ArrowDown, ArrowUpRight, Check, Database, GitBranch, Layers3, Sparkles, Zap } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="site-container">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="status-dot" /> CRM SPECIALIST · AUTOMATION BUILDER</p>
            <h1>Connected systems.<br /><span className="gradient-text">Smarter operations.</span></h1>
            <p className="hero-description">I turn everyday business bottlenecks into reliable workflows. From CRMs to AI automation, I build systems that give your team more time to do what matters.</p>
            <div className="hero-actions">
              <a href="#contact" className="button">Work with me <ArrowUpRight size={18} /></a>
              <a href="#case-studies" className="button button-outline">Explore my work <ArrowDown size={16} /></a>
            </div>
            <div className="hero-person">
              <Image src="/profile.jpg" alt="Vega Morada" width={48} height={48} className="profile-thumb" priority />
              <div><p>Hi, I’m Vega Morada.</p><span>Technical Virtual Assistant & Executive Assistant</span></div>
            </div>
          </div>
          <div className="system-panel" aria-label="Illustration of connected business systems">
            <div className="panel-toolbar"><span className="window-dots"><i /><i /><i /></span><span>BUSINESS WORKFLOW</span><span className="panel-live"><span className="status-dot" /> CONNECTED</span></div>
            <div className="workflow-canvas">
              <div className="canvas-label"><span>01 / CONNECT YOUR TOOLS</span><GitBranch size={16} /></div>
              <div className="workflow-inputs">
                <div className="workflow-node"><span className="node-icon blue"><Database size={21} /></span><b>CRM systems</b><small>Customer data</small></div>
                <div className="workflow-node"><span className="node-icon purple"><Layers3 size={21} /></span><b>Business tools</b><small>Apps & APIs</small></div>
              </div>
              <div className="flow-lines"><span /><span /></div>
              <div className="workflow-core"><span className="node-icon teal"><Zap size={25} /></span><div><b>Automation engine</b><small>Zapier · Make.com · Zoho Flow</small></div><span className="core-indicator" /></div>
              <div className="flow-single" />
              <div className="workflow-result"><span className="node-icon teal"><Sparkles size={21} /></span><div><b>Less busywork. More clarity.</b><small>Follow-ups, reporting & connected operations</small></div><Check size={18} /></div>
              <div className="canvas-footer"><span><Check size={13} /> Data synced</span><span><Check size={13} /> Workflow connected</span></div>
            </div>
            <div className="panel-footer"><span className="code-label">&lt;/&gt; BUILT AROUND YOUR BUSINESS</span><span>CRM + AI + AUTOMATION</span></div>
          </div>
        </div>
        <div className="hero-stats">
          <div><strong>6<span>+</span></strong><p>Years of experience</p></div>
          <div><strong>6<span>+</span></strong><p>CRM implementations</p></div>
          <div className="hours-saved-stat">
            <strong>3.6<span className="stat-unit"> hrs</span></strong>
            <p>Average saved / worker / week</p>
          </div>
          <a href="#services" className="stats-note">Built for real business.<br /><span>Designed for what’s next. <ArrowDown size={16} /></span></a>
        </div>
      </div>
    </section>
  )
}
