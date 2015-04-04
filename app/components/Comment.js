var React = require("react");
var Showdown = require("showdown");

var Converter = Showdown.Converter();

var Comment = React.createClass({
  render: function () {
    return (
    <div className="comment">
      <h2 className="commentAuthor">
        {this.props.author}
      </h2>
      {Converter.makeHtml(this.props.children.toString())}
    </div>
    );
  }
});

module.exports = Comment;
