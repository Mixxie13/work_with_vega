'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowDownRight, ChevronDown, Workflow } from 'lucide-react'
import { categories } from '@/lib/portfolio-projects'

export function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const [activeCategory, setActiveCategory] = useState('All')
  const allProjects = categories.flatMap(category => category.projects)
  const projects = activeCategory === 'All'
    ? allProjects
    : categories.find(category => category.label === activeCategory)!.projects
  const filters = [{ label: 'All', count: allProjects.length }, ...categories.map(category => ({ label: category.label, count: category.projects.length }))]
  const activeBlurb = activeCategory === 'All'
    ? 'Explore my full collection of CRM implementations, business integrations, and AI automation workflows.'
    : categories.find(category => category.label === activeCategory)!.blurb

  return (
    <section id="projects" className="section-space projects-section">
      <div className="site-container">
        <div className="section-heading"><div><p className="eyebrow">03 / PROJECT LIBRARY</p><h2>From idea to<br /><span className="gradient-text">working workflow.</span></h2></div><p>A closer look at the CRM implementations, integrations, and AI automation systems I’ve built. Select a project to explore the implementation.</p></div>
        <div className="project-filters" role="group" aria-label="Filter projects by platform">
          {filters.map(filter => <button type="button" key={filter.label} aria-pressed={activeCategory === filter.label} onClick={() => { setActiveCategory(filter.label); setSelectedIndex(null) }} className={`project-filter ${activeCategory === filter.label ? 'filter-active' : ''}`}>{filter.label}<span>{filter.count}</span></button>)}
        </div>
        <p className="project-category-description" aria-live="polite">{activeBlurb}</p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article key={project.title} className={`project-card ${selectedIndex === index ? 'project-active' : ''}`}>
              {project.image ? <div className="project-image"><Image src={project.image} alt={`${project.title} workflow screenshot`} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /><span className="project-image-label">WORKFLOW / {String(index + 1).padStart(2, '0')}</span></div> : <div className="project-placeholder" aria-hidden="true"><Workflow size={40} strokeWidth={1} /><span>{project.tags[0]} / WORKFLOW {String(index + 1).padStart(2, '0')}</span><ArrowDownRight size={24} /></div>}
              <div className="project-content">
                <button type="button" onClick={() => setSelectedIndex(selectedIndex === index ? null : index)} aria-expanded={selectedIndex === index} aria-controls={`project-details-${index}`} className="project-toggle"><h3>{project.title}</h3><ChevronDown size={20} className={selectedIndex === index ? 'rotate-180' : ''} /></button>
                <p>{project.description}</p>
                <div id={`project-details-${index}`} hidden={selectedIndex !== index} className="project-details"><p>{project.details}</p></div>
                <div className="skill-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
