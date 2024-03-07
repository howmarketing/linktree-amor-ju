/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other Next.js config options...

  // Configure manifest
  manifest: {
    // Specify the display mode (e.g., fullscreen, standalone, minimal-ui, browser)
    display: "fullscreen",

    // Specify the start URL when the app is launched from the home screen
    start_url: "/",

    // Specify the name of the app
    name: "@Jurizzogineco - LinkTree",

    // Specify the short name of the app (used on the home screen)
    short_name: "LinkTree",

    // Specify the background color of the app (optional)
    background_color: "#fbcfe8",

    // Specify the theme color of the app (optional)
    theme_color: "#f494bf",

    // Add icons for different resolutions
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};
export default nextConfig;
