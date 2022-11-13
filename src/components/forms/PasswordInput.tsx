import clsx from 'clsx';
import { useState } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { HiExclamationCircle, HiEye, HiEyeOff } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

enum LabelType {
  'row',
  'col',
}

export type PasswordInputProps = {
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
  // Label type
  labelType?: keyof typeof LabelType;
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
} & React.ComponentPropsWithoutRef<'input'>;

export default function PasswordInput({
  label,
  placeholder = '',
  helperText,
  labelType = 'col',
  id,
  readOnly = false,
  required,
  hideError,
  validation,
  ...rest
}: PasswordInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

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
        <div className='relative col-span-3 mt-1'>
          <input
            {...register(id, validation)}
            {...rest}
            type={showPassword ? 'text' : 'password'}
            name={id}
            id={id}
            readOnly={readOnly}
            className={clsx(
              readOnly
                ? 'cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0'
                : errors[id]
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'focus:border-primary-500 focus:ring-primary-500 border-gray-300',
              'block w-full rounded-md shadow-sm',
              'hover:border-[#ED6C3A]'
            )}
            placeholder={placeholder}
            aria-describedby={id}
          />

          <button
            onClick={togglePassword}
            type='button'
            className='focus:ring-primary-500 absolute inset-y-0 right-0 mr-3 flex items-center rounded-lg p-1 focus:outline-none focus:ring'
          >
            {showPassword ? (
              <HiEyeOff className='cursor-pointer text-xl text-gray-500 hover:text-gray-600' />
            ) : (
              <HiEye className='cursor-pointer text-xl text-gray-500 hover:text-gray-600' />
            )}
          </button>
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
