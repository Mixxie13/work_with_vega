"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Menu, X } from "lucide-react"

const links = [["Services", "#services"], ["Case studies", "#case-studies"], ["Projects", "#projects"]]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <nav className="site-container header-inner" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <Image src="/vega-abstract-symbol.svg" alt="" width={44} height={44} priority />
          <span>Vega Morada<span className="brand-caption">SYSTEMS & AUTOMATION</span></span>
        </a>
        <div className="desktop-nav">
          {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <a href="#contact" className="button button-small">Let’s talk <ArrowUpRight size={16} /></a>
        </div>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && <div className="mobile-nav" id="mobile-navigation">
        {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={16} /></a>
      </div>}
    </header>
  )
}
