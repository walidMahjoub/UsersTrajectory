import React from "react";
import ReactDOM from "react-dom";
import style from './index.scss'

const Index = () => {
    return <div className={style.main}>Hello!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
