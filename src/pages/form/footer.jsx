import { Print } from "./print";
import { Card } from "tea-component";

export function ProductFooter() {
  return <Card>
    <Card.Header>
      打印表单数据
    </Card.Header>
    <Card.Body>
      <Print/>
    </Card.Body>
  </Card>
}
