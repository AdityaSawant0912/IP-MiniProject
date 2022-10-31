import React from 'react';
import Navibar from '../../components/Navibar'
import { useRouter } from 'next/router';
import projects from '../../public/projects.json'
import Head from 'next/head';
import Script from 'next/script'

const Name = () => {
  let router = useRouter();
  let project = router.query.project;
  let object = projects[project]
  return (
    <>
      <Navibar />
      <h1>{ object?.title }</h1>
      <h2>{ object?.description }</h2>
    
      {object?.urls.map((url) => {
        return(
          <>
          <Head>
          {
          // eslint-disable-next-line react/jsx-key, @next/next/no-before-interactive-script-outside-document
          }
          <script type="text/javascript" src={`/static/scripts/${project}${url}`} defer/>
          </Head>
        </>
        )
      })}
      
      
      <main>
      </main>
    </>
  );
}

export default Name;
