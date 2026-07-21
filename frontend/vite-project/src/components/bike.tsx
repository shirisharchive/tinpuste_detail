import {useFormContext} from "react-hook-form"

export interface IBikeProp{
    bikename:string;}

export const Bike=()=>{
    const{register,formState:{errors}}=useFormContext<IBikeProp>()

return(
<div>
    <label htmlFor="bikename">Bike Name</label>
    <input
        type="text"
        id="bikename"
        {...register("bikename", { required: "Bike name is required" })}
    />
    {errors.bikename && <span>{errors.bikename.message}</span>}
</div>
)
}