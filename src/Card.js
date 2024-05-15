import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
    return(
        <div className="card">
            <img src={props.img} className="card--image" alt="location"/>
            <div className="card--journal">
                <div className="card--location">
                    <FontAwesomeIcon icon={faLocationDot} className="location--icon"/>
                    <span className="card--place">{props.place}</span>
                    <span className="gray"> <a className="gray" href={props.googleMaps} target="_blank" rel="noopener noreferrer">view on google maps</a></span>
                </div>
                <h2>{props.location}</h2>
                <div className="card--end">
                    <span className="bold">{props.date}</span>
                    <p className="card--paragraph">{props.description}</p>
                </div>
            </div>
        </div>
    )
}
