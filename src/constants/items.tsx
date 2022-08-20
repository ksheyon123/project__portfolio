import myid from "src/assets/bgs/myid.png";
import scan from "src/assets/bgs/scan.png";
import node from "src/assets/bgs/havah-node.png";
import thumb_myid from "src/assets/thumb/thumb-myid.png";
import thumb_scan from "src/assets/thumb/thumb-scan.png";
import thumb_node from "src/assets/thumb/thumb-node.png";

export const items = [
  {
    thumb: thumb_myid,
    icon: myid,
    title: "마이아이디 파트너 센터",
    tags: ["React", "Recoil", "React-Jss"],
    desc: "",
    st: new Date("2021/04/14").valueOf(),
    en: new Date("2022/02/18").valueOf(),
  },
  {
    thumb: myid,
    icon: thumb_myid,
    title: "쯩 앱 웹 뷰",
    tags: ["React", "Dynamic Link", "Deep Link"],
    desc: "",
    st: new Date("2021/03/31").valueOf(),
    en: new Date("2022/03/07").valueOf(),
  },
  {
    thumb: thumb_scan,
    icon: scan,
    title: "하바 스캔",
    tags: ["React", "Recoil", "styled-components"],
    desc: "",
    st: new Date("2022/03/11").valueOf(),
    en: "진행중",
  },
  {
    thumb: node,
    icon: thumb_node,
    title: "하바 노드 PC 앱",
    tags: ["React", "Electron", "Webpack-v5"],
    desc: "",
    st: new Date("2022/0/11").valueOf(),
    en: "진행중",
  },
]
