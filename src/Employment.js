import React, { PureComponent } from 'react';
import './Section.css';

export default class Empmloyment extends PureComponent {
  employmentEntries = () => {
    const employmentDetails = [
      {
        title: 'Transfix',
        description: "Transfix is a digital freight brokerage working with some of America's largest brands. I have primarily worked on our internal and external API & automating communications protocols with our largest shippers.",
        company_link: 'https://transfix.io/'
      },
      {
        title: 'Voodoo Mfg.',
        description: 'Voodoo Manufacturing is the first automated factory of 3D printers in the world. In my internship, I implemented a factory scheduler, which took a list of models with associated pickup dates and created an optimal solution using a modification of the RED algorithm.',
        company_link: 'https://voodoomfg.com/'
      }
    ];

    let employmentEntries = [];
    employmentDetails.forEach(proj => {
      employmentEntries.push(
        <div className='section-entry'>
          <div className='entry-brief-container'>
            <t4 className='entry-title'>{proj.title}</t4><br/>
            <div className='entry-info'>
              {proj.company_link ? <a href={proj.company_link}>Website</a> : null}
            </div>
          </div>
          <p className='entry-description'>{proj.description}</p>
        </div>
      )
    })
    return(
      <div className='section-entries-container'>
        {employmentEntries}
      </div>
    );
  }

  render() {
    const employmentEntries = this.employmentEntries();

    return (
      <div className='section-container'>
        <t3 className='section-header'>Employment</t3>
        {employmentEntries}
      </div>
    )
  }
}
