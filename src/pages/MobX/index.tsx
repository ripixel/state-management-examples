import React from 'react';

import Centre from '../../components/Centre';
import Example from '../../components/Example';
import Heading from '../../components/Heading';
import P from '../../components/P';
import Button from '../../components/Button';

import Simple from '../../components/Examples/MobX/Simple';
import SimpleRaw from '!!raw-loader!../../components/Examples/MobX/Simple';

import SimpleState from '../../components/Examples/MobX/SimpleState';
import SimpleStateRaw from '!!raw-loader!../../components/Examples/MobX/SimpleState';

import GlobalVar from '../../components/Examples/MobX/GlobalVar';
import GlobalVarRaw from '!!raw-loader!../../components/Examples/MobX/GlobalVar';

import Context from '../../components/Examples/MobX/Context';
import ContextRaw from '!!raw-loader!../../components/Examples/MobX/Context';

import StoreSharing from '../../components/Examples/MobX/StoreSharing';
import StoreSharingRaw from '!!raw-loader!../../components/Examples/MobX/StoreSharing';

export const MobX: React.FC = () => (
  <>
    <Centre>
      <Heading level={2}>MobX</Heading>
      <P>
        <a href='https://mobx.js.org/'>MobX</a> is a complete paradigm change
        compared to the other methods of state managements we&apos;ve looked at
        so far. Instead of relying on getters and setters used within
        components, MobX is centered around Observers of fully-contained and
        managed areas of state.
      </P>

      <P>So as with all frameworks, for a simple example it may be overkill:</P>
      <Example codeString={SimpleRaw}>
        <Simple />
      </Example>

      <P>
        As the class is responsible for both storing state and providing the
        methods to manipulate it, you can see how this scales incredibly well in
        large applications. You can both own the state and manipulations in a
        single file. This works incredibly well with TypeScript.
      </P>

      <P>
        The above example however relies on passing the observer down as props -
        so we can solve this by using similar patterns as before.
      </P>

      <P>
        First up, internal state for when we only need state within an
        application, and we&apos;ve decided it&apos;s too complex for
        `useState`:
      </P>
      <Example codeString={SimpleStateRaw}>
        <SimpleState />
      </Example>

      <P>
        It&apos;s also worth noting that the onus is entirely on the class being
        observable, if we can trust that it is a singleton (such as by doing an
        `export default new NumberMobX()`) then we can simply reference the
        instance of the class without passing it in anywhere:
      </P>
      <Example codeString={GlobalVarRaw}>
        <GlobalVar />
      </Example>

      <P>
        As long as any components are wrapped with `observer`, and any classes
        use the `makeAutoObservable` function, as long as we have access to an
        instance of the class we can be sure its state will be reflected in
        renders (and cause rerenders).
      </P>

      <P>
        If we don&apos;t want to rely on singletons being imported, we can
        always use React context as we have with Recoil:
      </P>
      <Example codeString={ContextRaw}>
        <Context />
      </Example>

      <P>
        One final puzzle piece is to understand how MobX stores can interact
        with one another. As they are just standard JavaScript classes, we can
        use any patterns we like! For example, we can just pass in instances to
        others in their constructors:
      </P>
      <Example codeString={StoreSharingRaw}>
        <StoreSharing />
      </Example>

      <P>
        We can see how great MobX would be for large applications, with massive
        stores of state which need to be properly controlled and manipulated in
        pre-defined ways. However, it also makes simple derived state more
        complex by the nature of having to pass class instances around. Check
        the fantastic{' '}
        <a href='https://mobx.js.org/react-integration.html'>
          React Integrations
        </a>{' '}
        page on the MobX site to see more examples.
      </P>
    </Centre>

    <Button linkTo='/'>Home</Button>
  </>
);

export default MobX;
