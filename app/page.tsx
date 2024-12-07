import HeroSection from "./component/dashboard/herosection/hero";
import NavBar from "./component/dashboard/navbar/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <NavBar prop={{prop:false}}/>
      <HeroSection />
    </div>
  );
}
