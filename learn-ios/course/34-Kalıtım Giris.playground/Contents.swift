import UIKit

class Arac {
    var renk:String?
    var vites:String?
    
    init(renk:String,vites:String) {
        self.renk = renk
        self.vites = vites
        print("Arac init() çalıştı")
    }
}

class Araba:Arac {
    var kasaTipi:String?
    
    init(kasaTipi:String,renk:String,vites:String) {
        self.kasaTipi = kasaTipi
        super.init(renk: renk, vites: vites)
        print("Araba init() çalıştı")
    }
    
}

class Nissan:Araba {
    var model:String?
    
    init(model:String,kasaTipi:String,renk:String,vites:String) {
        self.model = model
        super.init(kasaTipi: kasaTipi, renk: renk, vites: vites)
        print("Nissan init() çalıştı")
    }
    
}


//var araba = Araba(kasaTipi: "sedan", renk: "kırmızı", vites: "Otomatik")


var nissan = Nissan(model: "micra", kasaTipi: "Hatchback", renk: "MAVİ", vites: "Otomatik")
