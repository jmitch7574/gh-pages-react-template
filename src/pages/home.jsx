import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Home({ setTitle }) {
    useEffect(() => {
        setTitle("Home");
        document.title = "Home - My Website";
    }, [setTitle]);

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to my website!</p>
        </div>
    )
}

Home.propTypes = {
    setTitle: PropTypes.func.isRequired
};