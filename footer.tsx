'use client'

import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8">
                <Image 
                  src="/vega-abstract-symbol.svg" 
                  alt="Vega Morada" 
                  width={32} 
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-foreground hover:text-primary transition cursor-pointer">Vega Morada</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Automation Specialist | CRM Specialist | Executive Assistant
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition active:scale-95">Services</a></li>
              <li><a href="#case-studies" className="hover:text-primary transition active:scale-95">Case Studies</a></li>
              <li><a href="#projects" className="hover:text-primary transition active:scale-95">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition active:scale-95">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:moradavega143@gmail.com" className="hover:text-primary transition active:scale-95">
                  Email
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/vegamorada" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition active:scale-95">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.upwork.com/freelancers/~01513b65b8672f7efa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition active:scale-95">
                  Upwork
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Vega Morada. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/vegamorada" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition text-sm font-medium active:scale-95"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.upwork.com/freelancers/~01513b65b8672f7efa" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition text-sm font-medium active:scale-95"
            >
              Upwork
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
