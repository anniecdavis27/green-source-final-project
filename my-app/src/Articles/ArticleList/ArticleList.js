import React from 'react';
import ReactDOM from 'react-dom';
//import { ArticleItem } from '../ArticleItem';
import firebase from '../../firebase';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articleTitle: '',
      articleSnippet: '',
      articleLink: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }
// Create function that allows you to input 3 things: Title, Snippet, Link

  // handleNewArticle = e => {
  //   if (e.key === 'Enter') {
  //     const articlesRef = firebase.database().ref('articles');
  //     const val = e.target.value;
  //     const article = {
  //       articleTitle: val
  //     };
  //     articlesRef.push(article);
  //   };
  //
  // }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const articlesRef = firebase.database().ref('articles');
    const newArticle = {
      articleTitle: this.state.articleTitle,
      articleSnippet: this.state.articleSnippet,
      articleLink: this.state.articleLink
    };
    articlesRef.push(newArticle);

    this.setState(prevValue => ({
      articleTitle: '',
      articleSnippet: '',
      articleLink: ''
    }));
    
    console.log(this.state)
  }

  render () {
    return (
<>
  <h1>Add Articles</h1>
    <form onSubmit={this.handleSubmit}>
      <label>Title:</label>
      <input id="articleTitle" Type="text" name="articleTitle" onChange={this.handleInput} />
        <br />
      <label>Snippet:</label>
      <input id="articleSnippet" Type="text" name="articleSnippet" onChange={this.handleInput} />
        <br />
      <label>Link:</label>
      <input id="articleLink" Type="text" name="articleLink" onChange={this.handleInput} />
        <br />
      <input type="submit" value="Submit" />
    </form>

    </>
    );
  }
}

ReactDOM.render (
  <ArticleList />,
  document.getElementById('root')
);

export { ArticleList };
