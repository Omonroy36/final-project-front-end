import React from 'react';

const Article = ({ title, text, subText }) => {
    return <article>
        <h1>{title}</h1>
        <hr />
        <p>{text}</p>
        <p>{subText}</p>

    </article>
}

export default Article;