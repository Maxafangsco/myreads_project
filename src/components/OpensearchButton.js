import { Link } from "react-router-dom"
const OpenSearchButton = () =>{
    return (
        <div className="open-search">
            <Link to="search">
                <button>add a Book</button>
            </Link>

        </div>
    )
}