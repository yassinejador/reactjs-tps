import { useState } from "react";

export default function Projet({ projets, setProjets }) {
    const [projetsValue, setProjetsValue] = useState({ titre: "", description: "" }),
        [isAddVisible, setIsAddVisible] = useState(false),

        handlerChange = (e) => {
            var { name, value } = e.target;
            setProjetsValue({
                ...projetsValue,
                [name]: value 
            });
            console.log(projetsValue);
        },
        ajouterProjet = (e) => {
            e.preventDefault();
            if(projetsValue.titre!=="" || projetsValue.description!=="" ) {
                setProjets([...projets, projetsValue]);
                setProjetsValue({ titre: "", description: "" });
            } else {
                alert("le champ est vide!!")
            }
        }

    return (
        <div>
            <h1>Projets</h1>
            {projets.map((e, i) => (
                <div key={i}>
                    <p>
                        <b>{e.titre}</b>
                    </p>
                    <p>
                        <i>{e.description}</i>
                    </p>
                </div>
            ))}
            <br />
            {isAddVisible ?
                <>
                    <form action="">
                        <input type="text" name="titre"  placeholder="Titre" value={projetsValue.titre} onChange={handlerChange} /><br /><br />
                        <input type="text" name="description" placeholder="Description"  value={projetsValue.description} onChange={handlerChange} />
                        <button type="button" onClick={ajouterProjet}>Ajouter</button>
                        <button onClick={() => setIsAddVisible(false)}>&#10006;</button>
                    </form>
                </>
                : <><button onClick={() => setIsAddVisible(true)}>Ajouter</button></>
            }
        </div>
    )
}