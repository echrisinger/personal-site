import React, { PureComponent } from 'react';
import moment from 'moment';

export default class Education extends PureComponent {
  render() {
    const education = {
      title: ['Harvey Mudd', 'Claremont McKenna'],
      degree: 'Bachelors of Computer Science',
      description: 'Studied Computer Science at Harvey Mudd College, outside Los Angeles, California. My later studies almost entirely focuesed on academic & engineering oriented Computer Science. Early in my education I excelled in Organic Chemistry & Mathematics. The analytical overlaps of these disciplines are fairly similar, and something I hope to return to in the future.',
      timespan: {
        start: moment('2015-09-01'),
        end: moment('2018-05-13')
      }
    };

    let schoolNames = [];
    education.title.forEach((school, i) => {
      schoolNames.push(<div><t4 className='entry-title'>{school}{i !== education.title.length-1 ? ',' : null}</t4><br/></div>)
    });

    return (
      <div classNamem='section-container'>
        <t3 className='section-title'>Education</t3>
        <div className='section-entry'>
          <div className='entry-brief-container'>
            {schoolNames}
            <div className='entry-info'>
              {education.timespan.start.format('Y')}-{education.timespan.end.format('Y')}
            </div>
          </div>
          <p className='entry-description'>{education.description}</p>
        </div>
      </div>
    )
  }
}
