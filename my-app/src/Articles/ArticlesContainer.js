import React, { Component } from 'react';
import { ArticleList } from './ArticleList';
import firebase from '../firebase';

class ArticlesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
}

componentDidMount() {
  const articlesRef = firebase.database().ref('articles');
  articlesRef.on('value', snapshot => {
      let articles = snapshot.val();
      if (articles) {
      const articlesFromDB = Object.entries(articles).map(article => ({
          id: article[0],
          articleLink: article[1],
          article
        }));

        this.setState({
          articles: articlesFromDB
        });
      } else {
        this.setState({
        articles: []
      });
    }
  });
}

setArticles = newArticles => {
    this.setState({
      Articles: newArticles
    });
  };

render() {
  const { articles } = this.state;
  return <ArticleList articles={articles} />;
  }
}

export { ArticlesContainer };
