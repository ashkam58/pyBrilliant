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
import StarRowPattern from '../components/StarRowPattern';
import StarTrianglePattern from '../components/StarTrianglePattern';
import DiamondPattern from '../components/DiamondPattern';
import PatternChallenge from '../components/PatternChallenge';
import NumberTrianglePattern from '../components/NumberTrianglePattern';
import FloydsTrianglePattern from '../components/FloydsTrianglePattern';
import EmojiTrianglePattern from '../components/EmojiTrianglePattern';
import HeartPattern from '../components/HeartPattern';
import PascalTrianglePattern from '../components/PascalTrianglePattern';
import PatternMasterCertificate from '../components/PatternMasterCertificate';
import RainbowPattern from '../components/RainbowPattern';

import CartoonCard from "@/components/dsa/CartoonCard";
import BigOBarPlot from "@/components/dsa/BigOBarPlot";
import StopwatchSim from "@/components/dsa/StopwatchSim";
import DropConstantsDemo from "@/components/dsa/DropConstantsDemo";
import SearchSimulator from "@/components/dsa/SearchSimulator";
import PointerPlayground from "@/components/dsa/PointerPlayground";
import QuizMCQ from "@/components/ui/QuizMCQ";

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
    StarRowPattern,
    StarTrianglePattern,
    DiamondPattern,
    PatternChallenge,
    NumberTrianglePattern,
    FloydsTrianglePattern,
    EmojiTrianglePattern,
    HeartPattern,
    PascalTrianglePattern,
    PatternMasterCertificate,
    RainbowPattern,
    CartoonCard,
BigOBarPlot,
StopwatchSim,
DropConstantsDemo,
SearchSimulator,
PointerPlayground,
QuizMCQ,
    ...components,
  };
}
