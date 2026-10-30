/**
 * Central content configuration for the Algorithm Studio landing page.
 * Edit all copy, metrics, and links here.
 */

export interface PillBadge {
  text: string;
  link: string;
}

export interface CtaButton {
  text: string;
  link: string;
}

export interface StatItem {
  number: string;
  label: string;
  detail: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: 'cube' | 'code' | 'sync' | 'bot' | 'clock' | 'path';
}

export interface HowItWorksItem {
  step: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LandingContent {
  productName: string;
  oneLinePitch: string;
  targetAudience: string;
  pillBadge: PillBadge;
  hero: {
    headlineStart: string;
    headlineGradient: string;
    headlineEnd: string;
    subtext: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
    trustText: string;
  };
  stats: StatItem[];
  features: FeatureItem[];
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    steps: HowItWorksItem[];
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  finalCta: {
    headline: string;
    subtext: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
  };
  footer: {
    description: string;
    links: {
      title: string;
      items: { label: string; href: string }[];
    }[];
  };
}

export const LANDING_CONTENT: LandingContent = {
  productName: 'Algorithm Studio',
  oneLinePitch: 'Master Data Structures & Algorithms in Interactive 3D',
  targetAudience: 'Built for students, software engineers, and technical interview candidates.',
  pillBadge: {
    text: 'New: 100+ Algorithms & Interactive 3D Visualizers',
    link: '#catalog',
  },
  hero: {
    headlineStart: 'Master Data Structures & Algorithms in',
    headlineGradient: 'interactive 3D',
    headlineEnd: '',
    subtext:
      'Watch comparisons, swaps, and tree traversals step-by-step in real-time WebGL. Edit starter code in Monaco, submit for instant judging across Python, C++, and Java, and chat with an AI tutor aware of your live playback state.',
    primaryCta: {
      text: 'Start Learning',
      link: '#catalog',
    },
    secondaryCta: {
      text: 'Explore 3D Lab',
      link: '/algorithms/bubble-sort',
    },
    trustText: 'Trusted by students & engineers preparing for technical interviews',
  },
  stats: [
    {
      number: '100+',
      label: 'Algorithms & Labs',
      detail: 'From Sorting to Bitmask DP',
    },
    {
      number: '14',
      label: 'Curated Topic Paths',
      detail: 'Structured CS syllabus',
    },
    {
      number: '3',
      label: 'Judge Languages',
      detail: 'Python, C++, and Java runtimes',
    },
    {
      number: '50k+',
      label: 'Trace Event Depth',
      detail: 'Deterministic WebGL animation',
    },
  ],
  features: [
    {
      id: 'viz',
      title: 'Interactive 3D Visualizer',
      description:
        'Watch every comparison, swap, and graph traversal step-by-step in full WebGL with orbit controls and customizable camera angles.',
      icon: 'cube',
    },
    {
      id: 'judge',
      title: 'Multi-Language Online Judge',
      description:
        'Write practice solutions in Python, C++, or Java and get instant automated judging against comprehensive hidden test cases.',
      icon: 'code',
    },
    {
      id: 'highlight',
      title: 'Synced Code Highlighting',
      description:
        'Reference solutions in C++, Java, and Python dynamically highlight the exact executing line in sync with visual playback.',
      icon: 'sync',
    },
    {
      id: 'ai',
      title: 'Context-Aware AI Tutor',
      description:
        'Chat with an AI mentor that inspects your current algorithm step, array pointers, problem constraints, and active code.',
      icon: 'bot',
    },
    {
      id: 'repetition',
      title: 'Spaced Repetition Engine',
      description:
        'Rate your recall confidence after each problem to automatically schedule review intervals and retain concepts permanently.',
      icon: 'clock',
    },
    {
      id: 'paths',
      title: '14 Curated Topic Pathways',
      description:
        'Progress systematically through Arrays, Trees, Graphs, Dynamic Programming, Recursion, Backtracking, and Machine Learning.',
      icon: 'path',
    },
  ],
  howItWorks: {
    badge: 'Step-by-Step Methodology',
    title: 'How Algorithm Studio Works',
    subtitle: 'From visual intuition to verified code implementation in three connected stages.',
    steps: [
      {
        step: '01',
        title: 'Watch & Understand in 3D',
        description:
          'Select any algorithm and watch its logic unfold in real-time WebGL. Scrub the timeline, pause at critical pivot points, and build deep spatial intuition.',
      },
      {
        step: '02',
        title: 'Code in the Embedded Editor',
        description:
          'Switch to the practice tab and implement the algorithm yourself in a full Monaco editor with autocomplete and syntax highlighting in Python, C++, or Java.',
      },
      {
        step: '03',
        title: 'Validate, Review & Retain',
        description:
          'Submit your code for instant judging, receive AI feedback on bottlenecks, and schedule spaced repetition reviews to stay interview-ready.',
      },
    ],
  },
  testimonials: {
    badge: 'Learner Feedback',
    title: 'Loved by Developers & Students',
    subtitle: 'See how interactive 3D visualization changes the way people learn computer science.',
    items: [
      {
        quote:
          'Seeing Dijkstra’s algorithm and AVL rotations in 3D made graph traversal click in 10 minutes when textbook slide decks failed for weeks.',
        name: 'Arjun Sharma',
        role: 'Software Engineer',
        initials: 'AS',
        rating: 5,
      },
      {
        quote:
          'The synchronized line highlighting between the 3D bars and the C++ solution is unmatched. It feels like pair programming with a senior engineer.',
        name: 'Elena Rostova',
        role: 'CS Master’s Student',
        initials: 'ER',
        rating: 5,
      },
      {
        quote:
          'The AI tutor actually knows which array index is highlighted on my screen. It caught an off-by-one boundary bug in my Quick Sort partition instantly.',
        name: 'Devon Chen',
        role: 'Incoming SWE Intern',
        initials: 'DC',
        rating: 5,
      },
    ],
  },
  faq: {
    badge: 'Frequently Asked Questions',
    title: 'Everything You Need to Know',
    subtitle: 'Answers to common questions about Algorithm Studio, the visualizer, and the online judge.',
    items: [
      {
        question: 'What makes Algorithm Studio different from LeetCode or HackerRank?',
        answer:
          'Unlike traditional coding platforms that only check output strings, Algorithm Studio generates a deterministic semantic event stream that animates every step in 3D WebGL while highlighting the corresponding line of code in Python, C++, and Java.',
      },
      {
        question: 'Is Algorithm Studio free to use?',
        answer:
          'Yes! All 100 algorithms, 3D visualizers, practice editors, and test cases are completely free and open. You can explore everything as a guest, or create an account to track your progress and saved submissions.',
      },
      {
        question: 'Which programming languages can I practice in?',
        answer:
          'You can write and submit practice code in Python 3, C++ (C++17), and Java. Every algorithm problem includes pre-configured starter boilerplate and tested reference solutions in all three languages.',
      },
      {
        question: 'How does the context-aware AI tutor work?',
        answer:
          'When you ask a question in the AI Tutor tab, the platform supplies the active algorithm metadata, problem description, current visual step, and your editor code directly to the LLM so it can give targeted hints without giving away the entire solution.',
      },
      {
        question: 'Can I run Algorithm Studio on my own PC or offline?',
        answer:
          'Yes! Algorithm Studio is designed as a standalone full-stack repository. You can run the backend and frontend locally with one command, or build a single Docker container for production deployment.',
      },
      {
        question: 'What is the Spaced Repetition feature?',
        answer:
          'After practicing a problem, rate your recall confidence (Need to relearn, With help, On my own, Could teach it). Algorithm Studio calculates the optimal review interval (1, 3, 7, or 14 days) to ensure permanent memory retention.',
      },
    ],
  },
  finalCta: {
    headline: 'Ready to master algorithms in interactive 3D?',
    subtext:
      'Join thousands of learners building deep algorithmic intuition. Explore 100+ algorithms across 14 computer science topics today.',
    primaryCta: {
      text: 'Start Learning Now',
      link: '#catalog',
    },
    secondaryCta: {
      text: 'Explore Topic Catalog',
      link: '#catalog',
    },
  },
  footer: {
    description:
      'Algorithm Studio is an interactive learning platform where every algorithm is visualized in 3D, coded in Monaco, and supported by AI.',
    links: [
      {
        title: 'Platform',
        items: [
          { label: 'Algorithm Catalog', href: '#catalog' },
          { label: '3D Visualizer Lab', href: '/algorithms/bubble-sort' },
          { label: 'Interactive Lessons', href: '/learn/selection-sort' },
          { label: 'Dashboard', href: '/dashboard' },
        ],
      },
      {
        title: 'Curriculum',
        items: [
          { label: 'DSA Arrays & Sorting', href: '/?topic=arrays' },
          { label: 'Trees & Heaps', href: '/?topic=trees' },
          { label: 'Graph Algorithms', href: '/?topic=graphs' },
          { label: 'Dynamic Programming', href: '/?topic=dp' },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'GitHub Repository', href: 'https://github.com/Sidrameshg/algorithm-studio' },
          { label: 'Documentation', href: 'https://github.com/Sidrameshg/algorithm-studio#readme' },
          { label: 'API Swagger Docs', href: 'http://localhost:8000/docs' },
          { label: 'Health Status', href: 'http://localhost:8000/health' },
        ],
      },
    ],
  },
};
