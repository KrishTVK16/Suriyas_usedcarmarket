// Utility script to help update theme colors
// This file is for reference - actual updates are done via search_replace

// Color mapping:
// var(--midnight-black) -> var(--bg-primary) for main backgrounds
// var(--asphalt-gray) -> var(--bg-secondary) for card/secondary backgrounds  
// var(--smoke-white) -> var(--text-primary) for main text
// var(--smoke-white) with opacity -> var(--text-secondary) for secondary text

export const themeColorMap = {
  '--midnight-black': '--bg-primary',
  '--asphalt-gray': '--bg-secondary',
  '--smoke-white': '--text-primary'
};

