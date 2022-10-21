import React from "react";
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div class='container'>
              <Link to ={"/"} class='navbar-brand'>MY BLOG</Link>
              <button
                  class='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
              >
                  <span class='navbar-toggler-icon'></span>
              </button>
      
              <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                  <Link to={'/posts/create'} class='btn btn-danger'>Create new post</Link>
                  <ul class='navbar-nav ml-auto'>
                      <li class='nav-item dropdown'>
                          <Link to={null}
                              class='nav-link dropdown-toggle'
                              id='navbarDropdown'
                              role='button'
                              data-toggle='dropdown'
                              aria-haspopup='true'
                              aria-expanded='false'
                          >
                              <img
                                  src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                                  alt='user'
                                  class='user-avatar'
                              />
                              Nguyen Anh Tuan
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
}