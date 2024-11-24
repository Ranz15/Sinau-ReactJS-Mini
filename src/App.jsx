import { useEffect, useState } from "react";
import { getMovies, searchMovie } from "./component/Api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./App.css";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovies().then((result) => {
      setMovieList(result);
    });
  }, []);

  const search = async (e) => {
    if (e.length > 3) {
      const query = await searchMovie(e);
      setMovieList(query.results);
    }
  };

  const showSwal = () => {
    Swal.fire("Login Success");
  };

  // console.log({ movie: movieList });

  const CardMovieList = () => {
    return movieList.map((movie, i) => {
      return (
        <>
          <div className="card card-side bg-base-100 shadow-xl w-[550px]">
            <figure className="w-40">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
              <p>Release Movie : {movie.release_date}</p>
              <p>Vote Movie : {movie.vote_average}</p>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div className="container">
        <header className="mb-10 flex flex-col justify-center items-center mt-6 gap-5">
          <h1 className="text-3xl font-bold underline">Ranz Movie Everytime</h1>
          <input
            type="text"
            placeholder="Cari Film..."
            onChange={({ target }) => {
              search(target.value);
            }}
          />
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-neutral"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Login
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <form action="#">
                <div className="flex gap-2">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" id="username" />
                </div>
                <div className="flex gap-2 mt-5">
                  <label htmlFor="Password">Password</label>
                  <input type="password" name="Password" id="Password" />
                </div>
              </form>
              <div className="my-4">
                <button className="btn btn-primary" onClick={showSwal}>
                  Primary
                </button>
              </div>
            </div>
          </dialog>
        </header>
        <div className="flex flex-wrap gap-5 mx-5 my-3">
          <CardMovieList />
        </div>
      </div>
    </>
  );
};

export default App;
