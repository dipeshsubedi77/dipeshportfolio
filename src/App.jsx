"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import { ThemeProvider } from "./components/ThemeProvider"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import ProjectsGrid from "./components/ProjectsGrid"
import ProjectDetail from "./components/ProjectDetail"
import SkillsSection from "./components/SkillsSection"
import TestimonialsSection from "./components/TestimonialsSection"
import ContactSection from "./components/ContactSection"
import AboutSection from "./components/aboutSection"

import Footer from "./components/Footer"
// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Brand Identity for Tech Startup",
    slug: "tech-startup-branding",
    description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
    category: "branding",
    tags: ["Logo Design", "Brand Identity", "Guidelines"],
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000",
    client: "TechVision",
    date: "January 2023",
    timeline: "6 weeks",
    services: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines"],
    tools: ["Figma", "Illustrator", "Photoshop"],
    featured: true,
    content:
      "<p>This project involved creating a comprehensive brand identity for a tech startup that specializes in AI solutions. The client needed a modern, professional look that would appeal to enterprise clients while still feeling innovative and forward-thinking.</p><p>I began with extensive research into the industry, competitors, and target audience to develop a strategic foundation for the brand. After several rounds of concept development and refinement, we arrived at a final design that perfectly captured the client's vision.</p><p>The resulting brand identity is clean, scalable, and versatile, working effectively across digital and print applications. The client was thrilled with the outcome, which has helped them establish a strong market presence.</p>",
    gallery: [
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2000",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000",
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2000",
    ],
    liveUrl: "https://example.com",
    githubUrl: null,
    prevProject: null,
    nextProject: {
      title: "E-commerce Website Redesign",
      slug: "ecommerce-website-redesign",
    },
  },
  {
    id: 2,
    title: "E-commerce Website Redesign",
    slug: "ecommerce-website-redesign",
    description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    category: "web",
    tags: ["UI/UX", "E-commerce", "Responsive"],
    coverImage: "https://images.unsplash.com/photo-1661956602868-6ae368943878?q=80&w=2000",
    client: "FashionHub",
    date: "March 2023",
    timeline: "8 weeks",
    services: ["UX Research", "UI Design", "Prototype", "Design System"],
    tools: ["Figma", "Photoshop", "Principle"],
    featured: true,
    content:
      "<p>FashionHub approached me to redesign their e-commerce website with the goal of improving user experience, increasing conversion rates, and modernizing their visual identity. The existing site had usability issues and wasn't optimized for mobile devices.</p><p>I conducted user research to identify pain points and opportunities, then created wireframes and prototypes to test different solutions. The final design features a clean, intuitive interface with improved product filtering, streamlined checkout, and enhanced product visualization.</p><p>After implementation, the client reported a 35% increase in conversion rate and a significant reduction in cart abandonment. The responsive design ensures a seamless experience across all devices.</p>",
    gallery: [
      "https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=2000",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000",
      "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?q=80&w=2000",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    prevProject: {
      title: "Brand Identity for Tech Startup",
      slug: "tech-startup-branding",
    },
    nextProject: {
      title: "Mobile App UI Design",
      slug: "fitness-app-ui-design",
    },
  },
  {
    id: 3,
    title: "Mobile App UI Design",
    slug: "fitness-app-ui-design",
    description:
      "UI/UX design for a fitness tracking mobile application with a focus on user engagement and motivation.",
    category: "mobile",
    tags: ["Mobile UI", "App Design", "Fitness"],
    coverImage: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2000",
    client: "FitTrack",
    date: "May 2023",
    timeline: "10 weeks",
    services: ["UX Research", "UI Design", "Interaction Design", "Prototyping"],
    tools: ["Figma", "Sketch", "ProtoPie"],
    featured: false,
    content:
      "<p>FitTrack needed a complete redesign of their fitness tracking app to improve user engagement and retention. The challenge was to create an interface that would motivate users to maintain their fitness routines while making data tracking intuitive and rewarding.</p><p>I designed a user-centered interface with gamification elements, personalized dashboards, and social features to keep users motivated. The new design includes animated transitions, progress visualizations, and achievement systems that make fitness tracking more engaging.</p><p>The redesigned app launched to positive user feedback, with a 40% increase in daily active users and improved session duration. The client has since engaged me for ongoing design updates and feature additions.</p>",
    gallery: [
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2000",
      "https://images.unsplash.com/photo-1575572577206-61b5a91c2c95?q=80&w=2000",
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2000",
    ],
    liveUrl: "https://example.com",
    githubUrl: null,
    prevProject: {
      title: "E-commerce Website Redesign",
      slug: "ecommerce-website-redesign",
    },
    nextProject: {
      title: "Editorial Magazine Layout",
      slug: "editorial-magazine-layout",
    },
  },
  {
    id: 4,
    title: "Editorial Magazine Layout",
    slug: "editorial-magazine-layout",
    description:
      "Print and digital layout design for a quarterly arts and culture magazine with a focus on typography.",
    category: "print",
    tags: ["Editorial", "Typography", "Print"],
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2000",
    client: "Artisan Quarterly",
    date: "July 2023",
    timeline: "4 weeks",
    services: ["Editorial Design", "Typography", "Layout", "Print Preparation"],
    tools: ["InDesign", "Photoshop", "Illustrator"],
    featured: false,
    content:
      "<p>Artisan Quarterly commissioned me to redesign their arts and culture magazine for both print and digital formats. The publication needed a sophisticated, contemporary look that would showcase photography and long-form articles while maintaining excellent readability.</p><p>I developed a flexible grid system and typographic hierarchy that adapts beautifully to different content types. The design emphasizes white space, elegant typography, and a careful balance between text and imagery. For the digital version, I created interactive elements and optimized the reading experience for screens.</p><p>The redesigned magazine has received industry recognition for its typography and layout, with increased subscription rates following the release of the new design.</p>",
    gallery: [
      "https://images.unsplash.com/photo-1603659514658-59e2c9e4a801?q=80&w=2000",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?q=80&w=2000",
      "https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2000",
    ],
    liveUrl: null,
    githubUrl: null,
    prevProject: {
      title: "Mobile App UI Design",
      slug: "fitness-app-ui-design",
    },
    nextProject: {
      title: "Illustration Series",
      slug: "nature-illustration-series",
    },
  },
  {
    id: 5,
    title: "Illustration Series",
    slug: "nature-illustration-series",
    description:
      "A series of digital illustrations exploring themes of nature and sustainability for an environmental campaign.",
    category: "illustration",
    tags: ["Digital Illustration", "Environmental", "Campaign"],
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000",
    client: "EcoAwareness Foundation",
    date: "September 2023",
    timeline: "8 weeks",
    services: ["Concept Development", "Digital Illustration", "Art Direction"],
    tools: ["Procreate", "Photoshop", "Illustrator"],
    featured: true,
    content:
      "<p>The EcoAwareness Foundation approached me to create a series of illustrations for their campaign on environmental conservation. The illustrations needed to be emotionally resonant while communicating complex environmental concepts in an accessible way.</p><p>I developed a distinctive illustration style that combines detailed natural elements with symbolic representations of human impact. Each piece in the series focuses on a different environmental theme, from ocean pollution to forest conservation, creating a cohesive visual narrative about our relationship with nature.</p><p>The illustrations were used across social media, print materials, and outdoor advertising, helping the campaign reach a wider audience and increase engagement with environmental issues.</p>",
    gallery: [
      "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=2000",
      "https://images.unsplash.com/photo-1558244661-d248897f7bc4?q=80&w=2000",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=2000",
    ],
    liveUrl: "https://example.com",
    githubUrl: null,
    prevProject: {
      title: "Editorial Magazine Layout",
      slug: "editorial-magazine-layout",
    },
    nextProject: {
      title: "Brand Identity for Tech Startup",
      slug: "tech-startup-branding",
    },
  },
]

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-purple-600 dark:border-t-purple-500 rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutSection/>
                  <SkillsSection />
                  
                  <ProjectsGrid projects={projectsData.filter((p) => p.featured)} />
                  <TestimonialsSection />
                  <ContactSection />
                </>
              }
            />
            <Route path="/projects" element={<ProjectsGrid projects={projectsData} />} />
            <Route path="/projects/:slug" element={<ProjectDetail projects={projectsData} />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

