import React, { memo } from 'react';

import { classNames } from 'shared/lib';
import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

function Overlay(props: OverlayProps) {
  const { className, onClick } = props;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Overlay"
      className={classNames(cls.Overlay, {}, [className])}
      onKeyDown={onClick}
      onClick={onClick}
    />
  );
}

const memorized = memo(Overlay);
export { memorized as Overlay };

Overlay.defaultProps = {
  className: '',
  onClick: () => {},
};
