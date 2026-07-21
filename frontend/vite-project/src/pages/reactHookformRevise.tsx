import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"

const Woda = {
   woda1: 1,
    woda2: 2,
    woda3: 3,
} as const;

type Woda = (typeof Woda)[keyof typeof Woda];

interface IFormInput{
   country:string;
   state:string;
   woda:string;
   woda_no:Woda;
}

export const ReactHookformRevise = () => {
    const { register, handleSubmit } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return(
        <div>
           <form onSubmit={handleSubmit((onSubmit))}>
            <label htmlFor="country">Country</label>
            <input id="country" {...register("country",{required:true})}/>
            <label htmlFor="state">State</label>
            <input id="state" {...register("state",{required:true})}/>
            <label htmlFor="woda">Woda</label>
            <input id="woda" {...register("woda",{required:true})}/>
            <label htmlFor="woda_no">Woda No</label>
            <select id="woda_no" {...register("woda_no",{required:true,min:1,max:3})}>
                <option value={Woda.woda1}>1</option>
                <option value={Woda.woda2}>2</option>
                <option value={Woda.woda3}>3</option>
            </select>
            <br/>
            <br/>
            <button type="submit">Submit</button>
           </form>
        </div>
    )
}