import UIKit

var dict1 = [Int:String]()

var dict2 = [3.14:"Pi",2.71:"e"]

var dict3:[Int:String] = [1:"Bir",2:"İki",3:"Üç"]

var iller = [16:"Bursa",34:"İstanbul",6:"Ankara"]

iller[35] = "İzmir"
iller[10] = "Balıkesir"

print(iller)

iller[16] = "Yeni Bursa"
iller.updateValue("Yeni İzmir", forKey: 35)
print(iller)

for (anahtar,deger) in iller {
    print("Anahatar \(anahtar) , İl \(deger)")
}

iller.removeValue(forKey: 35)
print(iller)

iller.isEmpty
iller.count
iller.first

var ters = iller.reversed()
print(ters)
