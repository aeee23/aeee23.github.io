var counter =0;



new Vue({
el:"#my-app",
    data:{
    name:"aj-book",
    counter:0,
    book:[
{
fasel: "الأجرومية",
  text:""
},
{
  fasel: " أنواع الكلام",
  text: 
"الكلامُ: هو اللفظُ المُرَكَّبُ المُفيدُ بالوَضْع. وأقسامُه ثلاثة: اِسمٌ، وفعلٌ، وحَرفٌ جاءَ لمَعنى فالاسم يُعرَفُ: بالخَفضِ، والتنوينِ، ودخولِ الألف واللام، وحروفِ الخَفضِ, وهي: مِن، وإلى، وعَن، وعلى، وفِي, ورُبَّ، والباءُ، والكافُ، واللامُ، وحروفِ القَسَم وهي: الواو، والباء، والتاء. والفعل يُعرَفُ بقد، والسِّين، وسَوف، وتاء التأنيث الساكنة والحرف ما لا يَصلُحُ معه دليلُ الاسم ولا دليل الفعل."
},
{
  fasel: "الإعراب",
  text: "هو تغيير أواخرِ الكَلِم، لاختلافِ العوامل الداخلة عليها لفظا أو تقديرا. وأقسامُه أربعة: رَفع، ونَصب، وخَفْض، وجَزْم. فللأسماء من ذلك الرفع، والنصب، والخفض، ولا جزم فيها, وللأفعالِ من ذلك: الرفع، والنصب، والجزم, ولا خَفضَ فيها."
},
{  
  fasel: "معرفة علامات الإعراب",
text: "باب معرفة علامات الإعراب: للرفع أربع علامات: الضمة والواو والألف والنون، فأما الضمة تكون علامة للرفع في أربعة مواضع: الاسم المفرد، وجمع التكسير، وجمع المؤنث السالم، والفعل المضارع الذي لم يتصل بآخره شيء. وأما الواو تكون علامة للرفع في موضعين: في جمع المذكر السالم، وفي الأسماء الخمسة، وهي: أبوك وأخوك وحموك وفوك وذو مال، وأما الألف فتكون علامة للرفع في تثنية الأسماء خاصة، وأما النون فتكون علامة للرفع في الفعل المضارع إذا اتصل به ضمير التثنية، أو ضمير جمع، أو ضمير المؤنثة، أو المخاطبة."

},
{
fasel: " علامات النصب",
  text: "وللنصب خمس علامات: الفتحة ، والألف، والكسرة ، والياء، وحذف النون. فأما الفتحةُ فتكون علامةً للنصب في ثلاثة مواضع: في الاسم المفرد ، وجمع التكسير، والفعل المضارع إذا دخل عليه ناصِبٌ ولم يَتَّصل بآخره شيء. وأما الألف فتكون علامة للنصب في الأسماء الخمسة نحو:رأيتُ أباكَ وأخاكَ ، وما أشبَهَ ذلك.وأما الكسرة فتكون علامة للنصب في جمع المؤنث السالم. وأما الياء فتكون علامة للنصب في التثنية والجمع.وأما  حذفُ النُّون فيكون علامة للنصب في الأفعال الخمسة التي رفعها بثَبَاتِ النون."
},
{
  fasel: "علامات الخفض(الجر)",
  text: "وللخفضِ ثلاثُ علامات: الكسرة، والياء ، والفتحة. فأما الكسرةُ فتكونُ علامةً للخفضِ في ثلاثة مواضع، في الاسم المفرد المُنصَرِف، وجمع التكسير المُنصَرِف، وجمع المؤنث السالم. وأما الياء فتكون علامة للخفض في ثلاثة مواضع: في الأسماء الخمسة، وفي التثنية والجمع. وأما الفتحة فتكون علامة للخفض في الاسم الذي لا ينصَرِف."
},
{   fasel: "علامات الجزم",
  text: "وللجَزمِ علامتان: السُّكُون والحَذف، فأما السكون فيكون علامة للجزم في الفعل المضارع الصحيح الآخر وأما الحذف فيكون علامة للجزم في الفعل المضارع المُعتَلِّ الآخِر، وفي الأفعال الخمسة التي رَفْعُهَا بثَبَات النون."
}
]
}
})


const min = document.getElementById('min');
const add = document.getElementById('add');


