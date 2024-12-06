import { useRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "antd";

function FormTest() {
  const {control, register, getValues} = useForm();
  const {fields, append, prepend, remove, swap, move, insert} = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "test", // unique name for your Field Array
  });

  console.log(fields, 'fields');
  return (
    <form>
      {fields.map((field, index) => (
        <div><input
          key={field.id} // important to include key with field's id
          {...register(`test.${index}.value`)}
        /></div>
      ))}

      <Button onClick={() => {
        append({
          value: 1,
        })
      }}>
        Add
      </Button>
      {
        JSON.stringify(getValues())
      }
    </form>
  );
}

export default FormTest;
