import React from 'react';
import Navibar from '../../components/Navibar'
import projects from '../../public/projects.json'
import Link from 'next/Link';
const Index = () => {
  let keys = [];
  Object.keys(projects).forEach((key) => { 
    keys.push(key);
  })
  return (
    <>
      <Navibar />
      {keys.map((key) => {
        return (
          <>
            <Link href={`projects/${key}`} >{projects[key]?.title}</Link>
            <br />
          </>
        )
      })}

    </>
  );
}

export default Index;
