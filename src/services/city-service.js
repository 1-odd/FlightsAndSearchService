const {cityRepository} = require('../repository/index');



class CityService{
    constructor(){
        this.cityRepository = new cityRepository();
        }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at Service layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at Service layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try {
            const result = await this.cityRepository.updateCity(cityId,data);
            return result;
        } catch (error) {
            console.log("Something went wrong at Service layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at Service layer");
            throw {error};
        }
    }
}


module.exports = CityService;