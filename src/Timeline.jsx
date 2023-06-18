import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const experience = [
    {
      year: '2021',
      role: 'Software Developer',
      company: 'Company 1',
      description: 'Some description',
    },
    {
      year: '2022',
      role: 'Senior Developer',
      company: 'Company 2',
      description: 'Some description',
    },
    {
      year: '2023',
      role: 'Software Engineer',
      company: 'Company 3',
      description: 'Some description',
    },
    {
      year: '2024',
      role: 'Frontend Developer',
      company: 'Company 4',
      description: 'Some description',
    },
    {
      year: '2025',
      role: 'Software Developer',
      company: 'Company 5',
      description: 'Some description',
    },
    {
      year: '2026',
      role: 'Software Developer',
      company: 'Company 6',
      description: 'Some description',
    },
  ];

  return (
    <div className="timeline">
      {experience.map((exp, i) => (
        <div key={i} className="timeline-item">
          <div className="timeline-item-year">{exp.year}</div>
          <div className="timeline-item-content">
            <h3>
              {exp.role} at {exp.company}
            </h3>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
