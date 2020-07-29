import React from "react"
import { withPrefix, Link } from "gatsby"
import AOS from "aos"
import Index from "."

class Animations extends React.Component{
    componentDidMount = () => {
        const isBrowser = typeof window !== "undefined";
        const AOS = isBrowser ? require("aos") : undefined;

        this.aos = AOS;
        this.aos.init();
    }

    componentDidUpdate = () => {
        this.aos.refresh();
    }
}