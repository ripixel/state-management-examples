import React from 'react';

import Centre from '../../components/Centre';
import Example from '../../components/Example';
import Heading from '../../components/Heading';
import P from '../../components/P';
import Button from '../../components/Button';

import UseStateRefactor from '../../components/Examples/Redux/UseStateRefactor';
import UseStateRefactorRaw from '!!raw-loader!../../components/Examples/Redux/UseStateRefactor';

import SplitComponents from '../../components/Examples/Redux/SplitComponents';
import SplitComponentsRaw from '!!raw-loader!../../components/Examples/Redux/SplitComponents';

import SplitReducers from '../../components/Examples/Redux/SplitReducers';
import SplitReducersRaw from '!!raw-loader!../../components/Examples/Redux/SplitReducers';

export const Redux: React.FC = () => (
  <>
    <Centre>
      <Heading level={2}>Redux</Heading>
      <P>
        <a href='https://redux.js.org/'>Redux</a> is an implementation of the{' '}
        <a href='https://facebook.github.io/flux/'>Flux</a> pattern, as
        suggested by Facebook when they initially released React.
      </P>

      <P>
        If you want to learn more about it, check the Facebook documentation or
        many other great blogs out there that can be found with a Google search.
        However, the key idea is that data is only ever changed in one
        direction, and then read. So you do not have the concept of &quot;two
        way binding&quot; that other frameworks have.
      </P>

      <P>
        The advantage of this is that you have much greater control and
        understanding of the state of your data at any point. However, this can
        increase complexity for accomplishing simple tasks.
      </P>

      <P>
        Redux is <em>always</em> overkill for simple applications - you only
        need it (and other app-wide state management solutions) when you reach a
        certain level of complexity and need to share data between arbitrary
        components.
      </P>

      <P>
        Following on from our state example, this is how you would implement it
        in Redux rather than prop-drilling:
      </P>
      <Example codeString={UseStateRefactorRaw}>
        <UseStateRefactor />
      </Example>

      <P>
        For an in-depth understanding of what&apos;s going on, have a read of
        the Redux documentation and other resources. A key point to understand
        here though is that our `dispatch` function is provided by our using
        `connect` to wrap our components with a Redux-provided higher order
        component.
      </P>

      <P>
        Using `dispatch` we can push actions into our reducer, which in turn
        will update the Redux state. Our `connect` usage also has some
        cleverness to make sure components rerender when the bits of state they
        care about are updated.
      </P>

      <P>
        We can see this is very complex for what it gives us - but that&apos;s
        because we are not leveraging Redux for its purpose - sharing state
        between components which do not share a parent that contains the state.
        Let&apos;s split our components up some more:
      </P>
      <Example codeString={SplitComponentsRaw}>
        <SplitComponents />
      </Example>

      <P>
        In a real-world scenario, you may want to logically split your reducers
        into separate bits of state, so you don&apos;t have clashes of business
        logic:
      </P>
      <Example codeString={SplitReducersRaw}>
        <SplitReducers />
      </Example>

      <P>
        With these simple tools, you can now build appliations whereby any
        component can know any bit of state at any time, as long as it&apos;s
        stored in Redux state. Using `connect` to only connect components up to
        bits of state they care about reduces unnecessary rerenders, and the
        need to write your own higher order components.
      </P>

      <P>
        However, it&apos;s always worth remembering that just because you{' '}
        <em>can</em> put something in Redux state, always think if you{' '}
        <em>need</em> to. As you can see, the overhead is quite high for adding
        something to Redux state (and the reducer logic to go with it). If you
        can keep state within components (or maybe passing it down just one
        level of children) then do so.
      </P>
    </Centre>

    <Button linkTo='/'>Home</Button>
  </>
);

export default Redux;
