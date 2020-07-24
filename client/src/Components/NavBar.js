import React from 'react';

const NavBar = () =>{
    return (
<container>
<nav className="d-flex flex-column flex-sm-row navbar navbar-expand-md navbar-dark bg-dark justify-content-between">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#left-sidebar" aria-controls="left-sidebar" aria-expanded="false" aria-label="Toggle sidebar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <a className="navbar-brand" href="index.html">
      ToDoManager
      </a>
      
      <form className="form-inline my-lg-0 mx-auto d-none d-sm-block w-50" action="#" role="search" aria-label="Quick search">
        <input  className="form-control w-100" type="search" placeholder="Search" aria-label="Search query"/>
      </form>

      <div className="navbar-nav ">
        <a className="nav-item nav-link" href="/#">
          <svg className="bi bi-people-circle" width="30" height="30" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z"/>
            <path fillRule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clipRule="evenodd"/>
          </svg>
        </a>
      </div>
    
    </nav>
</container>



        // <nav
        //         className="d-flex flex-column flex-sm-row navbar navbar-expand-md navbar-dark bg-dark justify-content-between"
        //       >
        //         <div>
        //           <h4 className="h4 text-white todo">
        //             <span className="">ToDoManager</span>
        //             <i className="fas fa-clipboard-list logo todo"></i>
        //           </h4>
        //         </div>
        //         <a
        //           className="navbar-toggler"
        //           type="button"
        //           data-toggle="collapse"
        //           data-target="#left-sidebar"
        //           href="#"
        //         >
        //           <span className="white">ToDoManager</span>
        //           <i className="fas fa-clipboard-list logo"></i>
        //         </a>
        //         <div style="width: 50%;">
        //           <form className="form-inline" action="">
        //             <input
        //               className="form-control form-control-sm w-100"
        //               type="text"
        //               placeholder="Search"
        //             />
        //           </form>
        //         </div>
        //         <div className="logo">
        //           <i className="fas fa-user-circle"></i>
        //         </div>
        //       </nav>
    );
}

export default NavBar;