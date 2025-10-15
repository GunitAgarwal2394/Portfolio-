"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Moon,
  Sun,
  Menu,
  X,
  Download,
  Send,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Users,
  ExternalLink,
  Filter,
  Grid,
  List,
  ChevronDown,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "/placeholder.svg?height=300&width=400",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure mobile banking interface with biometric authentication",
    image: "/placeholder.svg?height=300&width=400",
    category: "UI/UX",
    technologies: ["React Native", "Firebase", "Figma"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "AI Dashboard",
    description: "Analytics dashboard with machine learning insights",
    image: "/placeholder.svg?height=300&width=400",
    category: "Frontend",
    technologies: ["Next.js", "TypeScript", "D3.js", "Python"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Real-time social platform with live messaging",
    image: "/placeholder.svg?height=300&width=400",
    category: "Full Stack",
    technologies: ["Vue.js", "Socket.io", "PostgreSQL"],
    link: "#",
    github: "#",
  },
]

const skills = {
  technical: [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "UI/UX Design", level: 88 },
    { name: "MongoDB", level: 75 },
  ],
  soft: [
    { name: "Leadership", level: 92 },
    { name: "Communication", level: 95 },
    { name: "Problem Solving", level: 98 },
    { name: "Creativity", level: 90 },
    { name: "Team Collaboration", level: 94 },
    { name: "Project Management", level: 87 },
  ],
}

const educationTimeline = [
  {
    year: "2021",
    degree: "Completed High School",
    institution: "Secondary Education",
    details: "Graduated with excellent grades, developing a strong foundation in mathematics and sciences.",
    icon: "🎓",
  },
  {
    year: "2023",
    degree: "Completed Secondary Education",
    institution: "Higher Secondary School",
    details: "Specialized in Science stream with focus on Mathematics, Physics, and Computer Science.",
    icon: "🏫",
  },
  {
    year: "2024",
    degree: "Started Data Science Journey",
    institution: "Self-Learning & Online Courses",
    details:
      "Began intensive study in Data Science, Machine Learning, and Web Development through various online platforms and projects.",
    icon: "📊",
  },
  {
    year: "Currently Learning",
    degree: "Continuously expanding knowledge",
    institution: "Advanced Learning",
    details:
      "in advanced data science techniques, machine learning algorithms, and modern web development frameworks; always excited to learn new technologies and challenging projects.",
    icon: "🚀",
  },
]

