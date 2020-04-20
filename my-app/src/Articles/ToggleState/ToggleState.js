import React from 'react';
import firebase from '../../firebase';

class ToggleState extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articleTitle: '',
      articleSnippet: '',
      articleSource: '',
      articleLink: '',
      isEditable: false
    };

  }

  handleDelete = (articleId) => {
    const articlesRef = firebase.database().ref(`/articles/${articleId}`);
      articlesRef.remove();
    }

  toggleState = () => {
    this.setState(prevState => ({
    isEditable: !this.state.isEditable
  }))
  console.log(this.state)
  }

  handleUpdate = (articleId) => {
      const articlesRef = firebase.database().ref(`/articles/${articleId}`);
      const updateArticle = {
        articleTitle: this.state.articleTitle,
        articleSnippet: this.state.articleSnippet,
        articleSource: this.state.articleSource,
        articleLink: this.state.articleLink
      };

      console.log(this.state.articleTitle)
      articlesRef.push(updateArticle);

      this.setState(prevValue => ({
        articleTitle: '',
        articleSnippet: '',
        articleSource: '',
        articleLink: ''
      }));
  }

  render() {
    const { article } = this.props;

    if (this.state.isEditable === true) {
    return (
      <div className="add-form">
        <h1 className = "list-header">Update</h1>
        <label>Title:</label>
        <input id="articleTitle2" type="text" name="articleTitle" onChange={() => this.handleUpdate(article.id)} />
          <br />
        <label>Snippet:</label>
        <input id="articleSnippet2" type="text" name="articleSnippet" onChange={() => this.handleUpdate(article.id)} />
          <br />
        <label>Source:</label>
        <input id="articleSource2" type="text" name="articleSource" onChange={() => this.handleUpdate(article.id)} />
          <br />
        <label>Link:</label>
        <input id="articleLink2" type="text" name="articleLink" onChange={() => this.handleUpdate(article.id)} />
        <br />
        <br />
        <button className="trigger" onClick={() => this.toggleState()}>Cancel</button>
        <button className="trigger" onClick={() => this.handleUpdate(article.id)} onClick={() => this.toggleState()}>Save</button>
      </div>
    )} else {
    return (
      <div className="inputContent">
      <h1>{article.title}</h1>
      <p>{article.snippet}</p>
      <p>{article.source}</p>
      <button className="trigger"><a className="trigger" href={article.link} target="_blank" rel="noopener noreferrer">More Info...</a></button>
      <button id="delete" onClick={() => this.handleDelete(article.id)} className="trigger">Delete</button>
      <button id="update" onClick={() => this.toggleState()} className="trigger">Update</button>
    </div>
  )}
  }
}

export { ToggleState };
