
import './Navbar.css'; 
import logoMoodSwitch from './logos/logoMoodSwitch.png';


export const Navbar = () => {
    return (
        // <nav id='navbarDesign' className="navbar navbar-expand-lg navbar-light bg-light"  style={{fontSize:'20px', height: '90px' }}>
        //     <a className="navbar-brand" href="#">Navbar</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //     <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup"  >
        //     <div className="navbar-nav" id='navbarContent'>
        //         <a className="nav-item nav-link active" style={{color:'white'}} href="#">Home <span className="sr-only"></span></a>
        //         <a className="nav-item nav-link" style={{color:'white'}} href="#">Journal</a>
        //         <a className="nav-item nav-link" style={{color:'white'}} href="#">Habits</a>
        //         <a className="nav-item nav-link me-auto" style={{color:'white'}} href="#">Additional Resources<i className="fas fa-user"></i></a>
        //     </div>
        //     </div>
        //     </nav>
    <nav id='navbarDesign'  class="navbar navbar-expand-md navbar-dark bg-dark" style={{fontSize:'20px', height: '90px', boxShadow:'0px 2px 10px 0px rgba(178, 176, 176, 0.66)'}}>
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav me-auto" style={{whiteSpace:'nowrap'}}>
        <li class="nav-item">
            <a className="nav-item nav-link" style={{color:'white', fontWeight: '700', marginRight:'60px'}} href="#"><img src={logoMoodSwitch} style={{width: '80px', marginRight: '10px'}}></img> Mood Switch</a>
            </li>
            <li class="nav-item">
            <a className="nav-item nav-link" style={{color:'white', marginRight:'20px', fontSize: '18px', marginTop: '3px'}} href="#">Journal</a>
            </li>
            <li class="nav-item">
            <a className="nav-item nav-link" style={{color:'white', marginRight:'20px', fontSize: '18px', marginTop: '3px'}} href="#">Habits</a>
            </li>
            <li class="nav-item">
            <a className="nav-item nav-link me-auto" style={{color:'white', marginRight:'20px', fontSize: '18px', marginTop: '3px'}} href="#">Additional Resources</a>
            </li>
        </ul>
    </div>
    <div class="mx-auto order-0">
        
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ms-auto">
          
            <li class="nav-item">
                <a class="nav-link" href="#" style={{marginRight: '30px', color:'white'}}><i className="fas fa-user"></i></a>
            </li>
        </ul>
    </div>
</nav>
    )
}