import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Globe, 
  Download,
  Phone,
  MapPin
} from "lucide-react";

const projects = [
  {
    title: "Modern E-commerce Platform",
    description: "A modern, responsive e-commerce platform built for seamless shopping experiences with integrated payment gateways.",
    tags: ["E-commerce", "Web", "Responsive"],
    link: "https://omkarsaicharan.github.io/INDSHOPSIDE/",
    showLink: true
  },
  {
    title: "OmniStore-express",
    description: "Centralized multi-store ecommerce system for scaling online businesses with advanced inventory management.",
    tags: ["E-commerce", "Full Stack", "Scale"],
    link: "https://omnistore-express.vercel.app/",
    showLink: true
  },
  {
    title: "Business Analytics Dashboard",
    description: "Comprehensive data visualization platform for tracking business KPIs and performance metrics using real-time data.",
    tags: ["Analytics", "Data Viz", "Business"],
    link: "https://omkarsaicharan.github.io/predictiveMmaintenance/",
    showLink: true
  },
  {
    title: "Smart Fertilizer Calculator",
    description: "ML-based system to calculate and recommend optimal fertilizers for crops based on soil composition.",
    tags: ["ML", "Agriculture", "AI"],
    link: "https://fertilizercalculatorml.vercel.app/",
    showLink: true
  },
  {
    title: "Learn Hub",
    description: "A centralized educational platform for managing resources, courses, and tracking student progress efficiently.",
    tags: ["Education", "Web", "LMS"],
    link: "https://learninteractive.vercel.app/",
    showLink: true
  },
  {
    title: "MULTIDISEASE DETECTION CNN-ML",
    description: "Advanced disease detection system for medical practitioners covering multiple organs.",
    tags: ["CNN", "ML", "Healthcare"],
    link: "https://diagnovaai.vercel.app/",
    showLink: true
  },
  {
    title: "Ai-Dermatologist",
    description: "Skin disease prediction and treatment recommendation system using computer vision.",
    tags: ["AI", "Computer Vision", "Healthcare"],
    link: "https://skinhealth-ai.vercel.app/",
    showLink: true
  },
  {
    title: "SatelliteThrive",
    description: "Intelligent framework for Satellite Thruster Health Analysis and Predictive Evaluation.",
    tags: ["Aerospace", "AI", "Predictive"],
    link: "https://satillitelife.vercel.app/",
    showLink: true
  },
  {
    title: "UPSC Library",
    description: "A comprehensive digital library and resource center for UPSC aspirants.",
    tags: ["Web", "Education", "Library"],
    link: "https://upsclibrary.vercel.app/",
    showLink: true
  },
  {
    title: "Object Detection using Ultrasonic Sensor",
    description: "Designed a prototype using IoT to help people detect obstacles while driving the car.",
    tags: ["IoT", "Sensors", "Safety"],
    link: "#",
    showLink: false
  },
  {
    title: "Gesture Controlled Bluetooth Speaker",
    description: "Designed a prototype, Gesture Control Bluetooth Speaker using IoT to avoid manual work.",
    tags: ["IoT", "Gesture", "Hardware"],
    link: "#",
    showLink: false
  },
  {
    title: "Voice Controlled Auto Machine",
    description: "Designed a vehicle which runs by voice commands through Facial Tally and snap Attendance.",
    tags: ["IoT", "Voice Control", "AI"],
    link: "#",
    showLink: false
  },
  {
    title: "Facial Tally and snap Attendance",
    description: "Developed a application using python programming language recognize face and displays name live.",
    tags: ["Security", "AI", "Vision"],
    link: "#",
    showLink: false
  }
];

const skills = [
  "Java, Python, C",
  "HTML, CSS, JavaScript",
  "SQL Databases",
  "NumPy, Pandas, Matplotlib",
  "Flask, TensorFlow",
  "AI & Machine Learning",
  "Computer Vision",
  "Agile Software Developer"
];

