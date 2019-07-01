import React from 'react';
import testImg from '../../static/image/IMG_2102.JPG';

function Article() {
    return (
        <article className="card">
            <div className="card-img">
                <img src={ testImg } alt="background" height="250" width="100%"/>
            </div>
            <div className="card-content">
                <span>What possessed Matt Green to walk every single street in New York City?</span>
            </div>
        </article>
    );
};

export default Article;