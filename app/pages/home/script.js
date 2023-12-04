new Vue({
  el: "#app",
  data: {
    message: "hello world",
    apiData: null,
  },
  mounted() {
    var apiUrl = "https://api.github.com/users/rafaelmasselli/repos";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.apiData = data;
      })
      .catch((error) => {
        console.error("Erro ao consumir a API:", error);
      });
  },
});
