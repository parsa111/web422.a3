import React from "react";
import { Card, Button } from "react-bootstrap";

const About = () => {
    return ( <
        Card >
        <
        Card.Header as = "h5" > About me < /Card.Header> <
        Card.Body >
        <
        Card.Title > Parsa Parichehreh < /Card.Title> <
        Card.Text >
        I would like to be android developer and I create intersting apps. <
        /Card.Text> <
        Button

        //========================================================

        variant = "warning"
        href = "https://www.facebook.com/"
        className = "ml-2"

        >

        Facebook <
        /Button> <
        /Card.Body> <
        /Card>
    );
};

export default About;