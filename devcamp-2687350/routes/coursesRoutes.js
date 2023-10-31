const express = require('express')
const Courses = require('../models/coursesModel')
//DEFINIR RUTEADOR DE CURSOS    
const router = express.Router()
//UTILIZAR EL RUTEADOR PARA CREAR LAS RUTAS

//1 SELECCIONAR TODOS LOS CURSOS
router.get(('/'),
            async (req, res ) =>{
               const courses =await Courses.find()

                return res.json({
                    success: true,
                    data: courses
                })
          })

//2 SELECCIONA EL CURSO CUYO ID SE PASE POR UN PARA METRO    

router.get('/:id', 
         async (req , res) =>{
            const cursoId = req.params.id
            const courses = await Courses.findById(cursoId)
             return res.json({
                success: true,
                data:courses
             }
            )   
        })

//3 Crear curso
router.post(('/'),
           async (req, res ) =>{
            const newCourses = await Courses.create(req.body)    

            return res.json({
                    success: true,
                    data: newCourses
                })
          })

          //4 Actualizar curso por id    
router.put('/:id', 
    async(req , res) =>{
        cursosId = req.params.id
        updCourses = await Courses.findByIdAndUpdate(
            cursosId,
            req.body,
            {
                new:true
            }
        )
        return res.json({
        success: true,
       data: updCourses
     }
    )   
})

//5. borrar  
router.delete('/:id', 
         async (req , res) =>{
            cursosId = req.params.id
            await Courses.findByIdAndDelete(cursosId)
             return res.json(
            {
                success: true,
               data:[]
             }
            )   
        })
module.exports = router
