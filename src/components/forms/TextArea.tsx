import clsx from 'clsx';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

export type TextAreaProps = {
  label: string;
  id: string;
  placeholder?: string;
  helperText?: string;
  readOnly?: boolean;
  hideError?: boolean;
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<'textarea'>;

export default function TextArea({
  label,
  placeholder = '',
  helperText,
  id,
  readOnly = false,
  hideError = false,
  validation,
  ...rest
}: TextAreaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label
        htmlFor={id}
        className={clsxm('block text-sm font-semibold text-gray-700')}
      >
        {label}
      </label>
      <div className='relative mt-1'>
        <textarea
          {...register(id, validation)}
          rows={3}
          {...rest}
          name={id}
          id={id}
          readOnly={readOnly}
          className={clsx(
            readOnly
              ? 'cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0'
              : errors[id]
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'focus:border-primary-500 focus:ring-primary-500 border-gray-300 hover:border-[#ED6C3A]',
            'block w-full rounded-md shadow-sm'
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />
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
