app.service('BattleService', ['$http', function($http) {
    var self = this;

    self.units = { data: [] };
    
    self.newUnit = {
        type: '',
        soldiers: '',
        powerPerSoldier: '',
        commander: ''
    }

    self.getUnits = function() {
        $http.get('/units').then(function (response) {
            self.units.data = response.data;
        });
    }

    self.submitUnit = function (unit) {
        $http.post('/units', unit).then(function (response) {
            console.log(response);
            self.getUnits();
        });
    }
}]);