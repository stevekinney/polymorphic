import { ComponentProps, ElementType } from 'react';

type BoxProps<E extends ElementType> = Omit<ComponentProps<E>, 'as'> & {
  as?: E;
};

const Box = <E extends ElementType = 'div'>({ as, ...props }: BoxProps<E>) => {
  const TagName = as || 'div';
  return <TagName {...props} />;
};

export default Box;
