import MovieEntity from '../entity/movie.entity';
import MovieDto from '../../application/model/movie.dto';
import UpdateMovieDto from '../../../movie/application/model/movie.update.dto';
export default interface IMovieRepository {
  create(movie: MovieDto): Promise<MovieEntity>;
  update(movie: UpdateMovieDto): Promise<MovieEntity>;
  getById(id: string): Promise<MovieEntity>;
}
