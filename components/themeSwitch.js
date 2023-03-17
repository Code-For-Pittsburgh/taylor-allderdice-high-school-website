// import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeSwitch = () => {
  //   const [mounted, setMounted] = useState(false);
  //   const { resolvedTheme, setTheme } = useTheme();
  const { theme, setTheme } = useTheme();
  // useEffect only runs on the client, so now we can safely show the UI
  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);

  //   if (!mounted) {
  //     return null;
  //   }

  return (
    <button
      type="button"
      className="flex items-center justify-center w-10 h-10 focus:outline-none    "
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-black" />
      )}
    </button>
  );
};

export default ThemeSwitch;
