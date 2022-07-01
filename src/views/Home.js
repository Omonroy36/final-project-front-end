import React from "react";
import Article from "../components/Article";

const Home = () => {
    return 
        <>
        <Article
        title='Como convertirse en desarrollador'
        text='Un texto muy largo va a ir aqui'
    />
    <Article
        title='Como convertirse en desarrollador'
        text='Un texto muy largo va a ir aqui'
        subText='Este seria el subtext del artículo'
    />
    </>

}

export default Home;