// ⚠️ Function Name Must be calculateFinalScore()
// রাকিব একটি সফটওয়্যার কোম্পানিতে প্রোগ্রামার হিসেবে কাজ করছেন। তার ছোট ভাই, রাজিব, একটি বিখ্যাত বিশ্ববিদ্যালয়ে ভর্তি পরীক্ষা দিয়েছে। ভর্তি পরীক্ষার ফলাফল বিভিন্ন মানদণ্ডের উপর ভিত্তি করে নির্ধারিত হবে। রাজিবের পরীক্ষার স্কোর, স্কুলের গ্রেড, এবং অভিভাবকের প্রোফেশন (যদি "farmer" হয়) সবকিছু মিলিয়ে তার ফাইনাল স্কোর বের করতে হবে।তুমি যেহেতু রাকিবের সহকর্মী এবং ভালো প্রোগ্রামার, তাই রাকিব চায় তুমি একটি ফাংশন calculateFinalScore() বানিয়ে দাও, যা রাজিবের বিভিন্ন তথ্য ইনপুট হিসেবে নিয়ে ফাইনাল স্কোর বের করবে। ফাইনাল স্কোর যদি ৮০ বা তার বেশি হয়, তাহলে সে ভর্তি হতে পারবে। অন্যথায়, সে ভর্তি হতে পারবে না। 
// Scoring Criteria
// testScore:  ৫০ পয়েন্ট সর্বোচ্চ
// schoolGrade : ৩০ পয়েন্ট সর্বোচ্চ
// Parent Profession: যদি "farmer" হয়, ২০ পয়েন্ট

// Input :  একটি অব্জেক্ট ইনপুট হিসেবে নেবে।  অবজেক্ট এ অবশ্যই name,  testScore, schoolGrade, isFFamily প্রোপার্টি গুলো থাকবে।  যেখানে 
// typeof name = string 
// typeof testScore= number ( testScore <= 50) 
// typeof schoolGrade = number ( schoolGrade <=30) 
// typeof  isFFamily = boolean


// Output :  এটা রিটার্ন করবে একটা বুলিয়ান ভ্যালু : true / false


// Challenge 📢:  যদি ইনপুট টি অব্জেক্ট না হয় তাহলে একটি এরর মেসেজ দেবে একটি  "Invalid Input"



// SAMPLE INPUT
// SAMPLE OUTPUT
// { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }
// true
// { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }
// false
// "hello" 
// Invalid Input                    
// { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }
// false               



/*function signature/sample */
function calculateFinalScore(obj) {
    const { name, testScore, schoolGrade, isFFamily } = obj;
    if(typeof obj !== 'object'){
        return "invalid Input";
    }
    let totalScore = testScore + schoolGrade;
    if(isFFamily === true){
        totalScore += 20;
    }
    // console.log(totalScore)
    if(totalScore >= 80){
        return true;
    }
    else{
        return false;
    }
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  })) //true
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false  })) //false
console.log(calculateFinalScore({ name: "Rajib", testScore: 50,  schoolGrade: 30, isFFamily : false  })) //ture
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  })) //false
console.log(calculateFinalScore("hello")) // invalid input