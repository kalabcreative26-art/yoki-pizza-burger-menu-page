import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import pizza from "@/assets/pizza.png";
import burger from "@/assets/burger.png";
import fries from "@/assets/fries.png";
import drink from "@/assets/drink.png";

type Category = "All" | "Breakfast" | "Wraps" | "Burgers" | "Pizzas" | "Drinks";

type Item = {
  id: string;
  name: string;
  category: Exclude<Category, "All">;
  price: string;
  description: string;
  image: string;
};

const ITEMS: Item[] = [
  // Breakfast
  { id: "bf1", name: "Omelet", category: "Breakfast", price: "350", description: "Fluffy farm-fresh eggs, herbs.", image: fries },
  { id: "bf2", name: "Fetira", category: "Breakfast", price: "350", description: "Flaky layered breakfast pastry.", image: fries },
  { id: "bf3", name: "Scrambled Eggs", category: "Breakfast", price: "300", description: "Soft, buttery scramble.", image: fries },
  { id: "bf4", name: "Egg Sandwich", category: "Breakfast", price: "300", description: "Toasted bun, egg, fresh veg.", image: burger },

  // Wraps
  { id: "w1", name: "Chicken Wrap", category: "Wraps", price: "500", description: "Grilled chicken, garlic sauce, crunch.", image: burger },
  { id: "w2", name: "Beef Wrap", category: "Wraps", price: "500", description: "Seasoned beef, peppers, herbs.", image: burger },
  { id: "w3", name: "Veggie Wrap", category: "Wraps", price: "400", description: "Crisp veggies, hummus, greens.", image: burger },
  { id: "w4", name: "Tuna Wrap", category: "Wraps", price: "500", description: "Tuna, sweetcorn, creamy dressing.", image: burger },

  // Burgers
  { id: "b1", name: "Special Burger", category: "Burgers", price: "750", description: "Yoki's signature stacked smash.", image: burger },
  { id: "b2", name: "Double Burger", category: "Burgers", price: "900", description: "Two juicy patties, double cheese.", image: burger },
  { id: "b3", name: "Chicken Burger", category: "Burgers", price: "650", description: "Crispy chicken, slaw, house sauce.", image: burger },
  { id: "b4", name: "Beef Burger", category: "Burgers", price: "600", description: "Classic beef patty, fresh veg.", image: burger },
  { id: "b5", name: "Cheese Burger", category: "Burgers", price: "650", description: "Melted cheddar over smashed beef.", image: burger },

  // Pizzas
  { id: "p1", name: "Special Pizza", category: "Pizzas", price: "800", description: "Loaded with the chef's favorites.", image: pizza },
  { id: "p2", name: "Chicken Pizza", category: "Pizzas", price: "700", description: "Grilled chicken, mozzarella, herbs.", image: pizza },
  { id: "p3", name: "Beef Pizza", category: "Pizzas", price: "700", description: "Spiced beef, onions, peppers.", image: pizza },
  { id: "p4", name: "Margarita Pizza", category: "Pizzas", price: "600", description: "Tomato, mozzarella, fresh basil.", image: pizza },
  { id: "p5", name: "Half & Half Pizza", category: "Pizzas", price: "700", description: "Two flavors on one pie.", image: pizza },
  { id: "p6", name: "Ai Tuna Pizza", category: "Pizzas", price: "750", description: "Tuna, onions, mozzarella.", image: pizza },
  { id: "p7", name: "Tuna Fasting", category: "Pizzas", price: "600", description: "Fasting-friendly tuna pizza.", image: pizza },
  { id: "p8", name: "Vegetable Pizza", category: "Pizzas", price: "600", description: "Garden veggies, melted cheese.", image: pizza },

  // Drinks
  { id: "d1", name: "Orange Juice", category: "Drinks", price: "300", description: "Fresh-squeezed orange.", image: drink },
  { id: "d2", name: "Papaya Juice", category: "Drinks", price: "250", description: "Smooth tropical papaya.", image: drink },
  { id: "d3", name: "Pineapple Juice", category: "Drinks", price: "250", description: "Sweet & tangy pineapple.", image: drink },
  { id: "d4", name: "Mango Juice", category: "Drinks", price: "250", description: "Rich ripe mango blend.", image: drink },
  { id: "d5", name: "Soft Drink", category: "Drinks", price: "80", description: "Ice-cold classic fizz.", image: drink },
  { id: "d6", name: "Soft Drink (P)", category: "Drinks", price: "100", description: "Premium size soft drink.", image: drink },
  { id: "d7", name: "Water", category: "Drinks", price: "60", description: "Chilled bottled water.", image: drink },
];

const CATEGORIES: Category[] = ["All", "Breakfast", "Wraps", "Burgers", "Pizzas", "Drinks"];

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
