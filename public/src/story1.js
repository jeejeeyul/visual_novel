var playerName = prompt("이름을 정해주세요!");
var nam1 = "./images/1.png";
var seo1 = "./images/5.png";
var jang1 = "./images/9.png";

var story1 = [
  {
    character: "",
    names: `${playerName}`,
    lines: `안녕? 난 이번 학생회장인 ${playerName}이야.`,
  },
  {
    names: `${playerName}`,
    lines: `학생회장이 된 나의 주요 공약은`,
  },
  {
    names: `${playerName}`,
    lines: `'1. 술, 담배 냄새 없는 학교 만들기'`,
  },
  {
    names: `${playerName}`,
    lines: `'2. 학교폭력 없는 학교 만들기'지.
    `,
  },
  {
    names: `${playerName}`,
    lines: `그렇다면 이 공약을 시행하러 가볼까?`,
  },
  {
    names: `${playerName}`,
    lines: `좋아. 학생회장으로써의 첫 등교이니 일찍왔지.`,
  },
  {
    names: `${playerName}`,
    lines: `무려 7시에 등교했다구~`,
  },
  {
    names: `${playerName}`,
    lines: `응...? 근데 이게 무슨 냄새지?`,
  },
  {
    names: "",
    lines: `장서은이 지나간다.`,
  },
  {
    names: `${playerName}`,
    lines: `어...? 쟤한테서 나는 것 같은데...?`,
  },
  {
    names: `${playerName}`,
    lines: `근데 어디가는거지? 따라가야겠다.`,
  },
  {
    names: "",
    lines: `양아치 친구들이 모여 담배를 피고있다. (학교 구석진 곳)`,
  },
  {
    names: "장서은",
    character: jang1,
    lines: `ㅎㅇㅎㅇ`,
  },
  {
    lines: `뭐야... 나빼고 벌써 담타임..?`,
  },
  {
    names: "안정아",
    character: "",
    lines: `야~ 이 x야 왜케 늦게 옴??`,
  },
  {
    names: "김지호",
    character: "",
    lines: `ㅋㅋㅋㅋㅋ`,
  },
  {
    lines: `한대 하실?`,
  },
  {
    names: "안정아",
    character: "",
    lines: `ㅇㅋ ㄱ~`,
  },
  {
    names: `${playerName}`,
    lines: `으... 나의 신성한 학교에서 담배를 피다니...`,
  },
  {
    names: `${playerName}`,
    lines: `선생님께 말씀드려야겠다.`,
  },
];

var story2 = [
  {
    names: `${playerName}`,
    lines: `선생님을 불러온다.`,
  },
  {
    names: `${playerName}`,
    lines: `선생님. 저기 우리학교 학생들이 담배를 피고 있어요!`,
  },
  {
    names: `선생님`,
    lines: `어디..! 학교에서 담배를 펴`,
  },
  {
    names: `선생님`,
    lines: `너네 다 이리와!`,
  },
  {
    names: "",
    character: "",
    lines: `그렇게 양아치들은 선생님께 끌려가 징계 처분을 받았다.`,
  },
  {
    names: `${playerName}`,
    lines: `좋아~! 한 건 했고!`,
  },
  {
    names: `${playerName}`,
    lines: `다시는 담배를 안피겠다는 각서까지 받게하다니.. 최고잖아?!`,
  },
  {
    names: "",
    character: "",
    lines: `그렇게 ${playerName}은 자신의 공약을 실현했다!!`,
  },
];

