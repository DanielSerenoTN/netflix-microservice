import ReviewEntity from '../entity/review.entity';
import ReviewDto from '../../application/model/review.dto';
export default interface IReviewRepository {
  create(review: ReviewDto): Promise<ReviewEntity>;
}
