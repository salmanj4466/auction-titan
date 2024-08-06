import WorldTopRanking from "./Components/Common/WorldTopRanking";
import Articles from "./Components/Home/Articles";
import CompanyBrands from "./Components/Home/CompanyBrand";
import Hero from "./Components/Home/Hero";
import LiveTournament from "./Components/Home/LiveTournament";
import Newsletter from "./Components/Home/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Newsletter />
      <LiveTournament />
      <CompanyBrands />
      <WorldTopRanking />
      <Articles />
    </main>
  );
}
