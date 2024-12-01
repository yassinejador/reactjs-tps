import Footer from "./Footer";
import Header from "./Header";
import Competance from "./Competance";
import Experience from "./Experience";
import Projet from "./Projet";
import Propos from "./Propos";
import { useState } from "react";
export default function Portfolio() {
    const [competances, setCompetance] = useState(["Java", "C", "Go",]),
        [propos, setPropos] = useState("Je suis un développeur logiciel, spécialité back-end"),
        [experiences, setExperiences] = useState([{"titre": "Full Stack dev","description":"Developed a comprehensive conference management platform with focus on the code quality and software engineering best practices, utilizing Laravel framework."}]),
        [projets, setProjets] = useState([{"titre": "GIT","description":"Developed a Next GIT Technology"}]);

    return (
        <div style={{ padding: "5px" }}>
            <Header />
            <Propos propos={propos} setPropos={setPropos} />
            <Competance competances={competances} setCompetance={setCompetance} />
            <Experience experiences={experiences} setExperiences={setExperiences}/>
            <Projet projets={projets} setProjets={setProjets}/>
            <Footer />
        </div>
    )
}