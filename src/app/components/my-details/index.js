import React, { Profiler } from "react";

const MyDetails = (props) => {
  const { data } = props;
  return (
    <Profiler id="myProfiler" onRender={onRenderCallback}>
      <div>
        <p>
          Name: {data.firstName} {data.lastName}
        </p>
        <br />
        <span>Age: 26</span>
        <span>Role: {data.role}</span>
      </div>
    </Profiler>
  );
};

const onRenderCallback = (
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) => {
  // Aggregate or log render timings...
  console.log("phase-" + phase);
  console.log("startTime -" + startTime);
  console.log("commitTime -" + commitTime);
  console.log("actualDuration -" + actualDuration);
  console.log("baseDuration -" + baseDuration);
};

export default MyDetails;
