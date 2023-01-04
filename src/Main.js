import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Media from "./Media";

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1 className="logo">F4SHO</h1>
                    <h3 className="logo2">Fashion Show</h3>
                    <h4 className="byline">Not a DJ.</h4>

                    <ul className="header">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/media">Media</Link></li>
                    </ul>

                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/contact" element={<Contact />}/>
                            <Route path="/media" element={<Media />}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;