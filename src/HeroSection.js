import React, { useEffect, useRef, useState } from 'react';

// Hero Section Component with GSAP Animations
const HeroSection = () => {
  const heroRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer - Set target date (adjust as needed)
  useEffect(() => {
    // Target date: January 15, 2026 at 00:00:00 UTC
    const targetDate = new Date('2026-01-15T00:00:00Z').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Animations
  useEffect(() => {
    // Make sure GSAP is loaded
    if (typeof window === 'undefined' || !window.gsap) {
      console.warn('GSAP not loaded');
      return;
    }

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    
    gsap.registerPlugin(ScrollTrigger);

    // Main timeline for intro sequence (~2 seconds total)
    const mainTl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });

    // Set initial states
    // 1) Screen is dark
    gsap.set('#stageOverlay', { opacity: 1 });
    // Token starts below screen and rises up
    gsap.set('#cq-coin', { y: '100vh', opacity: 1, zIndex: 60 });
    // Overview section starts hidden
    gsap.set('#overview', { opacity: 0, y: 40 });
    // Logo starts above screen
    gsap.set('#cq-logo', { y: -150, opacity: 0 });
    // Mining elements start below
    gsap.set('#minables', { y: 150, opacity: 0 });
    // Sky forefront starts above
    gsap.set('#sky-forefront', { y: -100, opacity: 0 });
    // Roadster starts below and moves up into place
    gsap.set('#roadster', { y: 150, opacity: 0 });
    gsap.set('#exhaust-flames', { opacity: 0, scale: 1 });
    // Clouds start from their respective sides
    gsap.set('.cloud-layer.cloud-1', { x: -200, opacity: 0 }); // left
    gsap.set('.cloud-layer.cloud-2', { x: 200, opacity: 0 });  // right
    gsap.set('.cloud-layer.cloud-3', { x: -150, opacity: 0 }); // left
    gsap.set('.cloud-layer.cloud-4', { x: 150, opacity: 0 });  // right
    // Text hidden
    gsap.set('#pre-mine-label', { y: 30, opacity: 0 });
    gsap.set('#countdown', { y: 20, opacity: 0 });

    // Animation sequence - Token rises quickly, Phase 2 starts at 0.5s (0.5s overlap)
    mainTl
      // PHASE 1: Token tossed up with gravity effect (smooth, no dramatic pause)
      // Fast rise, smooth transition, then falls into place
      .to('#cq-coin', {
        y: -40,  // Overshoot above final position
        duration: 0.6,
        ease: 'power2.out'  // Less dramatic slowdown at apex
      }, 0)
      .to('#cq-coin', {
        y: 0,  // Fall into final position
        duration: 0.4,
        ease: 'power2.in'  // Accelerate down like gravity
      }, 0.5)  // Start fall earlier for smoother transition
      
      // PHASE 2: Starts before token lands (at 0.5s) for overlap
      
      // Black screen fades out
      .to('#stageOverlay', {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, 0.5)
      
      // Mining elements rise up from below
      .to('#minables', {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out'
      }, 0.5)
      
      // Sky forefront drops in from above
      .to('#sky-forefront', {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out'
      }, 0.5)
      
      // Roadster moves up into place
      .to('#roadster', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.2)'
      }, 0.6)
      
      // Exhaust flames appear with roadster
      .to('#exhaust-flames', {
        opacity: 1,
        duration: 0.4
      }, 0.8)
      
      // Clouds move in from their sides
      .to('.cloud-layer.cloud-1', {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, 0.7)
      .to('.cloud-layer.cloud-2', {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, 0.8)
      .to('.cloud-layer.cloud-3', {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, 0.9)
      .to('.cloud-layer.cloud-4', {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, 1.0)
      
      // Logo drops in from top (same time as clouds)
      .to('#cq-logo', {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'back.out(1.3)'
      }, 0.7)
      
      // Pre-mine text appears
      .to('#pre-mine-label', {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      }, 1.3)
      
      // Countdown appears
      .to('#countdown', {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      }, 1.5)
      
      // Overview section fades in after hero animation
      .to('#overview', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      }, 1.8);

    // Idle animations (after main sequence)
    mainTl.call(() => {
      // Logo and coin group subtle float
      gsap.to('#hero-centerpiece', {
        y: -10,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });

      // Car idle bounce
      gsap.to('#roadster', {
        y: -3,
        duration: 0.8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });

      // Exhaust flame flicker
      gsap.to('#exhaust-flames', {
        scaleX: 1.2,
        scaleY: 0.8,
        opacity: 0.7,
        duration: 0.15,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });

      // Sky forefront vertical ambient animation
      gsap.to('#sky-forefront', {
        y: -15,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });

      // Cloud animations - ambient left-right movement
      document.querySelectorAll('.cloud-layer').forEach((cloud, i) => {
        const direction = i % 2 === 0 ? 1 : -1;
        const distance = 30 + (i * 15); // Increased distance for more movement
        const duration = 20 + (i * 8); // Slower, more ambient movement
        
        gsap.to(cloud, {
          x: distance * direction,
          duration: duration,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1
        });
      });
    });

    // Constrain roadster top to not exceed bottom of top content
    // At 714px+ width: shrink top content when roadster would touch it
    const constrainRoadsterPosition = () => {
      const heroCenterpiece = document.getElementById('hero-centerpiece');
      const roadster = document.getElementById('roadster');
      const hero = document.getElementById('cq-hero');
      const logo = document.getElementById('cq-logo');
      const coin = document.getElementById('cq-coin');
      const preMineLabel = document.getElementById('pre-mine-label');
      const countdown = document.getElementById('countdown');
      
      if (heroCenterpiece && roadster && hero && logo && coin && preMineLabel && countdown) {
        const viewportWidth = window.innerWidth;
        const is714Plus = viewportWidth >= 714;
        
        const centerpieceRect = heroCenterpiece.getBoundingClientRect();
        const heroRect = hero.getBoundingClientRect();
        const roadsterRect = roadster.getBoundingClientRect();
        
        // Calculate bottom of hero-centerpiece relative to hero
        const centerpieceBottom = centerpieceRect.bottom - heroRect.top;
        const roadsterTop = roadsterRect.top - heroRect.top;
        const roadsterHeight = roadsterRect.height;
        const gap = 20; // Minimum gap between content and roadster
        
        // At 714px+ width: shrink top content when roadster would touch
        if (is714Plus && roadsterTop < centerpieceBottom + gap) {
          const overlap = centerpieceBottom + gap - roadsterTop;
          const maxOverlap = centerpieceRect.height * 0.5; // Max 50% shrink
          const shrinkRatio = Math.min(overlap / maxOverlap, 1);
          
          // Base sizes (same as 768px breakpoint)
          const baseLogoWidth = 268.8;
          const baseCoinWidth = 145.92;
          const basePreMineSize = 2.4;
          const baseCountdownSize = 1.92;
          
          // Shrink proportionally
          const logoScale = 1 - (shrinkRatio * 0.5);
          const coinScale = 1 - (shrinkRatio * 0.5);
          const textScale = 1 - (shrinkRatio * 0.5);
          
          logo.style.width = `${baseLogoWidth * logoScale}px`;
          coin.style.width = `${baseCoinWidth * coinScale}px`;
          preMineLabel.querySelector('h2').style.fontSize = `${basePreMineSize * textScale}rem`;
          countdown.querySelector('div:first-child').style.fontSize = `${baseCountdownSize * textScale}rem`;
        } else if (is714Plus) {
          // Reset to base sizes when there's no overlap
          logo.style.width = '268.8px';
          coin.style.width = '145.92px';
          preMineLabel.querySelector('h2').style.fontSize = '2.4rem';
          countdown.querySelector('div:first-child').style.fontSize = '1.92rem';
        } else {
          // Below 714px: adjust roadster bottom position
          if (roadsterTop < centerpieceBottom) {
            const heroHeight = heroRect.height;
            const minBottom = heroHeight - centerpieceBottom - roadsterHeight;
            const currentBottom = parseFloat(getComputedStyle(roadster).bottom) || -30;
            const newBottom = Math.max(minBottom, currentBottom);
            roadster.style.bottom = `${newBottom}px`;
          }
        }
      }
    };

    // Run after animations complete and on resize
    mainTl.call(constrainRoadsterPosition);
    
    // Use ResizeObserver for smooth updates
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(constrainRoadsterPosition);
    });
    
    if (heroRef.current) {
      resizeObserver.observe(heroRef.current);
    }
    
    const handleResize = () => {
      requestAnimationFrame(constrainRoadsterPosition);
    };
    
    window.addEventListener('resize', handleResize);
    setTimeout(constrainRoadsterPosition, 3000); // Also check after animations
    
    // Store for cleanup
    const cleanupResize = () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };

    // ScrollTrigger for parallax
    ScrollTrigger.create({
      trigger: '#cq-hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Parallax layers at different speeds
        gsap.to('.cloud-layer.cloud-1', { y: progress * 100, overwrite: 'auto' });
        gsap.to('.cloud-layer.cloud-2', { y: progress * 80, overwrite: 'auto' });
        gsap.to('.cloud-layer.cloud-3', { y: progress * 60, overwrite: 'auto' });
        gsap.to('.cloud-layer.cloud-4', { y: progress * 40, overwrite: 'auto' });
        // #minables stays fixed - clear any transforms to prevent movement
        gsap.set('#minables', { clearProps: 'y' });
        gsap.to('#roadster', { y: progress * 10, overwrite: 'auto' });
        gsap.to('#hero-centerpiece', { y: progress * -50, overwrite: 'auto' });
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf('*');
      cleanupResize();
    };
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section 
      id="cq-hero" 
      ref={heroRef}
      className="relative w-full overflow-visible"
      style={{ 
        perspective: '1000px',
        height: 'clamp(500px, 85vh, 900px)'
      }}
    >
      {/* Stage Overlay - Fade from black */}
      <div 
        id="stageOverlay" 
        className="absolute inset-0 z-50 pointer-events-none"
        style={{ willChange: 'opacity', backgroundColor: '#080816' }}
      />

      {/* Vignette Overlay */}
      <div 
        className="absolute inset-0 z-40 pointer-events-none"
        style={{ 
          background: `
            radial-gradient(ellipse 800px 400px at top left, rgba(0, 0, 0, 0.2) 0%, transparent 60%),
            radial-gradient(ellipse 800px 400px at top right, rgba(0, 0, 0, 0.2) 0%, transparent 60%)
          `,
          willChange: 'opacity'
        }}
      />

      {/* Sky Background */}
      <div 
        id="sky" 
        className="absolute inset-0"
        style={{ backgroundColor: '#74FDE7' }}
      />

      {/* Clouds Layer */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 7 }}>
        <img 
          src="/assets_cqTGE/cloud1.png" 
          alt="" 
          className="cloud-layer cloud-1 absolute"
          style={{ 
            top: '5%', 
            left: '5%', 
            width: 'clamp(80px, 15vw, 150px)',
            willChange: 'transform, opacity'
          }}
        />
        <img 
          src="/assets_cqTGE/cloud2.png" 
          alt="" 
          className="cloud-layer cloud-2 absolute"
          style={{ 
            top: '8%', 
            right: '10%', 
            width: 'clamp(60px, 12vw, 120px)',
            willChange: 'transform, opacity'
          }}
        />
        <img 
          src="/assets_cqTGE/cloud1.png" 
          alt="" 
          className="cloud-layer cloud-3 absolute"
          style={{ 
            top: '15%', 
            left: '25%', 
            width: 'clamp(50px, 10vw, 100px)',
            willChange: 'transform, opacity'
          }}
        />
        <img 
          src="/assets_cqTGE/cloud2.png" 
          alt="" 
          className="cloud-layer cloud-4 absolute"
          style={{ 
            top: '12%', 
            right: '30%', 
            width: 'clamp(40px, 8vw, 80px)',
            willChange: 'transform, opacity'
          }}
        />
      </div>

      {/* Sky Forefront - Behind clouds, behind minables and hero content */}
      <div 
        id="sky-forefront"
        className="absolute left-0 right-0 overflow-visible"
        style={{ 
          bottom: '30px',
          height: 'clamp(250px, 50vh, 500px)',
          width: '100%',
          willChange: 'transform, opacity',
          zIndex: 5
        }}
      >
        <img 
          src="/assets_cqTGE/sky_forefront.svg" 
          alt="" 
          className="w-full h-full object-cover object-bottom"
          style={{ minWidth: '100%', width: '100%' }}
        />
      </div>

      {/* Mining Items / Foreground Elements - Behind car, now includes gradient, taller */}
      <div 
        id="minables"
        className="absolute left-0 right-0"
        style={{ 
          bottom: '-1px',
          height: 'clamp(180px, 40vh, 350px)',
          width: '100%',
          willChange: 'transform, opacity',
          zIndex: 10
        }}
      >
        {/* Desktop image */}
        <img 
          src="/assets_cqTGE/mining_items_gradient.png" 
          alt="" 
          className="hidden md:block w-full h-full object-cover object-bottom"
          style={{ overflow: 'visible' }}
        />
        {/* Mobile image */}
        <img 
          src="/assets_cqTGE/mining_items_gradient_mobile.png" 
          alt="" 
          className="block md:hidden w-full h-full object-cover object-bottom"
          style={{ overflow: 'visible' }}
        />
      </div>

      {/* Foreground - Roadster - Centered horizontally, Bottom pinned to ground */}
      <div 
        id="roadster"
        className="absolute left-1/2"
        style={{ 
          bottom: '-30px',
          transform: 'translateX(-50%)',
          width: 'clamp(200px, 45vw, 450px)',
          willChange: 'transform, opacity',
          transformOrigin: 'center bottom',
          zIndex: 20
        }}
      >
        {/* Exhaust Flames */}
        <div 
          id="exhaust-flames"
          className="absolute"
          style={{
            bottom: '20%',
            left: '-15%',
            width: '20%',
            height: '15%',
            background: 'linear-gradient(90deg, #FF6B35, #FFD700, transparent)',
            borderRadius: '50% 0 0 50%',
            filter: 'blur(2px)',
            willChange: 'transform, opacity'
          }}
        />
        <img 
          src="/assets_cqTGE/roadster.png" 
          alt="Critters Quest Roadster" 
          className="w-full h-auto"
        />
      </div>

      {/* Hero Centerpiece - Logo, Coin, Text - Aligned to top */}
      <div 
        id="hero-centerpiece"
        className="absolute left-0 right-0 top-0 flex flex-col items-center pointer-events-none"
        style={{ 
          paddingTop: 'clamp(15px, 2vh, 40px)',
          willChange: 'transform',
          zIndex: 55
        }}
      >
        {/* Logo */}
        <div 
          id="cq-logo"
          className="relative"
          style={{ 
            width: 'clamp(180px, 35vw, 330px)',
            marginBottom: '0',
            willChange: 'transform, opacity'
          }}
        >
          <img 
            src="/assets_cqTGE/critters_quest_logo.png" 
            alt="Critters Quest" 
            className="w-full h-auto"
          />
        </div>

        {/* Coin - proportional to logo (about 55% of logo width) */}
        <div 
          id="cq-coin"
          className="relative"
          style={{ 
            width: 'clamp(100px, 19vw, 180px)',
            marginTop: '0',
            marginBottom: '0',
            willChange: 'transform, opacity'
          }}
        >
          <img 
            src="/assets_cqTGE/Coin.svg" 
            alt="QUEST Token" 
            className="w-full h-auto"
          />
        </div>

        {/* Pre-Mine Label - capped font size */}
        <div 
          id="pre-mine-label"
          className="mt-0"
          style={{ willChange: 'transform, opacity', marginTop: '0', marginBottom: '0' }}
        >
          <h2 
            className="text-black font-bold tracking-wide"
            style={{ 
              fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
              fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
              color: '#000000',
              letterSpacing: '0.02em',
              margin: '0',
              padding: '0'
            }}
          >
            PRE-MINE
          </h2>
        </div>

        {/* Countdown Timer - capped font size */}
        <div 
          id="countdown"
          className="mt-0"
          style={{ willChange: 'transform, opacity', marginTop: '0', marginBottom: '0' }}
        >
          <div 
            className="flex items-center justify-center"
            style={{ 
              fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
              fontSize: 'clamp(1.4rem, 4vw, 2.6rem)',
              color: '#000000',
              fontWeight: 'bold'
            }}
          >
            {timeLeft.days > 0 && (
              <>
                <span className="countdown-segment">{formatNumber(timeLeft.days)}</span>
                <span className="countdown-separator">:</span>
              </>
            )}
            <span className="countdown-segment">{formatNumber(timeLeft.hours)}</span>
            <span className="countdown-separator">:</span>
            <span className="countdown-segment">{formatNumber(timeLeft.minutes)}</span>
            <span className="countdown-separator">:</span>
            <span className="countdown-segment">{formatNumber(timeLeft.seconds)}</span>
          </div>
          {timeLeft.days > 0 && (
            <div className="text-center text-xs md:text-sm text-gray-800 font-medium" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive", marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 }}>
              Lorem Ipsum
            </div>
          )}
        </div>
      </div>

      {/* CSS for hero-specific styles */}
      <style>{`
        #cq-hero {
          font-family: 'Comic Sans MS', 'Comic Sans', cursive;
        }
        
        #cq-hero img {
          -webkit-user-drag: none;
          user-select: none;
        }
        
        .countdown-segment {
          display: inline-block;
          min-width: 1.5em;
          text-align: center;
        }
        
        .countdown-separator {
          opacity: 0.7;
        }
        
        
        /* Car always centered */
        #roadster {
          left: 50% !important;
          transform: translateX(-50%);
        }
        
        /* Responsive adjustments for tall/narrow screens */
        @media (max-aspect-ratio: 3/4) {
          #cq-hero {
            height: clamp(450px, 70vh, 700px) !important;
          }
          
          #roadster {
            bottom: 0 !important;
            width: clamp(180px, 55vw, 320px) !important;
          }
        }
        
        /* Mobile portrait */
        @media (max-width: 480px) {
          #cq-hero {
            height: clamp(400px, 65vh, 600px) !important;
          }
          
          #hero-centerpiece {
            padding-top: 10px !important;
            gap: 0 !important;
          }
          
          #cq-logo {
            width: 140px !important;
            margin-bottom: 0 !important;
            margin-top: 0 !important;
          }
          
          #cq-coin {
            width: 70px !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          #pre-mine-label {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          #pre-mine-label h2 {
            font-size: 1.1rem !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          #countdown {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          #countdown > div:first-child {
            font-size: 0.9rem !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          #roadster {
            width: 280px !important;
            bottom: 0 !important;
          }
        }
        
        /* Lock roadster size at 481px+ width (until mobile) */
        @media (min-width: 481px) {
          #roadster {
            width: 450px !important;
          }
        }
        
        /* 481-713px width - reduce logo, token, and car by 20% */
        @media (min-width: 481px) and (max-width: 713px) {
          #hero-centerpiece {
            padding-top: clamp(45px, calc(2vh + 30px), 70px) !important; /* +30px padding */
          }
          
          #cq-logo {
            width: clamp(144px, 28vw, 264px) !important; /* 20% reduction */
          }
          
          #cq-coin {
            width: clamp(92px, 17.48vw, 165.6px) !important; /* 15% increase from reduced size */
          }
          
          #roadster {
            width: 480px !important; /* reduced by 1/3 from 720px */
          }
        }
        
        /* At 714px width - lock top content to same size as larger widths */
        @media (min-width: 714px) {
          #hero-centerpiece {
            padding-top: clamp(15px, 2vh, 40px) !important; /* Same padding as base */
          }
          
          #cq-logo {
            width: 268.8px !important; /* Same as 768px */
          }
          
          #cq-coin {
            width: 145.92px !important; /* Same as 768px */
          }
          
          #pre-mine-label h2 {
            font-size: 2.4rem !important; /* Same as 768px */
          }
          
          #countdown > div:first-child {
            font-size: 1.92rem !important; /* Same as 768px */
          }
        }
        
        /* 800-850px width - move top content down 30px */
        @media (min-width: 800px) and (max-width: 850px) {
          #hero-centerpiece {
            padding-top: clamp(45px, calc(2vh + 30px), 70px) !important; /* +30px from base */
          }
        }
        
        /* Lock sizes at 768px breakpoint - elements don't grow beyond this */
        @media (min-width: 768px) {
          #cq-logo {
            width: 268.8px !important; /* 35vw at 768px */
          }
          
          #cq-coin {
            width: 145.92px !important; /* 19vw at 768px */
          }
          
          #pre-mine-label h2 {
            font-size: 2.4rem !important; /* 5vw at 768px ≈ 38.4px */
          }
          
          #countdown > div:first-child {
            font-size: 1.92rem !important; /* 4vw at 768px ≈ 30.72px */
          }
        }
        
        /* iPad Mini / Tablet (768-850px width) */
        @media (min-width: 768px) and (max-width: 850px) {
          #cq-logo {
            width: 270px !important; /* 2x of 135px */
          }
          
          #minables {
            bottom: -200px !important;
          }
        }
        
        /* iPad Air / Tablet (820-900px width) */
        @media (min-width: 820px) and (max-width: 900px) {
          #hero-centerpiece {
            gap: 0 !important;
          }
          
          #cq-logo {
            margin-bottom: 0 !important;
          }
          
          #pre-mine-label {
            margin-top: 0 !important;
          }
          
          #countdown {
            margin-top: 0 !important;
          }
          
          #minables {
            bottom: -180px !important; /* moved up 20px from -200px */
          }
        }
        
        /* Surface Pro 7 / Medium Tablet (901-1023px width) */
        @media (min-width: 901px) and (max-width: 1023px) {
          #hero-centerpiece {
            gap: 0 !important;
          }
          
          #cq-logo {
            margin-bottom: 2px !important;
          }
          
          #pre-mine-label {
            margin-top: 2px !important;
          }
          
          #countdown {
            margin-top: 1px !important;
          }
          
          #minables {
            bottom: -100px !important; /* moved down further */
          }
        }
        
        /* iPad Pro / Large Tablet (1024px+ width) */
        @media (min-width: 1024px) {
          #hero-centerpiece {
            gap: 0 !important;
          }
          
          #cq-logo {
            margin-bottom: 2px !important;
          }
          
          #pre-mine-label {
            margin-top: 2px !important;
          }
          
          #countdown {
            margin-top: 1px !important;
          }
          
          #minables {
            bottom: -100px !important; /* moved down further */
          }
        }
        
        /* Short height screens - scale down logo, token, and text */
        @media (max-height: 900px) {
          #cq-logo {
            width: clamp(180px, 22vw, 220px) !important;
          }
          
          #cq-coin {
            width: clamp(100px, 12vw, 120px) !important;
          }
          
          #pre-mine-label h2 {
            font-size: clamp(1.8rem, 3.5vw, 2rem) !important;
          }
          
          #countdown > div:first-child {
            font-size: clamp(1.4rem, 2.8vw, 1.6rem) !important;
          }
          
          #hero-centerpiece {
            padding-top: clamp(10px, 1.5vh, 20px) !important;
          }
          
          #roadster {
            width: clamp(300px, 45vw, 450px) !important;
          }
        }
        
        /* Very short height - minimum sizes similar to mobile */
        @media (max-height: 718px) {
          #cq-logo {
            width: 180px !important;
          }
          
          #cq-coin {
            width: 100px !important;
          }
          
          #pre-mine-label h2 {
            font-size: 1.8rem !important;
          }
          
          #countdown > div:first-child {
            font-size: 1.4rem !important;
          }
          
          #hero-centerpiece {
            padding-top: 10px !important;
          }
          
          #roadster {
            width: clamp(280px, 45vw, 380px) !important;
          }
          
          #minables {
            bottom: -30px !important;
          }
        }
        
        /* Large to X-Large screens - height-based scaling (excludes 4K) */
        /* Height 900-1000px on large screens */
        @media (min-width: 1024px) and (max-width: 3839px) and (max-height: 1000px) and (min-height: 901px) {
          #cq-logo {
            width: clamp(220px, 30vw, 250px) !important;
          }
          
          #cq-coin {
            width: clamp(120px, 16vw, 135px) !important;
          }
          
          #pre-mine-label h2 {
            font-size: clamp(2rem, 4.5vw, 2.2rem) !important;
          }
          
          #countdown > div:first-child {
            font-size: clamp(1.6rem, 3.5vw, 1.8rem) !important;
          }
        }
        
        /* Height 800-900px on large screens */
        @media (min-width: 1024px) and (max-width: 3839px) and (max-height: 900px) and (min-height: 801px) {
          #cq-logo {
            width: clamp(200px, 28vw, 230px) !important;
          }
          
          #cq-coin {
            width: clamp(110px, 15vw, 125px) !important;
          }
          
          #pre-mine-label h2 {
            font-size: clamp(1.9rem, 4vw, 2.1rem) !important;
          }
          
          #countdown > div:first-child {
            font-size: clamp(1.5rem, 3.2vw, 1.7rem) !important;
          }
        }
        
        /* Height 700-800px on large screens */
        @media (min-width: 1024px) and (max-width: 3839px) and (max-height: 800px) and (min-height: 701px) {
          #cq-logo {
            width: clamp(180px, 25vw, 210px) !important;
          }
          
          #cq-coin {
            width: clamp(100px, 13vw, 115px) !important;
          }
          
          #pre-mine-label h2 {
            font-size: clamp(1.8rem, 3.5vw, 2rem) !important;
          }
          
          #countdown > div:first-child {
            font-size: clamp(1.4rem, 2.8vw, 1.6rem) !important;
          }
        }
        
        /* Height <700px on large screens */
        @media (min-width: 1024px) and (max-width: 3839px) and (max-height: 700px) {
          #cq-logo {
            width: clamp(160px, 22vw, 190px) !important;
          }
          
          #cq-coin {
            width: clamp(90px, 12vw, 105px) !important;
          }
          
          #pre-mine-label h2 {
            font-size: clamp(1.6rem, 3vw, 1.8rem) !important;
          }
          
          #countdown > div:first-child {
            font-size: clamp(1.2rem, 2.5vw, 1.4rem) !important;
          }
        }
        
        /* 4K / Widest breakpoint */
        @media (min-width: 2560px) {
          #minables {
            // max-width: 3840px !important;
            bottom: -40px !important;
          }
        }
        
        /* 4K / Ultra-wide (3840px+ width) */
        @media (min-width: 3840px) {
          #hero-centerpiece {
            padding-top: 80px !important;
          }
          
          #roadster {
            width: 750px !important;
          }
        }
        
        /* iPhone XR / Medium mobile (401-480px) - MUST come last to override height breakpoints */
        @media (min-width: 401px) and (max-width: 480px) {
          #hero-centerpiece {
            padding-top: 40px !important;
            gap: 0 !important;
          }
          
          #cq-logo {
            width: 210px !important;
            margin-bottom: 0 !important;
            margin-top: 0 !important;
          }
          
          #cq-coin {
            width: 105px !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          #pre-mine-label {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          #pre-mine-label h2 {
            font-size: 1.65rem !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          #countdown {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          #countdown > div:first-child {
            font-size: 1.35rem !important;
            margin: 0 !important;
            padding: 0 !important;
          }
        }
        
        /* iPhone 12 Pro / Small mobile (361-400px) - MUST come last to override height breakpoints */
        @media (min-width: 361px) and (max-width: 400px) {
          #hero-centerpiece {
            padding-top: 35px !important;
            gap: 0 !important;
          }
          
          #cq-logo {
            width: 131.75px !important; /* 15% reduction from 155px */
            margin-bottom: 0 !important;
            margin-top: 0 !important;
          }
          
          #cq-coin {
            width: 102px !important; /* 15% reduction from 120px */
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          #pre-mine-label {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          #pre-mine-label h2 {
            font-size: 1.4rem !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          #countdown {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          #countdown > div:first-child {
            font-size: 1.1rem !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          #roadster {
            width: 280px !important;
          }
          
          #minables {
            bottom: -41px !important; /* moved down 20px more from -21px */
          }
        }
        
        /* Samsung Galaxy / Very small mobile (≤360px) */
        @media (max-width: 360px) {
          #hero-centerpiece {
            padding-top: 35px !important;
            gap: 0 !important;
          }
          
          #cq-logo {
            width: 155px !important;
            margin-bottom: 0 !important;
            margin-top: 0 !important;
          }
          
          #cq-coin {
            width: 60px !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          #pre-mine-label {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          #pre-mine-label h2 {
            font-size: 1.4rem !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          #countdown {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          #countdown > div:first-child {
            font-size: 1.1rem !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          #roadster {
            width: 280px !important;
          }
        }
        
        /* Galaxy Z Fold 5 / Narrow tall device (340-360px width) */
        @media (min-width: 340px) and (max-width: 360px) {
          #hero-centerpiece {
            padding-top: 50px !important;
            gap: 0 !important;
          }
          
          #cq-logo {
            width: 200px !important; /* enlarged */
            margin-bottom: 0 !important;
            margin-top: 0 !important;
          }
          
          #cq-coin {
            width: 90px !important; /* enlarged */
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          #pre-mine-label {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          #pre-mine-label h2 {
            font-size: 1.8rem !important; /* enlarged */
            margin: 0 !important;
            padding: 0 !important;
          }
          
          #countdown {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          #countdown > div:first-child {
            font-size: 1.4rem !important; /* enlarged */
            margin: 0 !important;
            padding: 0 !important;
          }
          
          #minables {
            bottom: -30px !important; /* pushed down slightly */
          }
        }
        
        /* Nest Hub Max / Desktop (1280px+ width) - MUST come last to override everything */
        @media (min-width: 1280px) {
          #hero-centerpiece {
            padding-top: 40px !important;
            gap: 0 !important;
          }
          
          #cq-logo {
            width: 213px !important; /* reduced by 1/3 */
            margin-bottom: 2px !important;
          }
          
          #cq-coin {
            width: 156px !important; /* increased by 1/3 */
          }
          
          #pre-mine-label h2 {
            font-size: 2.8rem !important; /* enlarged slightly */
          }
          
          #countdown > div:first-child {
            font-size: 2.2rem !important; /* enlarged slightly */
          }
          
          #minables {
            bottom: -100px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
