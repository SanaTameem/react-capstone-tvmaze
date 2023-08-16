import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ShowsContainer.css';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fetchShow } from '../redux/Show/ShowSlice';

function ShowsContainer() {
  const dispatch = useDispatch();
  const showsData = useSelector((state) => state.show.shows);
  useEffect(() => {
    if (showsData.length === 0) {
      dispatch(fetchShow());
    }
  }, [dispatch]);

  return (
    <div className="main-container">
      <div className="search-bar">
        <form className="form">
          <input
            type="search"
            className="search-box"
            placeholder="Search by show name"
          />
        </form>
      </div>

      <div className="cards-container">
        {showsData.map((item) => (
          <div className="show-card" key={item.id}>
            <div className="card-img">
              <img src={item.image} alt="show-imgs" />
              <Link to={`/showDetails/${item.id}`}>
                <FontAwesomeIcon icon={faCircleArrowRight} className="next-icon" />
              </Link>
            </div>
            <div className="home-details">
              <p className="name">
                Name :
                {' '}
                {item.name}
              </p>
              <p className="rating">
                Rating :
                {' '}
                {item.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowsContainer;
