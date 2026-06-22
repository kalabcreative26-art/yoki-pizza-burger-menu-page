import { motion } from "framer-motion";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card/80 p-8 backdrop-blur-xl sm:p-12"
        >
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-flame">
              Get in touch
            </span>
            <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">
              Hungry? <span className="text-gradient-flame">Let's talk.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Place your order, ask about catering, or just say hi.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <motion.a
              href="tel:0944425222"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 rounded-2xl bg-gradient-flame p-5 shadow-glow"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-foreground/15">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">
                  Call Now
                </p>
                <p className="truncate font-display text-xl font-bold text-primary-foreground">
                  0944 425 222
                </p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/zeaman97?igsh=MWRybXM2cXYzZTZkYg=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-flame/60"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-tr from-ember via-flame to-cheese">
                <Instagram className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Follow us
                </p>
                <p className="truncate font-display text-xl font-bold">@zeaman97</p>
              </div>
            </motion.a>
          </div>

          <div className="mt-6 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-4">
              <MapPin className="h-5 w-5 shrink-0 text-flame" />
              <span>Visit us in town — open daily</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-4">
              <Clock className="h-5 w-5 shrink-0 text-flame" />
              <span>Mon – Sun · 11:00 AM – 11:00 PM</span>
            </div>
          </div>
        </motion.div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yoki Pizza 🍕 & Burger 🍔 — Made with fire.
        </p>
      </div>
    </section>
  );
}
