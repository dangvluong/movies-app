import React from 'react';
import Hero from '../hero/Hero';

Home.propTypes = {};

function Home({ movies }) {
  return <Hero movies={movies}></Hero>;
}

export default Home;
