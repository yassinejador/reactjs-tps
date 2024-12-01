import { useState } from "react";

export default function Experience({ experiences, setExperiences }) {
    const [experiencesValue, setExperiencesValue] = useState({ titre: "", description: "" }),
        [isAddVisible, setIsAddVisible] = useState(false),

        handlerChange = (e) => {
            var { name, value } = e.target;
            setExperiencesValue({
                ...experiencesValue,
                [name]: value 
            });
            console.log(experiencesValue);
        },
        ajouterExperience = (e) => {
            e.preventDefault();
            if(experiencesValue.titre!=="" || experiencesValue.description!=="" ) {
                setExperiences([...experiences, experiencesValue]);
                setExperiencesValue({ titre: "", description: "" });
            } else {
                alert("le champ est vide!!")
            }
        }

    return (
        <div>
            <h1>Experiences</h1>
            {experiences.map((e, i) => (
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
                        <input type="text" name="titre"  placeholder="Titre" value={experiencesValue.titre} onChange={handlerChange} /><br /><br />
                        <input type="text" name="description" placeholder="Description"  value={experiencesValue.description} onChange={handlerChange} />
                        <button type="button" onClick={ajouterExperience}>Ajouter</button>
                        <button onClick={() => setIsAddVisible(false)}>&#10006;</button>
                    </form>
                </>
                : <button onClick={() => setIsAddVisible(true)}>Ajouter</button>
            }
        </div>
    )
}