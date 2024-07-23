import React, { Fragment } from "react";
import InternshipImg from "../asset/internship.png"; 
import InternshipData from "../../Data/InternshipData";
import Internship from "./Internship"; 
import classes from "./education.module.css";
import { useSelector } from "react-redux";

function Education(props) {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);

    const technologiesUsed = InternshipData.technologiesUsed;
    return (
        <Fragment>
            <div className={classes.educationHeader} id="internship">
                <div className={classes.eduImg}>
                    <img src={InternshipImg} alt="internship" />
                </div>
                <div className={classes.educationCard}>
                    <h1 style={{ color: uiColor }}>Internship</h1>
                    <div className={classes.codingInfo}>
                        {
                            technologiesUsed.map((item, index) =>
                                <div key={index} className={classes.progressBar}>
                                    <label htmlFor={item.name}>{item.name}</label>
                                    <progress id={item.name} value={item.percentDone} max="100"></progress>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <Internship />
        </Fragment>
    )
}
export default Education;
