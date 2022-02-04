import user from "../user.json"
import propTypes from 'prop-types';
import s from "./Profile.module.css"

function Profile({username, tag, location, avatar, stats}) {
    return (
<div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className={s.label}>Followers</span>
                    <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className={s.label}>Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className={s.label}>Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
    username: propTypes.string,
    tag: propTypes.string,
    location: propTypes.string,
    avatar: propTypes.string,
    stats: propTypes.objectOf(propTypes.number)
}

export default Profile;