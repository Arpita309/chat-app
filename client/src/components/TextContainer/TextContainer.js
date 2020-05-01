import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users,room }) => (
  <div className="textContainer">
    <div className='room'>
      Room : {room}
    </div>
   
    {
      users
        ? (
          <div>
            <h4> <span ><i class="fa fa-users" aria-hidden="true"></i></span> Currently Active users </h4>
            <div className="activeContainer">
            
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                      <img alt="Online Icon" src={onlineIcon}/>
                    {name}
                   
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;