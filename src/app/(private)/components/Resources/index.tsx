import React from 'react';

interface ComponentProps {
  resources: {
    silver: number
    energy: number
    rubies: number
  }
}

const Resources = ({resources}:ComponentProps) => {
  return (
    <div className="flex gap-[0.391vw]">
      <div>{resources.silver}</div>
      <div>{resources.energy}</div>
      <div>{resources.rubies}</div>
    </div>
  );
};

export default Resources;