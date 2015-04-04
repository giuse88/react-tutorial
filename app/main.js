var React = require("react");
var CommentBox = require("./components/CommentBox");

var data = [
  {id:1, author: "Pete Hunt", text: "This is one comment"},
  {id:2, author: "Jordan Walke", text: "This is *another* comment"}
];

function render(element, id) {
  React.render(<CommentBox data={data}/>, document.getElementById(id));
}

render(CommentBox, "content");
