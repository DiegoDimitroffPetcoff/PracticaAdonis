'use strict'

class NuevoController {
    async index(){
        return [
          {
            id: 1,
            title: 'Hello world',
          },
          {
            id: 2,
            title: 'Hello universe',
          },
        ]
      }
    
    
}

module.exports = NuevoController
