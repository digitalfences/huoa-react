import React from 'react';
import Hero from 'components/Hero/Hero';

const Home = ({ data }) => {
  if (!data) return null;

  return (
    <>
      <Hero title={ data.hero_title } description={ data.hero_description } link={ data.hero_link }/>
      <h4>Landing</h4>
    </>
  );
};

export default Home;
