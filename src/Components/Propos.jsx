import { useState } from "react";

export default function Propos({ propos, setPropos }) {
    const [proposValue, setProposValue] = useState(""),
        [isAddVisible, setIsAddVisible] = useState(false),
        ajouterPropos = (e) => {
            e.preventDefault();
            if (proposValue !== "") {
                setPropos(proposValue);
                setProposValue("");
            }
        }
    return (
        <div>
            <h2>
                A propos de moi
            </h2>
            <p>
                {propos}
            </p>
            <br />
            {isAddVisible ?
                <>
                    <form action="">
                        <input type="text" name="competance" value={proposValue} onChange={(e) => setProposValue(e.target.value)} />
                        <button type="button" onClick={ajouterPropos}>Modifier</button>
                    </form>
                    <button onClick={() => setIsAddVisible(false)}>&#10006;</button>
                </>
                : <button onClick={() => setIsAddVisible(true)}>Modifier</button>
            }
        </div>
    )
}