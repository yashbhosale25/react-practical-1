import { useForm } from "react-hook-form";
function FormHook() {
    const {register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
        <input {...register("name", {required: true})} placeholder="Name"/>
        {errors.name && <p>Required</p>}

        <input {...register("email", {required: true})} placeholder="Email" />
        {errors.email && <p>Required</p>}

        <input type="password"
        {...register("password", {required: true, minlength: 6})}
        placeholder="Password" />

        {errors.password?.type === "Rrequired" && <p>password id required</p>}
        {errors.password?.type === "minlength" && <P>min 6 chars</P>}


        <button>Submit</button>

        </form>
    );
}

export default FormHook;