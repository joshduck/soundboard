/** @jsx React.DOM */
 
var Grid = React.createClass({

  getInitialState: function() {
    return {
      pointerEvents: []
    };
  },

  handleClickWithDebug: function(event) {
    this.state.pointerEvents.push({
      id: Math.random(),
      x: event.nativeEvent.pageX, 
      y: event.nativeEvent.pageY
    });
    this.setState({pointerEvents: this.state.pointerEvents});
    
    setTimeout(function() {
      this.state.pointerEvents.shift();
      this.setState({pointerEvents: this.state.pointerEvents});
    }.bind(this), 1000); 
   
    this.handleClick(event);
  },

  handleClick: function(event) {
    var target = event.target;
    while (target && target.tagName != 'A') {
      target = target.parentNode;
    }

    if (target) {
      var index = target.getAttribute('data-index');
      var select = this.props.onSelect;
      select && select({index: index});
    }
  },

  getDimensions: function() {
    var totalCount = this.props.thumbs.length;
    var margin = 50;
    var columnCounts = [6, 4, 3, 2];
    
    var rowCounts = columnCounts.map(function(columnCount) {
      return Math.ceil(totalCount / columnCount);
    });
    
    var itemSizes = columnCounts.map(function(columnCount, index) {
      return Math.min(
        (this.props.height - margin) / rowCounts[index], 
        (this.props.width - margin) / columnCount
      );
    }.bind(this));
    
    var largestSize = Math.max.apply(null, itemSizes);
    var index = itemSizes.indexOf(largestSize);
    
    return {
      columns: columnCounts[index],
      zoom: largestSize / 256,
      width: 256 * columnCounts[index],
      height: 256 * rowCounts[index]
    };
  },
  
  renderCell: function(source, index) {
    return (
      <a
        class="grid-item"        
        key={index}
        href="#" 
        data-index={index}
        onMouseDown={this.handleClick}
        onPointerDown={this.handleClick}>
        <div class="grid-item-border">
          <img 
            class="grid-item-icon"
            src={Resources.thumbPath(source)}
          />
        </div>
      </a>
    );  
  },
  
  renderPointerDebug: function(coords) {
    return (
      <div class="grid-pointer-debug" 
        key={coords.id}
        style={{
          top: coords.y + 'px',
          left: coords.x + 'px'
        }} 
      />
    );
  },
  
  render: function() {
    var dimensions = this.getDimensions();
    
    return (
      <div className={'grid grid-columns-' + dimensions.columns}>
        <div className="grid-items" style={{
          zoom: Math.floor(dimensions.zoom * 100) + '%',
          width: dimensions.width + 'px',
          height: dimensions.height + 'px',
          marginTop: (this.props.height - dimensions.height * dimensions.zoom) * 0.5 + 'px'
        }}>
          {this.props.thumbs.map(this.renderCell)}
        </div>
        {this.state.pointerEvents.map(this.renderPointerDebug)}
      </div>
    );
  }
});