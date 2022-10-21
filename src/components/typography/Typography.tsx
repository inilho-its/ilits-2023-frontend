import * as React from 'react';

import clsxm from '@/lib/clsxm';

enum TypographyVariant {
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'overline',
}

enum TypographyColor {
  'primary',
  'secondary',
  'tertiary',
  'quaternary',
  'danger',
  'warning',
  'success',
  'info',
}

type TypographyProps<T extends React.ElementType> = {
  /** @default 'p' */
  as?: T;
  className?: string;
  color?: keyof typeof TypographyColor;
  /** Variant
   * | Variant  | Size Class | Font Size | Font Size (px) | Font Weight |
   * | -------- | ---------- | --------- | -------------- | ----------- |
   * | h1       | h1         | 6xl       | 48px           | 800         |
   * | h2       | h2         | 5xl       | 40px           | 800         |
   * | h3       | h3         | 4xl       | 32px           | 800         |
   * | h4       | h4         | 3xl       | 24px           | 800         |
   * | h5       | h5         | 2xl       | 20px           | 800         |
   * | h6       | h6         | xl        | 16px           | 800         |
   * | subtitle1| subtitle   | lg        | 14px           | 600         |
   * | subtitle2| subtitle   | md        | 12px           | 600         |
   * | body1    | body       | base      | 16px           | 400         |
   * | body2    | body       | sm        | 14px           | 400         |
   * | caption  | caption    | xs        | 12px           | 400         |
   * | overline | overline   | xs        | 12px           | 400         |
   * @default 'body1'
   * @see https://tailwindcss.com/docs/font-size
   * @see https://tailwindcss.com/docs/font-weight
   */
  variant?: keyof typeof TypographyVariant;
  children: React.ReactNode;
} & React.ComponentProps<T>;

export default function Typography<T extends React.ElementType>({
  as,
  className,
  color = 'primary',
  variant,
  children,
  ...rest
}: TypographyProps<T>) {
  const Component = as || 'p';

  return (
    <Component
      className={clsxm(
        //#region  //*=========== Variants ===========
        [
          variant === 'h1' && 'text-6xl font-bold',
          variant === 'h2' && 'text-5xl font-bold',
          variant === 'h3' && 'text-4xl font-bold',
          variant === 'h4' && 'text-3xl font-bold',
          variant === 'h5' && 'text-2xl font-bold',
          variant === 'h6' && 'text-xl font-bold',
          variant === 'subtitle1' && 'text-lg font-semibold',
          variant === 'subtitle2' && 'text-md font-semibold',
          variant === 'body1' && 'text-base',
          variant === 'body2' && 'text-sm',
          variant === 'caption' && 'text-xs',
          variant === 'overline' && 'text-xs uppercase',
        ],
        //#endregion  //*======== Variants ===========
        //#region  //*=========== Color ===========
        [
          color === 'primary' && 'text-typo-primary',
          color === 'secondary' && 'text-typo-secondary',
          color === 'tertiary' && 'text-typo-tertiary',
          color === 'quaternary' && 'text-typo-quaternary',
        ],
        //#endregion  //*======== Color ===========
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
