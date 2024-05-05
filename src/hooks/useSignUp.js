import { useForm } from "react-hook-form";
import { signUp } from "../services/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validations/registerSchema";

const useSignUp = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    });

    const onSubmit = handleSubmit(async (data) => {
        try {
            const response = await signUp(data);
            console.log(response);

            if (response) {
                // const responseCorreo = await send_email_add(dataToSendCorreo)
                console.log(responseCorreo);
            }

        } catch (e) {
            console.log(e)
        }
    });
    return {
        onSubmit,
        register,
        watch,
        errors,
        reset
    }
}
export default useSignUp;