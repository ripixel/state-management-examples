import React from 'react';

import Button from '../../components/Button';
import Centre from '../../components/Centre';
import P from '../../components/P';

export const Index: React.FC = () => (
  <Centre>
    <P>Click the heading to come back to this page at any time</P>
    <Button linkTo='ref'>Ref</Button>
    <Button linkTo='context'>Context</Button>
    <Button linkTo='state'>State</Button>
    <Button linkTo='flux'>Flux</Button>
    <Button linkTo='redux'>Redux</Button>
    <Button linkTo='recoil'>Recoil</Button>
    <Button linkTo='mobx'>MobX</Button>
  </Centre>
);

export default Index;
