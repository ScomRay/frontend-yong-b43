import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { _returnTimeAgoStamp } from './TimeUtil';
import { postComment } from '../actions/postData';
class FeedContent extends React.Component {
  state = { showReplies: false };
  _renderPostHeader() {
    const { timeNum, timeUnit } = _returnTimeAgoStamp(
      this.props.content.timestamp
    );
    const ownPost = this.props.uID === this.props.content.authorID;
    return (
      <div class="row">
        <div class="col-lg-1 col-md-1 col-sm-1">
          <img
            src={
              ownPost ? this.props.currentUser.profilePic : faker.image.avatar()
            }
            class="avatar-post"
            alt="avatar"
          />
        </div>
        <div class="col-lg-10 col-md-10 col-sm-10">
          <Link
            class="text-vertical-align"
            to={`/user/${this.props.content.authorID}`}
          >
            {this.props.content.authorName}
          </Link>
          <br />
          <span class="text-vertical-align time-stamp">
            {timeNum} {timeUnit} ago
          </span>
        </div>
        <div class="col-lg-1 col-md-1 col-sm-1">
          <span class="glyphicon glyphicon-option-vertical" />
        </div>
      </div>
    );
  }
  _renderPostContent() {
    return (
      <div class="row minor-padding">
        <div>{this.props.content.content}</div>
      </div>
    );
  }
  _renderLikeCommentButton() {
    return (
      <div class="form-inline row">
        <div class="btn btn-default col-lg-6 col-md-6 col-sm-6 button-border">
          <i class="glyphicon glyphicon-thumbs-up" />
        </div>
        <div class="btn btn-default col-lg-6 col-md-6 col-sm-6 button-border">
          <i class="glyphicon glyphicon-comment" />
        </div>
      </div>
    );
  }
  _postComment() {
    if (this.state.commentText.length > 0) {
      this.props.postComment(
        this.props.content.key,
        this.props.content.authorID,
        this.props.content.authorName,
        this.state.commentText
      );
      this.setState({ commentText: '' });
    }
  }
  render() {
    return (
      <div class="w3-card major-padding remove-bottom-padding feed-margin">
        {this._renderPostHeader()}
        {this._renderPostContent()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('[[MAP STATE TO PROPS PostFild]]', state);
  return {
    currentUser: state.auth.currentUser,
    uID: state.auth.uID
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postComment: (key, authorID, authorName, commentText) =>
      dispatch(postComment(key, authorID, authorName, commentText))
    // fetchAllFeedListenerOff: () => dispatch(fetchAllFeedListenerOff())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FeedContent);