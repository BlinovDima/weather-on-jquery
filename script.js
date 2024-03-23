//Обработчик кнопки Показать
$(function () {
  $("#btn").on("click", function () {
    const apiKey = "0383023acb2141cea8c36d3394ea8ba0";
    let city = $("#text").val();
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    $.get(requestUrl, function (response) {
      console.log(response);
      $("#temp").text(response.main.temp.toFixed(1) + "℃");
    });
  });
});

//Обработчик кнопки Очистить
$("#btn-cls").on("click", function () {
  $("#text").val("");
  $("#temp").text("--℃");
});
