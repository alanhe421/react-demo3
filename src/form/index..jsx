import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Button } from "antd";
import { Form, Input } from "tea-component";

function FormTest() {
  const {control, register, getValues, reset} = useForm({
    defaultValues: {
      test: [],
      username: '',
      hello1: ''
    }
  });
  const {fields, append, prepend, remove, swap, move, insert} = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "test", // unique name for your Field Array
  });

  console.log(fields, 'fields');
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
      <Form.Item label={'username'}>
        <Controller control={control} render={({field}) =>
          <Input {...field}/>} name={'username'}/>
      </Form.Item>
      {fields.map((field, index) => (
        <div><input
          key={field.id} // important to include key with field's id
          {...register(`test.${index}.value`)}
        /></div>
      ))}

      <Form.Item label={'hello1'}>
        <Controller name={'hello1'} control={control} render={({field}) => <Input {...field}/>}/>
      </Form.Item>
    </form>
  );
}

export default FormTest;
