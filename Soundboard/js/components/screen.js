/** @jsx React.DOM */
 
 var Screen = React.createClass({
   render: function() {
     var classNames = ['screen'];
     this.props.scrollable && classNames.push('screen-scrollable');
     this.props.visible && classNames.push('screen-visible');
     
     return (
        <div class={classNames.join(' ')}>
          {this.props.children}
        </div>
     );
   }
 });