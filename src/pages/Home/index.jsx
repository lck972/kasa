import React from "react";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import LogementsMenu from "../../components/logements-menu";
import Header from "../../components/header";
import imgHomeBanner from "../../assets/IMG.png";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        <LogementsMenu />
      </main>
      <Footer />
    </div>
  );
};

export default Home;