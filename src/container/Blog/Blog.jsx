import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiClock, HiTag, HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "./Blog.scss";

const blogPosts = [
  {
    id: 1,
    title: "Empowering Widows Through Education",
    excerpt: "Learn how our foundation is transforming lives by providing educational opportunities to widows in Nigeria.",
    content: "Our foundation is committed to empowering widows in Nigeria through comprehensive educational programs that foster independence and community contribution. We offer scholarships to cover tuition for academic and vocational courses, enabling widows to pursue studies in fields like business, healthcare, and technology. Additionally, we provide mentorship programs pairing widows with professionals who guide them through career development and personal growth. Over the past five years, we’ve supported over 500 widows, with many starting their own businesses or securing stable employment. For example, Aisha, a widow from Lagos, completed a tailoring course and now runs a successful clothing business, employing three others. Our initiatives also include literacy workshops to ensure foundational skills, and we partner with local schools to create flexible learning schedules. By addressing barriers like financial constraints and societal stigma, we empower widows to rebuild their lives with dignity. Our future goals include expanding to rural areas and introducing digital literacy programs to equip widows with modern skills, ensuring they thrive in an evolving economy. This holistic approach not only transforms individual lives but also strengthens communities by fostering economic resilience and social inclusion.",
    date: "August 15, 2025",
    tags: ["Education", "Widows", "Community"],
    image: "/about02.png",
    readTime: "1 min read"
  },
  {
    id: 2,
    title: "Medical Missions: Bringing Healthcare to Rural Communities",
    excerpt: "Discover the impact of our medical outreach programs in underserved areas.",
    content: "Our medical missions deliver critical healthcare services to rural communities in Nigeria, where access to medical facilities is often limited. We organize quarterly outreach programs, bringing teams of doctors, nurses, and volunteers to remote villages. Services include free health check-ups, vaccinations, maternal care, and treatment for common ailments like malaria and hypertension. We also provide health education workshops, teaching communities about hygiene, nutrition, and disease prevention. Since 2020, our missions have served over 10,000 individuals, significantly reducing preventable illnesses. For instance, in a recent mission to Ogun State, we vaccinated 1,200 children against polio and provided prenatal care to 300 mothers. We collaborate with local health authorities to ensure sustainability, training community health workers to continue care between missions. Our mobile clinics, equipped with diagnostic tools, allow us to reach isolated areas. Future plans include expanding our fleet of mobile clinics and introducing telemedicine to provide ongoing consultations. By addressing immediate healthcare needs and building local capacity, our missions improve quality of life and empower communities to maintain their health long-term, creating a ripple effect of wellness and resilience.",
    date: "July 28, 2025",
    tags: ["Healthcare", "Community", "Outreach"],
    image: "/about01.png",
    readTime: "1 min read"
  },
  {
    id: 3,
    title: "Building Sustainable Communities",
    excerpt: "Our initiatives focus on creating long-term solutions for community development.",
    content: "Our foundation is dedicated to building sustainable communities through projects that promote long-term growth and resilience. We focus on three pillars: infrastructure, clean water access, and education. Our infrastructure projects include constructing community centers and schools, providing safe spaces for learning and social activities. For example, in Kano, we built a community center that now hosts vocational training and youth programs, serving over 1,000 residents annually. Clean water initiatives involve installing solar-powered boreholes and purification systems, ensuring access to safe drinking water. Since 2019, we’ve provided clean water to 15,000 people, reducing waterborne diseases by 40%. Education programs teach sustainable farming and environmental conservation, empowering communities to manage resources effectively. We engage local leaders to ensure projects align with community needs, fostering ownership and sustainability. Our recent project in Kaduna trained 200 farmers in drought-resistant techniques, boosting crop yields by 30%. Looking ahead, we aim to expand renewable energy projects, such as solar grids, to power rural communities. By integrating infrastructure, water, and education, we create holistic solutions that empower communities to thrive independently for generations.",
    date: "June 10, 2025",
    tags: ["Sustainability", "Community", "Development"],
    image: "/about03.png",
    readTime: "1 min read"
  },
  {
    id: 4,
    title: "Youth Empowerment Through Skills Training",
    excerpt: "Explore how our skills training programs are equipping young people with tools for success.",
    content: "Our youth empowerment programs provide skills training to prepare young Nigerians for sustainable careers in a competitive economy. We offer courses in technology, entrepreneurship, and leadership, tailored to market demands. Since 2018, we’ve trained over 2,000 youths, with 70% securing jobs or starting businesses. Our tech bootcamps teach coding, web development, and digital marketing, with participants like Chinedu, who built a freelance web design career after our program. Entrepreneurship workshops cover business planning, financial literacy, and marketing, enabling youths to launch startups. For example, Fatima’s catering business, started with our support, now employs five people. Leadership training fosters critical thinking and teamwork, preparing youths for managerial roles. We partner with local businesses to provide internships, ensuring practical experience. Our programs are accessible, with scholarships for low-income participants. We also offer mentorship, connecting youths with industry experts. Moving forward, we plan to introduce AI and data analysis courses to align with global trends. By equipping youths with relevant skills and networks, we drive economic growth and empower the next generation to lead transformative change in their communities.",
    date: "September 1, 2025",
    tags: ["Youth", "Skills", "Empowerment"],
    image: "/about02.png",
    readTime: "1 min read"
  },
  {
    id: 5,
    title: "Clean Water Initiatives for Rural Areas",
    excerpt: "Learn about our efforts to provide clean water to underserved communities.",
    content: "Our clean water initiatives address the critical need for safe drinking water in rural Nigeria, where waterborne diseases are prevalent. We install solar-powered boreholes and advanced purification systems to provide reliable access to clean water. Since 2017, we’ve brought safe water to over 20,000 people across 30 communities, reducing diseases like cholera by 50%. In a recent project in Bauchi, we installed a borehole serving 1,500 residents, with a local committee trained to maintain it. We also conduct hygiene education workshops, teaching communities about water storage and sanitation practices. These efforts empower locals to sustain water systems independently. Our partnerships with NGOs and government agencies ensure scalability and alignment with national water policies. We use eco-friendly technologies, like solar pumps, to minimize environmental impact. Success stories include a village in Sokoto where clean water access increased school attendance by 25%, as children no longer spend hours fetching water. Our future plans include expanding to 50 more communities and introducing water quality testing labs. By combining infrastructure, education, and community engagement, we create lasting solutions that improve health and quality of life in rural areas.",
    date: "August 20, 2025",
    tags: ["Water", "Community", "Sustainability"],
    image: "/about01.png",
    readTime: "1 min read"
  }
];

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedTag ? post.tags.includes(selectedTag) : true)
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Framer Motion variants
  const filterVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const paginationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1 }
    }
  };

  const paginationButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    hover: { scale: 1.1 }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="blog-page">
      <div className="background-pattern" />
      
      {/* Header Section */}
      <section className="blog-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Our Stories & Impact</h1>
            <p>Explore the latest updates, stories, and initiatives from our foundation as we work to empower communities.</p>
          </motion.div>
        </div>
      </section>

      <div className="container">
        {/* Search and Filter */}
        <motion.div 
          className="blog-filter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="search-bar"
            variants={filterVariants}
            initial="hidden"
            animate="visible"
          >
            <HiSearch className="search-icon" />
            <motion.input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              variants={filterVariants}
              whileFocus={{ scale: 1.02, borderColor: 'var(--pink-dark)' }}
            />
          </motion.div>
          <motion.div 
            className="tag-filter"
            variants={filterVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.select 
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              variants={filterVariants}
              whileFocus={{ scale: 1.02, borderColor: 'var(--pink-dark)' }}
            >
              <option value="">All Topics</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </motion.select>
          </motion.div>
        </motion.div>

        {/* Blog Posts */}
        <motion.div 
          className="blog-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {currentPosts.map(post => (
              <motion.div
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img 
                  src={post.image} 
                  alt={post.title} 
                  className="blog-image"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="blog-content">
                  <motion.div 
                    className="blog-meta"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <span className="blog-date"><HiClock /> {post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    {post.title}
                  </motion.h3>
                  <motion.p 
                    className="blog-excerpt"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    {post.excerpt}
                  </motion.p>
                  <motion.div 
                    className="blog-tags"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
                  >
                    {post.tags.map(tag => (
                      <motion.span 
                        key={tag} 
                        className="tag"
                        variants={tagVariants}
                        whileHover="hover"
                      >
                        <HiTag /> {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.button
                    className="read-more-btn"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    Read More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        <AnimatePresence mode="wait">
          {totalPages > 0 && (
            <motion.div 
              className="pagination"
              key="pagination"
              variants={paginationVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
            >
              <motion.button
                className="pagination-btn"
                variants={paginationButtonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </motion.button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <motion.button
                  key={page}
                  className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                  variants={paginationButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => paginate(page)}
                >
                  {page}
                </motion.button>
              ))}
              <motion.button
                className="pagination-btn"
                variants={paginationButtonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Blog;