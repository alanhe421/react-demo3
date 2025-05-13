import { Print } from "./print";
import { Card } from "tea-component";
import { useFormContext, useWatch } from "react-hook-form";

export function ProductFooter() {
  const {control, watch} = useFormContext();
  // const priceWatch = useWatch({control, name: 'price'});
  const priceWatch = watch('price');
  console.log('render footer', priceWatch);
  return <Card>
    <Card.Header>
      打印表单数据
    </Card.Header>
    <Card.Body>
      <Print/>
    </Card.Body>
  </Card>
}
