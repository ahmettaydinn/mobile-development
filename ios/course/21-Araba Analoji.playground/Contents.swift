import UIKit

class Araba {
    var renk:String?
    var hiz:Int?
    var calisiyorMu:Bool?
    
    func calistir(){
        calisiyorMu = true
    }
    
    func durdur(){
        calisiyorMu = false
        hiz = 0
    }
    
    func hizlan(kacKm:Int){
        hiz! += kacKm //hiz = hiz + kacKm
    }
    
    func yavasla(kacKm:Int){
        hiz! -= kacKm
    }
    
    func bilgiAl(){
        print("Renk        : \(renk!)")
        print("Hız         : \(hiz!)")
        print("Çalışıyormu : \(calisiyorMu!)")
    }
}

var bmw = Araba()

bmw.hiz = 180
bmw.renk = "Kırmızı"

bmw.calistir()
bmw.bilgiAl()

bmw.durdur()
bmw.calistir()
bmw.bilgiAl()

bmw.hizlan(kacKm: 50)

bmw.bilgiAl()

bmw.yavasla(kacKm: 20)

bmw.bilgiAl()

var sahin = Araba()

sahin.renk = "Beyaz"
sahin.hiz = 100
sahin.calistir()

sahin.bilgiAl()

sahin.hizlan(kacKm: 50)

sahin.bilgiAl()


