/**
 * App.jsx  —  Root component
 *
 * This file does exactly three things:
 *   1. Holds page-level state (scroll position, hero animation trigger)
 *   2. Wires up scroll listeners and anchor navigation
 *   3. Composes sections in order
 *
 * It contains NO inline styles, NO SVGs, NO hardcoded copy.
 * If this file grows past ~80 lines, something belongs in a child component.
 */

import { useState, useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { colors, typography } from "./styles/tokens";

import Nav from "./components/sections/Nav";
import Hero from "./components/sections/Hero";
import WhyVaneExists from "./components/sections/WhyVaneExists";
import HowItWorks from "./components/sections/HowItWorks";
import Waitlist from "./components/sections/Waitlist";
import Footer from "./components/sections/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [heroVis, setHeroVis] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Slight delay ensures the animation always plays on first load
    const timer = setTimeout(() => setHeroVis(true), 80);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      style={{
        fontFamily: typography.fontFamily,
        background: colors.bgBase,
        color: colors.textPrimary,
        lineHeight: 1.6,
        overflowX: "hidden",
        minWidth: 0,
      }}
    >
      <GlobalStyles />

      <Nav scrolled={scrolled} />

      <main>
        <Hero
          heroVis={heroVis}
          onGetAccess={() => scrollTo("waitlist")}
          onSeeHow={() => scrollTo("howItWorks")}
        />
        <WhyVaneExists />
        <HowItWorks />
        <Waitlist />
      </main>

      <Footer />
    </div>
  );
}
