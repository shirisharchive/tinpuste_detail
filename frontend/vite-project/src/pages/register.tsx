import { FormProvider, useForm, type SubmitHandler } from "react-hook-form"
import {  Auth,type IAuthProp, } from "../components/auth";


export const Register = () => {
    const methods=useForm<IAuthProp>()
   const onSubmit:SubmitHandler<IAuthProp>=(data)=>{
    console.log(data)
   }
  return (
    <div>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Auth/>
                <button type="submit">Submit</button>
            </form>
        </FormProvider>
        </div>
    );
}