var story3 = [
  {
    names: `${playerName}`,
    lines: `후.. 드디어 끝났네.`,
  },
  {
    names: `${playerName}`,
    lines: `힘들었다...!`,
  },
  {
    names: "",
    character: "",
    lines: `시끌시끌 주변 공원에서 시끄러운 소리가 들려온다.`,
  },
  {
    names: `${playerName}`,
    lines: `근데.. 이건 또 무슨 소리람...?`,
  },
  {
    names: `${playerName}`,
    lines: `공원에서 나는 것 같은데...?`,
  },
  {
    names: "남주혁",
    character: nam1,
    lines: `야~ 같이 가자.`,
  },
  {
    names: "남주혁",
    character: nam1,
    lines: `음...? 근데 이게 무슨 소리람??`,
  },
  {
    names: "남주혁",
    character: nam1,
    lines: `저기서 나는 것 같은데??`,
  },
  {
    names: "",
    character: "",
    lines: `남주혁이 소리나는 쪽으로 신나게 발걸음을 옮긴다.`,
  },
  {
    names: `${playerName}`,
    lines: `야..! 같이 가~!!`,
  },
  {
    names: "남주혁",
    character: nam1,
    lines: `빨리 와라. 꼬맹아~`,
  },
  { names: `${playerName}`, lines: "너어~ 나 꼬맹이 아닌거든!" },
  {
    names: "",
    character: "",
    lines: `그때 남주혁이 갑자기 멈춰선다.`,
  },
  { names: `${playerName}`, lines: "아! 부딫혔잖아" },
  {
    lines: `뭐야... !!!`,
  },
  { names: "남주혁", character: nam1, lines: "야.. 재네 술마시는데..?" },
  { names: `${playerName}`, lines: "..." },
  {
    lines: `하.. 쟤네 아까 술마시던 애들이네??
    `,
  },
  {
    lines: `(하.. 아침에 그렇게 혼났는데 정신을 못차리다니..)`,
  },
];

