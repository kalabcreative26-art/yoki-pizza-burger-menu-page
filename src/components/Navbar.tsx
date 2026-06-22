import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Pizza } from "lucide-react";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 14 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <motion.span
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
            className="grid h-9 w-9 place-items-center rounded-full bg-gradient-flame shadow-glow"
          >
            <Pizza className="h-5 w-5 text-primary-foreground" />
          </motion.span>
          <span className="font-display text-lg font-bold tracking-tight">
            Yoki <span className="text-gradient-flame">Pizza</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#menu" className="text-muted-foreground transition hover:text-foreground">Menu</a>
          <a href="#about" className="text-muted-foreground transition hover:text-foreground">About</a>
          <a href="#contact" className="text-muted-foreground transition hover:text-foreground">Contact</a>
        </div>

        <a
          href="tel:0944425222"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-flame px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
        >
          <Phone className="h-4 w-4 transition group-hover:animate-pulse" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </nav>
    </motion.header>
  );
}
