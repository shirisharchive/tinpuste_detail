import {useFormContext} from "react-hook-form"

export  interface IwaterBottle{
    water:string;
}

export const WaterBottle = () => {
    
  const {register,formState:{errors }} = useFormContext<IwaterBottle>();
  return (
    <div>   
        <label htmlFor="water">Water Bottle</label>
        <input id="water" {...register("water",{required:true})}/>
        {errors.water && <span>Water bottle is required</span>}
    </div>
    )
}