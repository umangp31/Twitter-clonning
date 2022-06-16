
const userNamePrefix = ["somewhat", "the", "iam"];
const preFix = userNamePrefix[Math.floor(Math.random() * 3)];
const DISPLAYNAME = "Elon Musk";
const USERNAME = "@" + preFix + DISPLAYNAME.split(" ").join("");
const USERIMG = "https://i.pravatar.cc/200";

export { DISPLAYNAME, USERNAME, USERIMG };

