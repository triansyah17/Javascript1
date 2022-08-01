/*Menghitung rata-rata UN beserta grade, dengan 4 nilai :
1. Bahasa Indonesia
2. Bahasa Inggris
3. Matematika
4. IPA
Grade :
1. 90 - 100 = A
2. 80 - 89 = B
3. 70 - 79 = C
4. 60 - 69 = D
5. 0 - 59 = E */


    const mtk = 100
    const bIndo = 100
    const bInggris = 100
    const ipa = 110
    const average = (mtk + bIndo + bInggris + ipa) / 4;
  
    let grade = ''
    if  (average >= 90 && average <= 100) {
    grade = "A" }
    else if (average >= 80 && average <= 89){
      grade = 'B'
    }
    else if (average >= 70 && average <= 79) {
      grade = 'C'
    }
    else if (average >= 60 && average <= 69) {
      grade = 'D'
    }
    else if (average >= 0 && average <= 59){
      grade = 'E'
    }
    else {
      console.log('Error')
    }
    console.log(`Rata-rata = ${average}
    Grade = ${grade}`)

