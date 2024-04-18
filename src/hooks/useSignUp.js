import { useForm } from "react-hook-form";
import { signUp } from "../services/auth.service";

const useSignUp = () => {
    const { register, handleSubmit, watch, reset } = useForm();

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
        reset
    }
}
export default useSignUp;