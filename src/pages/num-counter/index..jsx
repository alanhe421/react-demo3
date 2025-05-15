import { useRef } from "react";
import { Button } from "antd";
import { useForm } from "react-hook-form";

function NumCounter() {
  const contentRef = useRef(null);
  const {register, handleSubmit} = useForm({
    shouldUseNativeValidation: false,
  })
  const onSubmit = async (data) => {
    console.log(data)
  }
  return <div>
    <Button>
      append content
    </Button>
    <div ref={contentRef}>
      21221
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", {
          required: "Please enter your first name.",
        })} // custom message
      />
      <input type="submit"/>
    </form>
  </div>
}

export default NumCounter;
