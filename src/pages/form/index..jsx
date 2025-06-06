import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm
} from 'react-hook-form';
import { Card, Form, Input, Text } from 'tea-component';
import React, { useCallback, useEffect, useState } from 'react';
import { ProductFooter } from './footer';
import { Button } from 'antd';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const form_fields = [
  {
    name: 'price',
    transform: {
      output: (v) => Number(v)
    },
    required: true
  },
  {
    name: 'quantity',
    required: true
  },
  {
    name: 'num'
  }
];
const schema = yup
  .object()
  .shape({
    price: yup.number().required(),
    quantity: yup.number().min(1).max(100).required()
  })
  .required();
const FORM_CONFIG = {
  mode: 'onChange',
  defaultValues: {
    test: [],
    // test2: [],
    price: 100,
    num: null,
    quantity: null,
    totalPrice: null
  },
  resolver: yupResolver(schema)
};

function FormTest() {
  const formProps = useForm(FORM_CONFIG);
  const {
    control,
    register,
    getValues,
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isValid, errors, isDirty, isSubmitting }
  } = formProps;

  const personField = useFieldArray({
    control,
    name: 'persons'
  });

  const [inputValue, setInputValue] = useState(1_0);

  const onSubmit = useCallback(() => {}, []);
  useEffect(() => {
    const wFn = watch((data, { name }) => {
      if (name === 'price') {
        console.log('price changed', data[name], name);
      }
    });
    return wFn.unsubscribe;
  }, []);

  console.log('form render', watch());

  return (
    <>
      <FormProvider {...formProps}>
        <div className={'container'}>
          <Card>
            <Card.Header>商品详情</Card.Header>
            <Card.Body>
              <div>
                <Text theme="danger"> {FORM_CONFIG.mode}</Text>
              </div>
              <Form.Item label={'xxxx'}>
                <Controller
                  render={({ field }) => <Input {...field} />}
                  name={'test2.8'}
                  control={control}
                />
              </Form.Item>
              {form_fields.map((item) => {
                return (
                  <Form.Item label={item.name} required={item.required}>
                    <Controller
                      key={item.name}
                      render={({ field }) => (
                        <Input
                          {...field}
                          onChange={(v) => {
                            return field.onChange(
                              item?.transform?.output
                                ? item.transform.output(+v)
                                : v
                            );
                          }}
                        />
                      )}
                      name={item.name}
                      control={control}
                    />
                  </Form.Item>
                );
              })}

              {personField.fields.map((item, idx) => {
                return (
                  <Form.Item label={`Person ${idx}`}>
                    <input
                      {...register(`persons.${idx}`, {
                        valueAsNumber: true
                      })}
                    />
                  </Form.Item>
                );
              })}
            </Card.Body>
          </Card>
          <ProductFooter />
          <Card>
            <Card.Header>操作</Card.Header>
            <Card.Body className={'btn-group'}>
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
              <Button
                onClick={() => {
                  setValue('price', 55, {
                    shouldDirty: true
                  });
                }}
              >
                SetDirty price
              </Button>

              <Button
                onClick={() => {
                  // null
                  setValue('price', undefined, {
                    shouldDirty: true
                  });
                }}
              >
                Set price null
              </Button>
              <Button
                onClick={() => {
                  personField.append(Math.random().toString());
                }}
              >
                Add Person
              </Button>
              <Button
                onClick={() => {
                  personField.remove(personField.fields.length - 1);
                }}
              >
                Remove Person
              </Button>
              <Button className={'ml-8'} onClick={handleSubmit(onSubmit)}>
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
              {/*<div>dirtyFields: {Object.keys(dirtyFields).join(', ')}</div>*/}
            </Card.Body>
          </Card>
        </div>
      </FormProvider>
      <Card>
        <Card.Body>
          <div>
            <label>
              <span>姓名</span>
              <input value={inputValue} />
            </label>
            <button
              onClick={() => {
                setInputValue(undefined);
              }}
            >
              设置为空
            </button>
            <button
              onClick={() => {
                setInputValue(Math.random());
              }}
            >
              设置为随机数
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default FormTest;
