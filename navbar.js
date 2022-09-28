
function NavBar(){
  
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-transparent">
      <div class="container">
      <a className="navbar-brand" href="#">CyberBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={setActive}>Homepage</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" onClick={setActive}>Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" onClick={setActive}>Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" onClick={setActive}>Withdraw</a>
          </li>         
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" onClick={setActive}>AllData</a>
          </li>        
        </ul>
      </div>
      </div>
    </nav>
    </>
  );
}