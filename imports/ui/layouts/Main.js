import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

class MainLayout extends Component {
    render() {
        return (
            <div className="row flex-xl-nowrap no-gutters">
                <div className="col-12 col-md-3 col-xl-2 sidebar">
                    <Sidebar />
                </div>

                <main className="col-12 col-md-9 col-xl-10 bd-content">
                    <Header client={this.props.client} />
                    {this.props.children}
                </main>

                <Footer />
            </div>
        );
    }
}
export default MainLayout;
