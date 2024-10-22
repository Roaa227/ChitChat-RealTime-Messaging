
import logo from '/logoo.png';


export const Topbar = () => {
    return (
  <nav className ="navbar" style={{ backgroundColor:'#DFDCF2', borderRight:'1px solid #9049bf' }}>
        <div className ="container-fluid">
          <a className="navbar-brand" style={{color:'#9049BF' , backgroundColor:'#DFDCF2'}} href="#">
            <img src={logo} alt="Logo" width="10%" className="d-inline-block align-text-top me-2" />
            CHITCHAT
          </a>
        </div>
      </nav>
    );
}

export default Topbar;