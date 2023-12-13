'use client'
import { SubmitButton } from '@/app/submitButton'
import { handle } from '@/app/actions'
import { toast } from 'react-hot-toast';


export function Formulario() {
    async function wrapper(data) {
        const { type, message } = await handle(data);
        if (type == 'success') toast.success(message)
        if (type == 'error') toast.error(message)
    }

    return (
        <form action={wrapper}>
            <input type="text" required name="nombre" placeholder="Introduce tu nombre" />
            <input type="text" required name="apellidos" placeholder="Introduce tus apellidos" />
            <label htmlFor="avatar">
                Selecciona un avatar para enviar al servidor
            </label>

            <input type="password" required name="contraseña" placeholder="Password" />

            <label>
                <input type="radio" name="radio1" />
                Radio 1
                <input type="radio" name="radio2" />
                Radio 2
                <input type="radio" name="radio3" />
                Radio 3
            </label>

            <label>

                <input type="checkbox" name="checkbox1" />
                Checkbox 1
                <input type="checkbox" name="checkbox2" />
                Checkbox 2
                <input type="checkbox" name="checkbox3" />
                Checkbox 3

            </label>
            <br></br><br></br>
            <textarea cols="30" rows="3" name="textarea" placeholder="Inserte información variada"></textarea>
            <input type="datetime-local" name="fecha" />
            <input type="month" name="mes" />
            <input type="week" name="semana" />
            <input type="range" name="rango" />
            <input type="number" name="number" placeholder="Enter a number" />
            <input type="search" name="search" placeholder="Realice una búsqueda" />
            <input type="tel" name="telefono" placeholder="Introduzca su teléfono" />
            <input type="email" required name="email" placeholder="email@gmail.com" />
            <input type="url" name="URL" placeholder='Introduzca un búsqueda' />


            <input type="file" required name="avatar" accept="image/*" />
            <SubmitButton />
        </form>
    )
}

