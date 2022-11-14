import clsx from 'clsx';
import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { IconType } from 'react-icons';
import { HiExclamationCircle } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

enum LabelType {
  'row',
  'col',
}

export type InputProps = {
  /** Input label */
  label: string;
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
  leftText?: string;
  rightText?: string;
  leftTextClassName?: string;
  rightTextClassName?: string;

  // Icon
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
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
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconClassName,
  rightIconClassName,

  // Text Type
  leftText: LeftText,
  rightText: RightText,
  leftTextClassName,
  rightTextClassName,

  validation,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
          {/* Icon and Text Left */}
          {LeftIcon && (
            <div className='absolute pl-4'>
              <LeftIcon className={clsxm('', leftIconClassName)} />
            </div>
          )}
          {/* Prefix */}
          {LeftText && (
            <div
              className={clsxm(
                'rounded-l-xl border border-[#D1D5DC] bg-gray-50 px-3 py-2 text-[#687083]',
                leftTextClassName
              )}
            >
              {LeftText}
            </div>
          )}

          <input
            {...register(id, validation)}
            {...rest}
            type={type}
            name={id}
            id={id}
            readOnly={readOnly}
            className={clsx(
              readOnly
                ? 'cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0'
                : errors[id]
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'focus:border-primary-500 focus:ring-primary-500 border-gray-300',
              'block w-full shadow-sm hover:border-[#ED6C3A]',
              LeftIcon && 'rounded-md pl-12',
              RightIcon && 'rounded-md pr-10',
              LeftText && 'rounded-r-md',
              RightText && 'rounded-l-md',
              !LeftIcon && !RightIcon && !LeftText && !RightText && 'rounded-md'
            )}
            placeholder={placeholder}
            aria-describedby={id}
          />
          {/* Suffix */}
          {RightText && (
            <div
              className={clsxm(
                'rounded-r-xl border border-[#D1D5DC] bg-gray-50 px-3 py-2 text-[#687083]',
                rightTextClassName
              )}
            >
              {RightText}
            </div>
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
        {!hideError && errors[id] && (
          <span className='flex gap-2 text-sm text-red-500'>
            <HiExclamationCircle className='text-xl text-red-500' />
            {errors[id]?.message as unknown as string}
          </span>
        )}
      </div>
    </div>
  );
}
