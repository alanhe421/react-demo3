import { Controller, useFieldArray, useForm, useFormState, useWatch } from "react-hook-form";
import { Button } from "antd";
import { Form, Input, Card } from "tea-component";
import { Link } from "react-router-dom";
import { useManifest } from "../../hooks/useManifest";
import { useEffect } from "react";

function FormTest() {
  const { data, refetch } = useManifest()


useEffect(() => {
  const interval = setInterval(() => {
  }, 1000)
  return () => clearInterval(interval)
}, [])

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
