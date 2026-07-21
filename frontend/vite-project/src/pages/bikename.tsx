import {useForm} from "react-hook-form"
import { type SubmitHandler} from "react-hook-form"
import {FormProvider} from "react-hook-form"
import {Bike,type IBikeProp} from "../components/bike"

export const BikeNamePage=()=>{
    const methods=useForm<IBikeProp>()
    const onSubmit:SubmitHandler<IBikeProp>=(data)=>{
        console.log(data)
    }
    return(
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Bike/>
                <button type="submit">Submit</button>
            </form>
        </FormProvider>
    )
}