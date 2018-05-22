import React from 'react';

const UserCard = function({user}) {
	console.log('User', user);
    return (
        <div className="card">
            <img src={user.avatar} alt="Avatar" className="imgPreview" />
            <div className="titlePanel">
              <div className="leftPanel">{user.first_name} {user.last_name}</div> 
              <div className="rightPanel">{user.id}</div> 
            </div>
        </div>
    );
}

export default UserCard;
