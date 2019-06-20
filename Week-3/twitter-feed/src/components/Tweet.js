import React from 'react'

const Tweet = (props) => {

  let heartColor = ""
  if (props.tweetData.liked) {
    heartColor = 'heartColor'
  }

  let retweetColor = () => {
    let retweetColor = ""
    if (props.tweetData.retweeted) {
      retweetColor = 'retweetColor'
    }
    return retweetColor
  }

  let dateString = () => {
    let dateString = ""
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July',
    'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    let date = new Date(parseInt(props.tweetData.timestamp_ms))
    dateString += `${months[date.getMonth()]} ${date.getDate()}`

    return dateString
  }

  let showImage = () => {
    let imageDiv = ""
    if (Object.keys(props.tweetData.entities).length != 0) {
      imageDiv = <img src={props.tweetData.entities.media[0].media_url} alt='Tweet image'/>
    }
    return imageDiv
  }

  return (
    <div className='row align-top'>
      <div className='columns small-1'>
        <img src={props.tweetData.user.profile_image_url} alt='Profile picture'/>
      </div>
      <div className='column small-11'>
        <div className='row'>
          <p className='column small-2'> {props.tweetData.user.name} </p>
          <p className='column small-2'> {"@"+props.tweetData.user.screen_name} </p>
          <p className='column small-2 end'> {dateString()} </p>
        </div>
        <div className='row'>
          <p className='column'> {props.tweetData.text} </p>
        </div>
        <div className='row'>
          <div className='column small-2'>
            <i className='fa fa-reply' onClick={props.replyAlert}/>
          </div>
          <div className='column small-2'>
            <i id={retweetColor()} className='fa fa-retweet column small-6' onClick={props.retweetAlert}/>
            <p className='column small-6'>{props.tweetData.retweet_count}</p>
          </div>

          <div className='column small-2'>
            <i id={heartColor} className='fa fa-heart column small-6' onClick={props.likeAlert}/>
            <p className='column small-6'>{props.tweetData.favorite_count}</p>
          </div>

          <div className='column small-2 end'>
            <i className='fa fa-ellipsis-h column small-6' onClick={props.moreAlert}/>
          </div>

        </div>
      </div>
      <div>
        {showImage()}
      </div>

    </div>
  )
};

export default Tweet;
