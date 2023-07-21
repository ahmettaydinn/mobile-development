import UIKit

class Personel {
    func iseAlindi(){
        print("Personel Mutlu")
    }
}

class Mudur:Personel {
    func iseAl(p:Personel){
        p.iseAlindi()
    }
    
    func terfiEttir(p:Personel){
        
        if p is Ogretmen {
            (p as! Ogretmen).maasArttir()
        }
        
        if p is Isci {
            print("Işçiler terfi alamaz")
        }
    }
}

class Isci:Personel {
    
}

class Ogretmen:Personel {
    func maasArttir(){
        print("Maaş arttı.Öğretmen Mutlu")
    }
}

var ogretmen:Personel = Ogretmen()
var isci:Personel = Isci()



var mudur = Mudur()

mudur.iseAl(p: isci)
mudur.iseAl(p: ogretmen)

mudur.terfiEttir(p: ogretmen)
mudur.terfiEttir(p: isci)
