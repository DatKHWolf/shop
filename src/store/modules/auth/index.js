import { FIREBASE_API_KEY } from "@/config/firebase";
import axios from "axios";
import router from "@/router";

let timer;
const state = {
  userId: null,
  token: null,
};
const mutations = {
  setUser(state, payload) {
    state.userId = payload.userId;
    state.token = payload.token;
  },
};
const actions = {
  auth(context, payload) {
    let url = "";
    if (payload.mode === "signin") {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;
    } else if (payload === "signup") {
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`;
    } else {
      return;
    }
    const authDO = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };
    return axios
      .post(url, authDO)
      .then((response) => {
        //Daten im LocalStorage speichern
        const expiresIn = Number(response.data.expiresIn) * 1000;
        //Die Version fürs ausloggen in 3 Sekunden :
        //const expiresIn = 3*1000;
        const expDate = new Date().getTime() + expiresIn;
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("userId", response.data.localId);
        localStorage.setItem("expiresIn", expDate);
        timer = setTimeout(() => {
          context.dispatch("autoSignout");
        }, expiresIn);

        context.commit("setUser", {
          userId: response.data.localId,
          token: response.data.idToken,
        });
      })
      .catch((error) => {
        const errorMessage = new Error(
          error.response.data.error.message || "UNKNOWN ERROR"
        );
        throw errorMessage;
      });
  },
  autoSignin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expiresIn = localStorage.getItem("expiresIn");
    const timeLeft = Number(expiresIn) - new Date().getTime();
    if (timeLeft < 0) {
      return;
    }
    timer = setTimeout(() => {
      context.dispatch("autoSignout"), expiresIn;
    });
    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
      });
    }
  },
  signout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiresIn");
    clearTimeout(timer);
    router.push("/");
    context.commit("setUser", {
      token: null,
      userId: null,
    });
  },
  autoSignout(context) {
    console.log(timer)
    //console.log("Der User wurde automatisch ausgelogt");
    context.dispatch("signout");
  },

  signup(context, payload) {
    const signupDO = {
      ...payload,
      mode: "signup",
    };
    return context.dispatch("auth", signupDO);
  },
  signin(context, payload) {
    const signinDO = {
      ...payload,
      mode: "signin",
    };
    return context.dispatch("auth", signinDO);
  },
};

const getters = {
  isAuthenticated:(state)=> !!state.token,
  token:(state) =>state.token
};

const authModule = {
  state,
  mutations,
  actions,
  getters,
};
export default authModule;
