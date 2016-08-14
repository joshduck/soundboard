/** @jsx React.DOM */
 
var Credits = React.createClass({
  renderImage: function(data, index) {
    return (
      <CreditsItem
        key={index}
        title={data.title}
        author={data.author}
        link={data.link}
      />
    );
  },
  
  renderAudio: function(data, index) {
    return (
      <CreditsItem
        key={index}
        title="Audio"
        author={data.author}
        link={data.link}
      />
    );
  },

  render: function() {
    return (
      <div class="credits">
        <h2>Interface</h2>
        <ul>{this.props.ui.map(this.renderImage)}</ul>
        <h2>Images</h2>
        <ul>{this.props.photos.map(this.renderImage)}</ul>
        <h2>Sounds</h2>
        <ul>{this.props.audio.map(this.renderAudio)}</ul>
      </div>
    );
  }
 });
 
 var CreditsItem = React.createClass({
   render: function() {
     return (
        <li>
          <a href={this.props.link} class="credits-item">
            <span class="credits-title">
              {this.props.title || "Untitled"}
            </span>
            by
            <span class="credits-author">
              {this.props.author || "Anonymous"}
            </span>
          </a>
        </li>
      );
    }
 });
 