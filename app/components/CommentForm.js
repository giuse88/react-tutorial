var React = require("react");

var CommentForm = React.createClass({
  resetForm: function () {
    React.findDOMNode(this.refs.author).value = "";
    React.findDOMNode(this.refs.text).value = "";
  },
  getInputComment: function() {
    return {
      author: React.findDOMNode(this.refs.author).value.trim(),
      text: React.findDOMNode(this.refs.text).value.trim()
    };
  },
  isValidComment: function () {
    var comment = this.getInputComment();
    if (!comment.text || !comment.author) {
      return false;
    }
    return true;
  },
  handleSubmit: function (e) {
    e.preventDefault();
    if (this.isValidComment()) {
      this.props.onCommentSubmit(this.getInputComment());
      this.resetForm();
    }
  },
  render: function() {
    return (
       <form className="commentForm" onSubmit={this.handleSubmit}>
        <input ref="author" type="text" placeholder="Your name" />
        <input ref="text" type="text" placeholder="Say something..." />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = CommentForm;
