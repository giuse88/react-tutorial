var React = require("react");
var Comment = require("./Comment");

var CommentList = React.createClass({
  render: function() {
    var comments = this.props.comments
      .map((comment) => <Comment key={comment.id} author={comment.author} text={comment.text} />);

    return (
      <div className="commentList">
        { comments }
      </div>
    );

  }
});

module.exports = CommentList;
