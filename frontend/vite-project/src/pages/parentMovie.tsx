import { FormProvider, useForm } from "react-hook-form"
import {Form} from "react-hook-form"
import type {SubmitHandler} from "react-hook-form"

import { MovieName, type HelloProps } from "../components/child";


export const ParentMovie=()=>{
    const methods=useForm<HelloProps>()
    const onSubmit:SubmitHandler<HelloProps>=(data)=>{
        console.log(data)
    }

    return(
        <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
                <MovieName/>
                <button type="submit">Submit</button>
            </Form>
        </FormProvider>
    )
}