import { FormProvider, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Auth, type IAuthProp } from "../components/auth";

export const AuthPage = () => {
  const methods = useForm<IAuthProp>();

  const onSubmit: SubmitHandler<IAuthProp> = (data) => {
    console.log(data);
  };

  return (
    <>
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Auth />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
    </>
  );
};