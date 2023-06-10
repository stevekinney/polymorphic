import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary';
};

const Button = ({ variant, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'button',
        variant === 'primary' && 'button-primary',
        variant === 'secondary' && 'button-secondary',
        className,
      )}
      {...props}
    />
  );
};

export default Button;
