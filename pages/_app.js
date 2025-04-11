import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Redirect to YouTube when the component mounts
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
