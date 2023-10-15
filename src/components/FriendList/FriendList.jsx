import css from './FriendList.module.css'

const FriendList = ({ friends }) => { 
  return (
<ul className={css.friendList}>
              {friends.map(data => (
                  <li key={data.id} className={css.item}>
  <span className={data.isOnline ? css.red : css.green}></span>
  <img className={css.avatar} src={data.avatar} alt="User avatar" width="48" />
  <p className={css.name}>{data.name}</p>
</li>      
))}
</ul>
  );
};

export default FriendList;