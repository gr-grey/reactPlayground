import React from 'react'
import { IconHome, IconDotsVertical, IconHelp, IconShare, IconBrandGithub } from '@tabler/icons-react';
import '@tabler/core/dist/css/tabler.min.css'

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
          <h2 className="page-title" style={{ display: 'inline-block' }}>Sequence Browser </h2>
          {/* <div className="position-absolute top-2 start-50 translate-middle-x" style={{ zIndex: 1 }}>
            <h2 className="page-title" style={{ display: 'inline-block' }}>Sequence Browser </h2>
          </div> */}
          <div className="col"></div>
          <div className="col-auto">
            <a href="#" className="btn" aria-label="Button">
              <IconHelp /> Help </a>
            <a href="#" className="btn" aria-label="Button">
              <IconShare /> Share </a>
            <a href="https://github.com/jzhoulab/puffin" className="btn btn-github">
              <IconBrandGithub /> Github </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App
