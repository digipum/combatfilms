export interface Video {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Documentary Feature' | 'Documentary Series' | 'Documentary Short' | 'Biography';
  videoType: 'youtube' | 'vimeo';
  videoId: string; // YouTube or Vimeo video ID
  description: string;
}

export const documentaryFeature: Video[] = [
  {
    id: "unfortunate-brothers",
    title: "Unfortunate Brothers – Korea's Reunification Dilemma",
    category: "Documentary Feature",
    videoType: "youtube",
    videoId: "hV3EGxlW-eo", // Example YouTube ID
    description: "An exploration of the complex reunification challenges facing North and South Korea through the lens of two brothers separated by war."
  },
  {
    id: "global-car",
    title: "Global Car",
    category: "Documentary Feature",
    videoType: "vimeo",
    videoId: "76979871", // Example Vimeo ID
    description: "An examination of globalization through the automotive global supply chain."
  },
  {
    id: "launch-pads",
    title: "Launch Pads and Lily Pads",
    category: "Documentary Feature",
    videoType: "youtube",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    description: "Explores how the US military adapts its force posture to meet new security challenges."
  },
  {
    id: "masses-to-masses",
    title: "From the Masses to the Masses",
    subtitle: "An Artist in Mao's China",
    category: "Documentary Feature",
    videoType: "vimeo",
    videoId: "76979871", // Replace with actual Vimeo ID
    description: "The story of Jin Zhilin, a Chinese artist whose career was dramatically altered by the currents that shaped Communist China."
  }
];

export const documentarySeries: Video[] = [
  {
    id: "fault-lines",
    title: "Fault Lines & Pipelines",
    category: "Documentary Series",
    videoType: "youtube",
    videoId: "yEMnTNz7Qas", // Example YouTube ID
    description: "A multi-part series exploring the conflicts and corruption in the Caucasus region."
  },
  {
    id: "arms-bazaar",
    title: "Arms Bazaar",
    category: "Documentary Series",
    videoType: "vimeo",
    videoId: "76979871", // Example Vimeo ID
    description: "A three-part inside look at the largest conventional arms show in the world."
  }
];

export const documentaryShort: Video[] = [
  {
    id: "fog-friction",
    title: "Fog and Friction",
    category: "Documentary Short",
    videoType: "youtube",
    videoId: "MqLzT7QeRqg", // Example YouTube ID
    description: "A glimpse into the decision making process at the height of battle and the media's ability to portray an accurate view of war."
  },
  {
    id: "ukraine-sonata",
    title: "Ukraine Sonata",
    category: "Documentary Short",
    videoType: "vimeo",
    videoId: "76979871", // Example Vimeo ID
    description: "Examines how Ukraine negotiated post-Soviet changes on a musical level."
  },
  {
    id: "chechnya",
    title: "Chechnya: Separatism or Jihad?",
    category: "Documentary Short",
    videoType: "youtube",
    videoId: "HG4jCJJTEzE", // Example YouTube ID
    description: "Examines the nature of Islam in the ongoing Chechen conflict."
  }
];

export const biography: Video[] = [
  {
    id: "helen-foster-snow",
    title: "Helen Foster Snow",
    subtitle: "Witness to Revolution",
    category: "Biography",
    videoType: "youtube",
    videoId: "S9BQ1Ub-MvI", // Example YouTube ID
    description: "The story of Helen Foster Snow's decade in China as a writer, activist, and witness to revolution."
  },
  {
    id: "virgin-soldiers",
    title: "Virgin Soldiers",
    category: "Biography",
    videoType: "vimeo",
    videoId: "76979871", // Example Vimeo ID
    description: "Follows India Company 3rd Battalion, 7th Marine regiment during the Iraq invasion."
  },
  {
    id: "kennedy-way",
    title: "The Kennedy Way",
    category: "Biography",
    videoType: "youtube",
    videoId: "QW9EJtJjIag", // Example YouTube ID
    description: "Explores the key values of David M. Kennedy's leadership style and global perspective."
  }
]; 