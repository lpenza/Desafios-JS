
let alumnos = []
let validador = true
let nombreAlumno
let listaAlumnos=''

do {
    nombreAlumno = prompt('Ingrese un nombre ó "Esc" para fializar ').toUpperCase()
    if (nombreAlumno !== "ESC") {
        alumnos.push(nombreAlumno)
    }else{
        validador = false
    }
} while (validador)



console.log("Los alumnos ingresados son")
for (let i = 0; i < alumnos.length; i++) {
    listaAlumnos+=`${i+1}-${alumnos[i]}\n`
}

alert(listaAlumnos)