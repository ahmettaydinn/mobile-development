import UIKit

var okul:[Int:String] = [154:"Ahmet",67:"Mehmet",871:"Zeynep",45:"Ahmet"]

var sonuc1 = okul.filter({$0.key > 70})
print(sonuc1)

var sonuc2 = okul.filter({$0.value == "Ahmet"})
print(sonuc2)

var sonuc3 = okul.filter({$0.value == "Ahmet" && $0.key > 70})
print(sonuc3)
