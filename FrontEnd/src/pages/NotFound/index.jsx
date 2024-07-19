import { Link } from "react-router-dom"

function NotFound() {
    return (
        <>
            <h2>404 not found!</h2>
            <Link to={"/"}>
                Volte para a página inicial
            </Link>
        </>
    )
}

export default NotFound