const education = [
  {
    school: "MLR Institute of Technology",
    degree: "B. Tech in CSE (AI and ML)",
    period: "2021 - 2025",
    grade: "CGPA: 7.33"
  },
  {
    school: "Sri Chaitanya Junior College",
    degree: "Intermediate Education",
    period: "2018 - 2020",
    grade: "GPA: 8.6"
  },
  {
    school: "Kakatiya High School",
    degree: "Indian Certificate of Secondary Education",
    period: "2018",
    grade: "GPA: 9.8"
  }
];

const experience = [
  {
    role: "Business Security Intern",
    company: "EMPIRE DIGISEC",
    period: "2026",
    desc: "Hands-on experience in Data Analytics, Business Analytics, AI, and Agile Software Development within a business security context."
  },
  {
    role: "Full Stack Web Development Intern",
    company: "EY Global Delivery Services & AICTE",
    period: "Feb 2024 — April 2024",
    desc: "Successfully completed an internship program focused on Full Stack Web Development as part of the Next Gen Employability Program 2023-24."
  }
];

const certifications = [
  {
    title: "Machine Learning using Python",
    issuer: "Verzio",
    date: "08/2022",
    description: "Comprehensive course covering supervised and unsupervised learning algorithms."
  },
  {
    title: "Full Stack App Development Workshop",
    issuer: "IIT-HYD",
    date: "02/2024",
    description: "Hands-on workshop focused on building scalable web applications with modern stacks."
  },
  {
    title: "Full Stack Development Internship",
    issuer: "EYGDS-AICTE",
    date: "04/2024",
    description: "Professional internship focused on enterprise-level web development and agile practices."
  }
];

