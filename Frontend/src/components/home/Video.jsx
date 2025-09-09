import React from 'react';

function Video() {
  return (
    <> <div className='h-full w-full'>
      <video
        className='h-full w-full object-cover shadow-[rgba(18,20,19,3)]'
        autoPlay
        loop
        muted
        src="/assets/BGGALAXY.mp4"
      />
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[300px] 
                  bg-gradient-to-t from-black via-black/70 to-transparent"></div>
    </div>
    </>
  );
}

export default Video;
