import React from 'react';
import firebase from '../../firebase';

class ArticleItem extends React.Component {
  render() {
    const { article } = this.props;
    return (
  <div className="article-listings">
    <div className="listings-header">
      <h1>Articles:</h1>
    </div>
    <div className="listings">

    </div>
  </div>
    );
  }
}

export { ArticleItem };
