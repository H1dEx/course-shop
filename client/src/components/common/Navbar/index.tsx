import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Button} from "../Button";
import {AuthContext} from "../../context/AuthContext";
import {ProfileIcon} from "../Icons/ProfileIcon";

export function Navbar() {
    const history = useHistory()
    const {isAuth, logout} = useContext(AuthContext)
    const logoutHandler = () => {
        logout();
        history.push('/');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    COURSE SHOP
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link"
                                to="/categories"
                            >
                                CATEGORIES
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/source">
                                SOURCES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/archive">
                                ALL COURSES
                            </Link>
                        </li>
                    </ul>

                    {isAuth
                        ? (<>
                            <Button
                                color="dark"
                                clickHandler={logoutHandler}
                            >
                                Logout
                            </Button>
                            <Link to="/profile">
                                <ProfileIcon/>
                            </Link>
                        </>)
                        : (<>
                            <Link
                                to="/api/auth/sign-up"
                                className="btn btn-outline-warning my-2 my-sm-0 mr-2"
                                type="submit"
                            >
                                SIGN UP
                            </Link>
                            <Link
                                to="/api/auth/sign-in"
                                className="btn btn-dark my-2 my-sm-0"
                                type="submit"
                            >
                                SIGN IN
                            </Link>
                        </>)
                    }
                </div>
            </div>
        </nav>
    )
}
