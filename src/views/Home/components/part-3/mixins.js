import { messageAdd } from "@/api";

export default {
  data() {
    return {
      formObj: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        company: "",
        content: "",
      },
      errorParamList: [],
      showThanks: false,
      loading: false,
    };
  },
  methods: {
    submitFn() {
      const isValid = this.validate();
      if (isValid) {
        this.loading = true;
        messageAdd(this.formObj)
          .then(() => {
            this.showThanks = true;
            this.loading = false;
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },
    inputFn(key) {
      const index = this.errorParamList.findIndex((item) => item === key);
      if (this.formObj[key] && index !== -1) {
        index !== -1 && this.errorParamList.splice(index, 1);
        return;
      }
      if (!this.formObj[key] && index === -1) {
        this.errorParamList.push(key);
      }
    },
    validate() {
      this.errorParamList = [];
      const requiredParam = ["first_name", "last_name", "email"];
      requiredParam.forEach((key) => {
        if (!this.formObj[key].trim()) {
          this.errorParamList.push(key);
        }
      });
      const emailReg =
        /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      if (
        !this.errorParamList.includes("email") &&
        !emailReg.test(this.formObj.email)
      ) {
        this.errorParamList.push("email");
      }
      return this.errorParamList.length === 0;
    },
  },
};
