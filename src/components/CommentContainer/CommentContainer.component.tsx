import Comment from '../Comment/Comment.component'
import style from './CommnentContainer.module.css'

const CommentContainer = () => {
  return (
    <div className={style.container}>
      <Comment />
      <Comment />
    </div>
  )
}

export default CommentContainer
