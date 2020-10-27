import Head from "next/head";
import styles from "../styles/Home.module.css";
import data from "../data.yaml";
import Publications from "../components/Publications";
import Experiences from "../components/Experiences";
import Education from "../components/Education";
export const Home = () => (
  <>
    <h1>Jacob Clarke</h1>
    <div>
Over the last few years, I have worked in several fields related to music, meidicine, and cycling. I am currently studying at St. Louis University School of Medicine as a prospective MD candidate and spend my free time exploring St. Louis bike trails and city parks with my wife Amanda.</div>
    <Publications pubs={data.publications} />
    <Experiences experiences={data.experiences} />
    <Education education={data.education} />
  </>
);

export default Home;
