import React, { useState, useEffect } from 'react';
import { 
  Flame, Lock, Users, TrendingUp, Coins, Shield, 
  ChevronDown, ChevronUp, Zap, Target, Clock, 
  PieChart, BarChart3, ArrowRight, Check, Hammer,
  Wallet, Gift, Building2, Timer, Gem, Play, 
  Gamepad2, Trophy, Sparkles, CircleDollarSign,
  Layers, Map, Swords, Crown
} from 'lucide-react';
import { PieChart as RechartsPie, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import HeroSection from './HeroSection';

// Data
const tokenAllocation = [
  { name: 'Master Editions (Bound)', value: 58.2, amount: '2,380,533,198', color: '#14F195', desc: 'Locked to 3,500 NFT holders' },
  { name: 'SOV Mining Pool', value: 12.2, amount: '500,000,000', color: '#9945FF', desc: 'Fair distribution via SOV mining' },
  { name: 'Team (6mo Cliff + 1yr Vest)', value: 10.0, amount: '408,948,133', color: '#00D1FF', desc: '18 months total lock' },
  { name: 'Marketing/Partners', value: 4.9, amount: '200,000,000', color: '#FF6B6B', desc: 'CEX & partnerships only' },
  { name: 'Genesis Quest', value: 2.4, amount: '100,000,000', color: '#FFE66D', desc: 'Staking rewards' },
];

const burnHistory = [
  { name: 'Bonding Curve Burns', amount: '2,119,466,802', percent: '21.2%', desc: 'Already burned from early mechanism' },
  { name: 'DEX Allocation', amount: '2,000,000,000', percent: '20.0%', desc: 'Not needed - mining creates liquidity' },
  { name: 'Marketing Excess', amount: '1,700,000,000', percent: '17.0%', desc: 'Keeping only 200M for actual use' },
  { name: 'Team Reduction', amount: '591,051,867', percent: '5.9%', desc: 'Proportional cut to maintain 10%' },
];

const solDistribution = [
  { name: 'Winners', percent: 88, color: '#14F195', desc: 'Split among winning block stakers' },
  { name: 'Buybacks (Burned)', percent: 7, color: '#FF6B6B', desc: 'Buy QUEST & burn forever' },
  { name: 'QUEST Stakers', percent: 2, color: '#9945FF', desc: 'Anyone staking QUEST earns SOL' },
  { name: 'ME Stakers', percent: 1, color: '#00D1FF', desc: 'Proportional to BPS share from staking' },
  { name: 'Motherlode Pool', percent: 2, color: '#FFE66D', desc: '1/625 chance SOL jackpot' },
];

const vestingTimeline = [
  { month: 'Month 0-6', status: 'Cliff Period', unlocked: '0 QUEST', detail: 'Team fully locked - maximum alignment' },
  { month: 'Month 7', status: 'Vesting Begins', unlocked: '~7.86M/week', detail: 'Weekly unlocks start after cliff' },
  { month: 'Month 7-18', status: 'Linear Vesting', unlocked: '~31.5M/month', detail: '52 weeks of gradual release' },
  { month: 'End of Month 18', status: 'Fully Vested', unlocked: '408.9M (100%)', detail: 'Complete - 18 months from TGE' },
];

const keyMetrics = [
  { label: 'Total Supply', value: '4.09B', sub: 'QUEST' },
  { label: 'Burned Forever', value: '59.1%', sub: '5.91B QUEST' },
  { label: 'Community Share', value: '70.4%', sub: 'Fair Distribution' },
  { label: 'Team Lock', value: '18 Months', sub: '6mo Cliff + 1yr Vest' },
];

const comparisonData = [
  { project: 'Critters Quest', burn: '59.1%', lock: '6mo + 1yr', fair: true, deflationary: true },
  { project: 'Typical GameFi', burn: '0-10%', lock: '3-6mo', fair: false, deflationary: false },
  { project: 'Fair Launch', burn: '0-20%', lock: '0-12mo', fair: true, deflationary: null },
  { project: 'Memecoins', burn: '0-50%', lock: 'None', fair: null, deflationary: false },
];

// Journey/Roadmap data
const journeyPhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    period: 'Q4 2024 - Q3 2025',
    status: 'completed',
    items: [
      'Master Edition NFT sale (3,500 sold out)',
      'Genesis Quest staking launched',
      'Game beta live for ME holders',
      'Tokenomics finalized',
      'Community growing organically'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'TGE Launch',
    period: 'Q1 2026',
    status: 'current',
    items: [
      'Execute 59% supply burn',
      'Deploy ORE mining contracts',
      'Launch QUEST staking (earn 2% SOL)',
      'Activate buyback mechanism',
      'Token trading begins'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'Game Launch',
    period: 'Q1-Q2 2026',
    status: 'upcoming',
    items: [
      'Open beta to Public Edition holders',
      'Public Edition minting goes live',
      'Game sinks activated (20% to treasury)',
      'Competitive seasons begin',
      'Alliance & territory systems'
    ]
  },
  {
    phase: 'Phase 4',
    title: 'Expansion',
    period: 'Q2-Q4 2026',
    status: 'upcoming',
    items: [
      'Major CEX listings',
      'Tournament system with prizes',
      'Mobile app (iOS/Android)',
      'New character types & maps',
      'Sustainable equilibrium reached'
    ]
  }
];

// How it works steps
const howItWorksSteps = [
  {
    step: 1,
    title: 'Get Master Edition NFT',
    desc: 'Own 1 of 3,500 unique NFTs with bound QUEST tokens',
    icon: Gem,
    color: '#14F195'
  },
  {
    step: 2,
    title: 'Stake in Genesis Quest',
    desc: 'Unlock 0.1%/day of your bound tokens + boosts',
    icon: Lock,
    color: '#9945FF'
  },
  {
    step: 3,
    title: 'Contribute to Mining Pool',
    desc: 'Add unlocked QUEST to earn perpetual 1% SOL revenue',
    icon: Hammer,
    color: '#00D1FF'
  },
  {
    step: 4,
    title: 'Mine & Earn',
    desc: 'Stake SOL on 5x5 grid, win SOL + QUEST every minute',
    icon: Coins,
    color: '#FFE66D'
  },
  {
    step: 5,
    title: 'Stake QUEST',
    desc: 'Earn 2% of all mining SOL volume passively',
    icon: TrendingUp,
    color: '#FF6B6B'
  },
  {
    step: 6,
    title: 'Play the Game',
    desc: 'Use QUEST in 4X strategy game, burns feed treasury',
    icon: Gamepad2,
    color: '#14F195'
  }
];

// Components
const StatCard = ({ icon: Icon, label, value, sub, gradient }) => (
  <div className={`bg-quest-card border border-quest-border rounded-2xl p-6 hover:border-quest-primary/50 transition-all duration-300 ${gradient ? 'glow' : ''}`}>
    <div className="flex items-center gap-3 mb-3">
      <div className={`p-2 rounded-lg ${gradient ? 'bg-gradient-to-br from-quest-primary/20 to-quest-secondary/20' : 'bg-quest-primary/10'}`}>
        <Icon className="w-5 h-5 text-quest-primary" />
      </div>
      <span className="text-gray-400 text-sm font-medium">{label}</span>
    </div>
    <div className={`text-3xl font-bold ${gradient ? 'gradient-text' : 'text-white'}`}>{value}</div>
    <div className="text-gray-500 text-sm mt-1">{sub}</div>
  </div>
);

const Section = ({ id, title, icon: Icon, image, titleStyle, children, className = '', mobileVertical = false, hideHeader = false }) => (
  <section id={id} className={`${mobileVertical ? 'pb-16 pt-0 md:py-16' : 'py-16'} ${className}`}>
    {!hideHeader && (image || Icon || title) && (
      <div className={`flex items-center gap-4 ${mobileVertical ? 'mb-4 md:mb-8 flex-col md:flex-row w-1/2 mx-auto md:w-auto md:mx-0' : 'mb-8'}`}>
        {image && mobileVertical ? (
          <img src={image} alt={title} className="w-40 h-auto md:w-6 md:h-6" />
        ) : (image || Icon) ? (
          <div className="p-3 rounded-xl bg-gradient-to-br from-quest-primary/20 to-quest-secondary/20 border border-quest-primary/30">
            {image ? (
              <img src={image} alt={title} className="w-6 h-6" />
            ) : Icon ? (
              <Icon className="w-6 h-6 text-quest-primary" />
            ) : null}
          </div>
        ) : null}
        {title && <h2 className={`text-3xl font-bold text-white ${mobileVertical ? 'text-center' : ''}`} style={titleStyle}>{title}</h2>}
      </div>
    )}
    {children}
  </section>
);

const ProgressBar = ({ percent, color, label }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-2">
      <span className="text-gray-300 text-sm">{label}</span>
      <span className="text-white font-semibold">{percent}%</span>
    </div>
    <div className="h-3 bg-quest-darker rounded-full overflow-hidden">
      <div 
        className="h-full rounded-full transition-all duration-1000"
        style={{ width: `${percent}%`, backgroundColor: color }}
      />
    </div>
  </div>
);

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-quest-border rounded-xl overflow-hidden mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-quest-card hover:bg-quest-card/80 transition-colors"
      >
        <span className="text-white font-semibold">{title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-quest-primary" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>
      {isOpen && <div className="p-4 bg-quest-darker border-t border-quest-border">{children}</div>}
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-quest-card border border-quest-border rounded-xl p-5 hover:border-quest-primary/50 transition-all">
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-lg bg-quest-primary/10 shrink-0">
        <Icon className="w-5 h-5 text-quest-primary" />
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const Nav = ({ activeSection, showNav }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'tge', label: 'TGE & Mining' },
    { id: 'tokenomics', label: 'Tokenomics' },
    { id: 'game', label: '4X Game' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-quest-darker/90 backdrop-blur-xl border-b border-quest-border transition-all duration-500 ${
        showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-quest-primary to-quest-secondary flex items-center justify-center">
              <Gem className="w-6 h-6 text-quest-darker" />
            </div>
            <div>
              <span className="text-white font-bold text-lg">Critters Quest</span>
              <span className="text-quest-primary font-mono text-sm ml-2">$QUEST</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {sections.map(section => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === section.id 
                    ? 'bg-quest-primary/20 text-quest-primary' 
                    : 'text-gray-400 hover:text-white hover:bg-quest-card'
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('cq-hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        // Show nav when hero is mostly scrolled past
        setShowNav(heroBottom < 100);
      }

      const sections = ['overview', 'ecosystem', 'tge', 'tokenomics', 'game', 'roadmap'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollTrigger animations for content below "Turbo Charging the Ecosystem"
  useEffect(() => {
    if (typeof window === 'undefined' || !window.gsap || !window.ScrollTrigger) {
      return;
    }

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states - content starts hidden and below
    gsap.set('#overview-description', { opacity: 0, y: 50 });
    gsap.set('#three-pillars', { opacity: 0, y: 50 });
    gsap.set('#key-stats', { opacity: 0, y: 50 });
    gsap.set('#ecosystem', { opacity: 0, y: 50 });
    gsap.set('#tge', { opacity: 0, y: 50 });
    gsap.set('#tokenomics', { opacity: 0, y: 50 });
    gsap.set('#game', { opacity: 0, y: 50 });

    // Animate elements in on scroll
    ScrollTrigger.batch('#overview-description, #three-pillars, #key-stats, #ecosystem, #tge, #tokenomics, #game', {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.1
        });
      },
      start: 'top 80%',
      once: true
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.onEnter) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-quest-darker text-white font-sans">
      {/* <Nav activeSection={activeSection} showNav={showNav} /> */}
      
      {/* Theatrical Hero Section */}
      <HeroSection />
      
      {/* Transition gradient - positioned behind hero with negative z-index */}
      <div 
        className="h-40 -mt-32 relative"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #0f0f23 100%)',
          zIndex: -1
        }}
      />
      
      {/* Main Content - Overview Section */}
      <header id="overview" className="pt-8 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }}>
              <span style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FFB84A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>$QUEST</span>
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'linear-gradient(135deg, rgba(255,215,0,0.2) 0%, rgba(255,184,74,0.2) 100%)', border: '1px solid rgba(255,215,0,0.5)' }}>
              <span className="font-medium text-sm" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive", color: '#FFD700' }}>Turbo Charging Our Ecosystem</span>
            </div>
            <p id="overview-description" className="text-xl max-w-3xl mx-auto" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive", background: 'linear-gradient(135deg, #FFD700 0%, #FFB84A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              A new technique featuring 3 interconnected systems creating perpetual value for all participants.
            </p>
          </div>

          {/* ECOSYSTEM OVERVIEW */}
          <Section id="ecosystem" title="" hideHeader={true} className="!pt-0">
            
            {/* Ecosystem Flow Diagram */}
            <div className="ecosystem-border-animate rounded-2xl p-8 mb-8" style={{ background: 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(15,15,35,0.95) 50%, rgba(255,184,74,0.1) 100%)' }}>
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-black flex items-center justify-center mx-auto mb-4 ore-icon-glow">
                    <img src="/assets_cqTGE/ore.png" alt="ORE" className="w-10 h-10" />
                  </div>
                  <h4 className="font-bold text-lg mb-2" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive", color: '#FFD700' }}>SOV Mining</h4>
                  <p className="text-gray-400 text-sm" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }}>TGE via ORE Protocol</p>
                  <div className="mt-3 space-y-1 text-xs text-gray-500" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }}>
                    <div>• Fair token distribution</div>
                    <div>• Earn SOL + QUEST</div>
                    <div>• 7% buyback burns</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-quest-primary" />
                    <span className="text-gray-500 text-xs" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }}>QUEST flows</span>
                    <ArrowRight className="w-5 h-5 text-quest-primary" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img src="/assets_cqTGE/CoinStacked.png" alt="QUEST Token" className="w-[11.2rem] h-[11.2rem] object-contain" />
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }}>$QUEST</div>
                    <div className="text-gray-500 text-xs" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }}>Utility Token</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-quest-secondary rotate-180" />
                    <span className="text-gray-500 text-xs" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }}>20% to treasury</span>
                    <ArrowRight className="w-5 h-5 text-quest-secondary rotate-180" />
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-quest-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <Gamepad2 className="w-10 h-10 text-quest-secondary" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }}>4X Game</h4>
                  <p className="text-gray-400 text-sm" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }}>Play & Earn</p>
                  <div className="mt-3 space-y-1 text-xs text-gray-500" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }}>
                    <div>• Spend QUEST in-game</div>
                    <div>• Earn through gameplay</div>
                    <div>• 20% feeds SOV treasury</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Benefits */}
            <h3 className="text-xl font-bold text-white mb-4">Who Benefits?</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-quest-darker border border-quest-border rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Crown className="w-5 h-5 text-quest-primary" />
                  <span className="text-white font-semibold">ME Holders</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• 1% SOV mining SOL (by BPS share)</li>
                  <li>• 50% base Clone revenues</li>
                  <li>• Locked QUEST on NFT</li>
                </ul>
              </div>
              <div className="bg-quest-darker border border-quest-border rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Wallet className="w-5 h-5 text-quest-secondary" />
                  <span className="text-white font-semibold">QUEST Stakers</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Stake QUEST → Earn SOL (2%)</li>
                  <li>• Passive income</li>
                  <li>• No gameplay required</li>
                </ul>
              </div>
              <div className="bg-quest-darker border border-quest-border rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Hammer className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-semibold">Miners</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Win SOL from rounds</li>
                  <li>• Earn QUEST from SOV mining</li>
                  <li>• Motherlode jackpots</li>
                </ul>
              </div>
              <div className="bg-quest-darker border border-quest-border rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Gamepad2 className="w-5 h-5 text-green-400" />
                  <span className="text-white font-semibold">Gamers</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Earn QUEST playing</li>
                  <li>• Competitive rewards</li>
                  <li>• NFT progression</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Three Pillars */}
          <div id="three-pillars" className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-quest-primary/20 to-quest-primary/5 border border-quest-primary/50 rounded-2xl p-6 glow">
              <div className="w-14 h-14 rounded-xl bg-quest-primary/20 flex items-center justify-center mb-4">
                <Hammer className="w-7 h-7 text-quest-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SOV Mining (TGE)</h3>
              <p className="text-gray-400 text-sm mb-3">Our TGE method via ORE Protocol. Fair token distribution + perpetual revenue.</p>
              <div className="text-quest-primary font-semibold text-sm">The Launch Mechanism →</div>
            </div>
            <div className="bg-gradient-to-br from-quest-secondary/20 to-quest-secondary/5 border border-quest-secondary/50 rounded-2xl p-6 glow-purple">
              <div className="w-14 h-14 rounded-xl bg-quest-secondary/20 flex items-center justify-center mb-4">
                <Gamepad2 className="w-7 h-7 text-quest-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">4X Strategy Game</h3>
              <p className="text-gray-400 text-sm mb-3">Explore, Expand, Exploit, Exterminate. Real gameplay with real rewards.</p>
              <div className="text-quest-secondary font-semibold text-sm">The Game →</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/50 rounded-2xl p-6">
              <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4">
                <Coins className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">$QUEST Token</h3>
              <p className="text-gray-400 text-sm mb-3">59% burned pre-TGE. Utility across mining, staking, and gameplay.</p>
              <div className="text-yellow-400 font-semibold text-sm">The Token →</div>
            </div>
          </div>

          {/* Key Stats */}
          <div id="key-stats" className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyMetrics.map((metric, i) => (
              <StatCard 
                key={i}
                icon={[Coins, Flame, Users, Lock][i]}
                label={metric.label}
                value={metric.value}
                sub={metric.sub}
                gradient={i === 0}
              />
            ))}
          </div>
        </div>
      </header>

      <main className="px-6">
        <div className="max-w-7xl mx-auto">

          
          {/* TGE & SOV MINING - THE LAUNCH MECHANISM */}
          <Section id="tge" title="TGE via SOV Mining (ORE Protocol)" icon={Hammer}>
            <div className="bg-gradient-to-br from-quest-primary/10 to-quest-secondary/10 border border-quest-primary/30 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-quest-primary/20">
                  <Zap className="w-8 h-8 text-quest-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">A Non-Traditional Token Launch</h3>
                  <p className="text-gray-400 text-lg">A community-first Pre-Mine followed by SOV Mining (built on ORE Protocol). Fair distribution. Perpetual utility. No VC dumps.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-quest-darker/50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-quest-primary mb-1">Pre-Mine</div>
                  <div className="text-gray-400 text-sm">20M QUEST for 2,500 SOL</div>
                </div>
                <div className="bg-quest-darker/50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-quest-secondary mb-1">No VCs</div>
                  <div className="text-gray-400 text-sm">No dump schedules</div>
                </div>
                <div className="bg-quest-darker/50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">Fair Mining</div>
                  <div className="text-gray-400 text-sm">Everyone can participate</div>
                </div>
              </div>
            </div>

            {/* Pre-Mine Details */}
            <div className="bg-quest-card border border-quest-border rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Coins className="w-5 h-5 text-quest-primary" />
                Pre-Mine: 20M QUEST for 2,500 SOL
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-quest-darker rounded-xl p-4">
                  <div className="text-quest-primary font-bold text-lg mb-2">80% → Liquidity (2,000 SOL)</div>
                  <p className="text-gray-400 text-sm">Creates the initial QUEST/SOL liquidity pool for trading. Ensures healthy market from day one.</p>
                </div>
                <div className="bg-quest-darker rounded-xl p-4">
                  <div className="text-quest-secondary font-bold text-lg mb-2">20% → ME Contributors (500 SOL)</div>
                  <p className="text-gray-400 text-sm">Distributed to MEs who contributed QUEST from Genesis staking, proportional to their BPS share.</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-quest-primary/10 rounded-lg text-center">
                <span className="text-quest-primary font-semibold">Community-first:</span>
                <span className="text-gray-300"> Pre-Mine rewards those who contributed to the mining pool</span>
              </div>
            </div>

            {/* How Mining Works */}
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Play className="w-5 h-5 text-quest-primary" />
              How SOV Mining Works
            </h3>
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {[
                { step: '1', title: 'Stake SOL', desc: 'Deploy SOL on any block in the 5x5 grid', icon: Coins },
                { step: '2', title: 'Wait 1 Min', desc: 'Each round lasts 60 seconds', icon: Timer },
                { step: '3', title: 'Random Winner', desc: 'Provably fair selection picks winning block', icon: Target },
                { step: '4', title: 'Collect Rewards', desc: 'Winners get SOL profit + QUEST emissions', icon: Trophy },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-quest-card border border-quest-border rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-quest-primary/20 flex items-center justify-center">
                        <span className="text-quest-primary font-bold">{item.step}</span>
                      </div>
                      <Icon className="w-5 h-5 text-gray-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* SOL Distribution & Round Structure */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-quest-card border border-quest-border rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-quest-primary" />
                  SOL Distribution Per Round
                </h3>
                <div className="space-y-3">
                  {solDistribution.map((item, i) => (
                    <div key={i} className="mb-4">
                      <div className="flex justify-between mb-2">
                        <div>
                          <span className="text-gray-300 text-sm">{item.name}</span>
                          <span className="text-gray-500 text-xs ml-2">- {item.desc}</span>
                        </div>
                        <span className="text-white font-semibold">{item.percent}%</span>
                      </div>
                      <div className="h-3 bg-quest-darker rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${item.percent}%`, backgroundColor: item.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-quest-card border border-quest-border rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Timer className="w-5 h-5 text-quest-primary" />
                  Round Structure
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-quest-border">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white font-semibold">1 minute per round</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-quest-border">
                    <span className="text-gray-400">Grid Size</span>
                    <span className="text-white font-semibold">5x5 (25 blocks)</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-quest-border">
                    <span className="text-gray-400">Initial Emission</span>
                    <span className="text-quest-primary font-semibold">~951 QUEST/round</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-quest-border">
                    <span className="text-gray-400">Refining Fee</span>
                    <span className="text-white font-semibold">10% on claims</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-400">Motherlode Chance</span>
                    <span className="text-yellow-400 font-semibold">1/625 (SOL jackpot)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Streams from Mining */}
            <h3 className="text-xl font-bold text-white mb-4">SOV Mining Creates Multiple Revenue Streams</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-quest-darker border border-quest-primary/30 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-quest-primary/20 flex items-center justify-center">
                    <Crown className="w-5 h-5 text-quest-primary" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">ME Stakers</div>
                    <div className="text-quest-primary font-bold">Earn 1% SOL</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">1% of SOV mining SOL distributed proportionally based on each ME's BPS (basis points) share from Genesis staking.</p>
              </div>
              <div className="bg-quest-darker border border-quest-secondary/30 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-quest-secondary/20 flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-quest-secondary" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">QUEST Stakers</div>
                    <div className="text-quest-secondary font-bold">Earn 2% in SOL</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">Stake $QUEST → Earn $SOL. 2% of all SOV mining volume paid in SOL to stakers. Passive income from protocol activity.</p>
              </div>
              <div className="bg-quest-darker border border-red-500/30 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <Flame className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Buyback & Burn</div>
                    <div className="text-red-400 font-bold">7% Burns QUEST</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">7% of each round buys QUEST from market and burns it forever. The only burn mechanism.</p>
              </div>
            </div>

            {/* Example Calculation */}
            <Accordion title="Example: What Can You Earn from SOV Mining?" defaultOpen>
              <div className="bg-quest-card rounded-xl p-4 font-mono text-sm">
                <div className="text-gray-400 mb-3">You stake 0.1 SOL on Block #13:</div>
                <div className="space-y-1 text-gray-300">
                  <div>├─ Total on Block #13: 2 SOL (from 10 players)</div>
                  <div>├─ Your share of block: <span className="text-quest-primary">5%</span></div>
                  <div>│</div>
                  <div>└─ If Block #13 wins:</div>
                  <div className="pl-4">├─ Total losing SOL: 8 SOL (from other 24 blocks)</div>
                  <div className="pl-4">├─ Winners get 88%: 7.04 SOL distributed</div>
                  <div className="pl-4">├─ Your 5% share: <span className="text-quest-primary">0.352 SOL</span></div>
                  <div className="pl-4">├─ Your profit: 0.352 - 0.1 = <span className="text-green-400">0.252 SOL = $35 profit</span></div>
                  <div className="pl-4">│</div>
                  <div className="pl-4">├─ Plus QUEST: 951 × 5% = <span className="text-quest-primary">48 QUEST</span></div>
                  <div className="pl-4">└─ Total earnings: <span className="text-green-400">$35+ from 0.1 SOL stake</span></div>
                </div>
              </div>
            </Accordion>
          </Section>

          {/* TOKENOMICS */}
          <Section id="tokenomics" title="$QUEST Tokenomics" icon={PieChart}>
            {/* Pre-TGE Burn Banner */}
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                    <Flame className="w-8 h-8 text-red-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">59.1% Burned</div>
                    <div className="text-gray-400">5.91B QUEST destroyed before TGE</div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-gray-400 text-sm">Final Supply</div>
                  <div className="text-2xl font-bold text-quest-primary">4.09B QUEST</div>
                </div>
              </div>
            </div>

            {/* Token Allocation - Visual Bars Instead of Pie */}
            <div className="bg-quest-card border border-quest-border rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-6">Token Allocation (4.09B QUEST)</h3>
              <div className="space-y-4">
                {tokenAllocation.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-white font-medium">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-white font-bold">{item.value}%</span>
                        <span className="text-gray-500 text-sm ml-2">({item.amount})</span>
                      </div>
                    </div>
                    <div className="h-4 bg-quest-darker rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${item.value}%`, backgroundColor: item.color }}
                      />
                    </div>
                    <div className="text-gray-500 text-xs mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Vesting */}
            <div className="bg-quest-card border border-quest-border rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-quest-primary" />
                Team Vesting: 6-Month Cliff + 1-Year Vesting
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {vestingTimeline.map((item, i) => (
                  <div key={i} className={`p-4 rounded-xl ${i === 0 ? 'bg-red-500/10 border border-red-500/30' : i === 3 ? 'bg-green-500/10 border border-green-500/30' : 'bg-quest-darker border border-quest-border'}`}>
                    <div className="text-white font-semibold text-sm mb-1">{item.month}</div>
                    <div className={`font-bold ${i === 0 ? 'text-red-400' : i === 3 ? 'text-green-400' : 'text-quest-primary'}`}>{item.unlocked}</div>
                    <div className="text-gray-500 text-xs mt-1">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* What Was Burned */}
            <Accordion title="What Was Burned? (59.1% of Original Supply)">
              <div className="grid md:grid-cols-2 gap-4">
                {burnHistory.map((burn, i) => (
                  <div key={i} className="bg-quest-card rounded-xl p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-semibold">{burn.name}</span>
                      <span className="text-red-400 font-bold">{burn.percent}</span>
                    </div>
                    <div className="text-gray-500 text-xs">{burn.desc}</div>
                  </div>
                ))}
              </div>
            </Accordion>
          </Section>

          {/* 4X GAME */}
          <Section id="game" title="The 4X Strategy Game" icon={Gamepad2}>
            <p className="text-gray-400 text-lg mb-6">A real game with real utility. Earn <span className="text-quest-primary">resources</span> through skilled gameplay, swap for QUEST via natural price discovery.</p>
            
            {/* 4X Explanation */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { letter: 'eX', word: 'plore', desc: 'Discover territories and resources', icon: Map, color: '#14F195' },
                { letter: 'eX', word: 'pand', desc: 'Grow your empire across the map', icon: Layers, color: '#9945FF' },
                { letter: 'eX', word: 'ploit', desc: 'Harvest resources for advantage', icon: Hammer, color: '#00D1FF' },
                { letter: 'eX', word: 'terminate', desc: 'Defeat rivals in strategic combat', icon: Swords, color: '#FF6B6B' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-quest-card border border-quest-border rounded-xl p-5 text-center hover:border-quest-primary/50 transition-all">
                    <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                      <Icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <div className="text-2xl font-bold mb-1">
                      <span style={{ color: item.color }}>{item.letter}</span>
                      <span className="text-white">{item.word}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Token-Bound Accounts */}
            <div className="bg-quest-card border border-quest-primary/30 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-quest-primary/20">
                  <Gem className="w-6 h-6 text-quest-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Token-Bound Accounts (TBA)</h3>
                  <p className="text-gray-400 mb-3">Your NFT owns its own wallet. All QUEST, resources, tools, and equipment are stored <span className="text-quest-primary font-semibold">on the NFT itself</span>, not in your personal wallet. When you sell the NFT, everything goes with it.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-quest-darker rounded-full text-xs text-gray-300">Critter NFT = Own Wallet</span>
                    <span className="px-3 py-1 bg-quest-darker rounded-full text-xs text-gray-300">Town NFT = Own Wallet</span>
                    <span className="px-3 py-1 bg-quest-darker rounded-full text-xs text-gray-300">True Asset Ownership</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Economic Sinks */}
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Flame className="w-5 h-5 text-red-400" />
              Economic Sinks (Where QUEST Leaves Circulation)
            </h3>
            <div className="grid md:grid-cols-3 gap-3 mb-8">
              {[
                { title: 'Movement Costs', desc: 'Every action on the world map costs QUEST', icon: Map, highlight: false },
                { title: 'Upgrades & Crafting', desc: 'Buildings, tools, gems, potions', icon: Hammer, highlight: false },
                { title: 'Building Control', desc: 'Stake QUEST to control strategic structures', icon: Building2, highlight: false },
                { title: 'Clone Consumption', desc: 'Burn Clones to promote characters (permanent)', icon: Flame, highlight: true },
                { title: 'Promotions', desc: 'Consume Clones to power up characters', icon: TrendingUp, highlight: true },
                { title: 'Leveling Up', desc: 'Spend QUEST to level characters & towns', icon: Sparkles, highlight: false },
                { title: 'Repairing', desc: 'Fix damaged tools and equipment', icon: Hammer, highlight: false },
                { title: 'Rent (Fresh Finds)', desc: 'Pay for temporary bonuses & positioning', icon: Clock, highlight: false },
                { title: 'Tool Destruction', desc: 'Tools can break, requiring re-crafting', icon: Zap, highlight: false },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className={`bg-quest-darker border rounded-xl p-4 ${item.highlight ? 'border-red-500/50 bg-red-500/5' : 'border-quest-border'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className={`w-5 h-5 ${item.highlight ? 'text-red-400' : 'text-quest-primary'}`} />
                      <span className="text-white font-semibold text-sm">{item.title}</span>
                    </div>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Clone Economy Flywheel */}
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5 text-red-400" />
                The Clone Economy Flywheel (Deflationary)
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-quest-primary/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-quest-primary font-bold">1</span>
                  </div>
                  <div className="text-white font-semibold text-sm">Mint</div>
                  <p className="text-gray-500 text-xs">Players mint Clones from Master Editions</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-quest-secondary/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-quest-secondary font-bold">2</span>
                  </div>
                  <div className="text-white font-semibold text-sm">Trade</div>
                  <p className="text-gray-500 text-xs">Buy/sell on secondary (ME earns royalties)</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-red-400 font-bold">3</span>
                  </div>
                  <div className="text-white font-semibold text-sm">Consume</div>
                  <p className="text-gray-500 text-xs">Burn Clones to promote characters</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-yellow-400 font-bold">4</span>
                  </div>
                  <div className="text-white font-semibold text-sm">Scarcity</div>
                  <p className="text-gray-500 text-xs">Reduced supply → higher floor prices</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-quest-darker/50 rounded-lg text-center">
                <span className="text-red-400 font-semibold">Master Editions cannot be consumed</span>
                <span className="text-gray-400"> — only Clones burn, creating perpetual demand</span>
              </div>
            </div>

            {/* NFT Types */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-quest-card border border-quest-primary/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="w-6 h-6 text-quest-primary" />
                  <h4 className="text-xl font-bold text-white">Master Edition NFTs</h4>
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded">SOLD OUT</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-quest-primary" /> 3,500 unique characters</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-quest-primary" /> Locked QUEST (spend in-game OR unlock via Genesis)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-quest-primary" /> Base 50% of all Clone revenues (mint + secondary)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-quest-primary" /> 1% of SOV mining SOL (proportional to BPS)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-quest-primary" /> Cannot be consumed (permanent)</li>
                </ul>
              </div>
              <div className="bg-quest-card border border-quest-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-quest-secondary" />
                  <h4 className="text-xl font-bold text-white">Clone NFTs (Public Edition)</h4>
                  <span className="px-2 py-1 bg-quest-primary/20 text-quest-primary text-xs font-bold rounded">COMING Q1 2026</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-quest-secondary" /> Clone any Master Edition to play</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-quest-secondary" /> Affordable entry (ME sets price)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-quest-secondary" /> Full gameplay access</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-quest-secondary" /> Can be consumed to promote others</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-quest-secondary" /> Creates deflationary pressure</li>
                </ul>
              </div>
            </div>

            {/* The Swap - Resource Economy */}
            <div className="bg-quest-darker border border-quest-border rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-quest-primary" />
                The Swap: Resource → QUEST Economy
              </h3>
              <p className="text-gray-400 mb-4">Players don't earn QUEST directly — they earn <span className="text-quest-primary font-semibold">resources</span> through skilled gameplay. All resources can be swapped for QUEST via 100+ liquidity pools (Meteora DLMM).</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-quest-card rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-quest-primary mb-1">100+</div>
                  <div className="text-gray-400 text-sm">Resource Pools</div>
                </div>
                <div className="bg-quest-card rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-quest-secondary mb-1">Natural</div>
                  <div className="text-gray-400 text-sm">Price Discovery</div>
                </div>
                <div className="bg-quest-card rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">Skill</div>
                  <div className="text-gray-400 text-sm">= Earnings</div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-quest-border mt-16 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-quest-primary to-quest-secondary flex items-center justify-center">
                <Gem className="w-6 h-6 text-quest-darker" />
              </div>
              <div>
                <span className="text-white font-bold">Critters Quest</span>
                <span className="text-quest-primary font-mono text-sm ml-2">$QUEST</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-gray-400 text-sm">Document Version 1.1 • December 2025</div>
              <div className="text-gray-500 text-sm">Network: Solana • Website: critters.quest</div>
            </div>
          </div>
        </div>
      </footer>
      
      <style>{`
        /* iPhone size - remove top padding/margin so $QUEST is at top */
        @media (max-width: 400px) {
          #overview {
            padding-top: 0 !important;
          }
          
          #overview .text-center {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
          
          #overview h1 {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
