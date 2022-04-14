import React from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ source, ...props }) => {
  return <ReactMarkdown unwrapDisallowed={true} children={source} {...props} />;
};

export default Markdown;
