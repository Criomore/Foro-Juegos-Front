import AsideFeed from "../../components/AsideFeed/AsideFeed.component"
import NavFeed from "../NavFeed/NavFeed.view"
import style from './Feed.module.css'

const Feed = () => {
  return (
    <div>
      <NavFeed/>
      <div className={style.container}>
      <AsideFeed/>
      </div>
    </div>
  )
}

export default Feed
