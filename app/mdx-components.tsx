import Callout from '../components/Callout';
import CodeRunner from '../components/CodeRunner';
import Quiz from '../components/Quiz';
import VariableGuess from '../components/VariableGuess';
import FlowVisualizer from '../components/FlowVisualizer';
import MatchPatternDemo from '../components/MatchPatternDemo';
import DragonCave from '../components/DragonCave';
import TrollBridge from '../components/TrollBridge';
import TowerClimb from '../components/TowerClimb';
import LoopBattleArena from '../components/LoopBattleArena';
import LoopMasterCertificate from '../components/LoopMasterCertificate';

export function useMDXComponents(components: Record<string, any>) {
  return {
    Callout,
    CodeRunner,
    Quiz,
    VariableGuess,
    FlowVisualizer,
    MatchPatternDemo,
    DragonCave,
    TrollBridge,
    TowerClimb,
    LoopBattleArena,
    LoopMasterCertificate,
    ...components,
  };
}