const codingProfiles = [
  { name: "HackerRank", id: "21R21A6660Omkar saicharan" },
  { name: "CodeChef", id: "Omkarsaicharan" },
  { name: "CodeForce", id: "Omkarsaicharan" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfcfb] text-[#1a1a1a] font-sans">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl min-h-screen flex flex-col md:flex-row">
        
        {/* Left Sidebar */}
        <aside className="w-full md:w-80 bg-[#f7f5f2] p-8 md:p-12 flex flex-col gap-12 border-r border-black/5">
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <img 
                src="https://picsum.photos/seed/omkar/400/400" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="font-serif text-2xl font-bold tracking-tight uppercase">Contact</h2>
            <div className="h-px w-12 bg-black/20 my-4" />
            <ul className="space-y-4 text-sm font-medium text-black/70">
              <li className="flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" /> 
                <a href="tel:+919392965097" className="hover:text-black transition-colors">+91 93929 65097</a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Mail className="w-4 h-4" /> 
                <a href="mailto:omkarsaicharan@gmail.com" className="hover:text-black transition-colors">omkarsaicharan@gmail.com</a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <MapPin className="w-4 h-4" /> Hyderabad, India
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold tracking-tight uppercase text-center">Portfolio</h2>
            <div className="h-px w-12 bg-black/20 my-4 mx-auto" />
            <div className="flex justify-center">
              <a 
                href="https://svipec.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm font-bold hover:text-black transition-colors"
              >
                <Globe className="w-4 h-4" /> svipec.vercel.app
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold tracking-tight uppercase text-center">Skills</h2>
            <div className="h-px w-12 bg-black/20 my-4 mx-auto" />
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-white border border-black/5 rounded text-xs font-semibold uppercase tracking-wider">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold tracking-tight uppercase text-center">Social</h2>
            <div className="h-px w-12 bg-black/20 my-4 mx-auto" />
            <div className="flex justify-center gap-4">
              <a href="https://github.com/OmkarSaicharan" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-black/5 rounded-full transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/thornala-omkar-saicharan" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-black/5 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold tracking-tight uppercase text-center">Coding Profiles</h2>
            <div className="h-px w-12 bg-black/20 my-4 mx-auto" />
            <div className="space-y-2 text-center">
              {codingProfiles.map((profile, i) => (
                <div key={i} className="text-xs">
                  <span className="font-bold uppercase tracking-widest block text-black/40">{profile.name}</span>
                  <span className="font-medium text-black/70">{profile.id}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold tracking-tight uppercase text-center">Languages</h2>
            <div className="h-px w-12 bg-black/20 my-4 mx-auto" />
            <div className="text-center text-xs font-medium text-black/70 space-y-1">
              <p>Telugu: Full Professional</p>
              <p>English: Full Professional</p>
              <p>Hindi: Proficient</p>
            </div>
          </div>

          <div className="mt-auto pt-8">
            <a 
              href="/resume.pdf" 
              className="w-full py-3 bg-black text-white rounded flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest hover:bg-black/80 transition-colors"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 md:p-16 lg:p-20">
          <header className="mb-16">
            <h1 className="font-serif text-6xl md:text-7xl font-light tracking-tighter leading-none mb-4">
              THORNALA <br />
              <span className="font-bold italic">OMKAR SAICHARAN</span>
            </h1>
            <p className="font-serif text-xl italic text-black/60">
              Computer Science Engineer & AI/ML
            </p>
          </header>

          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold border-b-2 border-black pb-2 mb-8 uppercase tracking-widest">Profile</h2>
            <p className="text-lg leading-relaxed text-black/80 font-light">
              Navigating the nexus of innovation and tradition, a computer science engineer melding cutting-edge ideas with 
              timeless principles to forge new paths in the field, igniting a transformative journey of growth and discovery.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold border-b-2 border-black pb-2 mb-8 uppercase tracking-widest">Experience</h2>
            <div className="space-y-12">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-8 border-l border-black/10">
                  <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-black" />
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <h3 className="text-xl font-bold uppercase tracking-tight">{exp.role}</h3>
                    <span className="text-sm font-bold italic text-black/40">{exp.period}</span>
                  </div>
                  <div className="text-lg font-serif italic mb-4">{exp.company}</div>
                  <p className="text-black/70 font-light leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold border-b-2 border-black pb-2 mb-8 uppercase tracking-widest">Education</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, i) => (
                <div key={i} className="p-6 bg-[#f7f5f2] rounded-lg border border-black/5">
                  <div className="text-sm font-bold text-black/40 mb-2">{edu.period}</div>
                  <h3 className="text-lg font-bold mb-1">{edu.school}</h3>
                  <p className="text-sm font-serif italic mb-2">{edu.degree}</p>
                  <div className="text-xs font-bold uppercase tracking-widest">{edu.grade}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold border-b-2 border-black pb-2 mb-8 uppercase tracking-widest">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, i) => (
                <div key={i} className="flex flex-col gap-4 p-6 border border-black/5 hover:bg-[#f7f5f2] transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 bg-black text-white flex items-center justify-center rounded font-serif italic text-2xl group-hover:scale-110 transition-transform">
                      {cert.issuer[0]}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-tight leading-tight">{cert.title}</h3>
                      <p className="text-xs font-bold text-black/60 uppercase tracking-wider mt-1">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                  <p className="text-xs text-black/60 font-light leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-8">
              <h2 className="font-serif text-3xl font-bold uppercase tracking-widest">Selected Projects</h2>
              <a 
                href="https://github.com/OmkarSaicharan?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest hover:text-black/60 transition-colors flex items-center gap-2"
              >
                View All <Github className="w-4 h-4" />
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="group p-6 border border-black/10 hover:border-black transition-all duration-300"
                >
                  <h3 className="text-lg font-bold mb-3 uppercase tracking-tight group-hover:italic transition-all">{project.title}</h3>
                  <p className="text-sm text-black/60 mb-6 font-light leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-bold uppercase tracking-tighter text-black/40">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  {project.showLink && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:gap-4 transition-all"
                    >
                      View <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
      
      <footer className="py-12 text-center text-black/40 text-[10px] font-bold uppercase tracking-[0.3em]">
        © 2026 THORNALA OMKAR SAICHARAN • Hyderabad, India
      </footer>
    </div>
  );
}
