import { Controller, FormProvider, useFieldArray, useForm, useFormState, useWatch } from "react-hook-form";
import { Card, Form, Input } from "tea-component";
import { useEffect } from "react";
import { useManifest } from "../../hooks/useManifest";
import { ProductFooter } from "./footer";

function FormTest() {
  const {data, refetch} = useManifest()
  const formProps = useForm({
    defaultValues: {
      test: [],
      price: 0,
      num: 0,
      address: '',
      totalPrice: null
    }
  });
  const {
    control, register, getValues, reset, watch, setValue,
  } = formProps;
  const {fields, append, prepend, remove, swap, move, insert} = useFieldArray({
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


  const {isDirty, isSubmitting} = useFormState({
    control,
  })

  console.log('isSubmitting', isSubmitting)

  useEffect(() => {
    const wFn = watch((data, {name}) => {
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
    <FormProvider {...formProps}>
      <div className={'container'}>
        <Card>
          <Card.Header>
            商品详情
          </Card.Header>
          <Card.Body>
            <Form.Item label={'price'}>
              <Controller control={control} render={({field}) =>
                <Input {...field} />} name={'price'}/>
            </Form.Item>
            <Form.Item label={'num'}>
              <Controller name={'num'} control={control} render={({field}) => <Input {...field} />}/>
            </Form.Item>
          </Card.Body>
        </Card>
        <ProductFooter/>
      </div>
    </FormProvider>
  );
}

export default FormTest;
