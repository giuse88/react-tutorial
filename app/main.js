var React = require("react");
var CommentBox = require("./components/CommentBox");

function render(element, id) {
  React.render(<CommentBox url="http://localhost:3000/comments.json" pollInterval={2000} />,
    document.getElementById(id));
}

render(CommentBox, "content");
