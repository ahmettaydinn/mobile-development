import UIKit

var dersler = ["Kimye","Matematik","Edebiyat"]
var notlar = [50,80,70]

var dersNotlari = Dictionary(uniqueKeysWithValues: zip(notlar,dersler))

print(dersNotlari)

var urunFiyatlari:[Double:String] = [15.99:"Kitap",59.99:"T-Shirt",239.99:"Saat"]

var fiyatlar = [Double](urunFiyatlari.keys)
var urunler = [String](urunFiyatlari.values)

print(fiyatlar)
print(urunler)
