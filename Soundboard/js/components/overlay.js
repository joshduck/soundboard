/** @jsx React.DOM */
 
var Overlay = React.createClass({
  onClick: function() {
    var click = this.props.onClick;
    click && click();
  },

  getInitialState: function() {
    return {
      visibleState: ''
    }
  },

  updateVisibleState: function(className, timeout) {
    this._visibleStateTimeout = setTimeout(function() {
      this.setState({visibleState: className});
    }.bind(this), timeout);
  },
  
  componentWillReceiveProps: function(nextProps) {
    if (nextProps.visible != this.props.visible) {
      if (nextProps.visible) {
        this.updateVisibleState('', 0);
        this.updateVisibleState('visible-in-start', 30);
        this.updateVisibleState('visible-in-end', 300);
      } else {
        this.updateVisibleState('visible-out-start', 0);
        this.updateVisibleState('visible-out-end', 300);
      }
    }
  },

  componentDidUpdate: function(prevProps, prevState, node) {
    var audioNode = node.querySelector('audio');
    audioNode && audioNode.play();
  },

  render: function() {
    var photo = this.props.photo;
    
    return (
      <div 
        className={'overlay ' + (this.state.visibleState || '')} 
        onPointerDown={this.onClick}
        onMouseDown={this.onClick}>
        <div className="overlay-image" key={photo && photo.file} style={{
          backgroundImage: photo ? Resources.photoBackground(photo.file) : ''
        }} />
      </div>
    );
  }
});