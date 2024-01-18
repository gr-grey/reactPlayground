import React from 'react'
import { IconHome, IconDotsVertical, IconHelp } from '@tabler/icons-react';

// import './index.css'

const App = () => (
  <div id="page1">
    <div id="bannerTitle" className="navbar-expand-md d-none d-md-block">
      <div className="page-header page-header-border">
        <div className="row align-items-center">
          <div className="col-auto">
            <a href="#" className="btn" aria-label="Button"> <IconHome /> Home </a>
            <a href="https://zhoulab.io/software" className="btn" aria-label="Button">
              <IconDotsVertical /> More </a>
          </div>
          <div className="position-absolute top-2 start-50 translate-middle-x" style={{ zIndex: 1 }}>
            <h2 className="page-title" style={{ display: 'inline-block' }}>Sequence Browser </h2>
          </div>
          <div className="col"></div>
          <div className="col-auto">
            <a href="#" className="btn" aria-label="Button">
              <IconHelp /> Help </a>
            <a href="#" className="btn" aria-label="Button">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-share" width="24" height="24"
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="18" cy="18" r="3"></circle>
                <line x1="8.7" y1="10.7" x2="15.3" y2="7.3"></line>
                <line x1="8.7" y1="13.3" x2="15.3" y2="16.7"></line>
              </svg>
              Share
            </a>
            <a href="https://github.com/jzhoulab/puffin" className="btn btn-github">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24"
                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                </path>
              </svg>
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App
