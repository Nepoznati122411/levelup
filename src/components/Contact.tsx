import { useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, Mail, Sparkles } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Welcome to the LevelUp World! Check your inbox.");
    setNewsletterEmail("");
  };

  return (
    <SectionWrapper id="contact">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-neon-digital neon-text-digital">Touch</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Have a project in mind? Let's create something extraordinary together.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-neon-digital h-12 font-body"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-neon-digital h-12 font-body"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-secondary/50 border-border/50 focus:border-neon-digital font-body resize-none"
                />
              </div>
              <Button type="submit" variant="solidDigital" size="lg" className="w-full sm:w-auto">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Newsletter */}
          <div className="lg:pl-12 lg:border-l border-border/50">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-neon-games/5 via-neon-digital/5 to-neon-labs/5 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-neon-digital/20 flex items-center justify-center">
                  <Sparkles className="text-neon-digital" size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold">Stay Updated</h3>
              </div>
              
              <p className="font-body text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest updates, game releases, and exclusive content.
              </p>

              <form onSubmit={handleNewsletter} className="space-y-4">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="bg-background/50 border-border/50 focus:border-neon-digital h-12 font-body flex-1"
                  />
                  <Button type="submit" variant="hero" size="lg">
                    <Mail size={18} />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground font-body">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            </div>

            {/* Quick Links */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <a
                href="#"
                className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-neon-digital/50 transition-colors group"
              >
                <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Terms of Service
                </span>
              </a>
              <a
                href="#"
                className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-neon-digital/50 transition-colors group"
              >
                <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Privacy Policy
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
