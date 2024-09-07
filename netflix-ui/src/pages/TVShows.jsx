import React, { useState,useEffect } from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { getGenres,fetchMovies } from '../store';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';


function TVShows() {
    const [isScrolled, setisScrolled] = useState(false);
    const navigate = useNavigate();
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
    const movies = useSelector((state) => state.netflix.movies)
    const genres = useSelector((state) => state.netflix.genres);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getGenres());
    },[])

    useEffect(() => {
      if(genresLoaded) dispatch(fetchMovies({ type: "tv" }));
    }, [genresLoaded])

    window.onscroll = () => {
        setisScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    return (
        <Container>
        <div className="navbar">
          <Navbar isScrolled={isScrolled} />
        </div>
        <div className="data">
          <SelectGenre genres={genres} type="tv" />
          {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
        </div>
      </Container>
    )
}

const Container = styled.div`
.data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;

export default TVShows;
