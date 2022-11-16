import React from 'react';
import './App.css';

function Tweet() {

    var isLiked = true;

    const like = () => {
        let count = 0;
        if (isLiked) {
            count++;
            let display = document.getElementById('display');
            display.innerHTML = count;
            isLiked = false;
        }
    }

    return (
        <div class='container'>
            <h1>Twitter</h1><br />
            
            <div id="box">
                This is your Tweet<br />
                <button onClick={like}>Like</button>
                <span id='display'></span>
            </div>
        </div>
    );
}

export default Tweet;