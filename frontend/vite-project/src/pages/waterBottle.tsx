import {useForm} from "react-hook-form";
import {FormProvider} from "react-hook-form";
import type {SubmitHandler} from "react-hook-form";
import {WaterBottle, type IwaterBottle} from "../components/waterBottle";

 const WaterBottlePage = () => {
    const methods = useForm<IwaterBottle>();

  const onSubmit: SubmitHandler<IwaterBottle> = (data) => {
    console.log(data);
  };

  return (
   <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>
        <WaterBottle/>
        <button type="submit">Submit</button>
    </form>
   </FormProvider>
    )
}

export default WaterBottlePage;