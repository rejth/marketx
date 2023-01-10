import React, { memo } from 'react';

import { classNames } from 'shared/lib';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  inverted?: boolean;
}

function Icon(props: IconProps) {
  const { className, Svg, inverted, ...otherProps } = props;

  return (
    <Svg
      className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
      {...otherProps}
    />
  );
}

const memorized = memo(Icon);
export { memorized as Icon };

Icon.defaultProps = {
  className: '',
  inverted: false,
};
