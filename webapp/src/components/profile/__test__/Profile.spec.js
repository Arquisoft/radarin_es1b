import React from 'react';
import {shallow} from 'enzyme';

import Profile from '../Profile';
import Image from '../Image';
import Typography from "@material-ui/core/Typography";
import FriendList from '../../friendList';

describe('Profile', () => {

  let result;
  beforeEach(() => {
    result = shallow(<Profile
        webId="https://webid.example/#me"
        fullName="John Doe"
        imageSrc="https://img.example/me.png"
<<<<<<< Updated upstream
        loggedUser="https://webid.example/#loger"
=======
        loggedUser="https://img.example/me.png"
>>>>>>> Stashed changes
    />);
  });

  it('should render the name a profile title', () => {
    expect(result).toContain(<Typography variant="h4" component="h3">
    Perfil de John Doe
  </Typography>)
  });

  it('should render the webId as caption', () => {
    expect(result).toContain(<Typography variant="caption">https://webid.example/#me</Typography>)
  });

  it('should render the profile image', () => {
    expect(result).toContain(<Image name="John Doe" src="https://img.example/me.png"/>)
  });

  it('should render the friend list', () => {
    expect(result).toContain(<FriendList webId="https://webid.example/#me"/>)
  });
  it ('should render the biton to add or delete', () => {
    expect(result).toContainReact(<ButtonFriendship webId="https://webid.example/#me" loggedUser="https://webid.example/#loger" /> )
  });

});
