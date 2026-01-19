import { Metadata } from "next";

// --------------------------------------------------------------
// SEO Metadata Interface
// --------------------------------------------------------------
interface PageMetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical: string;
  openGraph: {
    type: "website";
    locale: string;
    url: string;
    siteName: string;
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  twitter: {
    card: "summary_large_image";
    title: string;
    description: string;
    images: string[];
  };
  schema?: any;
}

// --------------------------------------------------------------
// Global SEO Configuration
// --------------------------------------------------------------
export const seoConfig: Record<string, PageMetadataConfig> = {
  home: {
    title: "Tic Tac Toe Game | Play Online for Free",
    description:
      "Play a fast, fun, and interactive Tic Tac Toe game online. Challenge a friend or test your strategy skills instantly.",
    keywords: [
      "tic tac toe",
      "tic tac toe online",
      "play tic tac toe",
      "classic tic tac toe game",
      "browser games",
    ],
    canonical: "https://tic-tac-toe-theta-six-56.vercel.app/",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://tic-tac-toe-theta-six-56.vercel.app/",
      siteName: "Tic Tac Toe Game",
      title: "Tic Tac Toe | Play Online",
      description:
        "Classic Tic Tac Toe game playable instantly in your browser.",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Tic Tac Toe Game",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Tic Tac Toe | Play Online",
      description: "Play the classic Tic Tac Toe game online for free.",
      images: ["/og-image.jpg"],
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      name: "Tic Tac Toe",
      applicationCategory: "Game",
      operatingSystem: "Web Browser",
      description: "A classic Tic Tac Toe game playable online.",
    },
  },

  start: {
    title: "Start Game | Tic Tac Toe",
    description:
      "Start playing Tic Tac Toe now. Choose your mode and begin the game instantly.",
    keywords: [
      "start tic tac toe",
      "tic tac toe play",
      "tic tac toe game start",
    ],
    canonical: "https://tic-tac-toe-theta-six-56.vercel.app/start",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://tic-tac-toe-theta-six-56.vercel.app/start",
      siteName: "Tic Tac Toe Game",
      title: "Start Tic Tac Toe Game",
      description: "Begin a new Tic Tac Toe match instantly.",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Start Tic Tac Toe Game",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Start Tic Tac Toe Game",
      description: "Start playing Tic Tac Toe instantly.",
      images: ["/og-image.jpg"],
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Game",
      name: "Tic Tac Toe – Start Game",
      description: "Start a new Tic Tac Toe game online.",
    },
  },
};
// --------------------------------------------------------------
// ⭐ Route → SEO key resolver
// --------------------------------------------------------------
export function resolveSeoKey(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname === "/start") return "start";

  // Default fallback
  return "home";
}
