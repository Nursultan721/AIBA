import { Header, Banner, About, College, School,KinderGarden, Awards } from "@/widgets";

export function HomePage() {
  return (
    <div className="content-wrap">
      <Header />
      <Banner />
      <About />
      <College />
      <School />
      <KinderGarden />
      <Awards />
    </div>
  );
}
