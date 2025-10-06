import { motion } from 'framer-motion';
import { ArrowRight, Users, Network, Target, Rocket } from 'lucide-react';
import InteractiveBackground from '../components/InteractiveBackground';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { textReveal, titleSlide, staggerCards, parallaxScroll, createTiltEffect, revealSection } from '../utils/animations';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Home = () => {
  // Create refs for sections to check when they're mounted
  const heroRef = useRef<HTMLElement>(null);
  const impactRef = useRef<HTMLElement>(null);
  const scaleRef = useRef<HTMLElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const featuredCardRef = useRef<HTMLDivElement>(null);

  // Additional refs for sections mentioned by the user
  const pathToGrowthRef = useRef<HTMLDivElement>(null);
  const accelerateRef = useRef<HTMLElement>(null);
  const helpScaleRef = useRef<HTMLElement>(null);
  const impactStoriesRef = useRef<HTMLElement>(null);
  const expertiseRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const initAnimations = setTimeout(() => {
      // Create a parallax effect for the background
      if (parallaxBgRef.current) {
        parallaxScroll(parallaxBgRef.current, -0.3);
      }

      // Apply tilt effect to featured card
      if (featuredCardRef.current) {
        createTiltEffect(featuredCardRef.current, 6);
      }

      // Hero section animations with more dynamic effects
      if (heroRef.current) {
        const heroTitle = heroRef.current.querySelector('.hero-title');
        const heroSubtitle = heroRef.current.querySelector('.hero-subtitle');
        const heroButtons = heroRef.current.querySelectorAll('.hero-btn');

        if (heroTitle) {
          // Simple fade in
          textReveal(heroTitle as Element, 0);
        }
        if (heroSubtitle) {
          // Delayed fade in
          textReveal(heroSubtitle as Element, 0.6);
        }
        if (heroButtons.length > 0) {
          gsap.fromTo(heroButtons,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.2,
              duration: 0.8,
              ease: 'power2.out',
              delay: 1
            }
          );
        }
      }

      // Impact section animations with 3D effects
      if (impactRef.current) {
        // Animate the whole section first
        revealSection(impactRef.current);

        const impactTitle = impactRef.current.querySelector('.impact-title');
        const impactCards = impactRef.current.querySelectorAll('.impact-card');

        if (impactTitle) titleSlide(impactTitle as Element);
        if (impactCards.length > 0) staggerCards(Array.from(impactCards), 0.5); // Stagger pattern for more visual interest
      }

      // Scale section animations with 3D perspective
      if (scaleRef.current) {
        const scaleTitle = scaleRef.current.querySelector('.scale-title');
        const scaleDescription = scaleRef.current.querySelector('.scale-description');
        const scaleItems = scaleRef.current.querySelectorAll('.scale-item');

        if (scaleTitle) titleSlide(scaleTitle as Element);
        if (scaleDescription) textReveal(scaleDescription as Element, 0.3);

        // Add bounce effect to scale items
        if (scaleItems.length > 0) {
          gsap.fromTo(scaleItems,
            { y: 50, opacity: 0, rotationX: 15 },
            {
              y: 0,
              opacity: 1,
              rotationX: 0,
              stagger: 0.15,
              duration: 0.8,
              ease: 'elastic.out(1, 0.5)',
              scrollTrigger: {
                trigger: scaleRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      }

      // Animating "Choose Your Path to Growth" section
      if (pathToGrowthRef.current) {
        const title = pathToGrowthRef.current.querySelector('h2');
        const description = pathToGrowthRef.current.querySelector('p');
        const cards = pathToGrowthRef.current.querySelectorAll('.impact-card');

        if (title) textReveal(title as Element, 0);
        if (description) textReveal(description as Element, 0.3);
        if (cards.length > 0) staggerCards(Array.from(cards), 0.6);
      }

      // Animating "Accelerate Market Entry with Us" section
      if (accelerateRef.current) {
        const title = accelerateRef.current.querySelector('h2');
        const descriptions = accelerateRef.current.querySelectorAll('p');
        const button = accelerateRef.current.querySelector('a');
        const image = accelerateRef.current.querySelector('img');

        // Create a timeline for coordinated animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: accelerateRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        });

        if (title) tl.fromTo(title,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
        );

        if (descriptions.length > 0) tl.fromTo(descriptions,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.2, duration: 0.6, ease: 'back.out(1.2)' },
          '-=0.4'
        );

        if (button) tl.fromTo(button,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' },
          '-=0.2'
        );

        if (image) tl.fromTo(image,
          { opacity: 0, x: 30, rotation: 2 },
          { opacity: 1, x: 0, rotation: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.7'
        );
      }

      // Animating "How We Help You Scale" section
      if (helpScaleRef.current) {
        const title = helpScaleRef.current.querySelector('h2');
        const description = helpScaleRef.current.querySelector('p');
        const items = helpScaleRef.current.querySelectorAll('.scale-item');

        if (title) titleSlide(title as Element);
        if (description) textReveal(description as Element, 0.3);
        if (items.length > 0) {
          gsap.fromTo(items,
            { opacity: 0, y: 40, rotationX: 10 },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              stagger: 0.15,
              duration: 1,
              ease: 'elastic.out(1, 0.5)',
              scrollTrigger: {
                trigger: helpScaleRef.current,
                start: 'top 70%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      }

      // Animating "Impact Stories" section
      if (impactStoriesRef.current) {
        const title = impactStoriesRef.current.querySelector('h2');
        const description = impactStoriesRef.current.querySelector('p');
        const cards = impactStoriesRef.current.querySelectorAll('.card');
        const controls = impactStoriesRef.current.querySelectorAll('button');

        if (title) titleSlide(title as Element);
        if (description) textReveal(description as Element, 0.3);

        if (cards.length > 0) {
          gsap.fromTo(cards,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.2,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: impactStoriesRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }

        if (controls.length > 0) {
          gsap.fromTo(controls,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              stagger: 0.1,
              duration: 0.5,
              ease: 'power1.out',
              delay: 0.8,
              scrollTrigger: {
                trigger: impactStoriesRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      }

      // Animating "Learn from Our Expertise" section
      if (expertiseRef.current) {
        const title = expertiseRef.current.querySelector('h2');
        const description = expertiseRef.current.querySelector('p');
        const articles = expertiseRef.current.querySelectorAll('article');
        const viewMore = expertiseRef.current.querySelector('a');

        if (title) titleSlide(title as Element);
        if (description) textReveal(description as Element, 0.3);

        if (articles.length > 0) {
          gsap.fromTo(articles,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.2,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: expertiseRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }

        if (viewMore) {
          gsap.fromTo(viewMore,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
              delay: 1.2,
              scrollTrigger: {
                trigger: expertiseRef.current,
                start: 'top 70%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      }

      // CTA section with dramatic entrance
      if (ctaSectionRef.current) {
        const ctaTitle = ctaSectionRef.current.querySelector('h2');
        const ctaText = ctaSectionRef.current.querySelector('p');
        const ctaButton = ctaSectionRef.current.querySelector('a');

        // Create a timeline for coordinated animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        });

        if (ctaTitle) {
          tl.fromTo(ctaTitle,
            { opacity: 0, scale: 0.9, y: -50 },
            { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' }
          );
        }

        if (ctaText) {
          tl.fromTo(ctaText,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
            '-=0.4'
          );
        }

        if (ctaButton) {
          tl.fromTo(ctaButton,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: 'back.out(2)',
              onComplete: () => {
                // Add a subtle pulse animation to the button
                gsap.to(ctaButton, {
                  scale: 1.05,
                  duration: 0.8,
                  repeat: -1,
                  yoyo: true,
                  ease: 'sine.inOut'
                });
              }
            },
            '-=0.2'
          );
        }
      }

    }, 300); // Small delay to ensure DOM is ready

    return () => clearTimeout(initAnimations);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Hero Section with Enhanced Background Image */}
      <motion.section
        ref={heroRef}
        className="min-h-screen flex items-center relative border-b border-gray-800 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image with Enhanced Effects */}
        <div className="absolute inset-0 z-0" ref={parallaxBgRef}>
          <img
            src="/images/HomeVenture.png"
            alt="Innovative ventures background"
            className="w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90">
            <InteractiveBackground />
          </div>
          {/* Accent elements */}
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#FF3D22] rounded-full filter blur-[150px] opacity-20"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#FF3D22] rounded-full filter blur-[150px] opacity-15"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 z-10 relative">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10 leading-tight hero-title tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
              delay: 0.2
            }}
          >
            We Accelerate <span className="text-[#FF3D22]">
              Innovation
            </span><br/>
            <span className="text-[#FF3D22]">
              & Build
            </span> Ambitious Ventures
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 max-w-4xl hero-subtitle whitespace-normal font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.8
            }}
          >
            In close partnership with visionary founders and organizations, we leverage our Nordic and international networks to scale impactful solutions globally.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-5 justify-center sm:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 1.2
            }}
          >
            <Link
              to="/scale"
              className="btn-outline rounded-full inline-flex items-center hero-btn text-base sm:text-lg px-6 py-3 sm:px-10 sm:py-4 border-2 hover:border-white hover:bg-white/10 transition-all duration-300 relative group overflow-hidden"
            >
              <span className="relative z-10">Explore Scaling Solutions</span>
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </Link>
            <Link
              to="/apply-founder"
              className="inline-flex items-center px-6 py-3 sm:px-10 sm:py-4 bg-[#FF3D22] text-white hover:bg-white hover:text-[#FF3D22] hover:border-[#FF3D22] border-2 border-[#FF3D22] transition-all duration-300 rounded-full hero-btn text-base sm:text-lg font-medium relative group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Apply as Founder
                <motion.span
                  initial={{ x: -5, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                >
                  <ArrowRight className="ml-2 hidden sm:inline" size={20} />
                  <ArrowRight className="ml-2 sm:hidden" size={18} />
                </motion.span>
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Scale to Nordics Section */}
      <motion.section
        ref={scaleRef}
        className="py-36 bg-black border-b border-gray-800 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Scale.png"
            alt="Scale to Nordics background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="bg-[#0D0D0D]/90 p-12 rounded-[32px] border border-gray-800 max-w-3xl mx-auto text-center backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            ref={featuredCardRef}
          >
            <h2 className="text-5xl font-bold mb-8 scale-title">
              <span className="text-[#FF3D22]">Scale</span> to Nordics & beyond
            </h2>
            <p className="text-2xl text-gray-200 mb-6 scale-description">
              Expanding to Sweden or Scaling Internationally beyond the Nordics?
            </p>
            <p className="text-lg text-gray-300 mb-10 scale-description">
              We offer specialized solutions and operational support to help international
              companies thrive in Sweden and Nordic scaleups confidently enter and
              succeed in global markets.
            </p>
            <Link
              to="/scale"
              className="inline-flex items-center px-8 py-4 bg-[#FF3D22] text-white hover:bg-[#ff2a09] transition-all duration-300 rounded-full text-lg scale-item"
            >
              Explore Our Scale Solutions
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Choose Your Path to Growth Section */}
      <motion.section
        className="py-24 bg-black border-b border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12" {...fadeIn} ref={pathToGrowthRef}>
            <h2 className="text-4xl font-bold mb-6">Choose Your Path to Growth</h2>
            <p className="text-xl text-gray-400 mb-4 max-w-3xl mx-auto">Select the journey that matches your ambitions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder Card - Now fully clickable */}
            <Link to="/apply-founder" className="block">
              <motion.div
                className="bg-[#0D0D0D] rounded-lg border border-gray-800 p-8 transition-all duration-300 h-full hover:border-[#FF3D22] impact-card"
                whileHover={{ y: -5 }}
                {...fadeIn}
                transition={{ delay: 0.1 }}
              >
                <div className="mb-4 font-mono text-xs text-[#FF3D22]">SCALE YOUR BUSINESS</div>
                <h3 className="text-2xl font-bold mb-4">For Founders</h3>
                <p className="text-gray-400 text-lg mb-6">Are you a founder or entrepreneur looking to scale your business? Let us help you navigate the Nordic or East African markets with tailored solutions and operational support.</p>
                <div className="flex justify-end">
                  <div className="inline-flex items-center text-[#FF3D22] text-sm sm:text-base">
                    Apply as Founder
                    <ArrowRight className="ml-2 hidden sm:inline" size={18} />
                    <ArrowRight className="ml-2 sm:hidden" size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Partner Card - Now fully clickable */}
            <Link to="/apply-partner" className="block">
              <motion.div
                className="bg-[#0D0D0D] rounded-lg border border-gray-800 p-8 transition-all duration-300 h-full hover:border-[#FF3D22] impact-card"
                whileHover={{ y: -5 }}
                {...fadeIn}
                transition={{ delay: 0.2 }}
              >
                <div className="mb-4 font-mono text-xs text-[#FF3D22]">PARTNER WITH US</div>
                <h3 className="text-2xl font-bold mb-4">For Partners</h3>
                <p className="text-gray-400 text-lg mb-6">Are you a venture builder, investor, or partner looking to collaborate with innovative scaleups? Join us in creating long-term value and driving market expansion.</p>
                <div className="flex justify-end">
                  <div className="inline-flex items-center text-[#FF3D22] text-sm sm:text-base">
                    Apply as Partner
                    <ArrowRight className="ml-2 hidden sm:inline" size={18} />
                    <ArrowRight className="ml-2 sm:hidden" size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Accelerate Market Entry Section */}
      <motion.section
        className="py-24 bg-black border-b border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              className="order-2 md:order-1"
              {...fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Accelerate Market Entry with Us.</h2>
              <p className="text-gray-200 mb-4">For business support organizations seeking to help companies enter new markets</p>
              <p className="text-gray-400 mb-8">Our hands-on approach speeds time-to-market and de-risks expansion with local expertise and operational support. Partner with us to deliver impactful innovation programs.</p>
              <a href="/apply-founder" className="inline-flex items-center px-8 py-3 bg-[#FF3D22] text-white hover:bg-white hover:text-[#FF3D22] hover:border-[#FF3D22] border-2 border-[#FF3D22] transition-all duration-300 rounded-full">
                Apply as Organization
                <ArrowRight className="ml-2" size={18} />
              </a>
            </motion.div>
            <motion.div
              className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              <img
                src="/images/Accelerate.png"
                alt="Accelerate Market Entry"
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How We Help You Scale Section */}
      <motion.section
        ref={helpScaleRef}
        className="py-24 bg-black border-b border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold mb-6 impact-title">How We Help You Scale</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Comprehensive support at every stage of your growth journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-[#0D0D0D] p-8 rounded-lg border border-gray-800 hover:border-[#FF3D22] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-12 w-12 bg-[#191919] rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#FF3D22]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Strategy</h3>
              <p className="text-gray-400 mb-2">We map your path to market.</p>
              <p className="text-sm text-gray-500">Tailored entry strategies backed by Nordic insight and global perspective legal, cultural, and Product readiness included.</p>
              <p className="text-xs text-[#FF3D22] mt-4">Local insight. Global perspective.</p>
            </motion.div>

            <motion.div
              className="bg-[#0D0D0D] p-8 rounded-lg border border-gray-800 hover:border-[#FF3D22] transition-all duration-300 scale-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-12 w-12 bg-[#191919] rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#FF3D22]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Launch</h3>
              <p className="text-gray-400 mb-2">We set up your local base.</p>
              <p className="text-sm text-gray-500">From compliance and hiring to partnerships and GTM we get your operations up and running fast.</p>
              <p className="text-xs text-[#FF3D22] mt-4">Build local roots with speed and precision.</p>
            </motion.div>

            <motion.div
              className="bg-[#0D0D0D] p-8 rounded-lg border border-gray-800 hover:border-[#FF3D22] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-12 w-12 bg-[#191919] rounded-full flex items-center justify-center mb-6">
                <Network className="w-6 h-6 text-[#FF3D22]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Scale</h3>
              <p className="text-gray-400 mb-2">We drive real growth.</p>
              <p className="text-sm text-gray-500">Refine acquisition, unlock sales channels, and scale sustainably with our hands-on execution and data-led adjustments.</p>
              <p className="text-xs text-[#FF3D22] mt-4">From first traction to sustained growth.</p>
            </motion.div>

            <motion.div
              className="bg-[#0D0D0D] p-8 rounded-lg border border-gray-800 hover:border-[#FF3D22] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-12 w-12 bg-[#191919] rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-[#FF3D22]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <p className="text-gray-400 mb-2">We stay with you.</p>
              <p className="text-sm text-gray-500">Tap into our network, mentors, and advisors for ongoing momentum as new challenges and opportunities emerge.</p>
              <p className="text-xs text-[#FF3D22] mt-4">Long-term success requires ongoing guidance.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Link
              to="/apply-partner"
              className="inline-flex items-center px-6 py-2.5 sm:px-8 sm:py-3 bg-[#FF3D22] text-white hover:bg-white hover:text-[#FF3D22] hover:border-[#FF3D22] border-2 border-[#FF3D22] transition-all duration-300 rounded-full text-sm sm:text-base max-w-[90%] mx-auto justify-center"
            >
              Ready to scale? → Let's Talk
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Impact Stories Section */}
      <motion.section
        ref={impactRef}
        className="py-28 bg-black border-b border-gray-800 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Background Image or Pattern (optional) */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.2"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-5xl font-extrabold text-white mb-6 impact-title relative inline-block">
              Impact Stories
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF3D22]"></span>
            </h2>
            <p className="text-xl text-gray-400 max-w-lg mx-auto mt-8">Meet the ventures and organizations we've scaled to global impact.</p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {/* Story Card Component */}
            {[
              {
                category: "FinTech",
                title: "Growth",
                description: "Secured strategic partnerships for Paytota, unlocking growth opportunities in the Nordics.",
                linkText: "",
                backgroundImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                delay: 0.1
              },
              {
                category: "ClimateTech",
                title: "Scale",
                description: "Provided tech talent to Nobon, accelerating the development of its multitenant whitelabel SaaS for private markets.",
                linkText: "",
                backgroundImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                delay: 0.2
              },
              {
                category: "Frontier Tech",
                title: "Connect",
                description: "Helping leading IT companies to scale to new markets.",
                linkText: "Explore IT Companies' Impact",
                backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                delay: 0.3
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="bg-[#0D0D0D] rounded-lg overflow-hidden border border-gray-800 hover:border-[#FF3D22] transition-all duration-300 relative group aspect-[4/5] h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: story.delay }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                     style={{ backgroundImage: `url('${story.backgroundImage}')` }}>
                  <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 group-hover:bg-opacity-75"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white group-hover:text-[#FF3D22] transition-colors duration-300">{story.category}</h3>
                </div>

                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-90">
                  <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:p-6 md:p-8">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF3D22] mb-2 sm:mb-4">{story.title}</h3>
                    <p className="text-base sm:text-lg text-white w-full">{story.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/portfolio" className="inline-flex items-center px-6 py-2.5 sm:px-8 sm:py-3 bg-[#FF3D22] text-white hover:bg-white hover:text-[#FF3D22] hover:border-[#FF3D22] border-2 border-[#FF3D22] transition-all duration-300 rounded-full text-sm sm:text-base">
              View All Impact Stories
              <ArrowRight className="ml-2 hidden sm:inline" size={18} />
              <ArrowRight className="ml-2 sm:hidden" size={16} />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Insights Section */}
      <motion.section
        className="py-24 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            {...fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">Learn from Our Expertise</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Discover actionable insights on scaling businesses</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                readTime: "5 min read",
                title: "5 Steps to De-Risk Market Entry in the Nordics",
                description: "Learn the essential strategies for successful market expansion",
                link: "/insights/nordic-scaling-guide"
              },
              {
                readTime: "7 min read",
                title: "Why Co-Ownership Models Drive Long-Term Success",
                description: "Discover how aligned incentives lead to sustainable growth",
                link: "/insights/co-ownership-success"
              }
            ].map((item, index) => (
              <Link to={item.link} key={index} className="block group">
                <motion.div
                  className="bg-black p-6 border border-gray-800 rounded-xl group-hover:border-[#FF3D22] transition-colors duration-300 h-full shadow-lg relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="text-[#FF3D22] text-sm font-medium mb-3">{item.readTime}</div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#FF3D22] transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="text-[#FF3D22] font-medium text-sm sm:text-base flex items-center">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FF3D22] group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/insights" className="inline-flex items-center px-6 py-2.5 sm:px-8 sm:py-3 bg-[#FF3D22] text-white hover:bg-white hover:text-[#FF3D22] hover:border-[#FF3D22] border-2 border-[#FF3D22] transition-all duration-300 rounded-full text-sm sm:text-base">
              Explore Insights
              <ArrowRight className="ml-2 hidden sm:inline" size={18} />
              <ArrowRight className="ml-2 sm:hidden" size={16} />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;