import { useState } from "react";

export default function Competance({ competances, setCompetance }) {
    const [competanceValue, setCompetanceValue] = useState(""),
        [isAddVisible, setIsAddVisible] = useState(false),
        ajouterCompetance = (e) => {
            e.preventDefault();
            if (competanceValue !== "") {
                setCompetance([...competances, competanceValue]);
                setCompetanceValue("");
            } else {
                alert("le champ est vide!!")
            }
        }

    return (
        <div>
            <h1>Competances</h1>
            {competances.map((competance, i) => (
                <i key={i}>- {competance}&ensp;</i>
            ))}
            <br />
            {isAddVisible ?
                <>
                    <form action="">
                        <input type="text" name="competance" value={competanceValue} onChange={(e) => setCompetanceValue(e.target.value)} />
                        <button type="button" onClick={ajouterCompetance}>Ajouter</button>
                    </form>
                    <button onClick={() => setIsAddVisible(false)}>&#10006;</button>
                </>
            :<><br /><button  onClick={() => setIsAddVisible(true)}>Ajouter</button></>
            }
        </div>
    )
}