'use server'

import fs from 'node:fs'

export async function handle(formData) {
    const nombre = formData.get('nombre')
    const apellidos = formData.get('apellidos')
    const avatar = formData.get('avatar')

    const contraseña = formData.get('contraseña')
    const textarea = formData.get('textarea')
    const fecha = formData.get('fecha')
    const semana = formData.get('semana')
    const mes = formData.get('mes')
    const number = formData.get('number')
    const search = formData.get('search')
    const telefono = formData.get('telefono')
    const email = formData.get('email')
    const URL = formData.get('URL')

    const buffer = await avatar.arrayBuffer()
    const bytes = new Uint8Array(buffer)

    console.log(nombre, apellidos, avatar, contraseña, textarea, fecha, semana, mes, number, search, telefono, email, URL)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    try {
        fs.writeFileSync('public/' + avatar.name, bytes, 'binary')
        return { type: 'success', message: 'Datos guardados' }
    } catch (error) {
        return { type: 'error', message: error.message }
    }

}
