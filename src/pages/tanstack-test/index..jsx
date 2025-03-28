import { Controller, useFieldArray, useForm, useFormState, useWatch } from "react-hook-form";
import { Button } from "antd";
import { Form, Input, Card } from "tea-component";
import { Link } from "react-router-dom";
import { useManifest } from "../../hooks/useManifest";

function FormTest() {
  const { data, refetch } = useManifest()
  return (
    <>
      <Card>
        <h3>
          hello world
        </h3>
        <Button onClick={() => refetch()}>
          refetch
        </Button>
        <Link to={'/form'}>
          Goto /form
        </Link>
      </Card>
      {JSON.stringify(data)}
    </>
  );
}

export default FormTest;
