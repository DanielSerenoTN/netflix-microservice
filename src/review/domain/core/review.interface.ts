import ReviewEntity from '../entity/review.entity';
import ReviewDto from '../../application/model/review.dto';
export default interface IReviewRepository {
  createReview(review: ReviewDto): Promise<ReviewEntity>;
}
