const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Here's the email list:",
      mailList: [],
      maxEmailsNumber: 10,
    };
  },
  methods: {
    getTenEmail() {
      for (let i = 0; i < this.maxEmailsNumber; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((res) => {
            //console.log(res, res.data);
            const mailAddress = res.data.response;
            this.mailList.push(mailAddress);
          });
      }
    },
  },
  created() {
    this.getTenEmail();
  },
}).mount("#app");