var story4 = [
  { names: "남주혁", character: nam1, lines: "선생님 저기에요!" },
  { names: "선생님", character: "", lines: "너....! 하.." },
  {
    lines: `담배를 안피우니까 술을 마시니?`,
  },
  {
    lines: `너네는...  따라왓!!`,
  },
  { names: "양아치들", lines: `하... (${playerName}을 째려본다)` },
  { names: `${playerName}`, lines: "(주춤한다)" },
  {
    names: "남주혁",
    character: nam1,
    lines: `괜찮아. (${playerName}의 손을 꼭 잡아준다)`,
  },
  { names: `${playerName}`, lines: "(설렌다, 안설렌다)" },
  {
    names: "남주혁",
    character: nam1,
    lines: "오늘은 집에 데려다 줄게. 가자 꼬맹아.",
  },
  { names: `${playerName}`, lines: "너...!" },
  {
    lines: `  꼬맹이 아니라니까...`,
  },
  { names: "남주혁", character: nam1, lines: "알겠어 ㅎ" },
  { names: "남주혁", character: nam1, lines: "가기 전에.." },
  {
    lines: `자..! 이거 먹어`,
  },
  { names: `${playerName}`, lines: "이게 뭔데?" },
  { names: "남주혁", character: nam1, lines: "마카롱." },
  {
    lines: `오늘 힘든 일 많았으니까.`,
  },
  {
    lines: ` 이거 먹고 힘내! 꼬맹이`,
  },
  { names: `${playerName}`, lines: "고마워.." },
  {
    lines: `설렌다.안설렌다;`,
  },
  { names: `${playerName}`, lines: "그래도.. 술먹는 것도 잡고.." },
  {
    lines: `나 자신 장하다!!`,
  },
  {
    names: ``,
    lines: "양아치 친구들은 징계를 세게 먹었다고 한다~~",
  },
  { names: `${playerName}`, lines: "오늘 급식.. 별로다.." },
  {
    lines: `매점 갈까.. 말까..`,
  },
  {
    names: "",
    character: "",
    lines: "주인공이 로비를 서성인다.",
  },
  {
    names: "이한결",
    lines: "저기..선배..",
  },
  { names: "이한결", lines: "이거 드세욧..!" },
  { names: `${playerName}`, lines: "ㅇ..어..?" },
  { lines: "저..저기!" },
  {
    names: "",
    character: "",
    lines: `${playerName}이/가 불러보지만, 이한결은 이미 가고 없다.`,
  },
  { names: `${playerName}`, lines: "뭐지..?" },
  { lines: "우와.. 초콜릿이네.." },
  { lines: "뻬로로쉐잖아..! 맛있겠다." },
  { lines: "(냠냠)" },
  { names: "남주혁", character: nam1, lines: "헤이~ 꼬맹아" },
  { names: `${playerName}`, lines: `꼬맹이 아니라니까 그러네!!` },
  { names: "남주혁", character: nam1, lines: "근데~ 저기서 누가 싸운다?!" },
  {
    names: `${playerName}`,
    lines: `뭐?! 당장 가자!`,
  },
  {
    names: "",
    character: "",
    lines: `주인공이 뛰어가자 남주혁이 뒤따라 간다.`,
  },
  {
    names: "",
    character: "",
    lines: `운동장 구석에서 양아치들이 서민규를 괴롬히고 있다.`,
  },
  { names: `${playerName}`, lines: "하... 숨차" },
  {
    lines: `또 너희야..?`,
  },
  {
    lines: `술, 담배.. 이제는 학폭까지..!`,
  },
  { names: "남주혁", character: nam1, lines: "하아아.. 힘들다.." },
  {
    lines: `같이 좀 가자...`,
  },
  { names: "서민규", character: seo1, lines: "흑흑.. 돈 없다니까요...!!" },
  { names: "김지호", lines: "어~엉? 그래놓고 너 오천원 나왔잖아!" },
  {
    lines: `좋은 말로 할 때 돈 내놔.`,
  },
  { names: "안정아", lines: "지호양~ 살살해." },
  { lines: `애가 무서워 하잖아~` },
  { lines: `애기~ 좋은 말로 할 때 주자~?` },
  { names: "서민규", character: seo1, lines: "없다니까요!! 흑흑흑흑" },
  { names: `${playerName}`, lines: "하.. 너네 그렇게 괴롭히면 좋니!!!!!?" },
  { names: "장서은", character: jang1, lines: "어머~ 알빠니?" },
  { names: `${playerName}`, lines: "하.. (선생님을 부른다, 안부른다)" },
  { names: "선생님", character: "", lines: "너희 이럴거니!" },
  { lines: `에휴... 따라왓!` },
  { names: `${playerName}`, lines: "이름이 뭐니?" },
  {
    names: "서민규",
    character: seo1,
    lines: "서민규요. 구해주셔서 감사합니다..",
  },
  { names: `${playerName}`, lines: "(머리를 쓰담아주며) 수고했어." },
  { names: "서민규", character: seo1, lines: "(얼굴이 빨개진다)" },
  { names: "남주혁", character: nam1, lines: "자! 이제 가자!" },
  { lines: `(주인공을 쓰담으며) 잘했어~` },
  { names: `${playerName}`, lines: "<설렌다. 안설렌다>" },
  {
    names: "",
    character: "",
    lines: `양아치 친구들은 호되게 혼났다고 한다.`,
  },
  { names: `${playerName}`, lines: "여이~ 남주혁!!" },
  { names: `${playerName}`, lines: "같이가자." },
  { names: "남주혁", character: nam1, lines: "오늘 진짜 수고했다." },
  { names: `${playerName}`, lines: "뭘~!" },
  { lines: `그리고 내가 건 공약을 잘 지키고 있는 것 같아서 좋아!` },
  { names: "남주혁", character: nam1, lines: "으이구. 하여튼,,," },
  { names: `${playerName}`, lines: "그나저나 서민규가 걱정이네..." },
  { names: "남주혁", character: nam1, lines: "... 괜찮겠지" },
  {
    names: "",
    character: "",
    lines: `시간이 흐르고.. 어느날`,
  },
  {
    names: "교장",
    lines: " 위 학생은 학교를 위해 ~~~~~~ 하였음으로 이 상장을 수여합니다.",
  },
  { names: `${playerName}`, lines: "감사합니다." },
  {
    names: "",
    character: "",
    lines: `그렇게 ${playerName}은/는 훌륭하게 학생회장의 역할을 수행하고 멋진 학교를 만들었습니다~`,
  },
  {
    names: "",
    character: "",
    lines: "끝",
  },
];

/*  {
    names: "",
    lines: "",
    
  },
*/
/*while(true){var input = window.prompt()
const parts = input.split(" : ");

const result = {
  names: `${parts[0]}`,
  lines: `${parts[1]}`
};

console.log(result);}*/
// 기본적으로 안 쓴 속성은 위에서 승계됨. 공백 표시하려면 ""쓰면 됨

export var stories = [story1, story2, story3, story4];
