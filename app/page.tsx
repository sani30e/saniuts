import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import Skills from "./components/skills";
import PersonalInfo from "./components/PersonalInfo";
import HobbiesGallery from "./components/HobbiesGallery";
import Rating from "./components/Rating";
import "./sani-style.css";

export default function CVOnline(){
  return(
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skills />
      <PersonalInfo />
      <HobbiesGallery />
      <Rating />
      </section>

  )
}

