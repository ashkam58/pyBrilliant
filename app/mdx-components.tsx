import Callout from '../components/Callout';
import CodeRunner from '../components/CodeRunner';
import Quiz from '../components/Quiz';
import VariableGuess from '../components/VariableGuess';
import FlowVisualizer from '../components/FlowVisualizer';
import MatchPatternDemo from '../components/MatchPatternDemo';

export function useMDXComponents(components: Record<string, any>) {
  return {
    Callout,
    CodeRunner,
    Quiz,
    VariableGuess,
    FlowVisualizer,
    MatchPatternDemo,
    ...components,
  };
}
