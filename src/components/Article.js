import React from 'react';

const Article = ({ title, text }) => {
    return <article>
        <h1>{title}</h1>
        <hr />
        <p>{text}</p>
    </article>
}

export default Article;