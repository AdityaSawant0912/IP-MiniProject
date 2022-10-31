import React from 'react';
import Navibar from '../../components/Navibar'
import { useRouter } from 'next/router';
import projects from '../../public/projects.json'
import Head from 'next/head';
import Script from 'next/script'

const Name = () => {
  let router = useRouter();
  let project = router.query.project
  let object = projects[project]
  return (
    <>
      <Navibar />
      <h1>{ object.title }</h1>
      <h2>{ object.description }</h2>
    
      {object.urls.map((url) => {
        return(
        // eslint-disable-next-line react/jsx-key
        <Script src={`/scripts/${project}${url}`} />
        )
      })}
      
      
      <main>
      </main>
    </>
  );
}

export default Name;
