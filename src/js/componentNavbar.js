import React from 'react';

const Navbar=(props)=>{
    const styleV = {
        height: 1
    }
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top header">
            <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <img src={require("../img/logo1.png")} style={{height:50,float:'left'}}/>
          <a className="navbar-brand" href="#">
          耀迪助手</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse" aria-expanded="false" style={styleV}>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">关于</a></li>
            <li><span className="glyphicon glyphicon-user" aria-hidden="true"></span></li>
            <li><a href="#"><span className="glyphicon glyphicon-off" aria-hidden="true"></span></a></li>
          </ul>
        </div>
      </div>
        </nav>
    );
}

export default Navbar;