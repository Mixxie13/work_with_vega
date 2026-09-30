export function Testimonials() {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      company: "BlueCloud USA",
      content: "Vega's expertise in automation transformed our operations. Her ability to identify inefficiencies and implement solutions saved us countless hours each month. A true professional.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Head of Sales",
      company: "Jay Abbasi Consulting",
      content: "Working with Vega was a game-changer. Her lead generation strategies and CRM expertise directly contributed to a 40% increase in qualified leads. Highly recommended.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Operations Director",
      company: "SuperfastCPA",
      content: "Vega's attention to detail and proactive approach to process improvement is exceptional. She consistently delivers high-quality work with minimal supervision.",
      rating: 5
    },
    {
      name: "Lisa Müller",
      role: "E-commerce Manager",
      company: "Direct Client (Germany)",
      content: "Vega managed our complete e-commerce operations with professionalism and efficiency. Customer satisfaction improved significantly under her management.",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Testimonials</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            What clients say about working together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-lg bg-card border border-border hover:border-accent transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-base leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-accent font-medium">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
