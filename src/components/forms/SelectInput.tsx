import clsx from 'clsx';
import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

export type SelectInputProps = {
  label: string;
  isLabel?: boolean;
  id: string;
  placeholder?: string;
  helperText?: string;
  type?: string;
  readOnly?: boolean;
  hideError?: boolean;
  validation?: RegisterOptions;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'select'>;

export default function SelectInput({
  label,
  helperText,
  id,
  isLabel = true,
  placeholder,
  readOnly = false,
  children,
  hideError,
  validation,
  ...rest
}: SelectInputProps) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const error = get(errors, id);

  const value = watch(id);

  // Add disabled and selected attribute to option, will be used if readonly
  const readOnlyChildren = React.Children.map<React.ReactNode, React.ReactNode>(
    children,
    (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(
          child as React.ReactElement<SelectInputProps>,
          {
            disabled: child.props.value !== rest?.defaultValue,
          }
        );
      }
    }
  );

  return (
    <div>
      {isLabel && (
        <label
          htmlFor={id}
          className={clsxm('block text-sm font-semibold text-gray-700')}
        >
          {label}
        </label>
      )}
      <div className='relative mt-1'>
        <select
          {...register(id, validation)}
          // defaultValue to value blank, will get overriden by ...rest if needed
          defaultValue=''
          {...rest}
          name={id}
          id={id}
          className={clsx(
            readOnly
              ? 'cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0'
              : error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'focus:border-primary-500 focus:ring-primary-500 border-gray-300 hover:border-blue-400',
            'block w-full rounded-md shadow-sm',
            { 'text-gray-500': value === '' }
          )}
          aria-describedby={id}
        >
          {placeholder && (
            <option value='' disabled hidden>
              {placeholder}
            </option>
          )}
          {readOnly ? readOnlyChildren : children}
        </select>
      </div>
      <div className='mt-1'>
        {helperText && <p className='text-xs text-gray-500'>{helperText}</p>}
        {!hideError && error && (
          <span className='flex gap-2 text-sm text-red-500'>
            <HiExclamationCircle className='text-xl text-red-500' />
            {error?.message as unknown as string}
          </span>
        )}
      </div>
    </div>
  );
}
