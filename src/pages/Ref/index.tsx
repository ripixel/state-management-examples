import React from 'react';

import Centre from '../../components/Centre';
import Example from '../../components/Example';
import Heading from '../../components/Heading';
import P from '../../components/P';
import Button from '../../components/Button';

import FocusButton from '../../components/Examples/Ref/FocusButton';
import FocusButtonWithRerender from '../../components/Examples/Ref/FocusButtonWithRerender';
import UpdateRef from '../../components/Examples/Ref/UpdateRef';

import FocusButtonRaw from '!!raw-loader!../../components/Examples/Ref/FocusButton';
import FocusButtonWithRerenderRaw from '!!raw-loader!../../components/Examples/Ref/FocusButtonWithRerender';
import UpdateRefRaw from '!!raw-loader!../../components/Examples/Ref/UpdateRef';

export const Ref: React.FC = () => (
  <>
    <Centre>
      <Heading level={2}>Ref</Heading>
      <P>
        React Ref (references) are used to persist anything throughout the React
        render lifecycle, and even between components! It&apos;s a simle as
        grabbing the `useRef` hook from the React library.
      </P>

      <P>
        This make them ideal candidates for holding references to DOM elements
        (such as input elements) so that you can do things with them (like focus
        them):
      </P>
      <Example codeString={FocusButtonRaw}>
        <FocusButton />
      </Example>

      <P>This reference is also not lost on a rerender:</P>
      <Example codeString={FocusButtonWithRerenderRaw}>
        <FocusButtonWithRerender />
      </Example>

      <P>However, updating a reference does not force a rerender:</P>
      <Example codeString={UpdateRefRaw}>
        <UpdateRef />
      </Example>

      <P>
        This makes ref ideal for holding a value that when changed, does not
        require a component re-render. For example, when getting a reference to
        a DOM element, or setting a value to be referenced by some other
        component when doing a calculation at some other time in the future.
      </P>
    </Centre>

    <Button linkTo='/'>Home</Button>
  </>
);

export default Ref;
