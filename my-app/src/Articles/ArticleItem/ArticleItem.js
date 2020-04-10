import React from 'react';
import firebase from '../../firebase';

class ArticleItem extends React.Component {
  render() {
    const { article } = this.props;
    return (
  //This needs to return objects by  title, and "see details" button, that opens modal with Title, snippet, and Link
    );
  }
}

export { ArticleItem };
