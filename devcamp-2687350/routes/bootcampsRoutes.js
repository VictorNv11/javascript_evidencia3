const express = require('express')
const Bootcamp = require('../models/bootcampsModel')
//DEFINIR RUTEADOR DE BOOTCAMP

const router = express.Router()

//UTILIZAR EL RUTEADOR PARA CREAR LAS RUTAS

//1 SELECCIONAR TODOS LOS BOOTCAMPS
router.get(('/'),
           async (req, res ) =>{
            //trar los bootcamps en bd
            const bootcamps = await Bootcamp.find()

                return res.json({
                    success: true,
                    data: bootcamps
                })
          })

//2 SELECCIONA EL BOOTCAMP CUYO ID SE PASE POR UN PARA METRO    
router.get('/:id', 
            async (req , res) =>{
            const bootcmapId = req.params.id
             const bootcamp = await Bootcamp.findById(bootcmapId)
             return res.json({
                success: true,
                data:bootcamp
             }
            )   
        })
//3 Crear bootamp
router.post(('/'),
          async (request, response ) =>{
            //guardar el bootcamp que viene en el body
            const newBootcamp = await Bootcamp.create(request.body)

                return response.json({
                    success: true,
                    data: newBootcamp
                })
          })

 //4 Actualizar bootcamp por id    
router.put('/:id', 
    async (req , res) =>{
        bootcampId = req.params.id,
        updBootcamp = await Bootcamp.findByIdAndUpdate(
        bootcampId,
        req.body,
        {
            new: true
        }
    )
     return res.json({
        success: true,
        data: updBootcamp
     }
    )   
})   

//5. borrar  
router.delete('/:id', 
        async (req , res) =>{
            bootcampId = req.params.id
            await Bootcamp.findByIdAndDelete(bootcampId)
             return res.json(    
            {
                success: true,
               data:[]
             }
            )   
        })
module.exports = router