
var userInput = prompt("Hello👋!  Enter Your Current Weather ⛅ : :\n\nCloudy\nRainy\nHot\nCold\nFall");


if (userInput === "Cloudy") {
  document.write(` 
     <div class="con" style="background-image: url(https://www.adventurebikerider.com/wp-content/uploads/2017/10/tumblr_o27c7fByaO1tchrkco1_500.gif);">
     <h2 style="color: white;">Weather Information Service</h2>
    <br> 
    <div class="card">
  <img src="https://i.makeagif.com/media/9-28-2021/hCL-F_.gif" alt="" >
        <div class="container">
          <h3>It's  CLOUDY Today! ☁️</h3>
          <p>Go for a walk, or bike ride; the cooler temperatures can make for a pleasant outing☁️🌧.</p>
        </div>
      </div>
      </div>`)
}

else if (userInput === "Hot") {
  document.write(` 
     <div class="con" style="background-image: url(https://th.bing.com/th/id/R.4e6b500e4df1346bc73b8d3442761fe1?rik=oyl%2BydphPvJaSw&riu=http%3A%2F%2Fnebula.wsimg.com%2Fd68ddf2997c6e7bcb214a9445372b23d%3FAccessKeyId%3D0981D6F1DCEE93825F5B%26disposition%3D0%26alloworigin%3D1&ehk=qm23FNwkR9DR%2FSORwX0FPJxpGzy12ACWHH38DhLaH6I%3D&risl=&pid=ImgRaw&r=0);">
    <h2 style="color: white;">Weather Information sService</h2>
    <br> 
    <div class="card">
  <img src="https://media.tenor.com/jcRvMWa507AAAAAM/hot-fire.gif" alt="" >
        <div class="container">
          <h3>It's HOT Today! 🥵</h3>
          <p>Avoid midday sun and Wear sunscreen. Stay hydrated and cool indoors.🌞🏖️</p>
        </div>
      </div>
      </div>`)
}


else if (userInput === "Cold") {
  document.write(` 
     <div class="con" style="background-image: url(https://i.pinimg.com/originals/95/b1/ea/95b1eaec001975a3fae4e4fc77d50176.gif);">
      <h2 style="color: black;">Weather Information sService</h2>
    <br>
    <div class="card">
  <img src="https://media1.giphy.com/media/QYSZWvBhlfQTL8Fapy/giphy.gif?cid=6c09b952cegjlrnyi4y2msitm9h66m9wbqzfm2se5pqq6phb&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" alt="" >
        <div class="container">
          <h3>It's COLD Today! 🥶</h3>
          <p>Protect your skin, moisturize. Stay active to keep warm and layer up!❄️☃️</p>
        </div>
      </div>
      </div>`)
}

else if (userInput === "Rainy") {
  document.write(` 
  <div class="con" style="background-image: url(https://www.icegif.com/wp-content/uploads/2021/10/icegif-460.gif);">
<h2 >Weather Information Service</h2>
    <br>
    <div class="card">
  <img src="https://i.pinimg.com/originals/82/d9/68/82d968e7a704b26a3460d248c3aae8d6.gif" alt="" >
        <div class="container">
          <h3 style= "color: white;">It's RAINY Today! 🌧️</h3>
          <p style= "color: white;">Embrace the coziness of rainy days; it’s a great time for reflection and relaxation.⛈️☔</p>
        </div>
      </div>
      </div>
      `)
}

else if (userInput === "Fall") {
  document.write(` 
     <div class="con" style="background-image: url(https://giffiles.alphacoders.com/183/18390.gif);">
    <h2 style="color: black;">Weather Information Service</h2>
    <br> 
    <div class="card">
  <img src="https://gifsec.com/wp-content/uploads/2023/01/fall-gif-20.gif" alt="" >
        <div class="container">
          <h3 style="color: black;">It's FALL Today! 🍂</h3>
          <p style="color: black;">Perfect time for boots and scarves. Layer up for cozy comfort🍁🧣</p>
        </div>
      </div>
      </div>`)
} else {
  document.write(` 
    <div class="con" style="background-image: url(https://i.pinimg.com/originals/b8/44/e7/b844e75bfe27d765cf6fe2f1e50859b3.gif);">
   <h2 style="color: white;">Weather Information Service</h2>
   <br> 
   <div class="card">
 <img src="https://i.pinimg.com/originals/a3/e9/ff/a3e9ffb293d369deb48f22a38f35250b.gif" alt="" >
       <div class="container">
         <h3 style="color: white;"> Oh! 🥺</h3>
         <p style="color: white;">Wrong Input🥺! Please provide correct Input😊.</p>
       </div>
     </div>
     </div>`)
}

