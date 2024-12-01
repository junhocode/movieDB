import React, { useState } from 'react'
import Layout from './Layout/Layout'
import NewMovie from './components/common/NewMovie'
import MovieLog from './components/common/MovieLog';

interface Movie {
  id: number;
  title: string;
  rating: number;
}

const App = () => {

  const [movieLog, setMovieLog] = useState<Movie[]>([]);

  return (
    <>
    <Layout>
    <NewMovie movieLog={movieLog} setMovieLog={setMovieLog} />
    <MovieLog movieLog={movieLog} setMovieLog={setMovieLog} />
    </Layout>
    </>
  )
}

export default App;