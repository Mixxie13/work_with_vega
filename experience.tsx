'use client'

import { useState } from 'react'

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)

  const caseStudies = [
    {
      company: "BlueCloudUSA",
      role: "Operations Manager & Executive Assistant",
      positioning: "Business operations, customer onboarding coordination, CRM administration, compliance management, billing operations, and operational documentation.",
      challenge: "BlueCloudUSA needed to establish scalable operational systems across customer onboarding, ACH migration support, compliance management, and CRM administration while maintaining quality and team coordination.",
      solution: "Established operational framework using Zoho CRM and Zoho Projects for customer workflow management, coordinated ACH migration initiatives and customer verification processes, structured 10DLC compliance tracking and documentation, developed SOPs for repeatable operational processes, and supported planning for AI voice agent implementation.",
      systemsUsed: ["Zoho CRM", "Zoho Projects", "Stripe", "Google Workspace", "Microsoft Office", "WhatsApp"],
      operationalCoordination: "Coordinated customer onboarding workflows, managed ACH migration support and verification processes, tracked 10DLC compliance submissions and approvals, liaised with internal teams on vendor relationships, provided executive support and billing administration.",
      outcome: "Improved operational visibility and accountability across departments, established repeatable onboarding and compliance processes, coordinated successful ACH migration, provided foundational support for planned VoIP and AI voice agent initiatives.",
      responsibilities: [
        "Managed day-to-day operational support across customer onboarding, billing, CRM administration, and client communications",
        "Coordinated onboarding processes and account activations",
        "Managed customer follow-ups and implementation workflows",
        "Supported ACH migration initiatives and customer verification processes",
        "Oversaw customer communication, escalations, and service coordination",
        "Managed Zoho Projects tasks and operational workflows",
        "Coordinated internal teams and vendor relationships",
        "Managed 10DLC campaign compliance submissions, revisions, and approvals",
        "Investigated billing inquiries and customer account concerns",
        "Created SOPs, documentation, and repeatable operational processes",
        "Supported AI voice automation implementation planning and coordination"
      ]
    },
    {
      company: "The Lucky Harvest",
      role: "Operations Manager | Zoho Consultant | Systems Support",
      positioning: "Business systems optimization, operational process improvement, inventory management, product data architecture, and operational workflow design.",
      challenge: "The Lucky Harvest needed to synchronize product data between WooCommerce and inventory systems, improve order workflow coordination, and establish scalable operational processes to support growing e-commerce operations.",
      solution: "Designed Zoho Inventory architecture and operational workflows, developed WooCommerce to Zoho synchronization strategy, structured product management workflows using Zoho Flow, created centralized product and order management processes, and established scalable operational systems in Simpro.",
      systemsUsed: ["Zoho CRM", "Zoho Inventory", "Zoho Flow", "WooCommerce", "Simpro", "Make.com"],
      operationalCoordination: "Coordinated product data management between WooCommerce and Zoho Inventory, structured order workflow processes, designed product-to-job mapping in Simpro, improved data organization and reporting structures, established operational process documentation.",
      outcome: "Improved product data accuracy and synchronization, reduced manual data entry, enabled real-time product visibility across platforms, established scalable operational infrastructure and repeatable processes.",
      responsibilities: [
        "Designed and implemented Zoho operational workflows",
        "Built product management and inventory processes",
        "Developed WooCommerce to Zoho synchronization strategy",
        "Structured automation scenarios using Make.com",
        "Structured operational systems and business workflows",
        "Developed SOPs and process documentation",
        "Created process maps and operational frameworks",
        "Improved data management and reporting structures",
        "Established scalable operational processes",
        "Designed centralized product and information management workflows"
      ]
    },
    {
      company: "We Clear Junk",
      role: "Zoho Systems Implementor & Financial Reporting Analyst",
      positioning: "CRM implementation, systems architecture, operational reporting, process optimization, automation planning, and business intelligence.",
      challenge: "We Clear Junk needed to implement a comprehensive CRM system to manage lead-to-job workflows, establish customer service ticketing, create reporting dashboards, and build financial visibility across operations.",
      solution: "Led Zoho CRM implementation planning, designed customer lifecycle workflows from lead to job completion, structured Zoho Desk for customer service, created financial reporting frameworks, and planned automation strategies using Make.com and Zoho Flow.",
      systemsUsed: ["Zoho CRM", "Zoho Desk", "Zoho Flow", "Make.com", "Freshdesk"],
      automationLogic: "Automated lead-to-job workflow processes, implemented customer lifecycle automations, structured ticket management and escalation workflows, created KPI dashboards for management visibility",
      outcome: "Established scalable CRM infrastructure, improved lead tracking and conversion visibility, created comprehensive financial reporting for better decision-making, reduced manual handoff errors",
      responsibilities: [
        "Led Zoho systems implementation planning",
        "Designed CRM architecture and customer workflows",
        "Created business process maps and operational frameworks",
        "Developed lead-to-job lifecycle workflows",
        "Structured customer service and ticket management systems",
        "Planned automation and workflow strategies",
        "Designed reporting structures and KPI dashboards",
        "Built financial reporting frameworks and management visibility tools",
        "Improved operational reporting processes",
        "Developed process documentation and implementation plans"
      ]
    }
  ]

  return (
    <section id="case-studies" className="section-space case-studies-section">
      <div className="site-container">
        <div className="text-center mb-16">
          <p className="eyebrow">02 / REAL BUSINESS, REAL SYSTEMS</p><h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">The work behind the workflows.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Proven expertise in CRM implementation, systems architecture, business process automation, and operational transformation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Case Study Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-3 lg:sticky lg:top-24">
              {caseStudies.map((study, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={activeIndex === index}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeIndex === index
                      ? 'glass-effect bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50 hover-glow'
                      : 'glass-effect border border-border/50 hover:border-primary/30'
                  }`}
                >
                  <div className="font-bold text-sm text-foreground">{study.company}</div>
                  <div className={`text-xs mt-1 ${activeIndex === index ? 'text-accent' : 'text-muted-foreground'}`}>
                    {study.role}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Case Study Details */}
          <div className="lg:col-span-2">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ${activeIndex === index ? 'opacity-100 animate-fade-in-up' : 'hidden'}`}
              >
                <div className="glass-effect gradient-border rounded-lg p-8 space-y-8">
                  {/* Header */}
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{study.company}</h3>
                    <p className="text-primary font-semibold mb-3">{study.role}</p>
                    <p className="text-muted-foreground italic">{study.positioning}</p>
                  </div>

                  {/* Problem */}
                  <div className="border-t border-border pt-6">
                    <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                      Business Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="border-t border-border pt-6">
                    <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                      Solution Designed
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>

                    {/* Systems Used */}
                  <div className="border-t border-border/30 pt-6">
                    <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                      Systems & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.systemsUsed.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/20 text-accent text-xs rounded-full font-medium border border-primary/30 hover:border-primary/60 transition">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Operational Coordination */}
                  <div className="border-t border-border pt-6">
                    <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                      Operational Coordination & Process Management
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.operationalCoordination ?? study.automationLogic}</p>
                  </div>

                  {/* Outcome */}
                  <div className="border-t border-border pt-6">
                    <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                      Business Outcomes
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.outcome}</p>
                  </div>

                  {/* Responsibilities */}
                  <div className="border-t border-border pt-6">
                    <h4 className="text-lg font-bold text-foreground mb-4">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {study.responsibilities.map((resp, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-3">
                          <span className="text-primary font-bold mt-1">→</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
