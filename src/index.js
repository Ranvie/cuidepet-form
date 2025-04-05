import QuestionComponent from "./components/QuestionComponent.vue";
import './assets/main.css';

export default {
  install: (app) => {
    app.component("QuestionComponent", QuestionComponent);
  },
};