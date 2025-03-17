import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Home({ setTitle }) {
    useEffect(() => {
        setTitle("Home");
        document.title = "Home - My Website";
    }, [setTitle]);

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to my website!</p>

            <Link to="/second-page">
                Go to Second Page
            </Link>
        </div>
    )
}

Home.propTypes = {
    setTitle: PropTypes.func.isRequired
};