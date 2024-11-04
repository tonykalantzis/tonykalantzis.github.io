import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';

const Education = ({ data, title, id }) => (
  <div className="education">
    <div className="link-to" id={id} />
    <div className="title">
      <h3>{title}</h3>
    </div>
    {data.map((degree) => (
      <Degree data={degree} key={degree.school} />
    ))}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      link: PropTypes.string,
      year: PropTypes.number,
    }),
  ),
  title: PropTypes.string,
  id: PropTypes.string,
};

Education.defaultProps = {
  data: [],
  title: 'Education', // Default title value
  id: 'education',
};

export default Education;
