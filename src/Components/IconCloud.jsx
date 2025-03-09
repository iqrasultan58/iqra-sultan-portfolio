import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

// Helper function to render each icon with custom styling based on the theme
export const renderCustomIcon = (icon) => {
  // Adjusting colors for dark mode
const theme="dark";

  const bgHex = theme === "dark" ? "#1e1e1e" : "#f3f2ef"; // Dark background for dark mode
  const fallbackHex = theme === "dark" ? "#ffffff" : "#6e6e73"; // darker fallback color for dark mode
  const minContrastRatio = theme === "dark" ? 2 : 1.2; // Higher contrast for dark mode

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 60,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export function IconCloud() {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "dark" : "dark");
  };

  // Define the slugs for the technologies and platforms
  const iconSlugs = [
    "mongodb", "express", "react", "node-dot-js", // MERN stack
    "html5", "css3", "tailwindcss", "material-ui", // HTML, CSS, Tailwind, Material UI
    "vercel", "linkedin", "canva", "git", "github", "gitlab", "bitbucket", // Platforms
    "javascript", "next-dot-js" // JavaScript and Next.js
  ];

  // useEffect with an empty dependency array to fetch data only once on mount
  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs })
      .then((fetchedData) => {
        // Only update state if data changes to prevent infinite loop
        if (JSON.stringify(fetchedData) !== JSON.stringify(data)) {
          setData(fetchedData);
        }
      })
      .catch((error) => console.error("Error fetching icons:", error));
  }, []); // Empty dependency array means this runs only once when the component mounts

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "dark") // Default to dark mode if no theme is set
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}
