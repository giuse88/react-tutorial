var $ = require("jquery");
var React = require("react");
var CommentList = require("./CommentList");
var CommentForm = require("./CommentForm");

var CommentBox = React.createClass({
  getInitialState: function () {
    return {
        comments: []
      };
  },
  loadCommentsFromServer: function () {
    $.ajax({
      url: this.props.url,
      dataType: "json",
      success: function(data) {
        this.setState({comments: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  addCommentLocally: function (comment) {
    var comments = this.state.comments;
    var newComments = comments.concat([comment]);
    this.setState({comments: newComments});
  },
  handleCommentSubmit: function (comment) {
    this.addCommentLocally(comment);
    $.ajax({
      url: this.props.url,
      dataType: "json",
      type: "POST",
      data: comment,
      success: function(data) {
        this.setState({comments: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1> Comments </h1>
        <CommentList comments={this.state.comments} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

module.exports = CommentBox;
