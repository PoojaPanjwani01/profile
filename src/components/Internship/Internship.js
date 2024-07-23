import React from "react";
import classes from "./internship.module.css";
import CompanyImg from "../../Data/companyLogo.png";
import Card from "../UI/Card";
import InternshipData from "../../Data/InternshipData";
import { useSelector } from "react-redux";

function Internship(props) {
    const uiColor = useSelector(state => state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.internshipMain}>
            <h1 style={{ color: nonThemeColor }}>
                Internship Experience
            </h1>
            <div className={classes.internshipCard}>
                <div className={`${classes.internshipImage} centered`} style={{borderColor:uiColor}}>
                    <img src={CompanyImg} alt="internship" srcSet="" />
                </div>
                <Card className={classes.internshipWrapper}>
                    <div className={classes.internshipInfo}>
                        <h3 style={{ color: nonThemeColor }}>{InternshipData.startDate} - {InternshipData.endDate}</h3>
                        <h1 style={{ color: uiColor }}>{InternshipData.companyName}</h1>
                        <h2 style={{ color: nonThemeColor }}>{InternshipData.position}</h2>
                    </div>
                    <ul className={classes.details}>
                        {InternshipData.description.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </Card>
            </div>
        </div>
    )
}

export default Internship;
