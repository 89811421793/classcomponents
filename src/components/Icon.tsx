import React from 'react';
import SPRITE from "../assets/images/SPRITE.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  className?: string;
 
};

export class Icon extends React.Component<IconPropsType> {
  render() {
    const { iconId, width, height, viewBox, className } = this.props;

    return (
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <use xlinkHref={`${SPRITE}#${iconId}`} />
      </svg>
    );
  }
}
