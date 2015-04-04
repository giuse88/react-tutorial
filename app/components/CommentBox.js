var React = require("react");
var CommentList = require("./CommentList");
var CommentForm = require("./CommentForm");

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1> Comments </h1>
        <CommentList comments={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

module.exports = CommentBox;
