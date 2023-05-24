import { Header } from "../../components/header";
import { Middle } from "../../components/middle";
import { Footer } from "../../components/footer";

export const Main: React.FC = () => {
  return (
    <div className="mainContent">
      <Header />
      <Middle />
      <Footer />
    </div>
  );
};
