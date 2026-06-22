import { motion } from "framer-motion";
import { Flame, Sparkles } from "lucide-react";
import pizza from "@/assets/pizza.png";
import burger from "@/assets/burger.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* glow orbs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-flame/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-ember/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="h-3 w-3 text-cheese" />
            Freshly fired, daily.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
            className="mt-5 font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Wood-fired{" "}
            <span className="text-gradient-flame">Pizza</span>
            <br />
            Smashed{" "}
            <span className="text-gradient-cheese">Burgers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg"
          >
            Yoki Pizza 🍕 & Burger 🍔 — handcrafted, irresistibly cheesy, and
            ready in minutes. One bite and you're hooked.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-flame px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 hover:scale-105"
            >
              <Flame className="h-4 w-4" /> Explore the Menu
            </a>
            <a
              href="tel:0944425222"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-card"
            >
              Order: 0944 425 222
            </a>
          </motion.div>
        </div>

        {/* Floating food stack */}
        <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[520px]">
          {/* Pizza spinning */}
          <motion.img
            src={pizza}
            alt="Hot pizza"
            initial={{ opacity: 0, scale: 0.6, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="absolute left-0 top-0 h-72 w-72 drop-shadow-[0_30px_50px_rgba(255,120,40,0.45)] sm:h-80 sm:w-80"
            style={{ animation: "spin 30s linear infinite" }}
            width={768}
            height={768}
          />
          {/* Burger bouncing */}
          <motion.img
            src={burger}
            alt="Juicy burger"
            initial={{ opacity: 0, y: -120 }}
            animate={{
              opacity: 1,
              y: [0, -18, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
            }}
            whileHover={{ scale: 1.08, rotate: -4 }}
            className="absolute -bottom-2 right-0 h-64 w-64 cursor-pointer drop-shadow-[0_30px_50px_rgba(220,60,40,0.45)] sm:h-72 sm:w-72"
            width={768}
            height={768}
          />
        </div>
      </div>
    </section>
  );
}
