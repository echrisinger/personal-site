import React, { PureComponent } from 'react'
import './Section.css';

export default class Projects extends PureComponent {
  projectEntries = () => {
    const projectDetails = [
      {
        title: '[WIP] Surf Counter',
        description: 'Surf Counter supplies surfers with information on daily crowds at their favorite waves, with historical context. It scrapes Surfline for new cams, takes screenshots of daytime video feeds, and applies an OpenCV model to determine the number of surfers in the water at a time.',
        code_link: 'https://github.com/echrisinger/surf-counter',
        live_link: null
      },
      {
        title: 'Git Report',
        description: 'Git Report allows users to record activity on their file system in git repositories. Clients emit events for changes, which are recorded by a server. When a client requests a report, they are returned a report with a timeline and aggregations of their usage.',
        code_link: 'https://github.com/echrisinger/git_report',
        live_link: null
      }
    ];

    let projectEntries = []
    projectDetails.forEach(proj => {
      projectEntries.push(
        <div className='section-entry'>
          <div className='entry-brief-container'>
            <t4 className='entry-title'>{proj.title}</t4><br />
            <div className='entry-info'>
              {proj.code_link ? <a href={proj.code_link}>Source Code</a> : null}
              {proj.live_link ? <a href={proj.live_link}>Live</a> : null}
            </div>
          </div>
          <p className='entry-description'>{proj.description}</p>
        </div>
      )
    })
    return (
      <div className='section-entries-container'>
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
