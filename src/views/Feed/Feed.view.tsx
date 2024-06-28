import AsideFeed from '../../components/AsideFeed/AsideFeed.component'
import Post from '../../components/Post/Post.component'
import NavFeed from '../NavFeed/NavFeed.view'
import style from './Feed.module.css'

const Feed = () => {
  return (
    <div>
      <NavFeed />
      <div className={style.container}>
        <AsideFeed />
        <div className={style.post}>
        <Post />
        </div>
      </div>
    </div>
  )
}

export default Feed
