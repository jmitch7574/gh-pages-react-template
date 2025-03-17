import PropTypes from "prop-types";


const Header = ({ title }) => {
    return (
        <header className="header">
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;