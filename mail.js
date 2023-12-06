function SendEmail() {
  let name = document.getElementById("name").value;
  let tel = document.getElementById("tel").value;
  if (length(name) > 0 && length(tel)) {
    let body =
      "Новая заявка на розу в колбе. <br/> Имя: " +
      name +
      "<br/> Телефон: " +
      tel;
    let subject = "Заявка на розу в колбе от " + name;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "ip.muhlyado.maxim@gmail.com",
      Password: "96AC4554E4BAB70E1A17FE751910A6C39BA0",
      To: "ip.muhlyado.maxim@gmail.com",
      From: "ip.muhlyado.maxim@gmail.com",
      Subject: subject,
      Body: body,
    }).then(() => alert("Ваш заказ принят! Ожидайте звонка"));
  } else {
    alert("Введите ваше Имя и телефон");
  }
}
