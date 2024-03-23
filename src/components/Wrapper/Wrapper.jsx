import React from 'react';
import Nav from "../shared/Nav/Nav";
import Header from "../shared/Header/Header";

const Wrapper = ({children, ...props}) => {
    return (
        <div className="wrapper">
            <Nav/>
            <div className="wrapperContent">
                <Header/>
                <div className="MainContent">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Wrapper;