export default function GunitVerse() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [projectFilter, setProjectFilter] = useState("All")
  const [projectView, setProjectView] = useState("grid")
  const [skillType, setSkillType] = useState("technical")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const filteredProjects =
    projectFilter === "All" ? projects : projects.filter((project) => project.category === projectFilter)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${darkMode ? "bg-blue-400" : "bg-blue-600"} rounded-full`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        {/* Parallax Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 blur-xl"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? "bg-gray-900/80" : "bg-white/80"} backdrop-blur-md border-b ${darkMode ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              GunitVerse
            </motion.div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "education", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-purple-600 ${
                    activeSection === section ? "text-purple-600" : ""
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="relative overflow-hidden"
                aria-label="Toggle dark mode"
              >
                <motion.div animate={{ rotate: darkMode ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </motion.div>
              </Button>
              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden ${darkMode ? "bg-gray-900" : "bg-white"} border-t ${darkMode ? "border-gray-800" : "border-gray-200"}`}
            >
              <div className="px-4 py-2 space-y-2">
                {["home", "about", "projects", "skills", "education", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left px-3 py-2 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Hi, I am Gunit Agarwal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300"
            >
              An aspiring Data Analyst & Web Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("about")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Explore My Universe
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 text-6xl opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          🚀
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-10 text-4xl opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          ⭐
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Image
                  src="/profile.jpg"
                  alt="Gunit Agarwal"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-2xl"></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                <p>
                  Hey, I'm <span className="font-bold text-purple-600">Gunit Agarwal</span> – the guy who can turn
                  boring datasets into stories and simple code into something you'll fall in love with ❤️
                </p>
                <p>
                  An aspiring Data Analyst 📊 and Web Developer 💻 …basically, I play with data by day and charm with
                  design by night.
                </p>
                <p>
                  I believe life is like coding – a few bugs here and there, but with the right mindset (and a little
                  bit of coffee ☕), anything can be fixed.
                </p>
                <p>Also… if curiosity was a superpower, I'd probably be saving the world by now 😉</p>
                <p>
                  When I'm not debugging or decoding patterns, I'm probably imagining how cool it'd be if life had an
                  "undo" button (or a "repeat this moment" one for the good times).
                </p>
                <p>
                  I believe every problem has a pattern, and I'm obsessed with finding it — whether it's hidden in rows
                  of messy data or buried deep in code. My journey is driven by curiosity, creativity, and the belief
                  that learning never stops.
                </p>
                <p>
                  When I'm not coding or exploring data, you'll probably find me diving into tech trends, experimenting
                  with new tools, or brainstorming my next project idea.
                </p>
                <p>
                  So… whether it's your website that needs some magic, or your data that needs some love — I'm your guy.
                </p>
                <p>Don't fall for my work. You might just fall for me too. 😏✨</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my latest work and creative solutions
            </p>
          </motion.div>
          {/* Project Filters and View Toggle */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <Select value={projectFilter} onValueChange={setProjectFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Projects</SelectItem>
                  <SelectItem value="Frontend">Frontend</SelectItem>
                  <SelectItem value="Full Stack">Full Stack</SelectItem>
                  <SelectItem value="UI/UX">UI/UX</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={projectView === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setProjectView("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={projectView === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setProjectView("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {/* Projects Grid */}
          <motion.div
            layout
            className={`grid gap-8 ${projectView === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-4xl mx-auto"}`}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-gray-900">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Live
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/10 border-white text-white hover:bg-white/20"
                          >
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant="secondary"
                          className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                        >
                          {project.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical and soft skills
            </p>
          </motion.div>
          {/* Skills Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
              <Button
                variant={skillType === "technical" ? "default" : "ghost"}
                onClick={() => setSkillType("technical")}
                className="rounded-full px-6"
              >
                <Code className="mr-2 h-4 w-4" />
                Technical Skills
              </Button>
              <Button
                variant={skillType === "soft" ? "default" : "ghost"}
                onClick={() => setSkillType("soft")}
                className="rounded-full px-6"
              >
                <Users className="mr-2 h-4 w-4" />
                Soft Skills
              </Button>
            </div>
          </div>
          {/* Skills Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={skillType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {skills[skillType].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Education Timeline Section */}
      <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Education Timeline
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My academic journey through the universe of learning.
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>
            {educationTimeline.map((edu, idx) => (
              <motion.div
                key={edu.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="p-0 mb-4 flex items-center gap-2">
                      <span className="text-2xl">{edu.icon}</span>
                      <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="font-semibold text-purple-600 mb-1">{edu.year}</div>
                      <div className="text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</div>
                      <div className="text-gray-500 dark:text-gray-400">{edu.details}</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea placeholder="Type your message..." rows={5} />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">gunitagarwal163@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">India</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-purple-100 hover:border-purple-300 bg-transparent"
                    asChild
                  >
                    <a href="https://github.com/GunitAgarwal2394" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-100 hover:border-blue-300 bg-transparent"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/gunit-agarwal2394/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-pink-100 hover:border-pink-300 bg-transparent"
                    asChild
                  >
                    <a href="mailto:gunitagarwal163@email.com">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
              {/* Availability Status */}
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-green-800 dark:text-green-200">Available for new projects</span>
                </div>
                <p className="text-sm text-green-600 dark:text-green-300 mt-2">
                  I'm currently open to freelance opportunities and collaborations. Let's create something amazing
                  together!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              GunitVerse
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Crafted with ❤️ by Gunit Agarwal</p>
            <div className="flex justify-center space-x-6 mb-6">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/GunitAgarwal2394" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/gunit-agarwal2394/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:gunitagarwal163@email.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 GunitVerse – Crafted with ❤️ by Gunit Agarwal
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          size="icon"
          aria-label="Scroll to top"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => scrollToSection("home")}
        >
          <ChevronDown className="h-6 w-6 rotate-180" />
        </Button>
      </motion.div>
    </div>
  )
}
