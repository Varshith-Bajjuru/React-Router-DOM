import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/varshith-bajjuru")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className='bg-slate-200 hover:bg-slate-400 m-10 rounded-3xl'>
      <div className='flex justify-center py-4 text-4xl font-bold'>Github</div>
      <div className='flex justify-center gap-10 py-4'>
        {data && (
          <>
            <div>
              <img src={data.avatar_url} alt={`${data.login}'s avatar`} />
              <h1 className='flex justify-center py-2 font-bold'>{data.login}</h1>
            </div>
            <div className='font-bold text-xl'>
              <h1>Followers: {data.followers}</h1>
              <h1>Following: {data.following}</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Github;
