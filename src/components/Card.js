import React, { useState, useEffect } from 'react';
import Headline from './Headline';
import VideoPlayer from './VideoPlayer';
import Footnote from './Footnote';
import Text from './Text';
import Images from './Images';

function Card({ index, post, postsLen}) {
  const [text, setText] = useState();
  const [title, setTitle] = useState();
  const [subreddit, setSubreddit] = useState();
  const [ups, setUps] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [postType, setPostType] = useState();
  const [image, setImage] =useState()
  const [enlargeImage, setEnlargeImage] = useState();
  const [author, setAuthor] = useState();
  const [url, setUrl] = useState();
  const [comments, setComments] = useState();
  const [subscribers, setSubscribers] = useState();
  const [video, setVideo] = useState();
  const [createdAgo, setCreatedAgo] = useState();

  useEffect(() => {
    if (post?.data) {
      setText(post.data.selftext);
      setTitle(post.data.title);
      setSubreddit(post.data.subreddit_name_prefixed);
      setUps(post.data.ups);
      setEnlargeImage(post.data.url)
      setThumbnail(post.data.thumbnail);
      setPostType(post.data.post_hint);
      setCreatedAgo(date_diff(post.data.created));

      // Safely access preview images
      if (post.data.preview?.images) {
        setImage(post.data.preview.images[0].source.url);
      } else {
        setImage("always not null"); // Default to empty string if no image is available
      }

      // Set other state properties
      setAuthor(post.data.author);
      setUrl(post.data.url);
      setComments(post.data.num_comments);
      setSubscribers(post.data.subreddit_subscribers);

      // Safely access video fallback URL
      if (post.data.media?.reddit_video?.fallback_url) {
        setVideo(post.data.secure_media.reddit_video.fallback_url);
      } else {
        setVideo(""); // Default to empty string if no video is available
      }
    }
  }, [post]); // Only re-run when `post` changes

  function date_diff(createdAt) {
    let now = new Date();
    const createdAt_formatted = new Date(createdAt * 1000);
    return (now.getDay() - createdAt_formatted.getDay()) * 24 + (now.getHours() - createdAt_formatted.getHours());
  }

  function hoverEnlargeImage(e) {
   
  }

  return (
    <div className="card">
      <Headline index={index} title={title} url={url} postsLen={postsLen} />
      {/* Conditionally render image or video based on availability */}
      {/*thumbnail&&<Images thumbnail={thumbnail} hoverEnlargeImage={hoverEnlargeImage}/>*/}
      {video?
      <VideoPlayer index={index} video={video} />
      :<Images thumbnail={thumbnail} hoverEnlargeImage={hoverEnlargeImage}/>
      }
      <Text index={index} text={text} />
      <Footnote
        index={index}
        up={ups}
        comments={comments}
        createdAgo={createdAgo}
        subreddit={subreddit}
        author={author}
        postType={postType}
        subscribers={subscribers}
      />
    </div>
  );
}

export default Card;
