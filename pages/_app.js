import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Redirect to YouTube when the component mounts
    window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
