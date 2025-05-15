import { useFormContext, useWatch } from "react-hook-form";

import hljs from "highlight.js";

export function Print({}) {
  const {control, watch} = useFormContext();
  // const values = useWatch({
  //   control,
  //   name: 'quantity'
  // })
  const values = watch('quantity');
  // console.log('xxx values', values);
  return <div dangerouslySetInnerHTML={{
    __html: hljs.highlight(JSON.stringify(values, null, 2), {
      language: 'json',
    }).value
  }}>
  </div>
}
