import { Controller, useFieldArray, useForm, useFormState, useWatch } from "react-hook-form";
import { Button } from "antd";
import { Form, Input } from "tea-component";
import { useEffect, useState } from "react";

function FormTest() {
  const { control, register, getValues, reset, watch, setValue } = useForm({
    defaultValues: {
      test: [],
      price: 0,
      num: 0,
      address: '',
      totalPrice: null
    }
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "test", // unique name for your Field Array
  });


  console.log(fields, 'fields');
  const totalPriceWatch = useWatch({
    control,
    name: 'totalPrice'
  })

  const allFieldWatch = useWatch({
    control,
    name: ['price', 'num']
  })


  const { isDirty, isSubmitting } = useFormState({
    control,
  })

  console.log('isSubmitting', isSubmitting)

  useEffect(() => {
    const wFn = watch((data, { name }) => {
      console.log(data, name)
      if (['price', 'num'].includes(name)) {
        const totalPrice = data.price * data.num;
        setValue('totalPrice', totalPrice);
      }
    });
    return wFn.unsubscribe;
  }, [])

  useEffect(() => {
    console.log('price num changed', allFieldWatch)
  }, [allFieldWatch])

  return (
    <form>

      <Button onClick={() => {
        append({
          value: 1,
        })
      }}>
        Add
      </Button>
      <Button onClick={() => {
        reset({})
      }}>
        初始化数组
      </Button>
      <Button onClick={() => {
        reset({})
      }}>
        清空form
      </Button>
      <div>
        {
          JSON.stringify(getValues())
        }
      </div>
      <Form.Item label={'price'}>
        <Controller control={control} render={({ field }) =>
          <Input {...field} />} name={'price'} />
      </Form.Item>
      <Form.Item label={'num'}>
        <Controller name={'num'} control={control} render={({ field }) => <Input {...field} />} />
      </Form.Item>
      <Form.Item label={'totalPrice'}>
        <Controller name={'totalPrice'} control={control} render={({ field }) => <Input disabled {...field} />} />
      </Form.Item>
      <Form.Item label={'address'}>
        <Controller name={'address'} control={control} render={({ field }) => <Input  {...field} />} />
      </Form.Item>

      {fields.map((field, index) => (
        <div><input
          key={field.id} // important to include key with field's id
          {...register(`test.${index}.value`)}
        /></div>
      ))}

    </form>
  );
}

export default FormTest;
