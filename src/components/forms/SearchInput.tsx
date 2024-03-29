import clsx from 'clsx';
import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';
import { IconType } from 'react-icons';
import { HiExclamationCircle } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

enum LabelType {
  'row',
  'col',
}

export type SearchInputProps = {
  /** Input label */
  label?: string;
  /**
   * id to be initialized with React Hook Form,
   * must be the same with the pre-defined types.
   */
  id: string;
  /** Input placeholder */
  placeholder?: string;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /**
   * Input type
   * @example text, email, password
   */
  type?: React.HTMLInputTypeAttribute;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;

  // Label Type
  labelType?: keyof typeof LabelType;

  // Text
  rightTextButton?: string;
  rightTextClassName?: string;

  //SearchInput
  // status for unverified/verified, disable for disabling button
  status: boolean;
  disable: boolean;

  // Icon
  rightIcon?: IconType;
  rightIconClassName?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export default function SearchInput({
  label,
  placeholder = '',
  helperText,
  labelType = 'col',
  id,

  type = 'text',
  readOnly = false,
  hideError = false,
  required,

  // Icon Type
  rightIcon: RightIcon,
  rightIconClassName,

  // SearchInput
  status,
  disable,

  // Text Type
  rightTextButton: RightTextButton,
  rightTextClassName,
  validation,
  ...rest
}: SearchInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);

  return (
    <div>
      <div
        className={clsxm(
          labelType === 'row'
            ? 'grid grid-flow-row grid-cols-4 items-center'
            : ''
        )}
      >
        <label
          htmlFor={id}
          className={clsxm(
            'block text-sm font-semibold text-gray-700',
            labelType === 'row' && 'col-span-1'
          )}
        >
          {label}{' '}
          {required && <span className='font-bold text-danger-main'>*</span>}
        </label>
        <div
          className={clsxm(
            'relative mt-1 flex items-center',
            labelType === 'row' && 'col-span-3'
          )}
        >
          <input
            {...register(id, validation)}
            {...rest}
            type={type}
            name={id}
            id={id}
            readOnly={readOnly}
            className={clsx(
              readOnly
                ? 'cursor-not-allowed border-neutral-300 bg-gray-100 focus:border-neutral-300 focus:ring-0'
                : error
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'focus:ring-primary-500 border-neutral-300 focus:border-blue-400',
              'block w-full shadow-sm hover:border-blue-400',
              RightIcon && 'rounded-md pr-10',
              RightTextButton && 'rounded-l-md',
              !RightIcon && !RightTextButton && 'rounded-md'
            )}
            placeholder={placeholder}
            aria-describedby={id}
          />
          {/* Suffix */}
          {RightTextButton && (
            <button className='relative' disabled={disable} type='submit'>
              <div
                className={clsxm(
                  rightTextClassName,
                  'w-16 rounded-r-xl border border-[#D1D5DC] px-3 py-[10px] text-[#687083] transition-all duration-500 md:py-2',
                  !status && disable
                    ? 'w-52 bg-warning-main text-neutral-50'
                    : status && disable
                    ? 'w-52 bg-green-300 text-neutral-50'
                    : 'bg-gray-50'
                )}
              >
                {RightTextButton}
              </div>
            </button>
          )}
          {/* Right Icon */}
          {RightIcon && (
            <div className='absolute right-0 pr-4'>
              <RightIcon className={clsxm('', rightIconClassName)} />
            </div>
          )}
        </div>
      </div>
      <div className='mt-1'>
        {helperText && <p className='text-xs text-gray-500'>{helperText}</p>}
        {!hideError && error && (
          <span className='flex gap-2 text-sm text-red-500'>
            <HiExclamationCircle className='text-xl text-red-500' />
            {error.message as unknown as string}
          </span>
        )}
      </div>
    </div>
  );
}
