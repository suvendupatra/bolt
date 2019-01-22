import { h } from '@bolt/core/renderers';

export const Agile = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg data-name="Layer 1" {...otherProps} viewBox="0 0 31.97 31.7">
      <path
        fill={bgColor}
        fill-rule="evenodd"
        d="M31.9 25.6a1.1 1.1 0 0 1 0 .8c0 .1-.1.2-.2.3L27 31.4a.91.91 0 0 1-.7.3 1.08 1.08 0 0 1-.7-.3 1 1 0 0 1 0-1.4l.8-.8 2.3-2.2h-11a13.49 13.49 0 0 1-8.6-3.1l-1.2-1.2A13.45 13.45 0 0 1 5.1 8.6 13.68 13.68 0 0 1 14.4.4a12.42 12.42 0 0 1 3.3-.4 13.65 13.65 0 0 1 13.6 13.5 10.9 10.9 0 0 1-.3 2.6 11.64 11.64 0 0 1-1.3 3.7.22.22 0 0 1-.2.2L28 18.6a11.73 11.73 0 0 1 .5-1.1 13.32 13.32 0 0 0 .5-1.9 14.92 14.92 0 0 0 .2-2.1A11.52 11.52 0 0 0 7 9.2a12.17 12.17 0 0 0-.8 4.3 11.69 11.69 0 0 0 2.4 7.1c.3.4.6.7.9 1.1a11.51 11.51 0 0 0 8.1 3.4h10.9l-.3-.3-2-2-.7-.7a1 1 0 0 1 1.4-1.4l2.2 2.2 2.5 2.5.1.1c.1-.2.2-.1.2.1zm-24.5-.7a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z"
        data-name="path-1"
      />
    </svg>
  );
};
