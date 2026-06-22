import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Menu } from "@/components/Menu";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yoki Pizza 🍕 & Burger 🍔 — Wood-fired pizza & smashed burgers" },
      {
        name: "description",
        content:
          "Yoki Pizza & Burger — handcrafted wood-fired pizzas, smashed burgers, loaded sides. Order now: 0944 425 222.",
      },
      { property: "og:title", content: "Yoki Pizza 🍕 & Burger 🍔" },
      {
        property: "og:description",
        content: "Wood-fired pizzas, smashed burgers and loaded sides — made fresh, served fast.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <Menu />
      <Contact />
    </main>
  );
}
