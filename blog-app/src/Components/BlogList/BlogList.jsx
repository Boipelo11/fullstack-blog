import PropTypes from 'prop-types';
import '../../Components/BlogList/BlogList.css';
import BlogItem from '../../Components/BlogList/BlogItem/BlogItem';
import  '../../Constants/constants'

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

BlogList.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      authorName: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BlogList;
