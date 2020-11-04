import Garden from "../components/home/Garden";
import HomeHero from "../components/home/HomeHero";
import Kindergaten from "../components/home/Kindergaten";
import Massage from "../components/home/Massage";
import Restaurant from "../components/home/Restaurant";
import ServicesList from "../components/home/ServicesList";
import Team from "../components/home/Team";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ServicesList />
      <Garden />
      <Massage />
      <Team />
      <Kindergaten />
      <Restaurant />
    </>
  );
}
