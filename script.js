
let alumnos = []
let validador = true
let nombreAlumno

do {
    nombreAlumno = prompt('Ingrese un nombre ó "Esc" para fializar ').toUpperCase()
    if (nombreAlumno !== "ESC") {
        alumnos.push(nombreAlumno)
    }else{
        validador = false
        console.log("Los alumnos ingresados son")
        for (let i = 0; i < alumnos.length; i++) {
            console.log(`${i+1}-${alumnos[i]} `)
        }
    }
} while (validador)