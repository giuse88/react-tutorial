var React = require("react");
var Showdown = require("showdown");

var Converter = Showdown.Converter();

var Comment = React.createClass({
  render: function () {
    var rawMarkup= Converter.makeHtml(this.props.text);
    return (
    <div className="comment">
      <h2 className="commentAuthor">
        {this.props.author}
      </h2>
      <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
    </div>
    );
  }
});

module.exports = Comment;
