import React, { SVGProps } from 'react'

const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9.5L12 15.5L18 9.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default ChevronDown
