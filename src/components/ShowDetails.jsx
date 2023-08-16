import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ShowDetails() {
    const showsData = useSelector((state)=>state.show.shows);
    const {id}= useParams();
    const parsedId = parseInt(id, 10);
    const specificData = showsData.filter((item)=> item.id === parsedId);
    
return (
    <div>
        {
        specificData.map((show) => (
            <p>{show.name}</p>
        ))
        }
    </div>
    )
}


// function stripHtmlTags(html) {
//   const tempElement = document.createElement('div');
//   tempElement.innerHTML = html;
//   return tempElement.textContent || tempElement.innerText || '';
// }


export default ShowDetails