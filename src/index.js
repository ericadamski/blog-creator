var TAB = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
var data = [
  {_title: "First Post", author:"Eric Adamski", text:"Replace the navbar brand with your own image by swapping the text for an <img>. Since the .navbar-brand has its own padding and height, you may need to override some CSS depending on your image.I did up some tables for the swot analysis, so if you want to use them for your portion of the project feel free, its in the google docs folder. Let me know if you think there is something missing or something I should add. ericadamski [1:19 PM] I have a table in there of short term and long term goals for the business ericadamski [1:19 PM] which we will focus on. Our main problem will be making a profit stuff"},
  {_title: "Another Interesting Post", author:"Someone Else", text:"A seconf *blog* post."},
];

var BlogPostEditor = React.createClass({
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
      <div className="post-editor">
        <BlogPostList data={this.props.data}/>
        <BlogPostForm />
        <input type="text"
          placeholder={value} onChange={this.handleChange} />
      </div>
    );
  }
});

var BlogPostList = React.createClass({
  render : function() {
    var posts = this.props.data.map(function (post) {
      return (
        <BlogPost author={post.author} title={post._title}>
          {TAB + post.text}
        </BlogPost>
      );
    });
    return (
      <div className="post-list">
        {posts}
      </div>
    );
  }
});

var BlogPostForm = React.createClass({
  render : function() {
    return (
      <div className="post-form">
        I am the form
      </div>
    );
  }
});

var BlogPost = React.createClass({
  render : function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true})
    return (
      <div className="blog-post">
        <h2 className="post-title">
          {this.props.title}
        </h2>
        <h4 className="post-author">
          {this.props.author}
        </h4>
        <span className="post-preview" dangerouslySetInnerHTML={{__html: rawMarkup}} />
        <a href={this.props.title}>Continue Reading ...</a>
      </div>
    );
  }
});

React.render(
  <BlogPostEditor data={data}/>,
  document.getElementById('content')
);
