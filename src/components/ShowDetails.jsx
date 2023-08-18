import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import '../styles/ShowDetails.css';

function ShowDetails() {
  const showsData = useSelector((state) => state.show.shows);
  const { id } = useParams();
  const parsedId = parseInt(id, 10);
  const specificData = showsData.filter((item) => item.id === parsedId);
  const navigate = useNavigate();
  return (
    <div className="show-details-main-container">
      <button
        onClick={() => navigate('/')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            navigate('/');
          }
        }}
        role="link"
        tabIndex={0}
        className="back-btn"
        type="button"
      >
        <FontAwesomeIcon icon={faBackward} className="back-icon" />
                &nbsp; Back to home
      </button>
      {
        specificData.map((show) => (
          <div key={show.id} className="all-parts">
            <div className="details-img">
              <img
                src={show.image}
                alt={show.name}
              />
              <div className="title">
                {show.name}
                &apos;s details
              </div>
            </div>
            <div className="details-container">
              <ul className="details-info">
                <li className="details-item">
                  <span className="details-name">Name</span>
                  <span className="details-response">{show.name}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">Day</span>
                  <span className="details-response">{show.day}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">Language</span>
                  <span className="details-response">{show.language}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">Genres</span>
                  <span className="details-response">{show.genres.join(' | ')}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">Rating : </span>
                  <span className="details-response">{show.rating}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">Time</span>
                  <span className="details-response">{show.time}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">Popularity/Weight</span>
                  <span className="details-response">{show.popularity}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">Runtime</span>
                  <span className="details-response">{show.runtime}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">Average Runtime</span>
                  <span className="details-response">{show.averageRunTime}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">Start</span>
                  <span className="details-response">{show.started}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">End</span>
                  <span className="details-response">{show.ended}</span>
                </li>

              </ul>
            </div>
          </div>
        ))
        }
    </div>
  );
}

export default ShowDetails;
