import { useEffect, useState } from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Movie from "../component/Movie";
import Detail from "../routes/Detail";
import "./Home.css";

SwiperCore.use([EffectCoverflow, Pagination]);
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=7&limit=40`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>
          <div className="loder"></div>
          <h1 className="load">loading...</h1>
        </div>
      ) : (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          <nav>
            <h1 className="logo">SH Movie SAP</h1>
          </nav>
          <div className="bodyWrapper">
            {movies.map((movie) => (
              <SwiperSlide>
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverimage={movie.medium_cover_image}
                  title={movie.title}
                  rating={movie.rating}
                  date={movie.date_uploaded}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      )}
    </div>
  );
}

export default Home;
