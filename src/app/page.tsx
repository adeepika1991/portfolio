"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import { useState } from "react";
import { MobileNav } from "@/components/ui/MobileNav";

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Enlighted Inc. (A Siemens company)",
      period: "Dec 2022 - Mar 2025",
      location: "Chennai, India",
      description:
        "Leading frontend development for enterprise SaaS platform, mentoring junior developers, and architecting scalable React applications.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Senior Software Engineer",
      company: "Zuci Systems - Mariner Finance",
      period: "2019 - 2021",
      location: "Chennai, India",
      description:
        "Developed responsive web applications, implemented design systems, and improved application performance by 40%.",
      technologies: ["React", "JavaScript", "Redux", "SCSS"],
    },
    {
      title: "Frontend Developer",
      company: "StartUp Hub",
      period: "2018 - 2019",
      location: "Austin, TX",
      description:
        "Built user interfaces for mobile-first applications, collaborated with design team, and contributed to component library.",
      technologies: ["Vue.js", "HTML", "CSS", "Bootstrap"],
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Project Management Tool",
      description:
        "Collaborative project management application with real-time updates, task tracking, and team communication features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization dashboard with interactive charts, real-time metrics, and customizable reporting for business intelligence.",
      technologies: ["React", "D3.js", "Material-UI", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
  ];

  const skills = [
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700" },
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
    { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500" },
    { name: "Node.js", color: "from-green-500 to-green-700" },
    { name: "Git", color: "from-orange-500 to-red-600" },
    { name: "Figma", color: "from-purple-500 to-pink-600" },
    { name: "Redux", color: "from-purple-600 to-purple-800" },
    { name: "GraphQL", color: "from-pink-500 to-rose-600" },
  ];

  const faqData = {
    leadership: [
      {
        question: "How do you approach technical leadership?",
        answer:
          "I believe in leading by example and empowering teams through mentorship and clear communication. I focus on creating an environment where innovation thrives, while maintaining high code quality standards and best practices.",
      },
      {
        question: "What's your philosophy on code quality?",
        answer:
          "Code quality is non-negotiable. I advocate for clean, maintainable code with comprehensive testing, proper documentation, and adherence to established patterns. Quality code is an investment in the future of the project.",
      },
      {
        question: "How do you make technical decisions?",
        answer:
          "I evaluate decisions based on scalability, maintainability, team expertise, and business impact. I believe in data-driven decisions, proof of concepts when needed, and always considering the long-term implications.",
      },
    ],
    team: [
      {
        question: "How do you foster team collaboration?",
        answer:
          "I promote open communication, regular knowledge sharing sessions, and pair programming. I believe diverse perspectives lead to better solutions, so I encourage everyone to contribute ideas and challenge assumptions.",
      },
      {
        question: "What's your approach to mentoring junior developers?",
        answer:
          "I focus on building fundamentals, encouraging curiosity, and providing constructive feedback. I pair juniors with challenging but achievable tasks, offer code review insights, and create safe spaces for questions and learning.",
      },
      {
        question: "How do you handle conflict within teams?",
        answer:
          "I address conflicts early through direct, respectful communication. I focus on understanding root causes, finding common ground, and turning disagreements into learning opportunities for the entire team.",
      },
    ],
    about: [
      {
        question: "What drives your passion for frontend development?",
        answer:
          "I love the intersection of aesthetics and functionality. Creating interfaces that users love while solving complex technical challenges is incredibly rewarding. The rapid evolution of web technologies keeps me constantly learning.",
      },
      {
        question: "How do you stay current with technology trends?",
        answer:
          "I dedicate time weekly to read technical articles, contribute to open source, experiment with new frameworks, and attend conferences. I also believe in learning from my peers through code reviews and technical discussions.",
      },
      {
        question: "What are your career goals?",
        answer:
          "I aim to continue growing as a technical leader, architecting large-scale applications, and mentoring the next generation of developers. I'm passionate about contributing to the developer community through open source and knowledge sharing.",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-semibold"
          >
            Deepika Asokan
          </motion.div>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex gap-6 items-center">
            <a
              href="#about"
              className="text-sm hover:text-accent transition-colors"
              data-track="About-me"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm hover:text-accent transition-colors"
              data-track="experience"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm hover:text-accent transition-colors"
              data-track="Projects"
            >
              Projects
            </a>
            <a
              href="#faq"
              className="text-sm hover:text-accent transition-colors"
              data-track="FAQ"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-accent transition-colors"
              data-track="Contact"
            >
              Contact
            </a>
          </div>

          {/* Mobile Navigation - hidden on desktop */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-lg md:text-xl text-accent font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I&apos;m
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Deepika Asokan
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-5xl font-semibold text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Senior Frontend Engineer
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Crafting beautiful, performant web experiences with 6 years of
              expertise
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-green-500/10 border border-green-500/30 rounded-full pulse-green"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-500 text-sm font-medium">
                Open to Opportunities
              </span>
            </motion.div>
            <motion.div
              className="flex gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" asChild data-track="Get In Touch">
                  <a href="#contact">Get in Touch</a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  data-track="Hero Section - Projects"
                >
                  <a href="#projects">View Work</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <Card className="p-8 mb-8 moving-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I&apos;m a passionate Senior Frontend Engineer with 6 years of
                experience building scalable, user-centric web applications. I
                specialize in React, Next.js, and TypeScript, with a strong
                focus on performance optimization, accessibility, and clean code
                architecture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Throughout my career, I&apos;ve led cross-functional teams,
                mentored junior developers, and delivered high-impact features
                for enterprise applications. I&apos;m always learning and
                staying up-to-date with the latest web technologies and best
                practices.
              </p>
            </Card>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`px-4 py-2 bg-gradient-to-r ${skill.color} rounded-lg text-sm font-medium text-white shadow-lg`}
                    >
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12">Work Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-accent font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-muted rounded text-xs font-medium"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all">
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-2 py-1 bg-muted rounded text-xs"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(100, 116, 139, 0.3)",
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href={project.github}
                              className="flex items-center gap-2"
                              data-track={`${project.title}- Github Link`}
                            >
                              <Github className="w-4 h-4" />
                              Code
                            </a>
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button size="sm" asChild>
                            <a
                              href={project.live}
                              className="flex items-center gap-2"
                              data-track={`${project.title}- Live`}
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Learn more about my approach to leadership, team collaboration,
              and career philosophy
            </p>

            <Tabs defaultValue="leadership" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-track="Leadership Tab"
                >
                  <TabsTrigger value="leadership" className="text-sm">
                    Leadership
                  </TabsTrigger>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-track="Team and Culture Tab"
                >
                  <TabsTrigger value="team" className="text-sm">
                    Team & Culture
                  </TabsTrigger>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-track="About Me Tab"
                >
                  <TabsTrigger value="about" className="text-sm">
                    About Me
                  </TabsTrigger>
                </motion.div>
              </TabsList>

              <TabsContent value="leadership">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {faqData.leadership.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`leadership-${index}`}
                        >
                          <AccordionTrigger className="text-left hover:no-underline">
                            <span className="font-semibold">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="team">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {faqData.team.map((faq, index) => (
                        <AccordionItem key={index} value={`team-${index}`}>
                          <AccordionTrigger className="text-left hover:no-underline">
                            <span className="font-semibold">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="about">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {faqData.about.map((faq, index) => (
                        <AccordionItem key={index} value={`about-${index}`}>
                          <AccordionTrigger className="text-left hover:no-underline">
                            <span className="font-semibold">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              Get in Touch
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              I&apos;m always open to discussing new projects, opportunities, or
              just having a chat about tech.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full"
                      data-track="Contact Me"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Card>

              <div className="flex flex-col justify-center space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-6">
                    Connect With Me
                  </h3>
                  <div className="space-y-4">
                    <motion.a
                      href="mailto:adeepika1991l@gmail.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 5 }}
                      data-track="Email"
                    >
                      <Mail className="w-5 h-5" />
                      <span>adeepika1991@gmail.com</span>
                    </motion.a>
                    <motion.a
                      href="https://github.com/adeepika1991"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 5 }}
                      data-track="Github Portfolio"
                    >
                      <Github className="w-5 h-5" />
                      <span>github.com/adeepika1991</span>
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/deepika-asokan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 5 }}
                      data-track="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>linkedin.com/in/deepika-asokan</span>
                    </motion.a>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Deepika Asokan. Built with Next.js and
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
