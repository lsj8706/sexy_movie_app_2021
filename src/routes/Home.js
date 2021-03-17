import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{
  //state 가 필요하기때문에 class로 만들었다.
  state = {
    isLoading: true,
    movies:[]
  };
  //변할수 있는 정보들은 state에 넣어야함
  getMovies = async () =>{
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false })
    //this.setState({movies:momvies, isLoading: false})와 동일하게 동작함 es6기능 =>movies리스트를 state 안에 있는 movies에 넣음
  }
//async 와 await는 함수를 비동기로 만들어줌 =>해당 명령이 수행 완료 될 때까지 기다리라는 오더
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading , movies} = this.state;
    return (<section className="container">
      {isLoading? (
      <div className="loader">
        <span className="loader_text">Loading....</span>
      </div>
      ):(
        <div className="movies">
          {movies.map(movie=> (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>)
  }
}

export default Home;