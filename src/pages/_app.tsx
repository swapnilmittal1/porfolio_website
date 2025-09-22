import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import "@/styles/locomotive-scroll.css";

import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme') || 
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.setAttribute('data-theme', theme);
            })();
          `,
        }}
      />
      <ThemeProvider>
        <div lang={"en"} className={dmSans.className}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
