const { CityService } = require('../services/index');

const cityService = new CityService();


/**
 * for create a API which help to create a  city 
 * request method -> POST
 * request.data -> req.body
 */

const create = async (req,res) =>{
    try {
        const city = await cityService.createCity(req.body); 
        return res.status(201).json({
            data : city,
            success : true,
            message : "city created",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to create a city",
            err : error
        });
    }
}


// Method -> DELETE , data -> req.params

const destroy = async (req,res) =>{
    try {
        const response = await cityService.deleteCity(req.params.id); 
        return res.status(200).json({
            data : response,
            success : true,
            message : "city deleted",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to delete a city",
            err : error
        });
    }
}

// method -> GET , url or data -> /city/:id

const get = async (req,res) =>{
    try {
        const response = await cityService.getCity(req.params.id); 
        return res.status(200).json({
            data : response,
            success : true,
            message : "successfully fetched the city",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to  get the city",
            err : error
        });
    }
}



// method -> patch , url -> /city/:id , data -> req.body

const update = async (req,res) =>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body); 
        return res.status(200).json({
            data : response,
            success : true,
            message : "city updated",
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "not able to update the city",
            err : error
        });
    }
}


module.exports = {
    create,
    destroy,
    get,
    update
}