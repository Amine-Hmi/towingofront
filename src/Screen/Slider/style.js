import Color from "../../Config/Color";
import { Dimensions } from "react-native";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;
export default {
  wrapper: {},
  slide1: {
    height: height,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white
  },
  slide2: {
    //flex: 1,
    height: height,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white
  },
  slide3: {
    //flex: 1,
    height: height,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white
  },
  image: {
    height: height,
    width: width,
    justifyContent: "center"
  },
  text: {
    color: Color.white,
    fontSize: 30,
    fontFamily: "UberMoveText-Bold",
    marginBottom: 15,
    marginTop: 230,
    textAlign: "center"
  },
  contentText: {
    textAlign: "center",
    color: Color.white,
    fontSize: 14,
    fontFamily:'UberMoveText-Light',
    marginHorizontal: 20
  },
  deActiveDot: {
    width: 40,
    height: 5,
    borderRadius: 20,
    backgroundColor: Color.steel,
    marginBottom: 45,
    marginHorizontal: 2
  },
  activeDot: {
    width: 40,
    height: 5,
    borderRadius: 0,
    borderRadius: 20,
    marginBottom: 45,
    marginHorizontal: 2,
    backgroundColor: Color.white
  }
};
