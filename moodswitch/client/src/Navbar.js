
import './Navbar.css'; 

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">Home <span className="sr-only"></span></a>
                <a className="nav-item nav-link" href="#">Journal</a>
                <a className="nav-item nav-link" href="#">Habits</a>
                <a className="nav-item nav-link" href="#">Additional Resources<i class="fas fa-user"></i></a>
            </div>
            </div>
            </nav>
    )
}