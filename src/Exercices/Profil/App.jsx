import "./App.css";
import Profile from "./Components/Profil";

export default function App() {
    return (
        <div className="App">
            <Profile
                imgSrc={require("./Assets/imgs/idea.jpg")}
                imgAlt={"Aklilu Lemma"}
                about={"Aklilu Lemma was a distinguished Ethiopian scientist who discoered a natural treatment to schistosomiasis"}
            />
        </div>
    );
}
