import React from 'react';

import Centre from '../../components/Centre';
import Example from '../../components/Example';
import Heading from '../../components/Heading';
import P from '../../components/P';
import Button from '../../components/Button';

import SimpleSharing from '../../components/Examples/Recoil/SimpleSharing';
import SimpleSharingRaw from '!!raw-loader!../../components/Examples/Recoil/SimpleSharing';

import SimpleUpdating from '../../components/Examples/Recoil/SimpleUpdating';
import SimpleUpdatingRaw from '!!raw-loader!../../components/Examples/Recoil/SimpleUpdating';

import ComplexExample from '../../components/Examples/Recoil/ComplexExample';
import ComplexExampleRaw from '!!raw-loader!../../components/Examples/Recoil/ComplexExample';

import UsingRecoilOutsideReact from '../../components/Examples/Recoil/UsingRecoilOutsideReact';
import UsingRecoilOutsideReactRaw from '!!raw-loader!../../components/Examples/Recoil/UsingRecoilOutsideReact';

import ProviderService from '../../components/Examples/Recoil/ProviderService';
import ProviderServiceRaw from '!!raw-loader!../../components/Examples/Recoil/ProviderService';

export const Recoil: React.FC = () => (
  <>
    <Centre>
      <Heading level={2}>Recoil</Heading>
      <P>
        <a href='https://recoiljs.org/'>Recoil</a> as another implementation of
        the <a href='https://facebook.github.io/flux/'>Flux</a> pattern, as
        suggested by Facebook when they initially released React.
      </P>

      <P>
        However in stark contrast to Redux, the idea of Recoil is to keep all
        bits of your data separate from the start, and only have data located in
        similar places (called Atoms) when absolutely necessary.
      </P>

      <P>
        This means sharing simple state between components without a common
        parent is far simpler than in Redux. It&apos;s also far simpler to
        create connected components, due to its reliance on hooks:
      </P>
      <Example codeString={SimpleSharingRaw}>
        <SimpleSharing />
      </Example>

      <P>
        We can see that we are using the `useRecoilValue` hook in the example
        above, but there&apos;s also the `useRecoilState` hook, which provides
        incredibly simple setter functions, just like React&apos;s `useState`
        hook:
      </P>
      <Example codeString={SimpleUpdatingRaw}>
        <SimpleUpdating />
      </Example>

      <P>
        However, you may have noticed this does not follow the principle set out
        at the beginning - only store bits of state in a shared atom when
        required. So, with that in mind let&apos;s create a more complex app
        following this principle:
      </P>
      <Example codeString={ComplexExampleRaw}>
        <ComplexExample />
      </Example>

      <P>
        Above we introduced the concept of a `selector`, which is a piece of
        derived state. So instead of in Redux (where you have a reducer
        calculate these bits of derived state and saving them to state), you
        instead have bespoke bits of derived state. This allows your actual
        atoms to become proper representations of input data, and selectors
        specifically that derive state as needed (and memoised).
      </P>

      <P>
        One drawback of Recoil is that it relies entirely on the React lifecycle
        and hooks to function - whereas with Redux you can `dispatch` from
        anything within your application. Therefore if you want to have some API
        call update your Recoil state, it must be done from within a component
        (or at least passed the `set` function from a component). One way to do
        this is to new-up the service from within a component:
      </P>
      <Example codeString={UsingRecoilOutsideReactRaw}>
        <UsingRecoilOutsideReact />
      </Example>

      <P>
        Another way is to combine Recoil and Context (for its intended
        function!) to create a lovely decoupling from component and service
        (which you may notice looks very similar to our combined state and
        context example from before, but without the prop-drilling to pass state
        down). We can also see how easy it is to have different components use
        the same context-provided service to update a single bit of state:
      </P>
      <Example codeString={ProviderServiceRaw}>
        <ProviderService />
      </Example>

      <P>
        With Recoil then, you can create complex applications using shared
        state, derived state, and update state from wherever needed without
        complex reducers. However, there may be times you want to use Redux for
        its global visibility of all state, and well-defined action dispatching
        pattern.
      </P>
    </Centre>

    <Button linkTo='/'>Home</Button>
  </>
);

export default Recoil;
