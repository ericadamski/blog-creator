var BlogEditorForm = React.createClass({displayName: "BlogEditorForm",
  getInitialState : function() {
    return {value: 'Test'};
  },
  handleChange : function(event) {
    this.setState({value: event.target.value});
  },
  render : function() {
    var value = this.state.value;
    return React.createElement("input", {type: "text", value: value, onChange: this.handleChange});
  }
});

React.render(
  React.createElement(BlogEditorForm, null),
  document.getElementById('test')
);
