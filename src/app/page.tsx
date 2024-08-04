import WorldTopRanking from "./Components/Common/WorldTopRanking";
import Hero from "./Components/Home/Hero";
import LiveTournament from "./Components/Home/LiveTournament";
import Newsletter from "./Components/Home/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Newsletter />
      <LiveTournament />
      <WorldTopRanking />
    </main>
  );
}
