import React from 'react';

type ResourceType = {
  name: string
  count: number
  image: string
}

interface ComponentProps {
  resources: ResourceType[] | null
}

const Resources = ({resources}:ComponentProps) => {
  return (
    <div className="flex gap-[0.391vw]">
      {(resources && resources.length > 0) && resources.map(r => {
        return <div key={r.name}>{r.name} {r.count}</div>
      })}
    </div>
  );
};

export default Resources;