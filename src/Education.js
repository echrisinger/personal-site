import React, { PureComponent } from 'react';
import moment from 'moment';

export default class Education extends PureComponent {
  render() {
    const education = {
      title: ['Claremont McKenna', 'Harvey Mudd (CS)'],
      degree: 'Bachelors of Computer Science',
      description: 'Attended Claremont McKenna, and studied Computer Science off-campus at Harvey Mudd College, outside Los Angeles, California. I mostly focused on academic & engineering oriented Computer Science. Early in my education I enjoyed studying Organic Chemistry & Biology.',
      timespan: {
        start: moment('2015-09-01'),
        end: moment('2018-05-13')
      }
    };

    let schoolNames = [];
    education.title.forEach((school, i) => {
      schoolNames.push(<div><t4 className='entry-title'>{school}{i !== education.title.length - 1 ? ',' : null}</t4><br /></div>)
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
