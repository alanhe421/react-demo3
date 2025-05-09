import { Controller, FormProvider, useFieldArray, useForm, useFormState, useWatch } from 'react-hook-form';
import { Card, Form, Input } from 'tea-component';
import { useEffect } from 'react';
import { ProductFooter } from './footer';
import { Button } from 'antd';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object()
  .shape({
    price: yup.number().required(),
    quantity: yup.number().min(1).max(100).required(),
  })
  .required();

function FormTest() {
  const formProps = useForm({
    mode: 'onBlur',
    defaultValues: {
      test: [],
      price: null,
      num: null,
      quantity: null,
      totalPrice: null
    },
    resolver: yupResolver(schema),
  });
  const {
    control,
    register,
    getValues,
    reset,
    watch,
    setValue,
    formState: {isValid, errors}
  } = formProps;
  const {fields, append, prepend, remove, swap, move, insert} = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormProvider)
      name: 'test' // unique name for your Field Array
    }
  );
  console.log(fields, 'fields');

  const allFieldWatch = useWatch({
    control,
    name: ['price']
  });

  const {isDirty, isSubmitting} = useFormState({
    control
  });

  useEffect(() => {
    const wFn = watch((data, {name}) => {
      console.log('column changed', data, name);
    });
    return wFn.unsubscribe;
  }, []);

  return (
    <FormProvider {...formProps}>
      <div className={'container'}>
        <Card>
          <Card.Header>商品详情</Card.Header>
          <Card.Body>
            <Form.Item label={'price'}>
              <Controller
                rules={{
                  required: true,
                  validate: (s) => {
                    console.log('price validate', s);
                  }
                }}
                control={control}
                render={({field}) => <Input {...field} />}
                name={'price'}
              />
            </Form.Item>
            <Form.Item label={'num'}>
              <Controller
                rules={{required: true}}
                name={'num'}
                control={control}
                render={({field}) => <Input {...field} />}
              />
            </Form.Item>
            <Form.Item label={'quantity'}>
              <input
                {...register('quantity', {
                  // valueAsNumber: true,
                })}
              />
            </Form.Item>
          </Card.Body>
        </Card>
        <ProductFooter/>
        <Card>
          <Card.Header>操作</Card.Header>
          <Card.Body>
            <Button
              onClick={() => {
                reset({
                  ...getValues(),
                  price: 55
                });
              }}
            >
              重置price
            </Button>
            <Button className={'ml-8'} disabled={!isValid}>
              保存
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>form属性</Card.Header>
          <Card.Body>
            <div>isDirty: {isDirty ? 'true' : 'false'}</div>
            <div>isSubmitting: {isSubmitting ? 'true' : 'false'}</div>
            <div>
              Errors:{' '}
              {Object.keys(errors).map((key) => (
                <div key={key}>
                  {key}: {errors[key]?.message || '验证错误'}
                </div>
              ))}
            </div>
            <div>isValid: {isValid.toString()}</div>
          </Card.Body>
        </Card>
      </div>
    </FormProvider>
  );
}

export default FormTest;
