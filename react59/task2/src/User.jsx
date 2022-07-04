import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const githubData = {
  avatar_url: 'https://avatars.githubusercontent.com/u/9919?v=4',
  name: 'GitHub',
  location: 'San Francisco, CA',
};

const facebookData = {
  avatar_url: 'https://avatars.githubusercontent.com/u/69631?v=4',
  name: 'Meta',
  location: 'Menlo Park, California',
};

const fakeFetch = (userId) => {
  if (userId === 'facebook') {
    return Promise.resolve(facebookData);
  }

  return Promise.resolve(githubData);
};

// const User = ({ match }) => {
const User = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fakeFetch(userId).then((userData) => {
      setUserData(userData);
    });
  }, [userId]);

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${match.params.userId}`)
  //     // fetch(`https://api.github.com/users/${userId}`)
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log(response);
  //         return response.json();
  //       }

  //       throw new Error();
  //     })
  //     .then((userData) => {
  //       setUserData(userData);
  //     });
  //   // }, [userId]);
  // }, [match.params.userId]);

  if (!userData) {
    return null;
  }

  const { avatar_url, name, location } = userData;

  return (
    <div className="user">
      <img className="user__avatar" alt="User_Avatar" src={avatar_url}></img>
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

// class User extends Component {
//   state = {
//     userData: null,
//   };

//   componentDidMount() {
//     this.fetchUserData();
//   }

//   componentDidUpdate(prevProps) {
//     const prevUser = prevProps.match.params.userId;
//     const currentUser = this.props.match.params.userId;
//     if (prevUser !== currentUser) {
//       this.fetchUserData();
//     }
//   }

//   fetchUserData = () => {
//     console.log(this.props);
//     const { match } = this.props;
//     fetch(`https://api.github.com/users/${match.params.userId}`)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw newError();
//       })
//       .then((userData) => {
//         this.setState({
//           userData,
//         });
//       });
//   };

//   render() {
//     const { userData } = this.state;

//     if (!userData) {
//       return null;
//     }

//     const { avatar_url, name, location } = userData;

//     return (
//       <div className="user">
//         <img className="user__avatar" alt="User_Avatar" src={avatar_url}></img>
//         <div className="user__info">
//           <span className="user__name">{name}</span>
//           <span className="user__location">{location}</span>
//         </div>
//       </div>
//     );
//   }
// }

export default User;
