import React from 'react'

const JobDetails = (props) => {
  const options = <li key={props.results.uiid}>{props.results.uiid}</li>
 
  return <ul>{options}</ul>
}

export default JobDetails

