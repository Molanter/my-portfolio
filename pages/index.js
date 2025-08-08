import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enableDark = stored ? stored === "dark" : prefersDark;
    setIsDark(enableDark);
    document.documentElement.classList.toggle("dark", enableDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // Simple scroll reveal for sections/cards
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            e.target.classList.remove("opacity-0", "translate-y-6");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>molanter — Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Edgars Yarmolatiy (molanter) — Developer • Problem Solver • Creative Thinker"
        />
        <link rel="icon" href="/Plastic%20Textures%201.jpg" />
      </Head>

      {/* Canvas */}
      <div className="relative min-h-screen text-gray-900 dark:text-gray-100">
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-cover bg-center bg-no-repeat bg-fixed bg-blend-overlay"
          style={{ backgroundImage: "url(/Plastic%20Textures%201.jpg)" }}
        />
        <div className="relative">
          {/* Nav */}
          <header className="sticky top-0 z-30">
            <div className="mx-auto max-w-6xl px-4 py-3">
              <div className="rounded-full backdrop-blur-2xl bg-white/30 dark:bg-white/10 border border-gray-200/60 dark:border-white/10 shadow-sm">
                <div className="flex items-center justify-between px-3 py-2">
                <a href="#" className="font-semibold tracking-tight text-xl">molanter</a>
                <nav className="hidden md:flex items-center gap-1">
                  {[
                    ["Projects", "#projects"],
                    ["Skills", "#skills"],
                    ["About", "#about"],
                    ["Contact", "#contact"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      className="inline-flex items-center rounded-full px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 transition"
                  >
                    Contact
                  </a>
                  <button
                    onClick={toggleTheme}
                    className="ml-1 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    aria-label="Toggle dark mode"
                    title="Toggle dark mode"
                  >
                    {isDark ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-90"><path fill="currentColor" d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79l1.8-1.79m10.48 0l1.79-1.79l1.79 1.79l-1.79 1.79l-1.79-1.79M12 4V1h-0v3h0m0 19v-3h-0v3h0M4 13H1v-0h3v0m19 0h-3v-0h3v0M6.76 19.16l-1.8 1.79l-1.79-1.79l1.79-1.79l1.8 1.79m10.48 0l1.79 1.79l1.79-1.79l-1.79-1.79l-1.79 1.79M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8Z" /></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-90"><path fill="currentColor" d="M12 2a9.99 9.99 0 0 0 0 20c5.52 0 10-4.48 10-10c0-1.02-.15-2-.43-2.93A8 8 0 0 1 12 20a8 8 0 0 1-6.95-11.9A10 10 0 0 0 12 2z" /></svg>
                    )}
                    <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </header>

          {/* Hero */}
          <main>
          <section className="mx-auto max-w-6xl px-4 pt-16 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              <div data-reveal className="lg:col-span-2 opacity-100 translate-y-0 transition duration-700">
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 px-3 py-1 text-xs text-gray-600 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  Available for internships & freelance
                </div>
                <div className="mt-5">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden ring-2 ring-white/40 dark:ring-white/10 shadow">
                    <Image
                      src="/me.jpg"
                      alt="Edgars Yarmolatiy portrait"
                      fill
                      sizes="628px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <h1 className="mt-6 text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
                  I’m Edgars. I build clean, useful software.
                </h1>

                <p className="mt-5 max-w-2xl text-gray-600 dark:text-gray-300">
                  Product-minded developer focused on iOS (SwiftUI + Firebase) and the web (Next.js + Tailwind). Simple, fast, reliable.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-6 py-3 font-medium hover:opacity-90 transition">
                    View Projects
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                    Get in touch
                  </a>
                </div>

                {/* Stats card */}
                <div className="mt-10 grid grid-cols-3 max-w-md text-center text-sm divide-x divide-gray-200 dark:divide-gray-800 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden backdrop-blur-2xl bg-white/30 dark:bg-white/10">
                  {[
                    ["Projects", "3"],
                    ["Stack", "SwiftUI • Firebase • Next.js"],
                    ["Location", "MN, USA"],
                  ].map(([label, value]) => (
                    <div key={label} className="px-3 py-4 min-w-0 flex flex-col items-center">
                      <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 w-full">
                        {label}
                      </div>
                      <div className="mt-1 font-medium break-words w-full">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>              {/* closes the first column */}
              {/* Hero card */}
              <div data-reveal className="opacity-100 translate-y-0 lg:col-span-1">
                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm hover:shadow-md transition backdrop-blur-2xl bg-white/30 dark:bg-white/10">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Currently focused on <strong>CrewClock</strong> and <strong>Campus Vibes</strong>.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {["SwiftUI", "Firebase", "FCM", "Next.js", "Tailwind"].map((t) => (
                        <span key={t} className="rounded-full border border-gray-300 dark:border-gray-700 px-2 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mx-auto max-w-6xl px-4 py-14">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Featured Projects</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">A couple things I’m proud of.</p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {/* CrewClock */}
              <article
                data-reveal
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition hover:-translate-y-0.5 hover:shadow-sm backdrop-blur-2xl bg-white/30 dark:bg-white/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">CrewClock</h3>
                  <span className="text-xs rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-1 ring-1 ring-gray-200 dark:ring-gray-700">
                    SwiftUI
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Time-tracking app for contractors with Firebase auth, push notifications, and Google Sheets export.
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <a
                    href="https://testflight.apple.com/join/HGnbyW2v"
                    className="font-medium text-sky-700 hover:underline dark:text-emerald-400"
                  >
                    Join testing
                  </a>
                  <a
                    href="https://github.com/Molanter/CrewClock.git"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                  >
                    GitHub →
                  </a>
                </div>
              </article>

              {/* Campus Vibes */}
              <article
                data-reveal
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition hover:-translate-y-0.5 hover:shadow-sm backdrop-blur-2xl bg-white/30 dark:bg-white/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">Campus Vibes</h3>
                  <span className="text-xs rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-1 ring-1 ring-gray-200 dark:ring-gray-700">
                    SwiftUI
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  App for connecting community on campuses, keeping track of events, and more. Currently in development.
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <a href="#" className="font-medium text-gray-500 cursor-default">
                    In development
                  </a>
                  <a
                    href="https://github.com/Molanter/Campus-Vibes.git"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                  >
                    GitHub →
                  </a>
                </div>
              </article>

              {/* Prayer's Navigator */}
              <article
                data-reveal
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition hover:-translate-y-0.5 hover:shadow-sm backdrop-blur-2xl bg-white/30 dark:bg-white/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">Prayer's Navigator</h3>
                  <span className="text-xs rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-1 ring-1 ring-gray-200 dark:ring-gray-700">
                    SwiftUI
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Mobile app to help users track and organize prayer requests with a simple and clear interface.
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <a
                    href="https://apps.apple.com/us/app/prayernavigator/id6472560887"
                    className="font-medium text-sky-700 hover:underline dark:text-emerald-400"
                  >
                    App Store
                  </a>
                  <a
                    href="https://github.com/Molanter/ChurchNotes.git"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                  >
                    GitHub →
                  </a>
                </div>
              </article>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
            <ul
              data-reveal
              className="opacity-100 translate-y-0 mt-6 flex flex-wrap gap-2 text-sm"
            >
              {[
                "SwiftUI",
                "Firebase",
                "Git & GitHub",
                "Adobe Apps",
                "Figma",
                "Play (iOS design app)",
                "Python",
                "Next.js",
              ].map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-gray-300 dark:border-gray-700 px-3 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 backdrop-blur-2xl bg-white/30 dark:bg-white/10"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          {/* About */}
          <section id="about" className="mx-auto max-w-6xl px-4 py-14">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-semibold tracking-tight">About</h2>
                <p
                  data-reveal
                  className="opacity-100 translate-y-0 mt-4 max-w-3xl text-gray-600 dark:text-gray-300"
                >
                  I’m Edgars Yarmolatiy — a CS student and builder. I enjoy designing straightforward, reliable
                  software. I came to the U.S. as a refugee from Ukraine and I’m grateful to create tools that help
                  people in everyday life. I focus on clarity, performance, and good UX.
                </p>
              </div>
              <div data-reveal className="opacity-100 translate-y-0">
                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 backdrop-blur-2xl bg-white/30 dark:bg-white/10">
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <div className="font-medium">Contact</div>
                    <div className="mt-2 space-y-1">
                      <a href="mailto:e.yarmolatiy@gmail.com" className="block hover:underline underline-offset-4">e.yarmolatiy@gmail.com</a>
                      <a href="https://github.com/Molanter" target="_blank" rel="noreferrer" className="block hover:underline underline-offset-4">github.com/Molanter</a>
                      <a href="https://www.linkedin.com/in/edgars-yarmolatiy-50b37a282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className="block hover:underline underline-offset-4">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 backdrop-blur-2xl bg-white/30 dark:bg-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight">Let’s work together</h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Want to collaborate, hire me, or just say hello?
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:e.yarmolatiy@gmail.com"
                    className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-6 py-3 font-medium hover:opacity-90 transition"
                  >
                    Email me
                  </a>
                  <a
                    href="https://github.com/Molanter"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/edgars-yarmolatiy-50b37a282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>
          </main>

          {/* Footer */}
          <footer className="border-t border-gray-200 dark:border-gray-700">
            <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-700 dark:text-gray-300">
              © {new Date().getFullYear()} molanter. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
