import Hero from "./components/Hero";
import Background from "./components/Background"; 

export default function Home() {
  return (
    <main className="min-h-screen relative text-white">
      
      <Background />

      <div className="relative z-10">
        <Hero />
      </div>

    </main>
  );
}