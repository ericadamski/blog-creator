var data = [
  {author:"Eric Adamski", text:"A blog __post__."},
  {author:"Someone Else", text:"A seconf *blog* post."},
];

var BlogPostEditor = React.createClass({displayName: "BlogPostEditor",
  getInitialState : function() {
    return {value: 'Test'};
  },
  handleChange : function(event) {
    this.setState({value: event.target.value});
  },
  handleSubmit : function() {

  },
  render : function() {
    var value = this.state.value;
    return (
      React.createElement("div", {className: "postEditor"}, 
        React.createElement(BlogPostList, {data: this.props.data}), 
        React.createElement(BlogPostForm, null), 
        React.createElement("input", {type: "text", 
          placeholder: value, onChange: this.handleChange})
      )
    );
  }
});

var BlogPostList = React.createClass({displayName: "BlogPostList",
  render : function() {
    var posts = this.props.data.map(function (post) {
      return (
        React.createElement(BlogPost, {author: post.author}, 
          post.text
        )
      );
    });
    return (
      React.createElement("div", {className: "postList"}, 
        posts
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
  render : function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true})
    return (
      React.createElement("div", {className: "blogPost"}, 
        React.createElement("h2", {className: "postAuthor"}, 
          this.props.author
        ), 
        React.createElement("span", {className: "post-content", dangerouslySetInnerHTML: {__html: rawMarkup}})
      )
    );
  }
});

React.render(
  React.createElement(BlogPostEditor, {data: data}),
  document.getElementById('content')
);
