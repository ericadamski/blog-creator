var TAB = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
var data = [
  {author:"Eric Adamski", text:"Replace the navbar brand with your own image by swapping the text for an <img>. Since the .navbar-brand has its own padding and height, you may need to override some CSS depending on your image.I did up some tables for the swot analysis, so if you want to use them for your portion of the project feel free, its in the google docs folder. Let me know if you think there is something missing or something I should add. ericadamski [1:19 PM] I have a table in there of short term and long term goals for the business ericadamski [1:19 PM] which we will focus on. Our main problem will be making a profit"},
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
          TAB + post.text
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
      React.createElement("div", {className: "post-form"}, 
        "I am the form"
      )
    );
  }
});

var BlogPost = React.createClass({displayName: "BlogPost",
  render : function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true})
    return (
      React.createElement("div", {className: "blog-post"}, 
        React.createElement("h2", {className: "post-author"}, 
          this.props.author
        ), 
        React.createElement("span", {className: "post-preview", dangerouslySetInnerHTML: {__html: rawMarkup}}), 
        React.createElement("a", {href: this.props.author}, "Continue Reading ...")
      )
    );
  }
});

React.render(
  React.createElement(BlogPostEditor, {data: data}),
  document.getElementById('content')
);
