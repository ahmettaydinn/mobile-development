import UIKit

protocol Protocol1 {
    var degisken : Int { get set }
    
    func metod1()
    func metod2()-> String
}

class ClassA:Protocol1 {
    var degisken = 10
    
    func metod1() {
        print("Protocol Merhaba")
    }
    
    func metod2() -> String {
        return "Protocol Çalışması"
    }

}

var a = ClassA()

print(a.degisken)

a.metod1()
print(a.metod2())
