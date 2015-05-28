var BlogPostEditor = React.createClass({displayName: "BlogPostEditor",
  getInitialState : function() {
    return {value: 'Test'};
  },
  handleChange : function(event) {
    this.setState({value: event.target.value});
  },
  render : function() {
    var value = this.state.value;
    return (
      React.createElement("div", {className: "postEditor"}, 
        React.createElement(BlogPostList, null), 
        React.createElement(BlogPostForm, null), 
        React.createElement("input", {type: "text", value: value, onChange: this.handleChange})
      )
    );
  }
});

var BlogPostList = React.createClass({displayName: "BlogPostList",
  render : function() {
    return (
      React.createElement("div", {className: "postList"}, 
        "Post List"
      )
    );
  }
});

var BlogPostForm = React.createClass({displayName: "BlogPostForm",
  render : function() {
    return (
      React.createElement("div", {className: "postForm"}, 
        "I am the form"
      )
    );
  }
});

var BlogPost = React.createClass({displayName: "BlogPost",
  
})

React.render(
  React.createElement(BlogPostEditor, null),
  document.getElementById('content')
);
