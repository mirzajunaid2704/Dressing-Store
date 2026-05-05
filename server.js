document.querySelectorAll(".cart").forEach(btn=>{
  btn.onclick = () => {
    btn.innerText = "Added ✓";
    setTimeout(()=>{
      btn.innerText = "Add to Cart";
    },1500);
  }
});

document.querySelectorAll(".buy").forEach(btn=>{
  btn.onclick = () => {
    alert("Demo Purchase Clicked");
  }
});