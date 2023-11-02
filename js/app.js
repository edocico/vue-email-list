const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Here's the email list:",
      mailList: [],
    };
  },
  methods: {
    getTenEmail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((res) => {
            console.log(res, res.data);
            const mailaddress = res.data.response;
            this.mailList.push(mailaddress);
          });
      }
    },
  },
  created() {
    this.getTenEmail();
  },
}).mount("#app");
