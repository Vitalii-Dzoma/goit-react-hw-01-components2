
import './App.css';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transactions/Transactions';
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json"
function App() {
  return (
    <div className="App">
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats}
        
      />
     <Statistics title="Upload stats" stats={data} />

       <FriendList friends={friends} />;
<TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
