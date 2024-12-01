import React from "react";
import { FaCopyright } from "react-icons/fa6";

export default function Footer() {
    return (
        <React.Fragment>
            <br />
            <div style={{ backgroundColor: "black", color: "white", textAlign: "center", fontFamily: "arial", padding: "20px", fontSize: "25px", borderRadius: "20px" }}>
                <FaCopyright /> 2024 Mon Portfolio
            </div>
        </React.Fragment>
    )
}