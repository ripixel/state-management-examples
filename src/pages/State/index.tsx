import React from 'react';

import Centre from '../../components/Centre';
import Example from '../../components/Example';
import Heading from '../../components/Heading';
import P from '../../components/P';
import Button from '../../components/Button';

import SingleBitOfState from '../../components/Examples/State/SingleBitOfState';
import SingleBitOfStateRaw from '!!raw-loader!../../components/Examples/State/SingleBitOfState';

import UpdateSingleBitOfState from '../../components/Examples/State/UpdateSingleBitOfState';
import UpdateSingleBitOfStateRaw from '!!raw-loader!../../components/Examples/State/UpdateSingleBitOfState';

import PersistBetweenRenders from '../../components/Examples/State/PersistBetweenRenders';
import PersistBetweenRendersRaw from '!!raw-loader!../../components/Examples/State/PersistBetweenRenders';

import MultipleBitsOfState from '../../components/Examples/State/MultipleBitsOfState';
import MultipleBitsOfStateRaw from '!!raw-loader!../../components/Examples/State/MultipleBitsOfState';

import HigherOrderComponent from '../../components/Examples/State/HigherOrderComponent';
import HigherOrderComponentRaw from '!!raw-loader!../../components/Examples/State/HigherOrderComponent';

export const State: React.FC = () => (
  <>
    <Centre>
      <Heading level={2}>State</Heading>
      <P>
        React State is a built-in state handling mechanism, intended for use
        within components; but that doesn&apos;t mean we can&apos;t do some
        tricks!
      </P>

      <P>This makes it easy to have state within a component:</P>
      <Example codeString={SingleBitOfStateRaw}>
        <SingleBitOfState />
      </Example>

      <P>
        But having state without any way to update it is a bit pointless! You
        can easily update state by using the second item returned by the
        `useState` hook:
      </P>
      <Example codeString={UpdateSingleBitOfStateRaw}>
        <UpdateSingleBitOfState />
      </Example>

      <P>
        What happens here is when the state changes, it causes a rerender. But
        most importantly, this state is persisted between renders that
        aren&apos;t caused by the state update:
      </P>
      <Example codeString={PersistBetweenRendersRaw}>
        <PersistBetweenRenders />
      </Example>

      <P>
        This means we can have separate bits of state, independently updating,
        and causing rerenders (without affecting the other):
      </P>
      <Example codeString={MultipleBitsOfStateRaw}>
        <MultipleBitsOfState />
      </Example>

      <P>
        Now we know how to use state, a common pattern is to have a higher order
        component maintain some state, and pass that state down as props to
        children:
      </P>
      <Example codeString={HigherOrderComponentRaw}>
        <HigherOrderComponent />
      </Example>

      <P>
        You can see how you can maintain internal state between components, as
        long as the state is stored somewhere in the parent chain of any
        component. However, there is no easy way to share internal state between
        components that do not follow this hierarchy.
      </P>

      <P>
        It is also worth noting that when you have state passed down through
        many components (also known as &quot;prop drilling&quot;), you may cause
        unnecessary rerenders as components receive new props and rerender
        accordingly.
      </P>
    </Centre>

    <Button linkTo='/'>Home</Button>
  </>
);

export default State;
