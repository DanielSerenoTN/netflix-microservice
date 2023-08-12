import MovieEntity from '../entity/movie.entity';
import MovieDto from '../../application/model/movie.dto';
export default interface IMovieRepository {
  createMovie(movie: MovieDto): Promise<MovieEntity>;
}
