import State from './Statistics';
import state from "../json/state";


export const App = () => {
  return (
    <div
      style={{
        display: 'block',
        fontSize: 20,
        color: '#010101',
        fontWeight: '500',
      }}
    >
      Please leave Feedback
      <State title="Statistics" state={state} />
    </div>
  );
};
