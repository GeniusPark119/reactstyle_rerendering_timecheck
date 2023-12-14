import React, { useState, Profiler } from 'react';
import { useDispatch } from 'react-redux';
import { addRenderData } from '../redux/actions/RenderDataActions';
import InlineStyleComponent from './InlineStyleComponent';
import StyledComponent from './StyledComponent';
import StatsCollector from "./StatsCollector";

const RerenderingTest = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const onRenderCallback = (
    id, phase, actualDuration
  ) => {
    console.log(`${id} - ${phase}: ${actualDuration.toFixed(2)}ms`);
    dispatch(addRenderData({ id, phase, actualDuration }));
  };

  return (
    <div>
      <Profiler id="InlineStyleComponent" onRender={onRenderCallback}>
        <InlineStyleComponent count={count} />
      </Profiler>
      <Profiler id="StyledComponent" onRender={onRenderCallback}>
        <StyledComponent count={count} />
      </Profiler>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <StatsCollector />
    </div>
  );
};

export default RerenderingTest;
