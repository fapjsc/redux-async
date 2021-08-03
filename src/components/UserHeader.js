import { connect } from 'react-redux';

const UserHeader = ({ user }) => {
  return <div>{user && user.name}</div>;
};

// 這裏的props指向UserHeader的props
const mapStateToProps = (state, props) => {
  return {
    user: state.users.find(el => el.id === props.userId),
  };
};

export default connect(mapStateToProps)(UserHeader);
