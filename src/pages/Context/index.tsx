import React from 'react';

import Centre from '../../components/Centre';
import Example from '../../components/Example';
import Heading from '../../components/Heading';
import P from '../../components/P';
import Button from '../../components/Button';

import ProviderConsumer from '../../components/Examples/Context/ProviderConsumer';
import ProviderConsumerWithRerender from '../../components/Examples/Context/ProviderConsumerWithRerender';
import ProviderConsumerWithState from '../../components/Examples/Context/ProviderConsumerWithState';
import ProviderUseContext from '../../components/Examples/Context/ProviderUseContext';
import ProviderConsumerClosest from '../../components/Examples/Context/ProviderConsumerClosest';
import ProviderUseContextClosest from '../../components/Examples/Context/ProviderUseContextClosest';
import MixAndMatch from '../../components/Examples/Context/MixAndMatch';

import ProviderConsumerRaw from '!!raw-loader!../../components/Examples/Context/ProviderConsumer';
import ProviderConsumerWithRerenderRaw from '!!raw-loader!../../components/Examples/Context/ProviderConsumerWithRerender';
import ProviderConsumerWithStateRaw from '!!raw-loader!../../components/Examples/Context/ProviderConsumerWithState';
import ProviderUseContextRaw from '!!raw-loader!../../components/Examples/Context/ProviderUseContext';
import ProviderConsumerClosestRaw from '!!raw-loader!../../components/Examples/Context/ProviderConsumerClosest';
import ProviderUseContextClosestRaw from '!!raw-loader!../../components/Examples/Context/ProviderUseContextClosest';
import MixAndMatchRaw from '!!raw-loader!../../components/Examples/Context/MixAndMatch';

export const Context: React.FC = () => (
  <>
    <Centre>
      <Heading level={2}>Context</Heading>
      <P>
        Context is similar to ref in that it holds some value which can then be
        accessed. However the mechanism it does this by is wildly different!
      </P>

      <P>
        Context relies on the idea of a `provider` and a `consumer`, along with
        the actual context object that&apos;s being provided/consumed.
      </P>

      <P>We can see the provider/consumer pattern in use below:</P>
      <Example codeString={ProviderConsumerRaw}>
        <ProviderConsumer />
      </Example>

      <P>
        Just like refs, we can see that updating the context does not cause a
        rerender of child components:
      </P>
      <Example codeString={ProviderConsumerWithRerenderRaw}>
        <ProviderConsumerWithRerender />
      </Example>

      <P>
        However, you can combine context with other state-management solutions
        to force rerenders when context updates:
      </P>
      <Example codeString={ProviderConsumerWithStateRaw}>
        <ProviderConsumerWithState />
      </Example>

      <P>But at that point, you&apos;re pretty much using state.</P>

      <P>
        As well as the provider/consumer pattern, you can use
        provider/useContext within components! This is very handy if you want
        various components in your tree to be able to reference context:
      </P>
      <Example codeString={ProviderUseContextRaw}>
        <ProviderUseContext />
      </Example>

      <P>In both patterns, the closest provider-set value wins, however:</P>
      <Example codeString={ProviderConsumerClosestRaw}>
        <ProviderConsumerClosest />
      </Example>
      <Example codeString={ProviderUseContextClosestRaw}>
        <ProviderUseContextClosest />
      </Example>

      <P>
        You can mix-and-match contexts and extract their values in whatever
        components needed (as long as they&apos;re children of the providers of
        course):
      </P>
      <Example codeString={MixAndMatchRaw}>
        <MixAndMatch />
      </Example>

      <P>
        You can see how useful context would be if you wanted to pass a value
        around your application, without it causing rerenders. It&apos;s
        particularly useful for passing down services that you may want to
        ensure are a singleton, or anything that could be required at runtime.
      </P>
    </Centre>

    <Button linkTo='/'>Home</Button>
  </>
);

export default Context;
