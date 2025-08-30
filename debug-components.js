// Debug script to test component imports
try {
  console.log('Testing Callout...');
  const Callout = require('./components/Callout');
  console.log('Callout:', typeof Callout.default);
} catch (e) {
  console.error('Callout error:', e.message);
}

try {
  console.log('Testing CodeRunner...');
  const CodeRunner = require('./components/CodeRunner');
  console.log('CodeRunner:', typeof CodeRunner.default);
} catch (e) {
  console.error('CodeRunner error:', e.message);
}

try {
  console.log('Testing Quiz...');
  const Quiz = require('./components/Quiz');
  console.log('Quiz:', typeof Quiz.default);
} catch (e) {
  console.error('Quiz error:', e.message);
}

try {
  console.log('Testing VariableGuess...');
  const VariableGuess = require('./components/VariableGuess');
  console.log('VariableGuess:', typeof VariableGuess.default);
} catch (e) {
  console.error('VariableGuess error:', e.message);
}
