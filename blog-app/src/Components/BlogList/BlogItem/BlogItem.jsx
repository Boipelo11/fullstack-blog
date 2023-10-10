import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Chip from '../../Chip/Chip';
import './BlogItem.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogItem;
