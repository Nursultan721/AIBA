import { HomePage } from "@/pages/home";
import { Footer } from "@/widgets";
import "@/shared/fonts/index.scss";
import "@/shared/styles/index.scss";

export function App() {
  return (
    <div className="page-containers">
      <HomePage />
      <Footer />
    </div>
  );
}
