import { h } from '@bolt/core';

export const Mobility = ({ bgColor, fgColor, size, ...otherProps }) => (
    <svg width={size} height={size} {...otherProps} viewBox="0 0 32 32">
      <path
        d="M14.562 27.438c-.709-.708-.791-1.521-.25-2.438.584-.875 1.354-1.103 2.313-.687 1 .375 1.396 1.062 1.187 2.063-.125 1-.729 1.541-1.813 1.624-.583 0-1.062-.187-1.437-.562zM24 22.001H8V28c0 .584.187 1.063.562 1.438.375.375.854.563 1.438.563h11.999c.584 0 1.063-.188 1.438-.563.375-.375.563-.854.563-1.438v-5.999zm0-18c0-.584-.188-1.063-.563-1.438-.375-.375-.854-.562-1.438-.562H10c-.584 0-1.063.187-1.438.562C8.187 2.938 8 3.417 8 4.001v16h16v-16zm2 0V28c0 1.084-.397 2.022-1.188 2.813-.791.792-1.729 1.187-2.813 1.187H10c-1.084 0-2.022-.395-2.813-1.187C6.395 30.022 6 29.084 6 28V4.001c0-1.084.395-2.021 1.187-2.813C7.978.397 8.916.001 10 .001h11.999c1.084 0 2.022.396 2.813 1.187C25.603 1.98 26 2.917 26 4.001z"
        fill={bgColor}
        fill-rule="evenodd"
      />
    </svg>
  );
