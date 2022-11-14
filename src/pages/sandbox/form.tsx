import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { BsCircle } from 'react-icons/bs';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import DatePicker from '@/components/forms/DatePicker';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Input from '@/components/forms/Input';
import PasswordInput from '@/components/forms/PasswordInput';
import SelectInput from '@/components/forms/SelectInput';
import TextArea from '@/components/forms/TextArea';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { FileWithPreview } from '@/types/dropzone';

type SandboxForm = {
  name: string;
  gender: 'male' | 'female' | 'none';
  gender2: 'male' | 'female' | 'none';
  photo: FileWithPreview;
  date: Date;
  address: string;
};

export default function FormSandbox() {
  //#region  //*=========== Form ===========
  const methods = useForm<SandboxForm>({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========
  const onSubmit: SubmitHandler<SandboxForm> = (data) => {
    logger({ data }, 'rhf.tsx line 33');

    // eslint-disable-next-line no-console
    console.log({ data });
    return;
  };
  //#endregion  //*======== Form Submit ===========

  return (
    <Layout>
      <Seo templateTitle='Form Sandbox' />

      <section className='bg-bone-500'>
        <div className='layout min-h-screen py-20'>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='max-w-sm space-y-3'
            >
              <Typography as='h2' variant='h2'>
                Input
              </Typography>

              <Input
                id='name'
                labelType='row'
                label='Name'
                validation={{ required: 'Name must be filled' }}
              />
              <Input
                rightText='.com'
                required
                id='email'
                label='Email'
                validation={{ required: 'Email must be filled' }}
              />
              <Input
                leftText='www.'
                id='portofolioLink'
                label='Portofolio Link'
                validation={{ required: 'Portofolio Link must be filled' }}
              />
              <Input
                rightIcon={BsCircle}
                id='key'
                label='Key'
                validation={{ required: 'Key must be filled' }}
              />
              <Input
                id='hint'
                label='Hint'
                helperText='Please input hint'
                validation={{ required: 'Hint must be filled' }}
              />
              <PasswordInput
                id='password'
                labelType='row'
                label='Password'
                validation={{ required: 'Password must be filled' }}
              />
              <PasswordInput
                id='passwordConfirm'
                label='Password Confirmation'
                validation={{
                  required: 'Password Confirmation must be filled',
                }}
              />
              <SelectInput
                id='gender'
                label='Gender'
                validation={{ required: 'Gender must be filled' }}
                placeholder='Choose gender'
              >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='none'>Prefer not to say</option>
              </SelectInput>
              <DropzoneInput
                id='photo'
                label='Activity Photo'
                validation={{ required: 'Photo must be filled' }}
                accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
                helperText='You can upload file with .png, .jpg, atau .jpeg extension.'
              />
              <DatePicker
                id='date'
                label='Date'
                validation={{
                  required: 'Date must be filled',
                  valueAsDate: true,
                }}
                placeholder='dd/mm/yyyy'
              />
              <TextArea
                id='address'
                label='Address'
                validation={{ required: 'Address must be filled' }}
              />
              <div className='flex flex-wrap gap-4'>
                <Button variant='pink'>Not Submit</Button>
                <Button type='submit' variant='yellow'>
                  Submit
                </Button>
              </div>
              <p className='text-sm text-gray-800'>
                Check console after submit
              </p>
            </form>
          </FormProvider>
        </div>
      </section>
    </Layout>
  );
}
