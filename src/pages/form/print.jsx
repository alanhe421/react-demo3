import { useFormContext, useWatch } from "react-hook-form";

import hljs from "highlight.js";

export function Print({}) {
  const {control} = useFormContext();
  const values = useWatch({
    control
  })
  return <div dangerouslySetInnerHTML={{
    __html: hljs.highlight(JSON.stringify(values, null, 2), {
      language: 'json',
    }).value
  }}>
  </div>
}
