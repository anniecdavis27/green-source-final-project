import React from 'react';
import { ToggleState } from '../ToggleState/ToggleState';
import firebase from '../../firebase';

class ArticleItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditable: false
    };
  }

//delete article
  // handleDelete = (articleId) => {
  //   const articlesRef = firebase.database().ref(`/articles/${articleId}`);
  //     articlesRef.remove();
  //   }

  goToToggleState = (e) => {
    e.preventDefault();
    return <ToggleState />
  }
//create a toggle button to create a state in which an article is being edited

  // toggleState = () => {
  //   this.setState(prevState => ({
  //   isEditable: !this.state.isEditable
  // }))
  // console.log(this.state)
  // }

// handleUpdate = (articleId) => {
//     const articlesRef = firebase.database().ref(`/articles/${articleId}`);
//     const updateArticle = {
//       articleTitle: this.state.articleTitle,
//       articleSnippet: this.state.articleSnippet,
//       articleSource: this.state.articleSource,
//       articleLink: this.state.articleLink
//     };
//     articlesRef.push(updateArticle);
//
//     this.setState(prevValue => ({
//       articleTitle: '',
//       articleSnippet: '',
//       articleSource: '',
//       articleLink: ''
//     }));
//}

  render() {
    const { article } = this.props;
    return (
      <div>
        {this.props.articles.map(article => {
            return (
                  <ToggleState article={article} />
              )}
            )}
      </div>
    )
  }
}

export { ArticleItem };
