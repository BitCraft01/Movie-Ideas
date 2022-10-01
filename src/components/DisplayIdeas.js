import React, {useState} from 'react'

function DisplayIdeas(props) {
    let crazyIdeas = props.ideas.map(idea => <li>{idea}</li>)
    
    return (
        <div>
            <h2>{props.ideas}</h2>
            <ul>{crazyIdeas}</ul>
        </div>
    )
}

export default DisplayIdeas