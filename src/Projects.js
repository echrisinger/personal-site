import React, { PureComponent } from 'react'
import './Projects.css';

export default class Projects extends PureComponent {
  projectEntries = () => {
    const projectDetails = [{
      title: 'Surf Counter',
      description: 'Surf Counter supplies surfers with information on daily crowds at their favorite waves, with historical context. It scrapes Surfline for new cams, takes screenshots of daytime video feeds, and applies an OpenCV model to determine the number of surfers in the water at a time.',
      code_link: 'https://github.com/echrisinger/surf-counter',
      live_link: null
    }];

    let projectEntries = []
    projectDetails.forEach(proj => {
      const codeLinks = null;
      projectEntries.push(
        <div className='project-entry'>
          <div className='project-brief-container'>
            <t4 className='project-title'>{proj.title}</t4><br/>
            <div className='code-links'>
              {proj.code_link ? <a href={proj.code_link}>Source Code</a> : null}
              {proj.live_link ? <a href={proj.live_link}>Live</a> : null }
            </div>
          </div>
          <p className='project-description'>{proj.description}</p>
        </div>
      )
    })
    return(
      <div className='project-entries-container'>
        {projectEntries}
      </div>
    );
  }

  render() {
    const projectEntries = this.projectEntries();
    return (
      <div className='section-container'>
        <div className='section-title'><t3>Projects</t3></div>
        {projectEntries}
      </div>
    )
  }
}
