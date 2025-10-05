
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export const textReveal = (element: string | Element, delay: number = 0) => {
  const text = new SplitType(element, { types: 'lines, words' });
  return gsap.from(text.words, {
    duration: 1.5,
    y: 100,
    opacity: 0,
    stagger: 0.02,
    ease: 'power4.out',
    delay,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
};

export const titleSlide = (element: string | Element, direction: 'left' | 'right' = 'left') => {
  return gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'play none none reverse'
    },
    x: direction === 'left' ? -100 : 100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
  });
};

export const staggerCards = (elements: string | Element | Element[], amount: number = 0.3) => {
  return gsap.from(elements, {
    scrollTrigger: {
      trigger: elements,
      start: 'top bottom',
      end: 'bottom top'
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: {
      amount,
      from: 'center'
    },
    ease: 'power4.out'
  });
};

export const createTiltEffect = (element: string | Element, intensity: number = 30) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  
  let rect: DOMRect;
  let width: number;
  let height: number;
  
  const updateRect = () => {
    rect = (el as Element).getBoundingClientRect();
    width = rect.width;
    height = rect.height;
  };
  
  updateRect();
  window.addEventListener('resize', updateRect);
  
  const handleMouseMove = (e: Event) => {
    const mouseEvent = e as MouseEvent;
    const x = mouseEvent.clientX - rect.left;
    const y = mouseEvent.clientY - rect.top;
    
    const xPercent = x / width - 0.5;
    const yPercent = y / height - 0.5;
    
    const rotateX = yPercent * intensity * -1;
    const rotateY = xPercent * intensity;
    
    gsap.to(el, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.5,
      ease: 'power2.out'
    });
  };
  
  const handleMouseLeave = () => {
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  };
  
  el.addEventListener('mousemove', handleMouseMove as EventListener);
  el.addEventListener('mouseleave', handleMouseLeave as EventListener);
  
  // Return cleanup function
  return () => {
    el.removeEventListener('mousemove', handleMouseMove as EventListener);
    el.removeEventListener('mouseleave', handleMouseLeave as EventListener);
    window.removeEventListener('resize', updateRect);
  };
};

export const parallaxScroll = (element: string | Element, speed: number = 0.1) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  
  // Initial position
  let startY = 0;
  
  const updateStartPosition = () => {
    const rect = (el as Element).getBoundingClientRect();
    startY = window.scrollY + rect.top;
  };
  
  // Update the initial position
  updateStartPosition();
  window.addEventListener('resize', updateStartPosition);
  
  // Create the scrollTrigger
  const trigger = ScrollTrigger.create({
    trigger: el as Element,
    start: 'top bottom',
    end: 'bottom top',
    onUpdate: () => {
      const scrollY = window.scrollY;
      const elementTop = startY;
      const distance = scrollY - elementTop;
      const parallaxOffset = distance * speed;
      
      gsap.set(el, {
        y: parallaxOffset,
        force3D: true
      });
    }
  });
  
  // Return cleanup function
  return () => {
    trigger.kill();
    window.removeEventListener('resize', updateStartPosition);
  };
};

export const revealSection = (element: string | Element, delay: number = 0, distance: number = 50) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  
  // Set initial state - hidden and translated down
  gsap.set(el, {
    y: distance,
    opacity: 0
  });
  
  // Create the scrollTrigger for reveal animation
  const trigger = ScrollTrigger.create({
    trigger: el as Element,
    start: 'top 85%', // Start animation when the top of the element hits 85% from the top of the viewport
    once: true, // Only play the animation once
    onEnter: () => {
      // Animate the element when it enters the viewport
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay,
        ease: 'power3.out'
      });
    }
  });
  
  // Return cleanup function
  return () => {
    trigger.kill();
  };
};
