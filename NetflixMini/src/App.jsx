import { useState, useEffect } from 'react'
// import './App.css'
import Rows from './components/Rows/Rows'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from './feature/movies/moviesSlice';
import Banner from './components/banner/Banner';
import Header from './components/head/Header';

function App() {
  const [count, setCount] = useState(0)
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [])
  
  const data=useSelector((state)=>state.movie.movies);
  // console.log(data);
  return (
    <>
    <div className='bg-black w-full min-h-screen overflow-hidden'>
      <Header/>
      <Banner/>
      <Rows title={"Upcoming"} data={data.upcoming} />
      <Rows title={"now playing"} data={data.nowPlaying} />
      <Rows title={"popular"} data={data.popular} />
      <Rows title={"top rated"} data={data.topRated} />
    </div>
    </>
  )
}

export default App
