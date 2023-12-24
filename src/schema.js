import * as yup from "yup";

// 1 büyük harf
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// min 5 karakter
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

// validasyon seması
// formdaki inputların gecerli olması için
//gerekli koşulları tanımladığımız yapı
//input alanı için kosulları tanımlarken
// kullanmamız gerekn ilk yup fonksiyonu verinin,
//tipi olmalı . devamına ise zincirleme fonksiyonlar
// seklinde koşullar sıralanır
export const schema = yup.object().shape({
  //email için zorunluluklar belirle
  email: yup
    .string()
    .email("Lütfen geçerli bir email giriniz!")
    .required("Email alanı zorunludur!"),

  //yas için zorunluluklar

  age: yup
    .number()
    .min(18, "Yaşınız 18 den büyük olmalı!")
    .max(100, "Yaşınız 100 den büyük olamaz!")
    .integer("Lütfen tam sayı giriniz!")
    .required("Yaş alanı zorunludur!"),

  // sifre için zorunlulukları belirle

  password: yup
    .string()
    .min(5, "Şifre en az 5 karakter olmalı!")
    .required("Bu alan zorunludur!")
    // şifre zorunluluklara uyuyormu  kontrol et
    .matches(regex, "Şifreniz yeterince güçlü değil"),

  //onay sifresi için zorunlulukları belirle

  passwordConfirm: yup
    .string()
    // verdiğimiz inputtaki veriyle eşleşiyormu kontrol eder

    .oneOf([yup.ref("password")], "Şifreniz uyuşmuyor!")
    .required("Bu alan zorunludur!")
});
