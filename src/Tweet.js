import React from 'react';
import './App.css';

function Tweet({uname, content}) {

    var notLiked = true;
    let count = 0;

    const like = ({uname, content}) => {

        let add = document.getElementById('add');
        let display = document.getElementById('display');
        if (notLiked) {
            count++;

            display.innerHTML = " " + count;
            add.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='#f82c24' class='bi bi-heart-fill' viewBox='0 0 16 13'><path fill-rule='evenodd' d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'/></svg>";
            notLiked = false;
        }
        else if (!notLiked) {
            count--;
            display.innerHTML = " " + count;
            add.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='grey' class='bi bi-heart' viewBox='0 0 16 13'><path d='m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z'/></svg>";
            notLiked = true;
        }
        if (display.innerHTML === " 0") {
            display.innerHTML = " ";
        }
    }

    return (
        <div class='container'>
            

            {/* <input type="text" placeholder="Enter your tweet" />
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="dodgerblue" class="bi bi-plus-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
        <p/> */}

            <div id="box">
                <span class="uname">@{uname}</span><br />
                <span class="content">{content}</span><br />
                <button onClick={like}>
                    <span id="add">
                        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='grey' class='bi bi-heart' viewBox='0 0 16 13'><path d='m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z' />
                        </svg>
                    </span>
                </button>
                <span id='display'></span>
            </div>
        </div>
    );
}

export default Tweet;