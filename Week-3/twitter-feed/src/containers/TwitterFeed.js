import React from 'react';
import Tweet from '../components/Tweet'

const TwitterFeed = (props) => {

  let replyAlert = (event) => {
    alert('You clicked reply!')
  }

  let likeAlert = (event) => {
    alert('You clicked like!')
  }

  let moreAlert = (event) => {
    alert('See more!')
  }

  let retweetAlert = (event) => {
    alert('You clicked retweet!')
  }

  let tweetFeed = props.data.map((tweet) => {
    return (
      <Tweet
        key={tweet.id_str}
        tweetData={tweet}
        replyAlert={replyAlert}
        likeAlert={likeAlert}
        moreAlert={moreAlert}
        retweetAlert={retweetAlert}
      />
    )
  })

  return(
    <div>
      {tweetFeed}
    </div>
  )
};

export default TwitterFeed;
