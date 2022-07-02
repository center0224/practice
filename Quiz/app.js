const quiz =[
    {
    question: '最も売れたゲーム機はどれ？',
    anser: [
        '１.スーパーファミコン',
        '２.PS2',
        '３.ニンテンドースイッチ',
        '４.ニンテンドーDS'
    ],
    corect: '４.ニンテンドーDS'
    },
    {
        question: '「学ラン」の「ラン」とはなんでしょうか？',
        anser: [
            '１.花のラン',
            '２.オランダ',
            '３.ランダム',
            '４.ランキング'
        ],
        corect: '２.オランダ'
    },
    {
        question: 'カップ麺に入っている「かやく」を漢字で書くとどうなるでしょうか？',
        anser: [
            '１.火薬',
            '２.化薬',
            '３.加薬',
            '４.科薬'
        ],
        corect: '３.加薬'
    }
];

const quizlength = quiz.length
let quizindex = 0;
let score = 0;

const $Btn = document.getElementsByTagName('button')
const Btnlength = $Btn.length

//4つのボタンに選択肢を貼付
const setupQuiz = () =>{   
    let index = 0;
    document.getElementById('js-question').textContent =
    quizindex + 1 + '.' + quiz[quizindex].question;
    while(index < Btnlength){
        $Btn[index].textContent = quiz[quizindex].anser[index]
        index++;
    }
};

setupQuiz();

//ボタン クリックイベント
let Click_index = 0;
while(Click_index < Btnlength)  {
    $Btn[Click_index].addEventListener('click',(e)=>{
        //正誤判定
        if(quiz[quizindex].corect === e.target.textContent){
            window.alert('正解')
            score++
        }else{
            window.alert('不正解\n正解は「' +
            quiz[quizindex].corect + 
            '」です。'
            )
        }

        quizindex++;

        if (quizindex < quizlength)
        {
            //次の問題があれば実行
            setupQuiz();
        }else{
            //次の問題がなければ終了
            window.alert('終了。\nあなたの成績は'　+
            quiz.length + '問中' + score + '問 正解でした。\n' +
            '1問目に戻ります。'
            )
            location.reload();
        }

    });
    Click_index++;
}
