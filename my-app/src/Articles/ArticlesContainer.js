import React, { Component } from 'react';
import { ArticleList } from './ArticleList';
import { ArticleItem } from './ArticleItem';
import firebase from '../firebase';

class ArticlesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
}

componentDidMount() {
  const articlesRef = firebase.database().ref('articles');
  articlesRef.on('value', snapshot => {
    let articles = snapshot.val();

  const articlesFromDB = Object.entries(articles).map(article => {
    console.log('article from entries:', article)

    return ({
      id: article[0],
      title: article[1].articleTitle,
      snippet: article[1].articleSnippet,
      source: article[1].articleSource,
      link: article[1].articleLink
      })
    })
    this.setState({
      articles: articlesFromDB

    })
  })
}

setArticles = newArticles => {
  this.setState({
    articles: newArticles
  });
};

render() {
  const { articles } = this.state;
  return (
    <div>
      <ArticleList articles={articles} />
      <ArticleItem articles={articles} />
    </div>
  )
}

}

export { ArticlesContainer };
