import { Controller, FormProvider, useFieldArray, useForm, useFormState, useWatch } from 'react-hook-form';
import { Card, Form, Input,Text } from 'tea-component';
import { useEffect } from 'react';
import { ProductFooter } from './footer';
import { Button } from 'antd';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const form_fields = [
  {
    name: 'price',
    transform: {
      output: v => +v
    },
    required: true,
  },
  {
    name: 'num'
  },
  {
    name: 'quantity',
    required: true
  }
]
const schema = yup
  .object()
  .shape({
    price: yup.number().required(),
    quantity: yup.number().min(1).max(100).required(),
  })
  .required();
const formConfig = {
  mode: 'onBlur',
  defaultValues: {
    test: [],
    price: '1',
    num: null,
    quantity: null,
    totalPrice: null
  },
  resolver: yupResolver(schema),
};

function FormTest() {
  const formProps = useForm(formConfig);
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

  const personsWatch = useWatch({
    control,
    name: ['persons']
  });

  const {isDirty, isSubmitting, dirtyFields} = useFormState({
    control
  });


  useEffect(() => {
    const wFn = watch((data, {name}) => {
      console.log('column changed', data, name);
    });
    return wFn.unsubscribe;
  }, []);


  console.debug('dirtyFields', dirtyFields);

  return (
    <FormProvider {...formProps}>
      <div className={'container'}>
        <Card>
          <Card.Header>商品详情</Card.Header>
          <Card.Body>
            <div>
              <Text theme="danger">              {
                formConfig.mode
              }
              </Text>
            </div>
            {
              form_fields.map(item => {
                console.log('item', item,)
                return <Form.Item label={item.name} required={item.required}>
                  <Controller key={item.name} render={({field}) => <Input {...field}
                                                                          onChange={v => {
                                                                            return field.onChange(item?.transform?.parse ? item.transform.output(v) : v);
                                                                          }}
                  />} name={item.name}
                              control={control}/>
                </Form.Item>;
              })
            }
            <Form.Item label={'Person 0'}>
              <input
                {...register('persons.0', {
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
            <div>dirtyFields: {Object.keys(dirtyFields).join(', ')}</div>
          </Card.Body>
        </Card>
      </div>
    </FormProvider>
  );
}

export default FormTest;
