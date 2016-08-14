/** background.js**/
/** @jsx React.DOM */
 
var Background = React.createClass({displayName: 'Background',
  render: function() {
    return (
      React.DOM.div( {className:"background"}, 
        React.DOM.img( {className:"background-image", src:"/data/backgrounds/farm.jpeg"} ),
        React.DOM.img( {className:"background-image", src:"/data/backgrounds/farm.jpeg"} )
      )
    );
  }
});

/** credits.js**/
/** @jsx React.DOM */
 
var Credits = React.createClass({displayName: 'Credits',
  renderImage: function(data, index) {
    return (
      CreditsItem(
        {key:index,
        title:data.title,
        author:data.author,
        link:data.link}
      )
    );
  },
  
  renderAudio: function(data, index) {
    return (
      CreditsItem(
        {key:index,
        title:"Audio",
        author:data.author,
        link:data.link}
      )
    );
  },

  render: function() {
    return (
      React.DOM.div( {className:"credits"}, 
        React.DOM.h2(null, "Interface"),
        React.DOM.ul(null, this.props.ui.map(this.renderImage)),
        React.DOM.h2(null, "Images"),
        React.DOM.ul(null, this.props.photos.map(this.renderImage)),
        React.DOM.h2(null, "Sounds"),
        React.DOM.ul(null, this.props.audio.map(this.renderAudio))
      )
    );
  }
 });
 
 var CreditsItem = React.createClass({displayName: 'CreditsItem',
   render: function() {
     return (
        React.DOM.li(null, 
          React.DOM.a( {href:this.props.link, className:"credits-item"}, 
            React.DOM.span( {className:"credits-title"}, 
              this.props.title || "Untitled"
            ),
" by ",            React.DOM.span( {className:"credits-author"}, 
              this.props.author || "Anonymous"
            )
          )
        )
      );
    }
 });
 

/** grid.js**/
/** @jsx React.DOM */
 
var Grid = React.createClass({displayName: 'Grid',

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
      React.DOM.a(
        {className:"grid-item",        
        key:index,
        href:"#", 
        'data-index':index,
        onMouseDown:this.handleClick,
        onPointerDown:this.handleClick}, 
        React.DOM.div( {className:"grid-item-border"}, 
          React.DOM.img( 
            {className:"grid-item-icon",
            src:Resources.thumbPath(source)}
          )
        )
      )
    );  
  },
  
  renderPointerDebug: function(coords) {
    return (
      React.DOM.div( {className:"grid-pointer-debug", 
        key:coords.id,
        style:{
          top: coords.y + 'px',
          left: coords.x + 'px'
        }} 
      )
    );
  },
  
  render: function() {
    var dimensions = this.getDimensions();
    
    return (
      React.DOM.div( {className:'grid grid-columns-' + dimensions.columns}, 
        React.DOM.div( {className:"grid-items", style:{
          zoom: Math.floor(dimensions.zoom * 100) + '%',
          width: dimensions.width + 'px',
          height: dimensions.height + 'px',
          marginTop: (this.props.height - dimensions.height * dimensions.zoom) * 0.5 + 'px'
        }}, 
          this.props.thumbs.map(this.renderCell)
        ),
        this.state.pointerEvents.map(this.renderPointerDebug)
      )
    );
  }
});

/** overlay.js**/
/** @jsx React.DOM */
 
var Overlay = React.createClass({displayName: 'Overlay',
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
    console.log('visibleState', this.state.visibleState, Date.now());
    
    return (
      React.DOM.div( 
        {className:'overlay ' + (this.state.visibleState || ''), 
        onPointerDown:this.onClick,
        onMouseDown:this.onClick}, 
        React.DOM.div( {className:"overlay-image", key:photo && photo.file, style:{
          backgroundImage: photo ? Resources.photoBackground(photo.file) : ''
        }} )
      )
    );
  }
});

/** screen.js**/
/** @jsx React.DOM */
 
 var Screen = React.createClass({displayName: 'Screen',
   render: function() {
     var classNames = ['screen'];
     this.props.scrollable && classNames.push('screen-scrollable');
     this.props.visible && classNames.push('screen-visible');
     
     return (
        React.DOM.div( {className:classNames.join(' ')}, 
          this.props.children
        )
     );
   }
 });
