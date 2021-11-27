'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    customSave: async ctx => {
        let {raza, sexo, nombre,fecha_nacimiento, edad_aproximada} = ctx.request.body;
        
        const es_edad_exacta = fecha_nacimiento? true: false;

        if(fecha_nacimiento) {
            // fecha exacta viene seteada, se prioriza la fecha exacta incluso si la fecha aproximada viene seteada y anulo la edad aproximada ya que es menos exacta
             
             edad_aproximada = null;
        } else {
            fecha_nacimiento = null;
            // fecha aproximada viene seteada, si es menor a 12 meses lo dejamos en meses, si no lo paso a years
            if(edad_aproximada > 11){
               edad_aproximada = `${edad_aproximada / 12} years`
            } else {
                edad_aproximada = `${edad_aproximada} meses`
            }
        }
        
        strapi.query('mascotas').create({
            edad_aproximada,
            fecha_nacimiento,
            nombre,
            raza,
            es_edad_exacta,
            sexo
        })
        return "CREADO_OK";
    }
};
