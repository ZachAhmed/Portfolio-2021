import React from "react"

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

export default Animations