import * as React from 'react';
import { IconType } from 'react-icons/lib';

import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

enum ButtonVariant {
  'bone',
  'pink',
  'orange',
  'red',
  'yellow',
  'lightBlue',
}

enum SizeVariant {
  'small',
  'medium',
  'large',
}

enum RoundVariant {
  'medium',
  'large',
}

type ButtonLinkProps = {
  size?: keyof typeof SizeVariant;
  round?: keyof typeof RoundVariant;
  variant?: keyof typeof ButtonVariant;
  isIcon?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      children,
      className,
      variant = 'bone',
      size = 'medium',
      round = 'medium',
      isIcon = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center text-base font-medium',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-main',
          'shadow-sm',
          'transition-colors duration-75',

          //#region  //*=========== Round Variant ===========
          [
            round === 'medium' && ['rounded-xl'],
            round === 'large' && ['rounded-3xl'],
          ],
          //#endregion  //*======== Round Variant ===========

          //#region  //*=========== Size Variant ===========
          [
            size === 'small' && ['min-h-[32px] py-1 px-[18px]'],
            size === 'medium' && ['min-h-[40px] py-2 px-[22px]'],
            size === 'large' && ['min-h-[48px] py-3 px-[26px]'],
          ],
          //#endregion  //*======== Size Variant ===========

          //#region  //*=========== Variants ===========
          [
            variant === 'bone' && [
              'bg-bone-500 text-neutral-1000',
              'border-2 border-neutral-1000',
              'hover:border-neutral-1000 hover:text-neutral-1000',
              'active:border-neutral-1000',
              'disabled:bg-bone-500 disabled:hover:bg-bone-500',
            ],
            variant === 'pink' && [
              'bg-pink-500 text-neutral-1000',
              'border-2 border-neutral-1000',
              'hover:border-neutral-1000 hover:text-neutral-1000',
              'active:border-neutral-1000',
              'disabled:bg-pink-500 disabled:hover:bg-pink-500',
            ],
            variant === 'orange' && [
              'bg-orange-500 text-neutral-1000',
              'border-2 border-neutral-1000',
              'hover:border-neutral-1000 hover:text-neutral-1000',
              'active:border-neutral-1000',
              'disabled:bg-orange-500 disabled:hover:bg-orange-500',
            ],
            variant === 'red' && [
              'bg-red-500 text-neutral-1000',
              'border-2 border-neutral-1000',
              'hover:border-neutral-1000 hover:text-neutral-1000',
              'active:border-neutral-1000',
              'disabled:bg-red-500 disabled:hover:bg-red-500',
            ],
            variant === 'yellow' && [
              'bg-yellow-500 text-neutral-1000',
              'border-2 border-neutral-1000',
              'hover:border-neutral-1000 hover:text-neutral-1000',
              'active:border-neutral-1000',
              'disabled:bg-yellow-500 disabled:hover:bg-yellow-500',
            ],
            variant === 'lightBlue' && [
              'bg-lightBlue-500 text-neutral-1000',
              'border-2 border-neutral-1000',
              'hover:border-neutral-1000 hover:text-neutral-1000',
              'active:border-neutral-1000',
              'disabled:bg-lightBlue-500 disabled:hover:bg-lightBlue-500',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isIcon && [
            size === 'small' && '!p-1.5',
            size === 'medium' && '!p-2',
            size === 'large' && '!p-3',
          ],
          className
        )}
        {...rest}
      >
        {LeftIcon && (
          <div className='mr-2'>
            <LeftIcon className={clsxm('text-xl', leftIconClassName)} />
          </div>
        )}
        {RightIcon && (
          <div className='ml-2'>
            <RightIcon className={clsxm('text-xl', rightIconClassName)} />
          </div>
        )}
        {children}
      </UnstyledLink>
    );
  }
);

export default ButtonLink;
