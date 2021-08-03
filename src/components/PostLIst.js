import { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchPostAndUsers } from '../actions';

//Components
import UserHeader from './UserHeader';

const PostLIst = props => {
  const { posts, fetchPostAndUsers } = props;

  useEffect(() => {
    fetchPostAndUsers();
  }, [fetchPostAndUsers]);

  //==== Jsx ====//
  //Post List
  const postListEl = posts.map(el => (
    <div className="item" key={el.id}>
      <i className="large middle aligned icon user" />
      <div className="content">
        <div className="description">
          <h2>{el.title}</h2>
          <p>{el.body}</p>
        </div>
        <UserHeader userId={el.userId} />
      </div>
    </div>
  ));

  return <div className="ui relaxed divided list">{postListEl}</div>;
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPostAndUsers })(PostLIst);
