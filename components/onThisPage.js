"use client"
import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

const OnThisPage = ({ htmlContent }) => {
  // Function to extract h2 headings from HTML content
  const extractHeadings = (html) => {
    const headings = [];
    const parsedHtml = parse(html, {
      replace: ({ name, attribs, children }) => {
        if (name === 'h2') {
          const headingText = children.map(child => child.data).join('');
          const headingId = attribs.id;
          headings.push({ text: headingText, id: headingId });
        }
      }
    });
    return headings;
  };

  const headings = extractHeadings(htmlContent);

  return (
    <div className="on-this-page lg:absolute top-24 lg:right-44 mt-12">
      <h2 className='text-lg  font-bold '>On This Page</h2>
      <ul className='text-sm space-y-1'>
        {headings.map((heading, index) => (
          <li key={index}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

OnThisPage.propTypes = {
  htmlContent: PropTypes.string.isRequired,
};

export default OnThisPage;