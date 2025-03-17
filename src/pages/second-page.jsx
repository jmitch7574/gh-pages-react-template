import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SecondPage({ setTitle }) {
    useEffect(() => {
        setTitle("Second Page");
        document.title = "Second Page - My Website";
    }, [setTitle]);

    return (
        <div>
            <h1>Second Page</h1>
            <p>Here is a second page</p>


            <Link to="/">
                Go to Home Page
            </Link>
        </div>
    )
}

SecondPage.propTypes = {
    setTitle: PropTypes.func.isRequired
};