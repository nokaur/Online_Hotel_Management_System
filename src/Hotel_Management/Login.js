import React, { Component } from "react";
import bck from "../Hotel_Management/background.jpg";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    textAlign: "center",

    height: "630px"
  },
  textStyle: {
    fontSize: 18,
    color: "#00bfff",
    fontWeight: "bold",
    marginTop: 55
  },
  view: {
    backgroundColor: "white",
    marginTop: "180px",
    marginLeft: "500px",
    height: "180px",
    width: "350px",
    color: "white"
  },
  button: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#23b11b"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.10)"
    // background: "transparent"
  }
});

class Login extends Component {
  render() {
    return (
      <form>
        <div>
          {/* <img src={bck} width="100%" height="100%" /> */}
          <ImageBackground source={bck} style={[styles.container]}>
            <View style={[styles.view, styles.overlay]}>
              <div>
                <table style={{ height: "100px", marginTop: "25px" }}>
                  <tr>
                    <td
                      style={{
                        fontFamily: "calibri",
                        fontSize: "20px",
                        width: "500px"
                      }}
                    >
                      Username{" "}
                    </td>
                    <td
                      style={{
                        fontFamily: "calibri",
                        fontSize: "20px",
                        width: "500px"
                      }}
                    >
                      <input
                        type="text"
                        style={{
                          fontFamily: "calibri",
                          fontSize: "15px",
                          padding: 3,
                          borderRadius: 12,
                          borderColor: "white",
                          backgroundColor: "white"
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        fontFamily: "calibri",
                        fontSize: "20px",
                        width: "500px"
                      }}
                    >
                      Password{" "}
                    </td>
                    <td
                      style={{
                        fontFamily: "calibri",
                        fontSize: "20px",
                        width: "500px",
                        height: "60px"
                      }}
                    >
                      <input
                        type="text"
                        style={{
                          fontFamily: "calibri",
                          fontSize: "15px",
                          padding: 3,
                          borderRadius: 12,
                          borderColor: "white",
                          backgroundColor: "white"
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="2"
                      style={{
                        fontFamily: "calibri",
                        fontSize: "20px",
                        width: "500px",
                        height: "50px"
                      }}
                    >
                      <button
                        type="submit"
                        style={{
                          fontFamily: "calibri",
                          fontSize: "18px",
                          padding: 5,
                          borderRadius: 8,
                          backgroundColor: "#20B2AA",
                          borderColor: "#20B2AA",
                          width: "100px"
                        }}
                      >
                        Login
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            </View>
          </ImageBackground>
        </div>
      </form>
    );
  }
}

export default Login;
