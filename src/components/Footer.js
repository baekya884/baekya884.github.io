import React from "react";

export default () => {
    return (
        <footer style={{marginTop: "10px"}}>
            made by chpark
            © {new Date().getFullYear()}, Built with
            {` `}Gatsby
        </footer>
    );
}