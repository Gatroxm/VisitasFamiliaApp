const { response } = require('express');
const Vicita = require('../model/Visitas.model');

const getVisitas = async(req, res = response) => {
    try {
        await Vicita.find({})
            .exec((err, visitas) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        msn: 'Error Al esncontrar las visitas'
                    });
                }
                return res.status(200).json({
                    ok: true,
                    msn: 'Listado De Visitas',
                    visitas
                })
            })
    } catch (error) {
        throw new Error(`Error en el formato: ${error}`);
    }

}

const getVisitasByID = async(req, res = response) => {
    try {
        const id = req.params.id;
        await Vicita.findById(id)
            .exec((err, visita) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        msn: 'Error Al esncontrar las visitas'
                    });
                }
                return res.status(200).json({
                    ok: true,
                    msn: 'Visita Encontrada',
                    visita
                })
            })
    } catch (error) {
        throw new Error(`Error en el formato: ${error}`);
    }

}

const postVisitas = async(req, res = response) => {
    try {
        const { codigo, fecha, nombre, efectiva, descripcion } = req.body;
        /**
         * Creación del modelo para su creación
         */
        const visita = new Vicita({ codigo, fecha, efectiva, nombre, descripcion });

        await visita.save((err, visita) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    msn: 'Error al crear la visita'
                });
            }
            return res.status(200).json({
                ok: true,
                msn: 'Visita Creada',
                visita
            })
        });

    } catch (error) {
        throw new Error(`Error en el formato: ${error}`);
    }

}

const putVisita = async(req, res = response) => {
    try {
        const id = req.params.id;
        const { codigo, fecha, efectiva, nombre, descripcion } = req.body;

        await Vicita.findByIdAndUpdate(id, { codigo, fecha, efectiva, nombre, descripcion }, { new: true, runValidators: true }, (err, visita) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    msn: 'Error al actualizar la visita'
                });
            }
            return res.status(200).json({
                ok: true,
                msn: 'Visita Actualizada',
                visita
            })
        })
    } catch (error) {
        throw new Error(`Error en el formato: ${error}`);
    }

}

const deleteVicita = async(req, res = response) => {
    try {
        const id = req.params.id;
        await Vicita.findByIdAndDelete(id, (err, visita) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    msn: 'Error al eliminar la visita'
                });
            }
            return res.status(200).json({
                ok: true,
                msn: 'Visita Eliminada'
            })
        })
    } catch (error) {
        throw new Error(`Error en el formato: ${error}`);
    }

}

module.exports = {
    getVisitas,
    getVisitasByID,
    postVisitas,
    putVisita,
    deleteVicita
}