import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ShowsContainer.css';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fetchShow } from '../redux/Show/ShowSlice';

function ShowsContainer() {
  const dispatch = useDispatch();
  const showsData = useSelector((state) => state.show.shows);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = showsData.filter((item) =>
  // eslint-disable-next-line
  item.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
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
            value={searchTerm}
            onChange={handleSearch}
            type="search"
            className="search-box"
            placeholder="Search by show name e.g(the 100)"
          />
        </form>
      </div>

      <div className="cards-container">
        {filteredData.map((item) => (
          <div className="show-card" key={item.id}>
            <div className="card-img" style={{ backgroundImage: `url(${item.image})` }}>
              {/* <Link
                to={item.url}
                target="_blank"
                rel="noopener noreferrer"
                role="link"
                tabIndex="0"
              > */}
              {/* <img
                  src={item.image}
                  alt="show-imgs"

                /> */}
              {/* </Link> */}
              <Link to={`/showDetails/${item.id}`}>
                <FontAwesomeIcon icon={faCircleArrowRight} className="next-icon" />
              </Link>
            </div>
            <div className="home-details">
              <p className="name">
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
