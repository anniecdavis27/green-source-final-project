import React from 'react';
import ReactDOM from 'react-dom';
import { ArticleItem } from '../ArticleItem';
import firebase from '../../firebase';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articleTitle: '',
      articleSnippet: '',
      articleSource: '',
      articleLink: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const articlesRef = firebase.database().ref('articles');
    const newArticle = {
      articleTitle: this.state.articleTitle,
      articleSnippet: this.state.articleSnippet,
      articleSource: this.state.articleSource,
      articleLink: this.state.articleLink
    };
    articlesRef.push(newArticle);

    this.setState(prevValue => ({
      articleTitle: '',
      articleSnippet: '',
      articleSource: '',
      articleLink: ''
    }));

    console.log(this.state)
  }

  render () {
    return (
<>
  <h1 className = "list-header">Add Articles</h1>
    <form className="add-form" onSubmit={this.handleSubmit}>
      <label>Title:</label>
      <input id="articleTitle" type="text" name="articleTitle" onChange={this.handleInput} />
        <br />
      <label>Snippet:</label>
      <input id="articleSnippet" type="text" name="articleSnippet" onChange={this.handleInput} />
        <br />
        <label>Source:</label>
        <input id="articleSource" type="text" name="articleSource" onChange={this.handleInput} />
          <br />
      <label>Link:</label>
      <input id="articleLink" type="text" name="articleLink" onChange={this.handleInput} />
        <br />
      <input className="trigger" type="submit" value="Submit" />
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
