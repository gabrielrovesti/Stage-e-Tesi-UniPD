import React from "react";


const Navbar = ({ walletAddress }) => {
  return (
    <>
      <header>
        <nav>
          <div className="leftNav">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M2 20h20v2H2v-2zm2-8h2v7H4v-7zm5 0h2v7H9v-7zm4 0h2v7h-2v-7zm5 0h2v7h-2v-7zM2 7l10-5 10 5v4H2V7zm10 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="rgba(255,255,255,1)" /> 
            </svg>
            <p className="logo inline">DecentralBank</p>
          </div>
          <div>
            <strong className="white">
              User: <strong className="light">{walletAddress}</strong>
            </strong>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
