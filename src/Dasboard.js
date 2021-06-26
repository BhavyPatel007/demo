import React from 'react'
import Slider from './Slider'
const Dasboard = () => {
    return (
        <div>

            {/* <Slider /> */}
            <div className="main-panel">
                <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
                    <div className="container-fluid">
                        <div className="navbar-wrapper">
                            <div className="navbar-toggle">
                                <button type="button" className="navbar-toggler">
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <a className="navbar-brand" href="javascript:;">Paper Dashboard 2</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navigation">
                            <form>
                                <div className="input-group no-border">
                                    <input type="text" value="" className="form-control" placeholder="Search..." />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <i className="nc-icon nc-zoom-split"></i>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link btn-magnify" href="javascript:;">
                                        <i className="nc-icon nc-layout-11"></i>
                                        <p>
                                            <span className="d-lg-none d-md-block">Stats</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item btn-rotate dropdown">
                                    <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="nc-icon nc-bell-55"></i>
                                        <p>
                                            <span className="d-lg-none d-md-block">Some Actions</span>
                                        </p>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn-rotate" href="javascript:;">
                                        <i className="nc-icon nc-settings-gear-65"></i>
                                        <p>
                                            <span className="d-lg-none d-md-block">Account</span>
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card ">
                                <div className="card-header ">
                                    <h5 className="card-title">Users Behavior</h5>
                                    <p className="card-category">24 Hours performance</p>
                                </div>
                                <div className="card-body ">
                                    {/* <canvas id="chartHours" width="400" height="100"></canvas> */}
                                </div>
                                <div className="card-footer ">
                                    <hr />
                                    <div className="stats">
                                        <i className="fa fa-history"></i> Updated 3 minutes ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-body ">
                                    <div className="row">
                                        <div className="col-5 col-md-4">
                                            <div className="icon-big text-center icon-warning">
                                                <i className="nc-icon nc-globe text-warning"></i>
                                            </div>
                                        </div>
                                        <div className="col-7 col-md-8">
                                            <div className="numbers">
                                                <p className="card-category">Capacity</p>
                                                <p className="card-title">150GB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer ">
                                    <hr />
                                    <div className="stats">
                                        <i className="fa fa-refresh"></i>
                                        Update Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dasboard
