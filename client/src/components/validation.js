import * as yup from "yup"

export const userValidation= yup.object().shape({
email: yup.string().required().email(),
    password: yup.string().required().max(15).min(8)
})