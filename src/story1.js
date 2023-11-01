var playerName = "hello";
var playerbasic = "./img/1.jpg";
var playersurprised = "./img/2.jpg";
var playersmile = "./img/3.jpg";
var player;

var story1 = [
  {
    character: "./img/1.jpg",
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
    names: `장서은`,
    lines: `ㅎㅇㅎㅇ`,
  },
  {
    lines: `뭐야... 나빼고 벌써 담타임..?`,
  },
  {
    names: `안정아`,
    lines: `야~ 이 x야 왜케 늦게 옴??`,
  },
  {
    names: `김지호`,
    lines: `ㅋㅋㅋㅋㅋ`,
  },
  {
    lines: `한대 하실?`,
  },
  {
    names: `안정아`,
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
    names: `남주혁`,
    lines: `야~ 같이 가자.`,
  },
  {
    names: `남주혁`,
    lines: `음...? 근데 이게 무슨 소리람??`,
  },
  {
    names: `남주혁`,
    lines: `저기서 나는 것 같은데??`,
  },
  {
    names: "",
    lines: `남주혁이 소리나는 쪽으로 신나게 발걸음을 옮긴다.`,
  },
  {
    names: `${playerName}`,
    lines: `야..! 같이 가~!!`,
  },
  {
    names: `남주혁`,
    lines: `빨리 와라. 꼬맹아~`,
  },
  { names: `${playerName}`, lines: "너어~ 나 꼬맹이 아닌거든!" },
  {
    names: "",
    lines: `그때 남주혁이 갑자기 멈춰선다.`,
  },
  { names: `${playerName}`, lines: "아! 부딫혔잖아" },
  {
    lines: `뭐야... !!!`,
  },
  { names: "남주혁", lines: "야.. 재네 술마시는데..?" },
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
  { names: "남주혁", lines: "선생님 저기에요!" },
  { names: "선생님", lines: "너....! 하.." },
  {
    lines: `담배를 안피우니까 술을 마시니?`,
  },
  {
    lines: `너네는...  따라왓!!`,
  },
  { names: "양아치들", lines: `하... (${playerName}을 째려본다)` },
  { names: `${playerName}`, lines: "(주춤한다)" },
  { names: "남주혁", lines: `괜찮아. (${playerName}의 손을 꼭 잡아준다)` },
  { names: `${playerName}`, lines: "(설렌다, 안설렌다)" },
  { names: "남주혁", lines: "오늘은 집에 데려다 줄게. 가자 꼬맹아." },
  { names: `${playerName}`, lines: "너...!" },
  {
    lines: `  꼬맹이 아니라니까...`,
  },
  { names: "남주혁", lines: "알겠어 ㅎ" },
  { names: "남주혁", lines: "가기 전에.." },
  {
    lines: `자..! 이거 먹어`,
  },
  { names: `${playerName}`, lines: "이게 뭔데?" },
  { names: "남주혁", lines: "마카롱." },
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
    lines: `${playerName}이/가 불러보지만, 이한결은 이미 가고 없다.`,
  },
  { names: `${playerName}`, lines: "뭐지..?" },
  { lines: "우와.. 초콜릿이네.." },
  { lines: "뻬로로쉐잖아..! 맛있겠다." },
  { lines: "(냠냠)" },
  { names: "남주혁", lines: "헤이~ 꼬맹아" },
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
