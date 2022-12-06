import React from "react";
import { Link } from 'react-router-dom';

function NavHeader() {
    return(
        <div>
            <nav class="navbar navbar-expand-lg" id="mainNav">
                <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="navUL">
                    <Link to="/">
                        <li class="nav-item">
                            <a class="nav-link active text-info fs-2" aria-current="page" href="#" id="navButtons">Home</a>
                        </li>
                    </Link>
                    <Link to="drawing">
                        <li class="nav-item">
                            <a class="nav-link active text-info fs-2" aria-current="page" href="#" id="navButtons">Drawing</a>
                        </li>
                    </Link>
                    
                </ul>

                </div>
                </div>
            </nav>
        </div>
    );
}

export default NavHeader;