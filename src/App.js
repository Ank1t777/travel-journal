import React from "react"
import NavBar from "./NavBar"
import Card from "./Card"
import data from "./data"
import "./style.css"
export default function App()
{
    const cards = data.map(item => {
        return(
            <Card
                key={item.id}
                {...item} 
            />
        )
    })
    return (
        <div className="main-container">
            <NavBar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    );
};