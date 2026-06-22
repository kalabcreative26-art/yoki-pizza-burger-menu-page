import { motion } from "framer-motion";
import { Flame, Clock, Leaf } from "lucide-react";

const FEATURES = [
  { icon: Flame, title: "Wood-Fired", text: "Every pizza kissed by real wood flame for an unmistakable crust." },
  { icon: Clock, title: "Fast & Fresh", text: "From order to bite in under 15 minutes. Speed without shortcuts." },
  { icon: Leaf, title: "Local Ingredients", text: "Sourced from local farms — flavors that taste like the neighborhood." },
];

export function Features() {
  return (
    <section id="about" className="bg-card/40 px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 80 }}
            className="rounded-3xl border border-border bg-card p-6 transition hover:border-flame/50"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-flame shadow-glow">
              <f.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
