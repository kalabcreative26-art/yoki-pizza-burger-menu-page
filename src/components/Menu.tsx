import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import pizza from "@/assets/pizza.png";
import burger from "@/assets/burger.png";
import fries from "@/assets/fries.png";
import drink from "@/assets/drink.png";

type Category = "All" | "Pizzas" | "Burgers" | "Sides" | "Drinks";

type Item = {
  id: string;
  name: string;
  category: Exclude<Category, "All">;
  price: string;
  description: string;
  image: string;
};

const ITEMS: Item[] = [
  { id: "p1", name: "Margherita Classica", category: "Pizzas", price: "$12", description: "San Marzano, mozzarella, basil.", image: pizza },
  { id: "p2", name: "Pepperoni Inferno", category: "Pizzas", price: "$14", description: "Spicy pepperoni, chili honey.", image: pizza },
  { id: "p3", name: "Truffle Funghi", category: "Pizzas", price: "$16", description: "Mushroom medley, truffle oil.", image: pizza },
  { id: "b1", name: "Yoki Smash", category: "Burgers", price: "$10", description: "Double smash patty, cheddar, house sauce.", image: burger },
  { id: "b2", name: "Bacon Blaze", category: "Burgers", price: "$12", description: "Crispy bacon, jalapeño, chipotle mayo.", image: burger },
  { id: "b3", name: "Crispy Chicken", category: "Burgers", price: "$11", description: "Buttermilk chicken, slaw, pickles.", image: burger },
  { id: "s1", name: "Loaded Fries", category: "Sides", price: "$6", description: "Melted cheese, bacon bits, scallions.", image: fries },
  { id: "s2", name: "Classic Fries", category: "Sides", price: "$4", description: "Golden, crispy, sea-salted.", image: fries },
  { id: "d1", name: "Iced Cola", category: "Drinks", price: "$3", description: "Ice cold, fizzy refreshment.", image: drink },
  { id: "d2", name: "Sparkling Lemon", category: "Drinks", price: "$3", description: "Fresh-squeezed lemon soda.", image: drink },
];

const CATEGORIES: Category[] = ["All", "Pizzas", "Burgers", "Sides", "Drinks"];

export function Menu() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(
    () => (active === "All" ? ITEMS : ITEMS.filter((i) => i.category === active)),
    [active],
  );

  return (
    <section id="menu" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-flame">
            Our Menu
          </span>
          <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">
            Crafted with <span className="text-gradient-flame">fire</span> &{" "}
            <span className="text-gradient-cheese">cheese</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Pick your category. Every item is made fresh to order.
          </p>
        </div>

        {/* Category filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold transition ${
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="cat-pill"
                    className="absolute inset-0 rounded-full bg-gradient-flame shadow-glow"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <FoodCard key={item.id} item={item} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FoodCard({ item, index }: { item: Item; index: number }) {
  const isPizza = item.category === "Pizzas";
  const isBurger = item.category === "Burgers";

  return (
    <motion.article
      layout
      initial={
        isPizza
          ? { opacity: 0, x: -60, rotate: -20 }
          : isBurger
          ? { opacity: 0, y: -60, scale: 0.8 }
          : { opacity: 0, y: 30 }
      }
      animate={
        isBurger
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 1, x: 0, y: 0, rotate: 0 }
      }
      exit={{ opacity: 0, scale: 0.8 }}
      transition={
        isBurger
          ? { type: "spring", stiffness: 260, damping: 12, delay: index * 0.05 }
          : { type: "spring", stiffness: 80, damping: 14, delay: index * 0.05 }
      }
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:border-flame/60 hover:shadow-ember"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-flame/10 blur-2xl transition group-hover:bg-flame/25" />

      <div className="relative mx-auto flex h-44 items-center justify-center">
        <motion.img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={768}
          height={768}
          className="h-44 w-44 object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]"
          animate={
            isPizza
              ? { rotate: [0, 360] }
              : isBurger
              ? { y: [0, -8, 0] }
              : { y: [0, -4, 0] }
          }
          transition={
            isPizza
              ? { duration: 22, repeat: Infinity, ease: "linear" }
              : { duration: 3 + (index % 3), repeat: Infinity, ease: "easeInOut" }
          }
          whileHover={
            isPizza
              ? { scale: 1.1 }
              : isBurger
              ? { scale: 1.15, y: -10 }
              : { scale: 1.1, rotate: -6 }
          }
        />
      </div>

      <div className="relative mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-bold">{item.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
        </div>
        <span className="shrink-0 rounded-full bg-gradient-flame px-3 py-1 text-sm font-bold text-primary-foreground shadow-glow">
          {item.price}
        </span>
      </div>
    </motion.article>
  );
}
