import React from "react";

export function Header() {
  return (
    <nav classname="navbar navbar-dark navbar-expand-lg">
      <div classname="container">
        <a classname="navbar-brand" href>
          BookWithMe
        </a>
        <form classname="form-inline my-2 my-lg-0">
          <input
            classname="form-control mr-sm-2 bwm-search"
            type="search"
            placeholder="Try ' new york'"
            aria-label="Search"
          />
          <button
            classname="btn btn-outline-success my-2 my-sm-0 btn-bwm-search"
            type="submit"
          >
            Search
          </button>
        </form>
        <button
          classname="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classname="navbar-toggler-icon" />
        </button>
        <div classname="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div classname="navbar-nav ml-auto">
            <a classname="nav-item nav-link active" href>
              Login <span classname="sr-only">(current)</span>
            </a>
            <a classname="nav-item nav-link" href>
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
