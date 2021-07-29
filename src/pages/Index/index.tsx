import React from 'react';

import Button from '../../components/Button';
import Centre from '../../components/Centre';
import P from '../../components/P';

export const Index: React.FC = () => (
  <Centre>
    <P>Let&apos;s learn about some ways to manage State in React!</P>
    <P>
      If you&apos;re new to React state management, start at the top and work
      your way down.
    </P>
    <Button linkTo='ref'>Ref</Button>
    <Button linkTo='context'>Context</Button>
    <Button linkTo='state'>State</Button>
    <Button linkTo='redux'>Redux</Button>
    <Button linkTo='recoil'>Recoil</Button>
    <Button linkTo='mobx'>MobX</Button>
  </Centre>
);

export default Index;
