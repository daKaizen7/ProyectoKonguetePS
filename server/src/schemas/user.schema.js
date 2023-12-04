import { z } from "zod";

export const createSchema = z
  .object({
    username: z.string({
      required_error: "Nombre de usuario es requerido",
    }),
    email: z
      .string({
        required_error: "Email es requerido",
      })
      .email({
        message: "Email no valido",
      }),
    password: z
      .string({
        required_error: "La contraseña es requerida",
      })
      .min(6, {
        message: "La contraseña debe contener, cómo mínimo, 6 caracteres",
      }),
    confirmPassword: z
      .string({
        required_error: "Las contraseñas no coinciden",
      })
      .min(6, {
        message: "La contraseña debe contener, como mínimo, 6 caracteres",
      }),
      role: z
      .string({
        required_error: "Rol es requerido",
      })
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"],
      });
    }
  });
